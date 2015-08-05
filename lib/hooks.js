(function() {
  var Hooks, _, async,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  async = require('async');

  _ = require('underscore');

  Hooks = (function() {
    function Hooks() {
      this.hasName = bind(this.hasName, this);
      this.runAfter = bind(this.runAfter, this);
      this.runBefore = bind(this.runBefore, this);
      this.runAfterAll = bind(this.runAfterAll, this);
      this.runBeforeAll = bind(this.runBeforeAll, this);
      this.skip = bind(this.skip, this);
      this.test = bind(this.test, this);
      this.addHook = bind(this.addHook, this);
      this.afterEach = bind(this.afterEach, this);
      this.beforeEach = bind(this.beforeEach, this);
      this.afterAll = bind(this.afterAll, this);
      this.beforeAll = bind(this.beforeAll, this);
      this.after = bind(this.after, this);
      this.before = bind(this.before, this);
      this.beforeHooks = {};
      this.afterHooks = {};
      this.beforeAllHooks = [];
      this.afterAllHooks = [];
      this.beforeEachHooks = [];
      this.afterEachHooks = [];
      this.contentTests = {};
      this.skips = [];
    }

    Hooks.prototype.before = function(name, hook) {
      return this.addHook(this.beforeHooks, name, hook);
    };

    Hooks.prototype.after = function(name, hook) {
      return this.addHook(this.afterHooks, name, hook);
    };

    Hooks.prototype.beforeAll = function(hook) {
      return this.beforeAllHooks.push(hook);
    };

    Hooks.prototype.afterAll = function(hook) {
      return this.afterAllHooks.push(hook);
    };

    Hooks.prototype.beforeEach = function(hook) {
      return this.beforeEachHooks.push(hook);
    };

    Hooks.prototype.afterEach = function(hook) {
      return this.afterEachHooks.push(hook);
    };

    Hooks.prototype.addHook = function(hooks, name, hook) {
      if (indexOf.call(this.skips, name) >= 0) {
        throw new Error("Cannot skip " + name + " while also having a hook for it.");
      }
      if (hooks[name]) {
        return hooks[name].push(hook);
      } else {
        return hooks[name] = [hook];
      }
    };

    Hooks.prototype.test = function(name, hook) {
      if (this.contentTests[name] != null) {
        throw new Error("Cannot have more than one test with the name: " + name);
      }
      if (indexOf.call(this.skips, name) >= 0) {
        throw new Error("Cannot skip " + name + " while also having a hook for it.");
      }
      return this.contentTests[name] = hook;
    };

    Hooks.prototype.skip = function(name) {
      if ((this.beforeHooks[name] != null) || (this.afterHooks[name] != null) || (this.contentTests[name] != null)) {
        throw new Error("Cannot skip " + name + " while also having a hook for it.");
      }
      return this.skips.push(name);
    };

    Hooks.prototype.runBeforeAll = function(callback) {
      return async.series(this.beforeAllHooks, function(err, results) {
        return callback(err);
      });
    };

    Hooks.prototype.runAfterAll = function(callback) {
      return async.series(this.afterAllHooks, function(err, results) {
        return callback(err);
      });
    };

    Hooks.prototype.runBefore = function(test, callback) {
      var hooks, ref;
      if (!(this.beforeHooks[test.name] || this.beforeEachHooks)) {
        return callback();
      }
      hooks = this.beforeEachHooks.concat((ref = this.beforeHooks[test.name]) != null ? ref : []);
      return async.eachSeries(hooks, function(hook, callback) {
        return hook(test, callback);
      }, callback);
    };

    Hooks.prototype.runAfter = function(test, callback) {
      var hooks, ref;
      if (!(this.afterHooks[test.name] || this.afterEachHooks)) {
        return callback();
      }
      hooks = ((ref = this.afterHooks[test.name]) != null ? ref : []).concat(this.afterEachHooks);
      return async.eachSeries(hooks, function(hook, callback) {
        return hook(test, callback);
      }, callback);
    };

    Hooks.prototype.hasName = function(name) {
      return _.has(this.beforeHooks, name) || _.has(this.afterHooks, name);
    };

    return Hooks;

  })();

  module.exports = new Hooks();

}).call(this);

//# sourceMappingURL=hooks.js.map
