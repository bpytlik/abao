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
    _$jscoverage["add-tests.coffee"][25] = 0;
    _$jscoverage["add-tests.coffee"][26] = 0;
    _$jscoverage["add-tests.coffee"][29] = 0;
    _$jscoverage["add-tests.coffee"][32] = 0;
    _$jscoverage["add-tests.coffee"][33] = 0;
    _$jscoverage["add-tests.coffee"][34] = 0;
    _$jscoverage["add-tests.coffee"][36] = 0;
    _$jscoverage["add-tests.coffee"][38] = 0;
    _$jscoverage["add-tests.coffee"][43] = 0;
    _$jscoverage["add-tests.coffee"][45] = 0;
    _$jscoverage["add-tests.coffee"][46] = 0;
    _$jscoverage["add-tests.coffee"][47] = 0;
    _$jscoverage["add-tests.coffee"][48] = 0;
    _$jscoverage["add-tests.coffee"][49] = 0;
    _$jscoverage["add-tests.coffee"][50] = 0;
    _$jscoverage["add-tests.coffee"][53] = 0;
    _$jscoverage["add-tests.coffee"][54] = 0;
    _$jscoverage["add-tests.coffee"][55] = 0;
    _$jscoverage["add-tests.coffee"][57] = 0;
    _$jscoverage["add-tests.coffee"][60] = 0;
    _$jscoverage["add-tests.coffee"][61] = 0;
    _$jscoverage["add-tests.coffee"][64] = 0;
    _$jscoverage["add-tests.coffee"][65] = 0;
    _$jscoverage["add-tests.coffee"][66] = 0;
    _$jscoverage["add-tests.coffee"][69] = 0;
    _$jscoverage["add-tests.coffee"][72] = 0;
    _$jscoverage["add-tests.coffee"][73] = 0;
    _$jscoverage["add-tests.coffee"][74] = 0;
    _$jscoverage["add-tests.coffee"][76] = 0;
    _$jscoverage["add-tests.coffee"][78] = 0;
    _$jscoverage["add-tests.coffee"][79] = 0;
    _$jscoverage["add-tests.coffee"][80] = 0;
    _$jscoverage["add-tests.coffee"][81] = 0;
    _$jscoverage["add-tests.coffee"][82] = 0;
    _$jscoverage["add-tests.coffee"][83] = 0;
    _$jscoverage["add-tests.coffee"][86] = 0;
    _$jscoverage["add-tests.coffee"][89] = 0;
    _$jscoverage["add-tests.coffee"][90] = 0;
    _$jscoverage["add-tests.coffee"][91] = 0;
    _$jscoverage["add-tests.coffee"][92] = 0;
    _$jscoverage["add-tests.coffee"][93] = 0;
    _$jscoverage["add-tests.coffee"][94] = 0;
    _$jscoverage["add-tests.coffee"][95] = 0;
    _$jscoverage["add-tests.coffee"][97] = 0;
    _$jscoverage["add-tests.coffee"][98] = 0;
    _$jscoverage["add-tests.coffee"][101] = 0;
    _$jscoverage["add-tests.coffee"][102] = 0;
    _$jscoverage["add-tests.coffee"][103] = 0;
    _$jscoverage["add-tests.coffee"][104] = 0;
    _$jscoverage["add-tests.coffee"][105] = 0;
    _$jscoverage["add-tests.coffee"][108] = 0;
    _$jscoverage["add-tests.coffee"][109] = 0;
    _$jscoverage["add-tests.coffee"][110] = 0;
    _$jscoverage["add-tests.coffee"][111] = 0;
    _$jscoverage["add-tests.coffee"][113] = 0;
    _$jscoverage["add-tests.coffee"][114] = 0;
    _$jscoverage["add-tests.coffee"][115] = 0;
    _$jscoverage["add-tests.coffee"][116] = 0;
    _$jscoverage["add-tests.coffee"][117] = 0;
    _$jscoverage["add-tests.coffee"][118] = 0;
    _$jscoverage["add-tests.coffee"][120] = 0;
    _$jscoverage["add-tests.coffee"][122] = 0;
    _$jscoverage["add-tests.coffee"][125] = 0;
    _$jscoverage["add-tests.coffee"][131] = 0;
    _$jscoverage["add-tests.coffee"][135] = 0;
}

