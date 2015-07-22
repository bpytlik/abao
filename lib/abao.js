(function() {
  var Abao, Runner, addHooks, addTests, applyConfiguration, async, chai, hooks, options, raml, sms;

  sms = require("source-map-support").install({
    handleUncaughtExceptions: false
  });

  raml = require('raml-parser');

  async = require('async');

  chai = require('chai');

  options = require('./options');

  addTests = require('./add-tests');

  addHooks = require('./add-hooks');

  Runner = require('./test-runner');

  applyConfiguration = require('./apply-configuration');

  hooks = require('./hooks');

  Abao = (function() {
    function Abao(config) {
      this.configuration = applyConfiguration(config);
      this.tests = [];
      this.hooks = hooks;
    }

    Abao.prototype.run = function(done) {
      var config, tests;
      config = this.configuration;
      tests = this.tests;
      hooks = this.hooks;
      return async.waterfall([
        function(callback) {
          addHooks(hooks, config.options.hookfiles);
          return callback();
        }, function(callback) {
          return raml.loadFile(config.ramlPath).then(function(raml) {
            return callback(null, raml);
          }, callback);
        }, function(raml, callback) {
          return addTests(raml, tests, hooks, callback);
        }, function(callback) {
          var runner;
          runner = new Runner(config.server, config.options);
          return runner.run(tests, hooks, callback);
        }
      ], done);
    };

    return Abao;

  })();

  module.exports = Abao;

  module.exports.options = options;

}).call(this);

//# sourceMappingURL=abao.js.map
