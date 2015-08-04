if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
(function(_export) {
    if (typeof _export._$jscoverage === 'undefined') {
        _export._$jscoverage = _$jscoverage;
    }
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if (! _$jscoverage["test-runner.coffee"]) {
    _$jscoverage["test-runner.coffee"] = [];
    _$jscoverage["test-runner.coffee"][1] = 0;
    _$jscoverage["test-runner.coffee"][2] = 0;
    _$jscoverage["test-runner.coffee"][3] = 0;
    _$jscoverage["test-runner.coffee"][6] = 0;
    _$jscoverage["test-runner.coffee"][7] = 0;
    _$jscoverage["test-runner.coffee"][8] = 0;
    _$jscoverage["test-runner.coffee"][9] = 0;
    _$jscoverage["test-runner.coffee"][10] = 0;
    _$jscoverage["test-runner.coffee"][13] = 0;
    _$jscoverage["test-runner.coffee"][14] = 0;
    _$jscoverage["test-runner.coffee"][17] = 0;
    _$jscoverage["test-runner.coffee"][20] = 0;
    _$jscoverage["test-runner.coffee"][21] = 0;
    _$jscoverage["test-runner.coffee"][22] = 0;
    _$jscoverage["test-runner.coffee"][25] = 0;
    _$jscoverage["test-runner.coffee"][26] = 0;
    _$jscoverage["test-runner.coffee"][27] = 0;
    _$jscoverage["test-runner.coffee"][30] = 0;
    _$jscoverage["test-runner.coffee"][31] = 0;
    _$jscoverage["test-runner.coffee"][32] = 0;
    _$jscoverage["test-runner.coffee"][35] = 0;
    _$jscoverage["test-runner.coffee"][36] = 0;
    _$jscoverage["test-runner.coffee"][41] = 0;
    _$jscoverage["test-runner.coffee"][42] = 0;
    _$jscoverage["test-runner.coffee"][43] = 0;
    _$jscoverage["test-runner.coffee"][47] = 0;
    _$jscoverage["test-runner.coffee"][48] = 0;
    _$jscoverage["test-runner.coffee"][49] = 0;
    _$jscoverage["test-runner.coffee"][50] = 0;
    _$jscoverage["test-runner.coffee"][52] = 0;
    _$jscoverage["test-runner.coffee"][54] = 0;
    _$jscoverage["test-runner.coffee"][56] = 0;
    _$jscoverage["test-runner.coffee"][57] = 0;
    _$jscoverage["test-runner.coffee"][58] = 0;
    _$jscoverage["test-runner.coffee"][61] = 0;
    _$jscoverage["test-runner.coffee"][62] = 0;
    _$jscoverage["test-runner.coffee"][64] = 0;
    _$jscoverage["test-runner.coffee"][65] = 0;
    _$jscoverage["test-runner.coffee"][69] = 0;
    _$jscoverage["test-runner.coffee"][71] = 0;
    _$jscoverage["test-runner.coffee"][72] = 0;
    _$jscoverage["test-runner.coffee"][74] = 0;
    _$jscoverage["test-runner.coffee"][75] = 0;
    _$jscoverage["test-runner.coffee"][78] = 0;
    _$jscoverage["test-runner.coffee"][79] = 0;
    _$jscoverage["test-runner.coffee"][84] = 0;
}

_$jscoverage["test-runner.coffee"].source = ["Mocha = require 'mocha'", "async = require 'async'", "_ = require 'underscore'", "", "", "class TestRunner", "  constructor: (server, options = {}) ->", "    @server = server", "    @options = options", "    @mocha = new Mocha options", "", "  addTestToMocha: (test, hooks) =>", "    mocha = @mocha", "    options = @options", "", "    # Generate Test Suite", "    suite = Mocha.Suite.create mocha.suite, test.name", "", "    # No Response defined", "    if !test.response.status", "      suite.addTest new Mocha.Test 'Skip as no response code defined'", "      return", "", "    # No Hooks for this test", "    if not hooks.hasName(test.name) and options['hooks-only']", "      suite.addTest new Mocha.Test 'Skip as no hooks defined'", "      return", "", "    # Setup hooks", "    if hooks", "      suite.beforeAll _.bind (done) ->", "        @hooks.runBefore @test, done", "      , {hooks, test}", "", "      suite.afterAll _.bind (done) ->", "        @hooks.runAfter @test, done", "      , {hooks, test}", "", "    # Setup test", "    # Vote test name", "    title = if test.response.schema then 'Validate response code and body' else 'Validate response code only'", "    suite.addTest new Mocha.Test title, _.bind (done) ->", "      @test.run done", "    , {test}", "", "  run: (tests, hooks, callback) ->", "    server = @server", "    options = @options", "    addTestToMocha = @addTestToMocha", "    mocha = @mocha", "", "    async.waterfall [", "      (callback) ->", "        async.each tests, (test, done) ->", "          # list tests", "          if options.names", "            console.log test.name", "            return done()", "", "          # Update test.request", "          test.request.server = server", "          _.extend(test.request.headers, options.header)", "", "          addTestToMocha test, hooks", "          done()", "        , callback", "      , # Run mocha", "      (callback) ->", "        return callback(null, 0) if options.names", "", "        mocha.suite.beforeAll _.bind (done) ->", "          @hooks.runBeforeAll done", "        , {hooks}", "        mocha.suite.afterAll _.bind (done) ->", "          @hooks.runAfterAll done", "        , {hooks}", "", "        mocha.run (failures) ->", "          callback(null, failures)", "    ], callback", "", "", "", "module.exports = TestRunner", ""];

(function() {
  var Mocha, TestRunner, _, async,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  _$jscoverage["test-runner.coffee"][1]++;

  Mocha = require('mocha');

  _$jscoverage["test-runner.coffee"][2]++;

  async = require('async');

  _$jscoverage["test-runner.coffee"][3]++;

  _ = require('underscore');

  _$jscoverage["test-runner.coffee"][6]++;

  TestRunner = (function() {
    _$jscoverage["test-runner.coffee"][7]++;

    function TestRunner(server, options) {
      if (options == null) {
        options = {};
      }
      this.addTestToMocha = bind(this.addTestToMocha, this);
      _$jscoverage["test-runner.coffee"][8]++;
      this.server = server;
      _$jscoverage["test-runner.coffee"][9]++;
      this.options = options;
      _$jscoverage["test-runner.coffee"][10]++;
      this.mocha = new Mocha(options);
    }

    TestRunner.prototype.addTestToMocha = function(test, hooks) {
      var mocha, options, suite, title;
      _$jscoverage["test-runner.coffee"][13]++;
      mocha = this.mocha;
      _$jscoverage["test-runner.coffee"][14]++;
      options = this.options;
      _$jscoverage["test-runner.coffee"][17]++;
      suite = Mocha.Suite.create(mocha.suite, test.name);
      _$jscoverage["test-runner.coffee"][20]++;
      if (!test.response.status) {
        _$jscoverage["test-runner.coffee"][21]++;
        suite.addTest(new Mocha.Test('Skip as no response code defined'));
        _$jscoverage["test-runner.coffee"][22]++;
        return;
      }
      _$jscoverage["test-runner.coffee"][25]++;
      if (!hooks.hasName(test.name) && options['hooks-only']) {
        _$jscoverage["test-runner.coffee"][26]++;
        suite.addTest(new Mocha.Test('Skip as no hooks defined'));
        _$jscoverage["test-runner.coffee"][27]++;
        return;
      }
      _$jscoverage["test-runner.coffee"][30]++;
      if (hooks) {
        _$jscoverage["test-runner.coffee"][31]++;
        suite.beforeAll(_.bind(function(done) {
          _$jscoverage["test-runner.coffee"][32]++;
          return this.hooks.runBefore(this.test, done);
        }, {
          hooks: hooks,
          test: test
        }));
        _$jscoverage["test-runner.coffee"][35]++;
        suite.afterAll(_.bind(function(done) {
          _$jscoverage["test-runner.coffee"][36]++;
          return this.hooks.runAfter(this.test, done);
        }, {
          hooks: hooks,
          test: test
        }));
      }
      _$jscoverage["test-runner.coffee"][41]++;
      title = test.response.schema ? 'Validate response code and body' : 'Validate response code only';
      _$jscoverage["test-runner.coffee"][42]++;
      return suite.addTest(new Mocha.Test(title, _.bind(function(done) {
        _$jscoverage["test-runner.coffee"][43]++;
        return this.test.run(done);
      }, {
        test: test
      })));
    };

    TestRunner.prototype.run = function(tests, hooks, callback) {
      var addTestToMocha, mocha, options, server;
      _$jscoverage["test-runner.coffee"][47]++;
      server = this.server;
      _$jscoverage["test-runner.coffee"][48]++;
      options = this.options;
      _$jscoverage["test-runner.coffee"][49]++;
      addTestToMocha = this.addTestToMocha;
      _$jscoverage["test-runner.coffee"][50]++;
      mocha = this.mocha;
      _$jscoverage["test-runner.coffee"][52]++;
      return async.waterfall([
        function(callback) {
          _$jscoverage["test-runner.coffee"][54]++;
          return async.each(tests, function(test, done) {
            _$jscoverage["test-runner.coffee"][56]++;
            if (options.names) {
              _$jscoverage["test-runner.coffee"][57]++;
              console.log(test.name);
              _$jscoverage["test-runner.coffee"][58]++;
              return done();
            }
            _$jscoverage["test-runner.coffee"][61]++;
            test.request.server = server;
            _$jscoverage["test-runner.coffee"][62]++;
            _.extend(test.request.headers, options.header);
            _$jscoverage["test-runner.coffee"][64]++;
            addTestToMocha(test, hooks);
            _$jscoverage["test-runner.coffee"][65]++;
            return done();
          }, callback);
        }, function(callback) {
          _$jscoverage["test-runner.coffee"][69]++;
          if (options.names) {
            return callback(null, 0);
          }
          _$jscoverage["test-runner.coffee"][71]++;
          mocha.suite.beforeAll(_.bind(function(done) {
            _$jscoverage["test-runner.coffee"][72]++;
            return this.hooks.runBeforeAll(done);
          }, {
            hooks: hooks
          }));
          _$jscoverage["test-runner.coffee"][74]++;
          mocha.suite.afterAll(_.bind(function(done) {
            _$jscoverage["test-runner.coffee"][75]++;
            return this.hooks.runAfterAll(done);
          }, {
            hooks: hooks
          }));
          _$jscoverage["test-runner.coffee"][78]++;
          return mocha.run(function(failures) {
            _$jscoverage["test-runner.coffee"][79]++;
            return callback(null, failures);
          });
        }
      ], callback);
    };

    return TestRunner;

  })();

  _$jscoverage["test-runner.coffee"][84]++;

  module.exports = TestRunner;

}).call(this);
