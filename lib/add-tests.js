(function() {
  var Test, _, addTests, async, csonschema, parseHeaders, parseSchema, selectSchemes,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  async = require('async');

  _ = require('underscore');

  csonschema = require('csonschema');

  Test = require('./test');

  parseSchema = function(source) {
    if (source.contains('$schema')) {
      return JSON.parse(source);
    } else {
      return csonschema.parse(source);
    }
  };

  parseHeaders = function(raml) {
    var headers, key, v;
    if (!raml) {
      return {};
    }
    headers = {};
    for (key in raml) {
      v = raml[key];
      headers[key] = v.example;
    }
    return headers;
  };

  selectSchemes = function(names, schemes) {
    return _.pick(schemes, names);
  };

  addTests = function(raml, tests, hooks, parent, callback) {
    var base, i, len, ref, ref1, ref2, scheme, scheme_map, scheme_name, top_securedBy;
    if (_.isFunction(parent)) {
      callback = parent;
      parent = null;
    }
    if (!raml.resources) {
      return callback();
    }
    if (parent == null) {
      parent = {
        path: "",
        params: {}
      };
    }
    top_securedBy = (ref = raml.securedBy) != null ? ref : parent.securedBy;
    if (parent.security_schemes == null) {
      parent.security_schemes = {};
      ref2 = (ref1 = raml.securitySchemes) != null ? ref1 : [];
      for (i = 0, len = ref2.length; i < len; i++) {
        scheme_map = ref2[i];
        for (scheme_name in scheme_map) {
          scheme = scheme_map[scheme_name];
          if ((base = parent.security_schemes)[scheme_name] == null) {
            base[scheme_name] = [];
          }
          parent.security_schemes[scheme_name].push(scheme);
        }
      }
    }
    return async.each(raml.resources, function(resource, callback) {
      var key, param, params, path, ref3, ref4, resource_securedBy;
      path = resource.relativeUri;
      params = {};
      resource_securedBy = (ref3 = resource.securedBy) != null ? ref3 : top_securedBy;
      path = parent.path + path;
      params = _.clone(parent.params);
      if (resource.uriParameters) {
        ref4 = resource.uriParameters;
        for (key in ref4) {
          param = ref4[key];
          params[key] = param.example;
        }
      }
      if (resource.methods == null) {
        resource.methods = [];
      }
      return async.each(resource.methods, function(api, callback) {
        var buildTest, headers, j, l, len1, lst, method, method_securedBy, ref10, ref5, ref6, ref7, ref8, ref9, res, status, t;
        method = api.method.toUpperCase();
        headers = parseHeaders(api.headers);
        method_securedBy = (ref5 = api.securedBy) != null ? ref5 : resource_securedBy;
        buildTest = function(status, res, security) {
          var ref6, ref7, ref8, ref9, test, testName;
          testName = method + " " + path + " -> " + status;
          if (security != null) {
            testName += " (" + security + ")";
          }
          if (indexOf.call(hooks.skips, testName) >= 0) {
            return null;
          }
          test = new Test(testName, hooks.contentTests[testName]);
          test.request.path = path;
          test.request.method = method;
          test.request.headers = headers;
          if ((ref6 = api.body) != null ? ref6['application/json'] : void 0) {
            test.request.headers['Content-Type'] = 'application/json';
            try {
              test.request.body = JSON.parse((ref7 = api.body['application/json']) != null ? ref7.example : void 0);
            } catch (_error) {
              console.warn("invalid request example of " + test.name);
            }
          }
          test.request.params = params;
          test.response.status = status;
          test.response.schema = null;
          if ((res != null ? (ref8 = res.body) != null ? (ref9 = ref8['application/json']) != null ? ref9.schema : void 0 : void 0 : void 0)) {
            test.response.schema = parseSchema(res.body['application/json'].schema);
          }
          return test;
        };
        ref6 = api.responses;
        for (status in ref6) {
          res = ref6[status];
          t = buildTest(status, res);
          if (t != null) {
            tests.push(t);
          }
        }
        ref7 = selectSchemes(method_securedBy, parent.security_schemes);
        for (scheme in ref7) {
          lst = ref7[scheme];
          for (j = 0, len1 = lst.length; j < len1; j++) {
            l = lst[j];
            ref10 = (ref8 = (ref9 = l.describedBy) != null ? ref9.responses : void 0) != null ? ref8 : {};
            for (status in ref10) {
              res = ref10[status];
              t = buildTest(status, res, scheme);
              if (t != null) {
                tests.push(t);
              }
            }
          }
        }
        return callback();
      }, function(err) {
        if (err) {
          return callback(err);
        }
        parent = {
          path: path,
          params: params,
          securedBy: resource_securedBy,
          security_schemes: parent.security_schemes
        };
        return addTests(resource, tests, hooks, parent, callback);
      });
    }, callback);
  };

  module.exports = addTests;

}).call(this);

//# sourceMappingURL=add-tests.js.map
