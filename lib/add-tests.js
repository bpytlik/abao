if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
(function(_export) {
    if (typeof _export._$jscoverage === 'undefined') {
        _export._$jscoverage = _$jscoverage;
    }
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if (! _$jscoverage["add-tests.coffee"]) {
    _$jscoverage["add-tests.coffee"] = [];
    _$jscoverage["add-tests.coffee"][1] = 0;
    _$jscoverage["add-tests.coffee"][2] = 0;
    _$jscoverage["add-tests.coffee"][3] = 0;
    _$jscoverage["add-tests.coffee"][5] = 0;
    _$jscoverage["add-tests.coffee"][7] = 0;
    _$jscoverage["add-tests.coffee"][8] = 0;
    _$jscoverage["add-tests.coffee"][11] = 0;
    _$jscoverage["add-tests.coffee"][13] = 0;
    _$jscoverage["add-tests.coffee"][16] = 0;
    _$jscoverage["add-tests.coffee"][17] = 0;
    _$jscoverage["add-tests.coffee"][19] = 0;
    _$jscoverage["add-tests.coffee"][20] = 0;
    _$jscoverage["add-tests.coffee"][21] = 0;
    _$jscoverage["add-tests.coffee"][23] = 0;
    _$jscoverage["add-tests.coffee"][26] = 0;
    _$jscoverage["add-tests.coffee"][29] = 0;
    _$jscoverage["add-tests.coffee"][30] = 0;
    _$jscoverage["add-tests.coffee"][31] = 0;
    _$jscoverage["add-tests.coffee"][33] = 0;
    _$jscoverage["add-tests.coffee"][36] = 0;
    _$jscoverage["add-tests.coffee"][37] = 0;
    _$jscoverage["add-tests.coffee"][38] = 0;
    _$jscoverage["add-tests.coffee"][41] = 0;
    _$jscoverage["add-tests.coffee"][42] = 0;
    _$jscoverage["add-tests.coffee"][43] = 0;
    _$jscoverage["add-tests.coffee"][46] = 0;
    _$jscoverage["add-tests.coffee"][47] = 0;
    _$jscoverage["add-tests.coffee"][48] = 0;
    _$jscoverage["add-tests.coffee"][51] = 0;
    _$jscoverage["add-tests.coffee"][54] = 0;
    _$jscoverage["add-tests.coffee"][55] = 0;
    _$jscoverage["add-tests.coffee"][58] = 0;
    _$jscoverage["add-tests.coffee"][60] = 0;
    _$jscoverage["add-tests.coffee"][63] = 0;
    _$jscoverage["add-tests.coffee"][64] = 0;
    _$jscoverage["add-tests.coffee"][67] = 0;
    _$jscoverage["add-tests.coffee"][68] = 0;
    _$jscoverage["add-tests.coffee"][69] = 0;
    _$jscoverage["add-tests.coffee"][70] = 0;
    _$jscoverage["add-tests.coffee"][71] = 0;
    _$jscoverage["add-tests.coffee"][72] = 0;
    _$jscoverage["add-tests.coffee"][73] = 0;
    _$jscoverage["add-tests.coffee"][75] = 0;
    _$jscoverage["add-tests.coffee"][76] = 0;
    _$jscoverage["add-tests.coffee"][79] = 0;
    _$jscoverage["add-tests.coffee"][80] = 0;
    _$jscoverage["add-tests.coffee"][81] = 0;
    _$jscoverage["add-tests.coffee"][82] = 0;
    _$jscoverage["add-tests.coffee"][84] = 0;
    _$jscoverage["add-tests.coffee"][86] = 0;
    _$jscoverage["add-tests.coffee"][89] = 0;
    _$jscoverage["add-tests.coffee"][93] = 0;
}

_$jscoverage["add-tests.coffee"].source = ["async = require 'async'", "_ = require 'underscore'", "csonschema = require 'csonschema'", "", "Test = require './test'", "", "parseSchema = (source) ->", "  if source.contains('$schema')", "    #jsonschema", "    # @response.schema = JSON.parse @response.schema", "    JSON.parse source", "  else", "    csonschema.parse source", "    # @response.schema = csonschema.parse @response.schema", "", "parseHeaders = (raml) ->", "  return {} unless raml", "", "  headers = {}", "  for key, v of raml", "    headers[key] = v.example", "", "  headers", "", "# addTests(raml, tests, hooks, [parent], callback)", "addTests = (raml, tests, hooks, parent, callback) ->", "", "  # Handle 4th optional param", "  if _.isFunction(parent)", "    callback = parent", "    parent = null", "", "  return callback() unless raml.resources", "", "  # Iterate endpoint", "  async.each raml.resources, (resource, callback) ->", "    path = resource.relativeUri", "    params = {}", "", "    # Apply parent properties", "    if parent", "      path = parent.path + path", "      params = _.clone parent.params", "", "    # Setup param", "    if resource.uriParameters", "      for key, param of resource.uriParameters", "        params[key] = param.example", "", "    # In case of issue #8, resource does not define methods", "    resource.methods ?= []", "", "    # Iterate response method", "    async.each resource.methods, (api, callback) ->", "      method = api.method.toUpperCase()", "", "      # Iterate response status", "      for status, res of api.responses", "", "        testName = \"#{method} #{path} -> #{status}\"", "", "        # Append new test to tests", "        test = new Test(testName, hooks.contentTests[testName])", "        tests.push test", "", "        # Update test.request", "        test.request.path = path", "        test.request.method = method", "        test.request.headers = parseHeaders(api.headers)", "        if api.body?['application/json']", "          test.request.headers['Content-Type'] = 'application/json'", "          try", "            test.request.body = JSON.parse api.body['application/json']?.example", "          catch", "            console.warn \"invalid request example of #{test.name}\"", "        test.request.params = params", "", "        # Update test.response", "        test.response.status = status", "        test.response.schema = null", "        if (res?.body?['application/json']?.schema)", "          test.response.schema = parseSchema res.body['application/json'].schema", "        ", "      callback()", "    , (err) ->", "      return callback(err) if err", "", "      # Recursive", "      addTests resource, tests, hooks, {path, params}, callback", "  , callback", "", "", "module.exports = addTests", ""];

(function() {
  var Test, _, addTests, async, csonschema, parseHeaders, parseSchema;

  _$jscoverage["add-tests.coffee"][1]++;

  async = require('async');

  _$jscoverage["add-tests.coffee"][2]++;

  _ = require('underscore');

  _$jscoverage["add-tests.coffee"][3]++;

  csonschema = require('csonschema');

  _$jscoverage["add-tests.coffee"][5]++;

  Test = require('./test');

  _$jscoverage["add-tests.coffee"][7]++;

  parseSchema = function(source) {
    _$jscoverage["add-tests.coffee"][8]++;
    if (source.contains('$schema')) {
      _$jscoverage["add-tests.coffee"][11]++;
      return JSON.parse(source);
    } else {
      _$jscoverage["add-tests.coffee"][13]++;
      return csonschema.parse(source);
    }
  };

  _$jscoverage["add-tests.coffee"][16]++;

  parseHeaders = function(raml) {
    var headers, key, v;
    _$jscoverage["add-tests.coffee"][17]++;
    if (!raml) {
      return {};
    }
    _$jscoverage["add-tests.coffee"][19]++;
    headers = {};
    _$jscoverage["add-tests.coffee"][20]++;
    for (key in raml) {
      v = raml[key];
      _$jscoverage["add-tests.coffee"][21]++;
      headers[key] = v.example;
    }
    _$jscoverage["add-tests.coffee"][23]++;
    return headers;
  };

  _$jscoverage["add-tests.coffee"][26]++;

  addTests = function(raml, tests, hooks, parent, callback) {
    _$jscoverage["add-tests.coffee"][29]++;
    if (_.isFunction(parent)) {
      _$jscoverage["add-tests.coffee"][30]++;
      callback = parent;
      _$jscoverage["add-tests.coffee"][31]++;
      parent = null;
    }
    _$jscoverage["add-tests.coffee"][33]++;
    if (!raml.resources) {
      return callback();
    }
    _$jscoverage["add-tests.coffee"][36]++;
    return async.each(raml.resources, function(resource, callback) {
      var key, param, params, path, ref;
      _$jscoverage["add-tests.coffee"][37]++;
      path = resource.relativeUri;
      _$jscoverage["add-tests.coffee"][38]++;
      params = {};
      _$jscoverage["add-tests.coffee"][41]++;
      if (parent) {
        _$jscoverage["add-tests.coffee"][42]++;
        path = parent.path + path;
        _$jscoverage["add-tests.coffee"][43]++;
        params = _.clone(parent.params);
      }
      _$jscoverage["add-tests.coffee"][46]++;
      if (resource.uriParameters) {
        _$jscoverage["add-tests.coffee"][47]++;
        ref = resource.uriParameters;
        for (key in ref) {
          param = ref[key];
          _$jscoverage["add-tests.coffee"][48]++;
          params[key] = param.example;
        }
      }
      _$jscoverage["add-tests.coffee"][51]++;
      if (resource.methods == null) {
        resource.methods = [];
      }
      _$jscoverage["add-tests.coffee"][54]++;
      return async.each(resource.methods, function(api, callback) {
        var method, ref1, ref2, ref3, ref4, ref5, res, status, test, testName;
        _$jscoverage["add-tests.coffee"][55]++;
        method = api.method.toUpperCase();
        _$jscoverage["add-tests.coffee"][58]++;
        ref1 = api.responses;
        for (status in ref1) {
          res = ref1[status];
          _$jscoverage["add-tests.coffee"][60]++;
          testName = method + " " + path + " -> " + status;
          _$jscoverage["add-tests.coffee"][63]++;
          test = new Test(testName, hooks.contentTests[testName]);
          _$jscoverage["add-tests.coffee"][64]++;
          tests.push(test);
          _$jscoverage["add-tests.coffee"][67]++;
          test.request.path = path;
          _$jscoverage["add-tests.coffee"][68]++;
          test.request.method = method;
          _$jscoverage["add-tests.coffee"][69]++;
          test.request.headers = parseHeaders(api.headers);
          _$jscoverage["add-tests.coffee"][70]++;
          if ((ref2 = api.body) != null ? ref2['application/json'] : void 0) {
            _$jscoverage["add-tests.coffee"][71]++;
            test.request.headers['Content-Type'] = 'application/json';
            _$jscoverage["add-tests.coffee"][72]++;
            try {
              _$jscoverage["add-tests.coffee"][73]++;
              test.request.body = JSON.parse((ref3 = api.body['application/json']) != null ? ref3.example : void 0);
            } catch (_error) {
              _$jscoverage["add-tests.coffee"][75]++;
              console.warn("invalid request example of " + test.name);
            }
          }
          _$jscoverage["add-tests.coffee"][76]++;
          test.request.params = params;
          _$jscoverage["add-tests.coffee"][79]++;
          test.response.status = status;
          _$jscoverage["add-tests.coffee"][80]++;
          test.response.schema = null;
          _$jscoverage["add-tests.coffee"][81]++;
          if ((res != null ? (ref4 = res.body) != null ? (ref5 = ref4['application/json']) != null ? ref5.schema : void 0 : void 0 : void 0)) {
            _$jscoverage["add-tests.coffee"][82]++;
            test.response.schema = parseSchema(res.body['application/json'].schema);
          }
        }
        _$jscoverage["add-tests.coffee"][84]++;
        return callback();
      }, function(err) {
        _$jscoverage["add-tests.coffee"][86]++;
        if (err) {
          return callback(err);
        }
        _$jscoverage["add-tests.coffee"][89]++;
        return addTests(resource, tests, hooks, {
          path: path,
          params: params
        }, callback);
      });
    }, callback);
  };

  _$jscoverage["add-tests.coffee"][93]++;

  module.exports = addTests;

}).call(this);
