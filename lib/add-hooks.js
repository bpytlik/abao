(function() {
  var addHooks, glob, path, proxyquire;

  path = require('path');

  require('coffee-script/register');

  proxyquire = require('proxyquire').noCallThru();

  glob = require('glob');

  addHooks = function(hooks, pattern) {
    var error, file, files, i, len, results;
    if (!pattern) {
      return;
    }
    files = glob.sync(pattern);
    console.error('Found Hookfiles: ' + files);
    try {
      results = [];
      for (i = 0, len = files.length; i < len; i++) {
        file = files[i];
        results.push(proxyquire(path.resolve(process.cwd(), file), {
          'hooks': hooks
        }));
      }
      return results;
    } catch (_error) {
      error = _error;
      console.error('Skipping hook loading...');
      console.error('Error reading hook files (' + files + ')');
      console.error('This probably means one or more of your hookfiles is invalid.');
      if (error.message != null) {
        console.error('Message: ' + error.message);
      }
      if (error.stack != null) {
        console.error('Stack: ' + error.stack);
      }
    }
  };

  module.exports = addHooks;

}).call(this);

//# sourceMappingURL=add-hooks.js.map
