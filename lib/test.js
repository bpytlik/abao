(function() {
  var Test, _, assert, async, chai, request,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  chai = require('chai');

  request = require('request');

  _ = require('underscore');

  async = require('async');

  assert = chai.assert;

  chai.use(require('chai2-json-schema'));

  String.prototype.contains = function(it) {
    return this.indexOf(it) !== -1;
  };

  Test = (function() {
    function Test(name, contentTest1) {
      this.name = name;
      this.contentTest = contentTest1;
      this.assertResponse = bind(this.assertResponse, this);
      if (this.name == null) {
        this.name = '';
      }
      this.skip = false;
      this.request = {
        server: '',
        path: '',
        method: 'GET',
        params: {},
        query: {},
        headers: {},
        body: {}
      };
      this.response = {
        status: '',
        schema: null,
        headers: null,
        body: null
      };
      if (this.contentTest == null) {
        this.contentTest = function(response, body, done) {
          return done();
        };
      }
    }

    Test.prototype.url = function() {
      var key, path, ref, value;
      path = this.request.server + this.request.path;
      ref = this.request.params;
      for (key in ref) {
        value = ref[key];
        path = path.replace("{" + key + "}", value);
      }
      return path;
    };

    Test.prototype.run = function(callback) {
      var assertResponse, contentTest, options;
      assertResponse = this.assertResponse;
      contentTest = this.contentTest;
      options = _.pick(this.request, 'headers', 'method');
      options['url'] = this.url();
      options['body'] = JSON.stringify(this.request.body);
      options['qs'] = this.request.query;
      return async.waterfall([
        function(callback) {
          return request(options, function(error, response, body) {
            return callback(null, error, response, body);
          });
        }, function(error, response, body, callback) {
          assertResponse(error, response, body);
          return contentTest(response, body, callback);
        }
      ], callback);
    };

    Test.prototype.assertResponse = function(error, response, body) {
      var json, schema, validateJson;
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, this.response.status, "Got unexpected response code:\n" + body + "\nError");
      response.status = response.statusCode;
      if (this.response.schema) {
        schema = this.response.schema;
        validateJson = _.partial(JSON.parse, body);
        if (body === '') {
          body = '[empty]';
        }
        assert.doesNotThrow(validateJson, JSON.SyntaxError, "Invalid JSON:\n" + body + "\nError");
        json = validateJson();
        assert.jsonSchema(json, schema, "Got unexpected response body:\n" + (JSON.stringify(json, null, 4)) + "\nError");
        return this.response.body = json;
      }
    };

    return Test;

  })();

  module.exports = Test;

}).call(this);

//# sourceMappingURL=test.js.map
