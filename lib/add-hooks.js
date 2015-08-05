(function() {
  var addHooks, glob, path, proxyquire;

  path = require('path');

  require('coffee-script/register');

  proxyquire = require('proxyquire').noCallThru();

  glob = require('glob');

  addHooks = function(hooks, pattern) {
    var bad_files, error, file, files, i, j, k, len, len1;
    if (!pattern) {
      return;
    }
    files = glob.sync(pattern);
    console.log('Found Hookfiles: ' + files);
    bad_files = [];
    for (j = 0, len = files.length; j < len; j++) {
      file = files[j];
      try {
        proxyquire(path.resolve(process.cwd(), file), {
          'hooks': hooks
        });
      } catch (_error) {
        error = _error;
        bad_files.push({
          file: file,
          error: error
        });
      }
    }
    if (bad_files.length > 0) {
      console.error('Error reading hook files:');
      for (k = 0, len1 = bad_files.length; k < len1; k++) {
        i = bad_files[k];
        console.error("\n" + i.file + ":");
        if (i.error.message != null) {
          console.error('Message: ' + i.error.message);
        }
        if (i.error.stack != null) {
          console.error('Stack: ' + i.error.stack);
        }
      }
      return process.exit(1);
    }
  };

  module.exports = addHooks;

}).call(this);

//# sourceMappingURL=add-hooks.js.map
