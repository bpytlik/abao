(function() {
  var applyConfiguration,
    hasProp = {}.hasOwnProperty;

  applyConfiguration = function(config) {
    var coerceToArray, coerceToDict, configuration, key, value;
    coerceToArray = function(value) {
      if (typeof value === 'string') {
        return value = [value];
      } else if (value == null) {
        return value = [];
      } else if (value instanceof Array) {
        return value;
      } else {
        return value;
      }
    };
    coerceToDict = function(value) {
      var array, i, item, len, splitItem;
      array = coerceToArray(value);
      this.dict = {};
      if (array.length > 0) {
        for (i = 0, len = array.length; i < len; i++) {
          item = array[i];
          splitItem = item.split(':');
          this.dict[splitItem[0]] = splitItem[1];
        }
      }
      return this.dict;
    };
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
    for (key in config) {
      if (!hasProp.call(config, key)) continue;
      value = config[key];
      configuration[key] = value;
    }
    configuration.options.header = coerceToDict(configuration.options.header);
    if (configuration.options.oauth2Token != null) {
      configuration.options.headers['Authorization'] = "Bearer " + configuration.options.oauth2Token;
    }
    return configuration;
  };

  module.exports = applyConfiguration;

}).call(this);

//# sourceMappingURL=apply-configuration.js.map
