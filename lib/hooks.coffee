async = require 'async'
_ = require 'underscore'


class Hooks
  constructor: () ->
    @beforeHooks = {}
    @afterHooks = {}
    @beforeAllHooks = []
    @afterAllHooks = []
    @beforeEachHooks = []
    @afterEachHooks = []
    @contentTests = {}
    @skippedTests = []

  before: (name, hook) =>
    @addHook(@beforeHooks, name, hook)

  after: (name, hook) =>
    @addHook(@afterHooks, name, hook)

  beforeAll: (hook) =>
    @beforeAllHooks.push hook

  afterAll: (hook) =>
    @afterAllHooks.push hook

  beforeEach: (hook) =>
    @beforeEachHooks.push(hook)

  afterEach: (hook) =>
    @afterEachHooks.push(hook)

  addHook: (hooks, name, hook) ->
    if name in @skippedTests
      throw new Error("Cannot skip #{name} while also having a jook for it.")
    if hooks[name]
      hooks[name].push hook
    else
      hooks[name] = [hook]

  test: (name, hook) =>
    if @contentTests[name]?
      throw new Error("Cannot have more than one test with the name: #{name}")
    if name in @skippedTests
      throw new Error("Cannot skip #{name} while also having a jook for it.")
    @contentTests[name] = hook

  runBeforeAll: (callback) =>
    async.series @beforeAllHooks, (err, results) ->
      callback(err)

  runAfterAll: (callback) =>
    async.series @afterAllHooks, (err, results) ->
      callback(err)

  runBefore: (test, callback) =>
    return callback() unless (@beforeHooks[test.name] or @beforeEachHooks)

    hooks = @beforeEachHooks.concat(@beforeHooks[test.name] ? [])
    async.eachSeries hooks, (hook, callback) ->
      hook test, callback
    , callback

  runAfter: (test, callback) =>
    return callback() unless (@afterHooks[test.name] or @afterEachHooks)

    hooks = (@afterHooks[test.name] ? []).concat(@afterEachHooks)
    async.eachSeries hooks, (hook, callback) ->
      hook test, callback
    , callback

  skip: (name) =>
    if @beforeHooks[name]? or @afterHooks[name]? or @contentTests[name]?
      throw new Error("Cannot skip #{name} while also having a hook for it.")
    @skippedTests.push name

  hasName: (name) =>
    _.has(@beforeHooks, name) || _.has(@afterHooks, name)

  skipped: (name) =>
    @skippedTests.indexOf(name) != -1


module.exports = new Hooks()

