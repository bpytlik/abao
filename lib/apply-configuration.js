if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
(function(_export) {
    if (typeof _export._$jscoverage === 'undefined') {
        _export._$jscoverage = _$jscoverage;
    }
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if (! _$jscoverage["apply-configuration.coffee"]) {
    _$jscoverage["apply-configuration.coffee"] = [];
    _$jscoverage["apply-configuration.coffee"][2] = 0;
    _$jscoverage["apply-configuration.coffee"][4] = 0;
    _$jscoverage["apply-configuration.coffee"][5] = 0;
    _$jscoverage["apply-configuration.coffee"][6] = 0;
    _$jscoverage["apply-configuration.coffee"][7] = 0;
    _$jscoverage["apply-configuration.coffee"][8] = 0;
    _$jscoverage["apply-configuration.coffee"][9] = 0;
    _$jscoverage["apply-configuration.coffee"][10] = 0;
    _$jscoverage["apply-configuration.coffee"][11] = 0;
    _$jscoverage["apply-configuration.coffee"][13] = 0;
    _$jscoverage["apply-configuration.coffee"][14] = 0;
    _$jscoverage["apply-configuration.coffee"][15] = 0;
    _$jscoverage["apply-configuration.coffee"][17] = 0;
    _$jscoverage["apply-configuration.coffee"][18] = 0;
    _$jscoverage["apply-configuration.coffee"][19] = 0;
    _$jscoverage["apply-configuration.coffee"][20] = 0;
    _$jscoverage["apply-configuration.coffee"][22] = 0;
    _$jscoverage["apply-configuration.coffee"][24] = 0;
    _$jscoverage["apply-configuration.coffee"][38] = 0;
    _$jscoverage["apply-configuration.coffee"][39] = 0;
    _$jscoverage["apply-configuration.coffee"][42] = 0;
    _$jscoverage["apply-configuration.coffee"][45] = 0;
    _$jscoverage["apply-configuration.coffee"][46] = 0;
    _$jscoverage["apply-configuration.coffee"][48] = 0;
    _$jscoverage["apply-configuration.coffee"][50] = 0;
}

_$jscoverage["apply-configuration.coffee"].source = ["", "applyConfiguration = (config) ->", "", "  coerceToArray = (value) ->", "    if typeof value is 'string'", "      value = [value]", "    else if !value?", "      value = []", "    else if value instanceof Array", "      value", "    else value", "", "  coerceToDict = (value) ->", "    array = coerceToArray value", "    @dict = {}", "", "    if array.length > 0", "      for item in array", "        splitItem = item.split(':')", "        @dict[splitItem[0]] = splitItem[1]", "", "    return @dict", "", "  configuration =", "    ramlPath: null", "    server: null", "    options:", "      reporters: false", "      reporter: null", "      header: null", "      names: false", "      hookfiles: null", "      grep: ''", "      invert: false", "      'hooks-only': false", "", "  # normalize options and config", "  for own key, value of config", "    configuration[key] = value", "", "  # coerce some options into an dict", "  configuration.options.header = coerceToDict(configuration.options.header)", "", "  # TODO(quanlong): OAuth2 Bearer Token", "  if configuration.options.oauth2Token?", "    configuration.options.headers['Authorization'] = \"Bearer #{configuration.options.oauth2Token}\"", "", "  return configuration", "", "module.exports = applyConfiguration", ""];

(function() {
  var applyConfiguration,
    hasProp = {}.hasOwnProperty;

  _$jscoverage["apply-configuration.coffee"][2]++;

  applyConfiguration = function(config) {
    var coerceToArray, coerceToDict, configuration, key, value;
    _$jscoverage["apply-configuration.coffee"][4]++;
    coerceToArray = function(value) {
      _$jscoverage["apply-configuration.coffee"][5]++;
      if (typeof value === 'string') {
        _$jscoverage["apply-configuration.coffee"][6]++;
        return value = [value];
      } else {
        _$jscoverage["apply-configuration.coffee"][7]++;
        if (value == null) {
          _$jscoverage["apply-configuration.coffee"][8]++;
          return value = [];
        } else {
          _$jscoverage["apply-configuration.coffee"][9]++;
          if (value instanceof Array) {
            _$jscoverage["apply-configuration.coffee"][10]++;
            return value;
          } else {
            _$jscoverage["apply-configuration.coffee"][11]++;
            return value;
          }
        }
      }
    };
    _$jscoverage["apply-configuration.coffee"][13]++;
    coerceToDict = function(value) {
      var array, i, item, len, splitItem;
      _$jscoverage["apply-configuration.coffee"][14]++;
      array = coerceToArray(value);
      _$jscoverage["apply-configuration.coffee"][15]++;
      this.dict = {};
      _$jscoverage["apply-configuration.coffee"][17]++;
      if (array.length > 0) {
        _$jscoverage["apply-configuration.coffee"][18]++;
        for (i = 0, len = array.length; i < len; i++) {
          item = array[i];
          _$jscoverage["apply-configuration.coffee"][19]++;
          splitItem = item.split(':');
          _$jscoverage["apply-configuration.coffee"][20]++;
          this.dict[splitItem[0]] = splitItem[1];
        }
      }
      _$jscoverage["apply-configuration.coffee"][22]++;
      return this.dict;
    };
    _$jscoverage["apply-configuration.coffee"][24]++;
    configuration = {
      ramlPath: null,
      server: null,
      options: {
        reporters: false,
        reporter: null,
        header: null,
        names: false,
        hookfiles: null,
        grep: '',
        invert: false,
        'hooks-only': false
      }
    };
    _$jscoverage["apply-configuration.coffee"][38]++;
    for (key in config) {
      if (!hasProp.call(config, key)) continue;
      value = config[key];
      _$jscoverage["apply-configuration.coffee"][39]++;
      configuration[key] = value;
    }
    _$jscoverage["apply-configuration.coffee"][42]++;
    configuration.options.header = coerceToDict(configuration.options.header);
    _$jscoverage["apply-configuration.coffee"][45]++;
    if (configuration.options.oauth2Token != null) {
      _$jscoverage["apply-configuration.coffee"][46]++;
      configuration.options.headers['Authorization'] = "Bearer " + configuration.options.oauth2Token;
    }
    _$jscoverage["apply-configuration.coffee"][48]++;
    return configuration;
  };

  _$jscoverage["apply-configuration.coffee"][50]++;

  module.exports = applyConfiguration;

}).call(this);
