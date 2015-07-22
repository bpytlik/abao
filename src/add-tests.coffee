async = require 'async'
_ = require 'underscore'
csonschema = require 'csonschema'

Test = require './test'

parseSchema = (source) ->
  if source.contains('$schema')
    #jsonschema
    # @response.schema = JSON.parse @response.schema
    JSON.parse source
  else
    csonschema.parse source
    # @response.schema = csonschema.parse @response.schema

parseHeaders = (raml) ->
  return {} unless raml

  headers = {}
  for key, v of raml
    headers[key] = v.example

  headers

# addTests(raml, tests, hooks, [parent], callback)
addTests = (raml, tests, hooks, parent, callback) ->

  # Handle 4th optional param
  if _.isFunction(parent)
    callback = parent
    parent = null

  return callback() unless raml.resources

  console.error("raml keys:")
  console.error(Object.keys(raml))

  securedBy = raml.securedBy ? parent.securedBy
  parent ?= {
    path: "",
    params: {}
  }
  if not parent.security_schemes?
      parent.security_schemes = {}
      for scheme_map in raml.securitySchemes ? []
        for s in securedBy ? []
          if scheme_map[s]?
            parent.security_schemes[s] ?= []
            parent.security_schemes[s].push(scheme_map[s])
  console.error("parent.security_schemes:")
  console.error(parent.security_schemes)

  # Iterate endpoint
  async.each raml.resources, (resource, callback) ->
    path = resource.relativeUri
    params = {}

    # Apply parent properties
    path = parent.path + path
    params = _.clone parent.params

    # Setup param
    if resource.uriParameters
      for key, param of resource.uriParameters
        params[key] = param.example

    # In case of issue #8, resource does not define methods
    resource.methods ?= []

    # Iterate response method
    async.each resource.methods, (api, callback) ->
      method = api.method.toUpperCase()
      headers = parseHeaders(api.headers)

      buildTest = (status, res, security) ->
        testName = "#{method} #{path} -> #{status}"
        if security?
          testName += " (#{security})"

        # Append new test to tests
        test = new Test(testName, hooks.contentTests[testName])

        # Update test.request
        test.request.path = path
        test.request.method = method
        test.request.headers = headers
        if api.body?['application/json']
          test.request.headers['Content-Type'] = 'application/json'
          try
            test.request.body = JSON.parse api.body['application/json']?.example
          catch
            console.warn "invalid request example of #{test.name}"
        test.request.params = params

        # Update test.response
        test.response.status = status
        test.response.schema = null
        if (res?.body?['application/json']?.schema)
          test.response.schema = parseSchema res.body['application/json'].schema
        return test

      # Iterate response status
      for status, res of api.responses
        tests.push buildTest(status, res)

      for scheme, lst of parent.security_schemes
        console.error("scheme: #{scheme}")
        for l in lst
          console.error("l:")
          console.error(l)
          for status, res of l.describedBy?.responses ? {}
            console.error("sec status:#{status}")
            tests.push buildTest(status, res, scheme)

      callback()
    , (err) ->
      return callback(err) if err

      # Recursive
      parent = {
        path: path,
        params: params,
        securedBy: securedBy,
        security_schemes: parent.security_schemes
      }
      addTests resource, tests, hooks, parent, callback
  , callback


module.exports = addTests
