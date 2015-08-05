if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
(function(_export) {
    if (typeof _export._$jscoverage === 'undefined') {
        _export._$jscoverage = _$jscoverage;
    }
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if (! _$jscoverage["options.coffee"]) {
    _$jscoverage["options.coffee"] = [];
    _$jscoverage["options.coffee"][1] = 0;
    _$jscoverage["options.coffee"][47] = 0;
}

_$jscoverage["options.coffee"].source = ["options =", "  hookfiles:", "    alias: 'f'", "    description: 'Specifes a pattern to match files with before/after hooks for running tests'", "    default: null", "", "  names:", "    alias: 'n'", "    description: 'Only list names of requests (for use in a hookfile). No requests are made.'", "    default: false", "", "  reporter:", "    alias: \"r\"", "    description: \"Specify the reporter to use\"", "    default: \"spec\"", "", "  header:", "    alias: \"h\"", "    description: \"Extra header to include in every request. The header must be in KEY:VALUE format, e.g. '-h Accept:application/json'.\\nThis option can be used multiple times to add multiple headers\"", "", "  'hooks-only':", "    alias: \"H\"", "    description: \"Run test only if defined either before or after hooks\"", "", "  grep:", "    alias: \"g\"", "    description: \"only run tests matching <pattern>\"", "", "  invert:", "    alias: \"i\"", "    description: \"inverts --grep matches\"", "", "  timeout:", "    alias: \"t\"", "    description: \"set test-case timeout in milliseconds\"", "    default: 2000", "", "  reporters:", "    description: \"Display available reporters\"", "", "  help:", "    description: \"Show usage information\"", "", "  version:", "    description: \"Show version number\"", "", "module.exports = options", ""];

(function() {
  var options;

  _$jscoverage["options.coffee"][1]++;

  options = {
    hookfiles: {
      alias: 'f',
      description: 'Specifes a pattern to match files with before/after hooks for running tests',
      "default": null
    },
    names: {
      alias: 'n',
      description: 'Only list names of requests (for use in a hookfile). No requests are made.',
      "default": false
    },
    reporter: {
      alias: "r",
      description: "Specify the reporter to use",
      "default": "spec"
    },
    header: {
      alias: "h",
      description: "Extra header to include in every request. The header must be in KEY:VALUE format, e.g. '-h Accept:application/json'.\nThis option can be used multiple times to add multiple headers"
    },
    'hooks-only': {
      alias: "H",
      description: "Run test only if defined either before or after hooks"
    },
    grep: {
      alias: "g",
      description: "only run tests matching <pattern>"
    },
    invert: {
      alias: "i",
      description: "inverts --grep matches"
    },
    timeout: {
      alias: "t",
      description: "set test-case timeout in milliseconds",
      "default": 2000
    },
    reporters: {
      description: "Display available reporters"
    },
    help: {
      description: "Show usage information"
    },
    version: {
      description: "Show version number"
    }
  };

  _$jscoverage["options.coffee"][47]++;

  module.exports = options;

}).call(this);
