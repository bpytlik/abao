(function() {
  var Mocha, TestRunner, _, async,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Mocha = require('mocha');

  async = require('async');

  _ = require('underscore');

  TestRunner = (function() {
    function TestRunner(server, options) {
      if (options == null) {
        options = {};
      }
      this.addTestToMocha = bind(this.addTestToMocha, this);
      this.server = server;
      this.options = options;
      this.mocha = new Mocha(options);
    }

    TestRunner.prototype.addTestToMocha = function(test, hooks) {
      var mocha, options, suite, title;
      mocha = this.mocha;
      options = this.options;
      suite = Mocha.Suite.create(mocha.suite, test.name);
      if (!test.response.status) {
        suite.addTest(new Mocha.Test('Skip as no response code defined'));
        return;
      }
      if (!hooks.hasName(test.name) && options['hooks-only']) {
        suite.addTest(new Mocha.Test('Skip as no hooks defined'));
        return;
      }
      if (hooks) {
        suite.beforeAll(_.bind(function(done) {
          return this.hooks.runBefore(this.test, done);
        }, {
          hooks: hooks,
          test: test
        }));
        suite.afterAll(_.bind(function(done) {
          return this.hooks.runAfter(this.test, done);
        }, {
          hooks: hooks,
          test: test
        }));
      }
      title = test.response.schema ? 'Validate response code and body' : 'Validate response code only';
      return suite.addTest(new Mocha.Test(title, _.bind(function(done) {
        return this.test.run(done);
      }, {
        test: test
      })));
    };

    TestRunner.prototype.run = function(tests, hooks, callback) {
      var addTestToMocha, mocha, options, server;
      server = this.server;
      options = this.options;
      addTestToMocha = this.addTestToMocha;
      mocha = this.mocha;
      return async.waterfall([
        function(callback) {
          return async.each(tests, function(test, done) {
            if (options.names) {
              console.log(test.name);
              return done();
            }
            test.request.server = server;
            _.extend(test.request.headers, options.header);
            addTestToMocha(test, hooks);
            return done();
          }, callback);
        }, function(callback) {
          if (options.names) {
            return callback(null, 0);
          }
          mocha.suite.beforeAll(_.bind(function(done) {
            return this.hooks.runBeforeAll(done);
          }, {
            hooks: hooks
          }));
          mocha.suite.afterAll(_.bind(function(done) {
            return this.hooks.runAfterAll(done);
          }, {
            hooks: hooks
          }));
          return mocha.run(function(failures) {
            return callback(null, failures);
          });
        }
      ], callback);
    };

    return TestRunner;

  })();

  module.exports = TestRunner;

}).call(this);

//# sourceMappingURL=test-runner.js.map
