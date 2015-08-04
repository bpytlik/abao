if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
(function(_export) {
    if (typeof _export._$jscoverage === 'undefined') {
        _export._$jscoverage = _$jscoverage;
    }
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if (! _$jscoverage["hooks.coffee"]) {
    _$jscoverage["hooks.coffee"] = [];
    _$jscoverage["hooks.coffee"][1] = 0;
    _$jscoverage["hooks.coffee"][2] = 0;
    _$jscoverage["hooks.coffee"][4] = 0;
    _$jscoverage["hooks.coffee"][5] = 0;
    _$jscoverage["hooks.coffee"][6] = 0;
    _$jscoverage["hooks.coffee"][7] = 0;
    _$jscoverage["hooks.coffee"][8] = 0;
    _$jscoverage["hooks.coffee"][9] = 0;
    _$jscoverage["hooks.coffee"][10] = 0;
    _$jscoverage["hooks.coffee"][11] = 0;
    _$jscoverage["hooks.coffee"][12] = 0;
    _$jscoverage["hooks.coffee"][13] = 0;
    _$jscoverage["hooks.coffee"][16] = 0;
    _$jscoverage["hooks.coffee"][19] = 0;
    _$jscoverage["hooks.coffee"][22] = 0;
    _$jscoverage["hooks.coffee"][25] = 0;
    _$jscoverage["hooks.coffee"][28] = 0;
    _$jscoverage["hooks.coffee"][31] = 0;
    _$jscoverage["hooks.coffee"][34] = 0;
    _$jscoverage["hooks.coffee"][35] = 0;
    _$jscoverage["hooks.coffee"][36] = 0;
    _$jscoverage["hooks.coffee"][37] = 0;
    _$jscoverage["hooks.coffee"][39] = 0;
    _$jscoverage["hooks.coffee"][42] = 0;
    _$jscoverage["hooks.coffee"][43] = 0;
    _$jscoverage["hooks.coffee"][44] = 0;
    _$jscoverage["hooks.coffee"][45] = 0;
    _$jscoverage["hooks.coffee"][46] = 0;
    _$jscoverage["hooks.coffee"][49] = 0;
    _$jscoverage["hooks.coffee"][50] = 0;
    _$jscoverage["hooks.coffee"][51] = 0;
    _$jscoverage["hooks.coffee"][54] = 0;
    _$jscoverage["hooks.coffee"][55] = 0;
    _$jscoverage["hooks.coffee"][58] = 0;
    _$jscoverage["hooks.coffee"][59] = 0;
    _$jscoverage["hooks.coffee"][62] = 0;
    _$jscoverage["hooks.coffee"][64] = 0;
    _$jscoverage["hooks.coffee"][65] = 0;
    _$jscoverage["hooks.coffee"][66] = 0;
    _$jscoverage["hooks.coffee"][70] = 0;
    _$jscoverage["hooks.coffee"][72] = 0;
    _$jscoverage["hooks.coffee"][73] = 0;
    _$jscoverage["hooks.coffee"][74] = 0;
    _$jscoverage["hooks.coffee"][78] = 0;
    _$jscoverage["hooks.coffee"][80] = 0;
}

_$jscoverage["hooks.coffee"].source = ["async = require 'async'", "_ = require 'underscore'", "", "class Hooks", "  constructor: () ->", "    @beforeHooks = {}", "    @afterHooks = {}", "    @beforeAllHooks = []", "    @afterAllHooks = []", "    @beforeEachHooks = []", "    @afterEachHooks = []", "    @contentTests = {}", "    @skips = []", "", "  before: (name, hook) =>", "    @addHook(@beforeHooks, name, hook)", "", "  after: (name, hook) =>", "    @addHook(@afterHooks, name, hook)", "", "  beforeAll: (hook) =>", "    @beforeAllHooks.push hook", "", "  afterAll: (hook) =>", "    @afterAllHooks.push hook", "", "  beforeEach: (hook) =>", "    @beforeEachHooks.push(hook)", "", "  afterEach: (hook) =>", "    @afterEachHooks.push(hook)", "", "  addHook: (hooks, name, hook) =>", "    if name in @skips", "      throw new Error(\"Cannot skip #{name} while also having a hook for it.\")", "    if hooks[name]", "      hooks[name].push hook", "    else", "      hooks[name] = [hook]", "", "  test: (name, hook) =>", "    if @contentTests[name]?", "      throw new Error(\"Cannot have more than one test with the name: #{name}\")", "    if name in @skips", "      throw new Error(\"Cannot skip #{name} while also having a hook for it.\")", "    @contentTests[name] = hook", "", "  skip: (name) =>", "    if @beforeHooks[name]? or @afterHooks[name]? or @contentTests[name]?", "      throw new Error(\"Cannot skip #{name} while also having a hook for it.\")", "    @skips.push(name)", "", "  runBeforeAll: (callback) =>", "    async.series @beforeAllHooks, (err, results) ->", "      callback(err)", "", "  runAfterAll: (callback) =>", "    async.series @afterAllHooks, (err, results) ->", "      callback(err)", "", "  runBefore: (test, callback) =>", "    return callback() unless (@beforeHooks[test.name] or @beforeEachHooks)", "", "    hooks = @beforeEachHooks.concat(@beforeHooks[test.name] ? [])", "    async.eachSeries hooks, (hook, callback) ->", "      hook test, callback", "    , callback", "", "  runAfter: (test, callback) =>", "    return callback() unless (@afterHooks[test.name] or @afterEachHooks)", "", "    hooks = (@afterHooks[test.name] ? []).concat(@afterEachHooks)", "    async.eachSeries hooks, (hook, callback) ->", "      hook test, callback", "    , callback", "", "  hasName: (name) =>", "    _.has(@beforeHooks, name) || _.has(@afterHooks, name)", "", "module.exports = new Hooks()", ""];

(function() {
  var Hooks, _, async,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  _$jscoverage["hooks.coffee"][1]++;

  async = require('async');

  _$jscoverage["hooks.coffee"][2]++;

  _ = require('underscore');

  _$jscoverage["hooks.coffee"][4]++;

  Hooks = (function() {
    _$jscoverage["hooks.coffee"][5]++;

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
      _$jscoverage["hooks.coffee"][6]++;
      this.beforeHooks = {};
      _$jscoverage["hooks.coffee"][7]++;
      this.afterHooks = {};
      _$jscoverage["hooks.coffee"][8]++;
      this.beforeAllHooks = [];
      _$jscoverage["hooks.coffee"][9]++;
      this.afterAllHooks = [];
      _$jscoverage["hooks.coffee"][10]++;
      this.beforeEachHooks = [];
      _$jscoverage["hooks.coffee"][11]++;
      this.afterEachHooks = [];
      _$jscoverage["hooks.coffee"][12]++;
      this.contentTests = {};
      _$jscoverage["hooks.coffee"][13]++;
      this.skips = [];
    }

    Hooks.prototype.before = function(name, hook) {
      _$jscoverage["hooks.coffee"][16]++;
      return this.addHook(this.beforeHooks, name, hook);
    };

    Hooks.prototype.after = function(name, hook) {
      _$jscoverage["hooks.coffee"][19]++;
      return this.addHook(this.afterHooks, name, hook);
    };

    Hooks.prototype.beforeAll = function(hook) {
      _$jscoverage["hooks.coffee"][22]++;
      return this.beforeAllHooks.push(hook);
    };

    Hooks.prototype.afterAll = function(hook) {
      _$jscoverage["hooks.coffee"][25]++;
      return this.afterAllHooks.push(hook);
    };

    Hooks.prototype.beforeEach = function(hook) {
      _$jscoverage["hooks.coffee"][28]++;
      return this.beforeEachHooks.push(hook);
    };

    Hooks.prototype.afterEach = function(hook) {
      _$jscoverage["hooks.coffee"][31]++;
      return this.afterEachHooks.push(hook);
    };

    Hooks.prototype.addHook = function(hooks, name, hook) {
      _$jscoverage["hooks.coffee"][34]++;
      if (indexOf.call(this.skips, name) >= 0) {
        _$jscoverage["hooks.coffee"][35]++;
        throw new Error("Cannot skip " + name + " while also having a hook for it.");
      }
      _$jscoverage["hooks.coffee"][36]++;
      if (hooks[name]) {
        _$jscoverage["hooks.coffee"][37]++;
        return hooks[name].push(hook);
      } else {
        _$jscoverage["hooks.coffee"][39]++;
        return hooks[name] = [hook];
      }
    };

    Hooks.prototype.test = function(name, hook) {
      _$jscoverage["hooks.coffee"][42]++;
      if (this.contentTests[name] != null) {
        _$jscoverage["hooks.coffee"][43]++;
        throw new Error("Cannot have more than one test with the name: " + name);
      }
      _$jscoverage["hooks.coffee"][44]++;
      if (indexOf.call(this.skips, name) >= 0) {
        _$jscoverage["hooks.coffee"][45]++;
        throw new Error("Cannot skip " + name + " while also having a hook for it.");
      }
      _$jscoverage["hooks.coffee"][46]++;
      return this.contentTests[name] = hook;
    };

    Hooks.prototype.skip = function(name) {
      _$jscoverage["hooks.coffee"][49]++;
      if ((this.beforeHooks[name] != null) || (this.afterHooks[name] != null) || (this.contentTests[name] != null)) {
        _$jscoverage["hooks.coffee"][50]++;
        throw new Error("Cannot skip " + name + " while also having a hook for it.");
      }
      _$jscoverage["hooks.coffee"][51]++;
      return this.skips.push(name);
    };

    Hooks.prototype.runBeforeAll = function(callback) {
      _$jscoverage["hooks.coffee"][54]++;
      return async.series(this.beforeAllHooks, function(err, results) {
        _$jscoverage["hooks.coffee"][55]++;
        return callback(err);
      });
    };

    Hooks.prototype.runAfterAll = function(callback) {
      _$jscoverage["hooks.coffee"][58]++;
      return async.series(this.afterAllHooks, function(err, results) {
        _$jscoverage["hooks.coffee"][59]++;
        return callback(err);
      });
    };

    Hooks.prototype.runBefore = function(test, callback) {
      var hooks, ref;
      _$jscoverage["hooks.coffee"][62]++;
      if (!(this.beforeHooks[test.name] || this.beforeEachHooks)) {
        return callback();
      }
      _$jscoverage["hooks.coffee"][64]++;
      hooks = this.beforeEachHooks.concat((ref = this.beforeHooks[test.name]) != null ? ref : []);
      _$jscoverage["hooks.coffee"][65]++;
      return async.eachSeries(hooks, function(hook, callback) {
        _$jscoverage["hooks.coffee"][66]++;
        return hook(test, callback);
      }, callback);
    };

    Hooks.prototype.runAfter = function(test, callback) {
      var hooks, ref;
      _$jscoverage["hooks.coffee"][70]++;
      if (!(this.afterHooks[test.name] || this.afterEachHooks)) {
        return callback();
      }
      _$jscoverage["hooks.coffee"][72]++;
      hooks = ((ref = this.afterHooks[test.name]) != null ? ref : []).concat(this.afterEachHooks);
      _$jscoverage["hooks.coffee"][73]++;
      return async.eachSeries(hooks, function(hook, callback) {
        _$jscoverage["hooks.coffee"][74]++;
        return hook(test, callback);
      }, callback);
    };

    Hooks.prototype.hasName = function(name) {
      _$jscoverage["hooks.coffee"][78]++;
      return _.has(this.beforeHooks, name) || _.has(this.afterHooks, name);
    };

    return Hooks;

  })();

  _$jscoverage["hooks.coffee"][80]++;

  module.exports = new Hooks();

}).call(this);
