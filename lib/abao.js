if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
(function(_export) {
    if (typeof _export._$jscoverage === 'undefined') {
        _export._$jscoverage = _$jscoverage;
    }
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if (! _$jscoverage["abao.coffee"]) {
    _$jscoverage["abao.coffee"] = [];
    _$jscoverage["abao.coffee"][1] = 0;
    _$jscoverage["abao.coffee"][2] = 0;
    _$jscoverage["abao.coffee"][3] = 0;
    _$jscoverage["abao.coffee"][4] = 0;
    _$jscoverage["abao.coffee"][6] = 0;
    _$jscoverage["abao.coffee"][7] = 0;
    _$jscoverage["abao.coffee"][8] = 0;
    _$jscoverage["abao.coffee"][9] = 0;
    _$jscoverage["abao.coffee"][10] = 0;
    _$jscoverage["abao.coffee"][11] = 0;
    _$jscoverage["abao.coffee"][14] = 0;
    _$jscoverage["abao.coffee"][15] = 0;
    _$jscoverage["abao.coffee"][16] = 0;
    _$jscoverage["abao.coffee"][17] = 0;
    _$jscoverage["abao.coffee"][18] = 0;
    _$jscoverage["abao.coffee"][21] = 0;
    _$jscoverage["abao.coffee"][22] = 0;
    _$jscoverage["abao.coffee"][23] = 0;
    _$jscoverage["abao.coffee"][25] = 0;
    _$jscoverage["abao.coffee"][28] = 0;
    _$jscoverage["abao.coffee"][29] = 0;
    _$jscoverage["abao.coffee"][33] = 0;
    _$jscoverage["abao.coffee"][34] = 0;
    _$jscoverage["abao.coffee"][39] = 0;
    _$jscoverage["abao.coffee"][43] = 0;
    _$jscoverage["abao.coffee"][44] = 0;
    _$jscoverage["abao.coffee"][48] = 0;
    _$jscoverage["abao.coffee"][49] = 0;
}

_$jscoverage["abao.coffee"].source = ["sms = require(\"source-map-support\").install({handleUncaughtExceptions: false})", "raml = require 'raml-parser'", "async = require 'async'", "chai = require 'chai'", "", "options = require './options'", "addTests = require './add-tests'", "addHooks = require './add-hooks'", "Runner = require './test-runner'", "applyConfiguration = require './apply-configuration'", "hooks = require './hooks'", "", "", "class Abao", "  constructor: (config) ->", "    @configuration = applyConfiguration(config)", "    @tests = []", "    @hooks = hooks", "", "  run: (done) ->", "    config = @configuration", "    tests = @tests", "    hooks = @hooks", "", "    async.waterfall [", "      # Parse hooks", "      (callback) ->", "        addHooks hooks, config.options.hookfiles", "        callback()", "      ,", "      # Load RAML", "      (callback) ->", "        raml.loadFile(config.ramlPath).then (raml) ->", "          callback(null, raml)", "        , callback", "      ,", "      # Parse tests from RAML", "      (raml, callback) ->", "        addTests raml, tests, hooks, callback", "      ,", "      # Run tests", "      (callback) ->", "        runner = new Runner config.server, config.options", "        runner.run tests, hooks, callback", "    ], done", "", "", "module.exports = Abao", "module.exports.options = options", ""];

(function() {
  var Abao, Runner, addHooks, addTests, applyConfiguration, async, chai, hooks, options, raml, sms;

  _$jscoverage["abao.coffee"][1]++;

  sms = require("source-map-support").install({
    handleUncaughtExceptions: false
  });

  _$jscoverage["abao.coffee"][2]++;

  raml = require('raml-parser');

  _$jscoverage["abao.coffee"][3]++;

  async = require('async');

  _$jscoverage["abao.coffee"][4]++;

  chai = require('chai');

  _$jscoverage["abao.coffee"][6]++;

  options = require('./options');

  _$jscoverage["abao.coffee"][7]++;

  addTests = require('./add-tests');

  _$jscoverage["abao.coffee"][8]++;

  addHooks = require('./add-hooks');

  _$jscoverage["abao.coffee"][9]++;

  Runner = require('./test-runner');

  _$jscoverage["abao.coffee"][10]++;

  applyConfiguration = require('./apply-configuration');

  _$jscoverage["abao.coffee"][11]++;

  hooks = require('./hooks');

  _$jscoverage["abao.coffee"][14]++;

  Abao = (function() {
    _$jscoverage["abao.coffee"][15]++;

    function Abao(config) {
      _$jscoverage["abao.coffee"][16]++;
      this.configuration = applyConfiguration(config);
      _$jscoverage["abao.coffee"][17]++;
      this.tests = [];
      _$jscoverage["abao.coffee"][18]++;
      this.hooks = hooks;
    }

    Abao.prototype.run = function(done) {
      var config, tests;
      _$jscoverage["abao.coffee"][21]++;
      config = this.configuration;
      _$jscoverage["abao.coffee"][22]++;
      tests = this.tests;
      _$jscoverage["abao.coffee"][23]++;
      hooks = this.hooks;
      _$jscoverage["abao.coffee"][25]++;
      return async.waterfall([
        function(callback) {
          _$jscoverage["abao.coffee"][28]++;
          addHooks(hooks, config.options.hookfiles);
          _$jscoverage["abao.coffee"][29]++;
          return callback();
        }, function(callback) {
          _$jscoverage["abao.coffee"][33]++;
          return raml.loadFile(config.ramlPath).then(function(raml) {
            _$jscoverage["abao.coffee"][34]++;
            return callback(null, raml);
          }, callback);
        }, function(raml, callback) {
          _$jscoverage["abao.coffee"][39]++;
          return addTests(raml, tests, hooks, callback);
        }, function(callback) {
          var runner;
          _$jscoverage["abao.coffee"][43]++;
          runner = new Runner(config.server, config.options);
          _$jscoverage["abao.coffee"][44]++;
          return runner.run(tests, hooks, callback);
        }
      ], done);
    };

    return Abao;

  })();

  _$jscoverage["abao.coffee"][48]++;

  module.exports = Abao;

  _$jscoverage["abao.coffee"][49]++;

  module.exports.options = options;

}).call(this);
