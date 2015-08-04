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

selectSchemes = (names, schemes) ->
  return _.pick(schemes, names)

# addTests(raml, tests, hooks, [parent], callback)
addTests = (raml, tests, hooks, parent, callback) ->

  # Handle 4th optional param
  if _.isFunction(parent)
    callback = parent
    parent = null

  return callback() unless raml.resources

  parent ?= {
    path: "",
    params: {}
  }

  top_securedBy = raml.securedBy ? parent.securedBy

  if not parent.security_schemes?
    parent.security_schemes = {}
    for scheme_map in raml.securitySchemes ? []
      for scheme_name, scheme of scheme_map
        parent.security_schemes[scheme_name] ?= []
        parent.security_schemes[scheme_name].push(scheme)

  # Iterate endpoint
  async.each raml.resources, (resource, callback) ->
    path = resource.relativeUri
    params = {}

    resource_securedBy = resource.securedBy ? top_securedBy

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

      method_securedBy = api.securedBy ? resource_securedBy

      buildTest = (status, res, security) ->
        testName = "#{method} #{path} -> #{status}"
        if security?
          testName += " (#{security})"
        if testName in hooks.skips
          return null

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
        t = buildTest(status, res)
        if t?
          tests.push t

      for scheme, lst of selectSchemes(method_securedBy, parent.security_schemes)
        for l in lst
          for status, res of l.describedBy?.responses ? {}
            t = buildTest(status, res, scheme)
            if t?
              tests.push t

      callback()
    , (err) ->
      return callback(err) if err

      # Recursive
      new_parent = {
        path: path,
        params: params,
        securedBy: resource_securedBy,
        security_schemes: parent.security_schemes
      }
      addTests resource, tests, hooks, new_parent, callback
  , callback


module.exports = addTests