_$jscoverage["add-tests.coffee"].source = ["async = require 'async'", "_ = require 'underscore'", "csonschema = require 'csonschema'", "", "Test = require './test'", "", "parseSchema = (source) ->", "  if source.contains('$schema')", "    #jsonschema", "    # @response.schema = JSON.parse @response.schema", "    JSON.parse source", "  else", "    csonschema.parse source", "    # @response.schema = csonschema.parse @response.schema", "", "parseHeaders = (raml) ->", "  return {} unless raml", "", "  headers = {}", "  for key, v of raml", "    headers[key] = v.example", "", "  headers", "", "selectSchemes = (names, schemes) ->", "  return _.pick(schemes, names)", "", "# addTests(raml, tests, hooks, [parent], callback)", "addTests = (raml, tests, hooks, parent, callback) ->", "", "  # Handle 4th optional param", "  if _.isFunction(parent)", "    callback = parent", "    parent = null", "", "  return callback() unless raml.resources", "", "  parent ?= {", "    path: \"\",", "    params: {}", "  }", "", "  top_securedBy = raml.securedBy ? parent.securedBy", "", "  if not parent.security_schemes?", "    parent.security_schemes = {}", "    for scheme_map in raml.securitySchemes ? []", "      for scheme_name, scheme of scheme_map", "        parent.security_schemes[scheme_name] ?= []", "        parent.security_schemes[scheme_name].push(scheme)", "", "  # Iterate endpoint", "  async.each raml.resources, (resource, callback) ->", "    path = resource.relativeUri", "    params = {}", "", "    resource_securedBy = resource.securedBy ? top_securedBy", "", "    # Apply parent properties", "    path = parent.path + path", "    params = _.clone parent.params", "", "    # Setup param", "    if resource.uriParameters", "      for key, param of resource.uriParameters", "        params[key] = param.example", "", "    # In case of issue #8, resource does not define methods", "    resource.methods ?= []", "", "    # Iterate response method", "    async.each resource.methods, (api, callback) ->", "      method = api.method.toUpperCase()", "      headers = parseHeaders(api.headers)", "", "      method_securedBy = api.securedBy ? resource_securedBy", "", "      buildTest = (status, res, security) ->", "        testName = \"#{method} #{path} -> #{status}\"", "        if security?", "          testName += \" (#{security})\"", "        if testName in hooks.skips", "          return null", "", "        # Append new test to tests", "        test = new Test(testName, hooks.contentTests[testName])", "", "        # Update test.request", "        test.request.path = path", "        test.request.method = method", "        test.request.headers = headers", "        if api.body?['application/json']", "          test.request.headers['Content-Type'] = 'application/json'", "          try", "            test.request.body = JSON.parse api.body['application/json']?.example", "          catch", "            console.warn \"invalid request example of #{test.name}\"", "        test.request.params = params", "", "        # Update test.response", "        test.response.status = status", "        test.response.schema = null", "        if (res?.body?['application/json']?.schema)", "          test.response.schema = parseSchema res.body['application/json'].schema", "        return test", "", "      # Iterate response status", "      for status, res of api.responses", "        t = buildTest(status, res)", "        if t?", "          tests.push t", "", "      for scheme, lst of selectSchemes(method_securedBy, parent.security_schemes)", "        for l in lst", "          for status, res of l.describedBy?.responses ? {}", "            t = buildTest(status, res, scheme)", "            if t?", "              tests.push t", "", "      callback()", "    , (err) ->", "      return callback(err) if err", "", "      # Recursive", "      new_parent = {", "        path: path,", "        params: params,", "        securedBy: resource_securedBy,", "        security_schemes: parent.security_schemes", "      }", "      addTests resource, tests, hooks, new_parent, callback", "  , callback", "", "", "module.exports = addTests", ""];

