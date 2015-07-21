if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
(function(_export) {
    if (typeof _export._$jscoverage === 'undefined') {
        _export._$jscoverage = _$jscoverage;
    }
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if (! _$jscoverage["test.coffee"]) {
    _$jscoverage["test.coffee"] = [];
    _$jscoverage["test.coffee"][1] = 0;
    _$jscoverage["test.coffee"][2] = 0;
    _$jscoverage["test.coffee"][3] = 0;
    _$jscoverage["test.coffee"][4] = 0;
    _$jscoverage["test.coffee"][6] = 0;
    _$jscoverage["test.coffee"][7] = 0;
    _$jscoverage["test.coffee"][10] = 0;
    _$jscoverage["test.coffee"][11] = 0;
    _$jscoverage["test.coffee"][13] = 0;
    _$jscoverage["test.coffee"][14] = 0;
    _$jscoverage["test.coffee"][15] = 0;
    _$jscoverage["test.coffee"][16] = 0;
    _$jscoverage["test.coffee"][18] = 0;
    _$jscoverage["test.coffee"][27] = 0;
    _$jscoverage["test.coffee"][33] = 0;
    _$jscoverage["test.coffee"][34] = 0;
    _$jscoverage["test.coffee"][37] = 0;
    _$jscoverage["test.coffee"][39] = 0;
    _$jscoverage["test.coffee"][40] = 0;
    _$jscoverage["test.coffee"][41] = 0;
    _$jscoverage["test.coffee"][44] = 0;
    _$jscoverage["test.coffee"][45] = 0;
    _$jscoverage["test.coffee"][47] = 0;
    _$jscoverage["test.coffee"][48] = 0;
    _$jscoverage["test.coffee"][49] = 0;
    _$jscoverage["test.coffee"][50] = 0;
    _$jscoverage["test.coffee"][52] = 0;
    _$jscoverage["test.coffee"][54] = 0;
    _$jscoverage["test.coffee"][55] = 0;
    _$jscoverage["test.coffee"][58] = 0;
    _$jscoverage["test.coffee"][59] = 0;
    _$jscoverage["test.coffee"][63] = 0;
    _$jscoverage["test.coffee"][64] = 0;
    _$jscoverage["test.coffee"][67] = 0;
    _$jscoverage["test.coffee"][69] = 0;
    _$jscoverage["test.coffee"][72] = 0;
    _$jscoverage["test.coffee"][75] = 0;
    _$jscoverage["test.coffee"][76] = 0;
    _$jscoverage["test.coffee"][77] = 0;
    _$jscoverage["test.coffee"][78] = 0;
    _$jscoverage["test.coffee"][79] = 0;
    _$jscoverage["test.coffee"][81] = 0;
    _$jscoverage["test.coffee"][85] = 0;
    _$jscoverage["test.coffee"][86] = 0;
    _$jscoverage["test.coffee"][88] = 0;
    _$jscoverage["test.coffee"][93] = 0;
    _$jscoverage["test.coffee"][95] = 0;
}

_$jscoverage["test.coffee"].source = ["chai = require 'chai'", "request = require 'request'", "_ = require 'underscore'", "async = require 'async'", "", "assert = chai.assert", "chai.use(require 'chai2-json-schema')", "", "", "String::contains = (it) ->", "  @indexOf(it) != -1", "", "class Test", "  constructor: (@name, @contentTest) ->", "    @name ?= ''", "    @skip = false", "", "    @request =", "      server: ''", "      path: ''", "      method: 'GET'", "      params: {}", "      query: {}", "      headers: {}", "      body: {}", "", "    @response =", "      status: ''", "      schema: null", "      headers: null", "      body: null", "", "    @contentTest ?= (response, body, done) ->", "        done()", "", "  url: () ->", "    path = @request.server + @request.path", "", "    for key, value of @request.params", "      path = path.replace \"{#{key}}\", value", "    return path", "", "  run: (callback) ->", "    assertResponse = @assertResponse", "    contentTest = @contentTest", "", "    options = _.pick @request, 'headers', 'method'", "    options['url'] = @url()", "    options['body'] = JSON.stringify @request.body", "    options['qs'] = @request.query", "", "    async.waterfall [", "      (callback) ->", "        request options, (error, response, body) ->", "          callback null, error, response, body", "      ,", "      (error, response, body, callback) ->", "        assertResponse(error, response, body)", "        contentTest(response, body, callback)", "    ], callback", "", "  assertResponse: (error, response, body) =>", "    assert.isNull error", "    assert.isNotNull response, 'Response'", "", "    # Status code", "    assert.equal response.statusCode, @response.status, \"\"\"", "      Got unexpected response code:", "      #{body}", "      Error", "    \"\"\"", "    response.status = response.statusCode", "", "    # Body", "    if @response.schema", "      schema = @response.schema", "      validateJson = _.partial JSON.parse, body", "      body = '[empty]' if body is ''", "      assert.doesNotThrow validateJson, JSON.SyntaxError, \"\"\"", "        Invalid JSON:", "        #{body}", "        Error", "      \"\"\"", "", "      json = validateJson()", "      assert.jsonSchema json, schema, \"\"\"", "        Got unexpected response body:", "        #{JSON.stringify(json, null, 4)}", "        Error", "      \"\"\"", "", "      # Update @response", "      @response.body = json", "", "module.exports = Test", ""];

(function() {
  var Test, _, assert, async, chai, request,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  _$jscoverage["test.coffee"][1]++;

  chai = require('chai');

  _$jscoverage["test.coffee"][2]++;

  request = require('request');

  _$jscoverage["test.coffee"][3]++;

  _ = require('underscore');

  _$jscoverage["test.coffee"][4]++;

  async = require('async');

  _$jscoverage["test.coffee"][6]++;

  assert = chai.assert;

  _$jscoverage["test.coffee"][7]++;

  chai.use(require('chai2-json-schema'));

  _$jscoverage["test.coffee"][10]++;

  String.prototype.contains = function(it) {
    _$jscoverage["test.coffee"][11]++;
    return this.indexOf(it) !== -1;
  };

  _$jscoverage["test.coffee"][13]++;

  Test = (function() {
    _$jscoverage["test.coffee"][14]++;

    function Test(name, contentTest1) {
      this.name = name;
      this.contentTest = contentTest1;
      this.assertResponse = bind(this.assertResponse, this);
      _$jscoverage["test.coffee"][15]++;
      if (this.name == null) {
        this.name = '';
      }
      _$jscoverage["test.coffee"][16]++;
      this.skip = false;
      _$jscoverage["test.coffee"][18]++;
      this.request = {
        server: '',
        path: '',
        method: 'GET',
        params: {},
        query: {},
        headers: {},
        body: {}
      };
      _$jscoverage["test.coffee"][27]++;
      this.response = {
        status: '',
        schema: null,
        headers: null,
        body: null
      };
      _$jscoverage["test.coffee"][33]++;
      if (this.contentTest == null) {
        this.contentTest = function(response, body, done) {
          _$jscoverage["test.coffee"][34]++;
          return done();
        };
      }
    }

    Test.prototype.url = function() {
      var key, path, ref, value;
      _$jscoverage["test.coffee"][37]++;
      path = this.request.server + this.request.path;
      _$jscoverage["test.coffee"][39]++;
      ref = this.request.params;
      for (key in ref) {
        value = ref[key];
        _$jscoverage["test.coffee"][40]++;
        path = path.replace("{" + key + "}", value);
      }
      _$jscoverage["test.coffee"][41]++;
      return path;
    };

    Test.prototype.run = function(callback) {
      var assertResponse, contentTest, options;
      _$jscoverage["test.coffee"][44]++;
      assertResponse = this.assertResponse;
      _$jscoverage["test.coffee"][45]++;
      contentTest = this.contentTest;
      _$jscoverage["test.coffee"][47]++;
      options = _.pick(this.request, 'headers', 'method');
      _$jscoverage["test.coffee"][48]++;
      options['url'] = this.url();
      _$jscoverage["test.coffee"][49]++;
      options['body'] = JSON.stringify(this.request.body);
      _$jscoverage["test.coffee"][50]++;
      options['qs'] = this.request.query;
      _$jscoverage["test.coffee"][52]++;
      return async.waterfall([
        function(callback) {
          _$jscoverage["test.coffee"][54]++;
          return request(options, function(error, response, body) {
            _$jscoverage["test.coffee"][55]++;
            return callback(null, error, response, body);
          });
        }, function(error, response, body, callback) {
          _$jscoverage["test.coffee"][58]++;
          assertResponse(error, response, body);
          _$jscoverage["test.coffee"][59]++;
          return contentTest(response, body, callback);
        }
      ], callback);
    };

    Test.prototype.assertResponse = function(error, response, body) {
      var json, schema, validateJson;
      _$jscoverage["test.coffee"][63]++;
      assert.isNull(error);
      _$jscoverage["test.coffee"][64]++;
      assert.isNotNull(response, 'Response');
      _$jscoverage["test.coffee"][67]++;
      assert.equal(response.statusCode, this.response.status, "Got unexpected response code:\n" + (_$jscoverage["test.coffee"][69]++, body) + "\nError");
      _$jscoverage["test.coffee"][72]++;
      response.status = response.statusCode;
      _$jscoverage["test.coffee"][75]++;
      if (this.response.schema) {
        _$jscoverage["test.coffee"][76]++;
        schema = this.response.schema;
        _$jscoverage["test.coffee"][77]++;
        validateJson = _.partial(JSON.parse, body);
        _$jscoverage["test.coffee"][78]++;
        if (body === '') {
          body = '[empty]';
        }
        _$jscoverage["test.coffee"][79]++;
        assert.doesNotThrow(validateJson, JSON.SyntaxError, "Invalid JSON:\n" + (_$jscoverage["test.coffee"][81]++, body) + "\nError");
        _$jscoverage["test.coffee"][85]++;
        json = validateJson();
        _$jscoverage["test.coffee"][86]++;
        assert.jsonSchema(json, schema, "Got unexpected response body:\n" + (_$jscoverage["test.coffee"][88]++, JSON.stringify(json, null, 4)) + "\nError");
        _$jscoverage["test.coffee"][93]++;
        return this.response.body = json;
      }
    };

    return Test;

  })();

  _$jscoverage["test.coffee"][95]++;

  module.exports = Test;

}).call(this);
