if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
(function(_export) {
    if (typeof _export._$jscoverage === 'undefined') {
        _export._$jscoverage = _$jscoverage;
    }
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if (! _$jscoverage["add-hooks.coffee"]) {
    _$jscoverage["add-hooks.coffee"] = [];
    _$jscoverage["add-hooks.coffee"][1] = 0;
    _$jscoverage["add-hooks.coffee"][3] = 0;
    _$jscoverage["add-hooks.coffee"][4] = 0;
    _$jscoverage["add-hooks.coffee"][5] = 0;
    _$jscoverage["add-hooks.coffee"][8] = 0;
    _$jscoverage["add-hooks.coffee"][10] = 0;
    _$jscoverage["add-hooks.coffee"][12] = 0;
    _$jscoverage["add-hooks.coffee"][14] = 0;
    _$jscoverage["add-hooks.coffee"][16] = 0;
    _$jscoverage["add-hooks.coffee"][17] = 0;
    _$jscoverage["add-hooks.coffee"][18] = 0;
    _$jscoverage["add-hooks.coffee"][22] = 0;
    _$jscoverage["add-hooks.coffee"][23] = 0;
    _$jscoverage["add-hooks.coffee"][24] = 0;
    _$jscoverage["add-hooks.coffee"][25] = 0;
    _$jscoverage["add-hooks.coffee"][26] = 0;
    _$jscoverage["add-hooks.coffee"][27] = 0;
    _$jscoverage["add-hooks.coffee"][30] = 0;
}

_$jscoverage["add-hooks.coffee"].source = ["path = require 'path'", "", "require 'coffee-script/register'", "proxyquire = require('proxyquire').noCallThru()", "glob = require 'glob'", "", "", "addHooks = (hooks, pattern) ->", "", "    return unless pattern", "", "    files = glob.sync pattern", "", "    console.error 'Found Hookfiles: ' + files", "", "    try", "      for file in files", "        proxyquire path.resolve(process.cwd(), file), {", "          'hooks': hooks", "        }", "    catch error", "      console.error 'Skipping hook loading...'", "      console.error 'Error reading hook files (' + files + ')'", "      console.error 'This probably means one or more of your hookfiles is invalid.'", "      console.error 'Message: ' + error.message if error.message?", "      console.error 'Stack: ' + error.stack if error.stack?", "      return", "", "", "module.exports = addHooks", ""];

(function() {
  var addHooks, glob, path, proxyquire;

  _$jscoverage["add-hooks.coffee"][1]++;

  path = require('path');

  _$jscoverage["add-hooks.coffee"][3]++;

  require('coffee-script/register');

  _$jscoverage["add-hooks.coffee"][4]++;

  proxyquire = require('proxyquire').noCallThru();

  _$jscoverage["add-hooks.coffee"][5]++;

  glob = require('glob');

  _$jscoverage["add-hooks.coffee"][8]++;

  addHooks = function(hooks, pattern) {
    var error, file, files, i, len, results;
    _$jscoverage["add-hooks.coffee"][10]++;
    if (!pattern) {
      return;
    }
    _$jscoverage["add-hooks.coffee"][12]++;
    files = glob.sync(pattern);
    _$jscoverage["add-hooks.coffee"][14]++;
    console.error('Found Hookfiles: ' + files);
    _$jscoverage["add-hooks.coffee"][16]++;
    try {
      _$jscoverage["add-hooks.coffee"][17]++;
      results = [];
      for (i = 0, len = files.length; i < len; i++) {
        file = files[i];
        _$jscoverage["add-hooks.coffee"][18]++;
        results.push(proxyquire(path.resolve(process.cwd(), file), {
          'hooks': hooks
        }));
      }
      return results;
    } catch (_error) {
      error = _error;
      _$jscoverage["add-hooks.coffee"][22]++;
      console.error('Skipping hook loading...');
      _$jscoverage["add-hooks.coffee"][23]++;
      console.error('Error reading hook files (' + files + ')');
      _$jscoverage["add-hooks.coffee"][24]++;
      console.error('This probably means one or more of your hookfiles is invalid.');
      _$jscoverage["add-hooks.coffee"][25]++;
      if (error.message != null) {
        console.error('Message: ' + error.message);
      }
      _$jscoverage["add-hooks.coffee"][26]++;
      if (error.stack != null) {
        console.error('Stack: ' + error.stack);
      }
      _$jscoverage["add-hooks.coffee"][27]++;
    }
  };

  _$jscoverage["add-hooks.coffee"][30]++;

  module.exports = addHooks;

}).call(this);