(function() {
  var Test, _, addTests, async, csonschema, parseHeaders, parseSchema, selectSchemes,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

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

  _$jscoverage["add-tests.coffee"][25]++;

  selectSchemes = function(names, schemes) {
    _$jscoverage["add-tests.coffee"][26]++;
    return _.pick(schemes, names);
  };

  _$jscoverage["add-tests.coffee"][29]++;

  addTests = function(raml, tests, hooks, parent, callback) {
    var base, i, len, ref, ref1, ref2, scheme, scheme_map, scheme_name, top_securedBy;
    _$jscoverage["add-tests.coffee"][32]++;
    if (_.isFunction(parent)) {
      _$jscoverage["add-tests.coffee"][33]++;
      callback = parent;
      _$jscoverage["add-tests.coffee"][34]++;
      parent = null;
    }
    _$jscoverage["add-tests.coffee"][36]++;
    if (!raml.resources) {
      return callback();
    }
    _$jscoverage["add-tests.coffee"][38]++;
    if (parent == null) {
      parent = {
        path: "",
        params: {}
      };
    }
    _$jscoverage["add-tests.coffee"][43]++;
    top_securedBy = (ref = raml.securedBy) != null ? ref : parent.securedBy;
    _$jscoverage["add-tests.coffee"][45]++;
    if (parent.security_schemes == null) {
      _$jscoverage["add-tests.coffee"][46]++;
      parent.security_schemes = {};
      _$jscoverage["add-tests.coffee"][47]++;
      ref2 = (ref1 = raml.securitySchemes) != null ? ref1 : [];
      for (i = 0, len = ref2.length; i < len; i++) {
        scheme_map = ref2[i];
        _$jscoverage["add-tests.coffee"][48]++;
        for (scheme_name in scheme_map) {
          scheme = scheme_map[scheme_name];
          _$jscoverage["add-tests.coffee"][49]++;
          if ((base = parent.security_schemes)[scheme_name] == null) {
            base[scheme_name] = [];
          }
          _$jscoverage["add-tests.coffee"][50]++;
          parent.security_schemes[scheme_name].push(scheme);
        }
      }
    }
    _$jscoverage["add-tests.coffee"][53]++;
    return async.each(raml.resources, function(resource, callback) {
      var key, param, params, path, ref3, ref4, resource_securedBy;
      _$jscoverage["add-tests.coffee"][54]++;
      path = resource.relativeUri;
      _$jscoverage["add-tests.coffee"][55]++;
      params = {};
      _$jscoverage["add-tests.coffee"][57]++;
      resource_securedBy = (ref3 = resource.securedBy) != null ? ref3 : top_securedBy;
      _$jscoverage["add-tests.coffee"][60]++;
      path = parent.path + path;
      _$jscoverage["add-tests.coffee"][61]++;
      params = _.clone(parent.params);
      _$jscoverage["add-tests.coffee"][64]++;
      if (resource.uriParameters) {
        _$jscoverage["add-tests.coffee"][65]++;
        ref4 = resource.uriParameters;
        for (key in ref4) {
          param = ref4[key];
          _$jscoverage["add-tests.coffee"][66]++;
          params[key] = param.example;
        }
      }
      _$jscoverage["add-tests.coffee"][69]++;
      if (resource.methods == null) {
        resource.methods = [];
      }
      _$jscoverage["add-tests.coffee"][72]++;
      return async.each(resource.methods, function(api, callback) {
        var buildTest, headers, j, l, len1, lst, method, method_securedBy, ref10, ref5, ref6, ref7, ref8, ref9, res, status, t;
        _$jscoverage["add-tests.coffee"][73]++;
        method = api.method.toUpperCase();
        _$jscoverage["add-tests.coffee"][74]++;
        headers = parseHeaders(api.headers);
        _$jscoverage["add-tests.coffee"][76]++;
        method_securedBy = (ref5 = api.securedBy) != null ? ref5 : resource_securedBy;
        _$jscoverage["add-tests.coffee"][78]++;
        buildTest = function(status, res, security) {
          var ref6, ref7, ref8, ref9, test, testName;
          _$jscoverage["add-tests.coffee"][79]++;
          testName = method + " " + path + " -> " + status;
          _$jscoverage["add-tests.coffee"][80]++;
          if (security != null) {
            _$jscoverage["add-tests.coffee"][81]++;
            testName += " (" + security + ")";
          }
          _$jscoverage["add-tests.coffee"][82]++;
          if (indexOf.call(hooks.skips, testName) >= 0) {
            _$jscoverage["add-tests.coffee"][83]++;
            return null;
          }
          _$jscoverage["add-tests.coffee"][86]++;
          test = new Test(testName, hooks.contentTests[testName]);
          _$jscoverage["add-tests.coffee"][89]++;
          test.request.path = path;
          _$jscoverage["add-tests.coffee"][90]++;
          test.request.method = method;
          _$jscoverage["add-tests.coffee"][91]++;
          test.request.headers = headers;
          _$jscoverage["add-tests.coffee"][92]++;
          if ((ref6 = api.body) != null ? ref6['application/json'] : void 0) {
            _$jscoverage["add-tests.coffee"][93]++;
            test.request.headers['Content-Type'] = 'application/json';
            _$jscoverage["add-tests.coffee"][94]++;
            try {
              _$jscoverage["add-tests.coffee"][95]++;
              test.request.body = JSON.parse((ref7 = api.body['application/json']) != null ? ref7.example : void 0);
            } catch (_error) {
              _$jscoverage["add-tests.coffee"][97]++;
              console.warn("invalid request example of " + test.name);
            }
          }
          _$jscoverage["add-tests.coffee"][98]++;
          test.request.params = params;
          _$jscoverage["add-tests.coffee"][101]++;
          test.response.status = status;
          _$jscoverage["add-tests.coffee"][102]++;
          test.response.schema = null;
          _$jscoverage["add-tests.coffee"][103]++;
          if ((res != null ? (ref8 = res.body) != null ? (ref9 = ref8['application/json']) != null ? ref9.schema : void 0 : void 0 : void 0)) {
            _$jscoverage["add-tests.coffee"][104]++;
            test.response.schema = parseSchema(res.body['application/json'].schema);
          }
          _$jscoverage["add-tests.coffee"][105]++;
          return test;
        };
        _$jscoverage["add-tests.coffee"][108]++;
        ref6 = api.responses;
        for (status in ref6) {
          res = ref6[status];
          _$jscoverage["add-tests.coffee"][109]++;
          t = buildTest(status, res);
          _$jscoverage["add-tests.coffee"][110]++;
          if (t != null) {
            _$jscoverage["add-tests.coffee"][111]++;
            tests.push(t);
          }
        }
        _$jscoverage["add-tests.coffee"][113]++;
        ref7 = selectSchemes(method_securedBy, parent.security_schemes);
        for (scheme in ref7) {
          lst = ref7[scheme];
          _$jscoverage["add-tests.coffee"][114]++;
          for (j = 0, len1 = lst.length; j < len1; j++) {
            l = lst[j];
            _$jscoverage["add-tests.coffee"][115]++;
            ref10 = (ref8 = (ref9 = l.describedBy) != null ? ref9.responses : void 0) != null ? ref8 : {};
            for (status in ref10) {
              res = ref10[status];
              _$jscoverage["add-tests.coffee"][116]++;
              t = buildTest(status, res, scheme);
              _$jscoverage["add-tests.coffee"][117]++;
              if (t != null) {
                _$jscoverage["add-tests.coffee"][118]++;
                tests.push(t);
              }
            }
          }
        }
        _$jscoverage["add-tests.coffee"][120]++;
        return callback();
      }, function(err) {
        var new_parent;
        _$jscoverage["add-tests.coffee"][122]++;
        if (err) {
          return callback(err);
        }
        _$jscoverage["add-tests.coffee"][125]++;
        new_parent = {
          path: path,
          params: params,
          securedBy: resource_securedBy,
          security_schemes: parent.security_schemes
        };
        _$jscoverage["add-tests.coffee"][131]++;
        return addTests(resource, tests, hooks, new_parent, callback);
      });
    }, callback);
  };

  _$jscoverage["add-tests.coffee"][135]++;

  module.exports = addTests;

}).call(this);
