if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
(function(_export) {
    if (typeof _export._$jscoverage === 'undefined') {
        _export._$jscoverage = _$jscoverage;
    }
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if (! _$jscoverage["server.coffee"]) {
    _$jscoverage["server.coffee"] = [];
    _$jscoverage["server.coffee"][1] = 0;
    _$jscoverage["server.coffee"][3] = 0;
    _$jscoverage["server.coffee"][5] = 0;
    _$jscoverage["server.coffee"][7] = 0;
    _$jscoverage["server.coffee"][8] = 0;
    _$jscoverage["server.coffee"][9] = 0;
    _$jscoverage["server.coffee"][12] = 0;
    _$jscoverage["server.coffee"][13] = 0;
    _$jscoverage["server.coffee"][15] = 0;
    _$jscoverage["server.coffee"][16] = 0;
}

_$jscoverage["server.coffee"].source = ["express = require 'express'", "", "PORT = '3333'", "", "app = express()", "", "app.get '/machines', (req, res) ->", "  res.setHeader 'Content-Type', 'application/json'", "  machine =", "    type: 'bulldozer'", "    name: 'willy'", "  response = [machine]", "  res.status(200).send response", "", "server = app.listen PORT, () ->", "  console.log('server started')", ""];

(function() {
  var PORT, app, express, server;

  _$jscoverage["server.coffee"][1]++;

  express = require('express');

  _$jscoverage["server.coffee"][3]++;

  PORT = '3333';

  _$jscoverage["server.coffee"][5]++;

  app = express();

  _$jscoverage["server.coffee"][7]++;

  app.get('/machines', function(req, res) {
    var machine, response;
    _$jscoverage["server.coffee"][8]++;
    res.setHeader('Content-Type', 'application/json');
    _$jscoverage["server.coffee"][9]++;
    machine = {
      type: 'bulldozer',
      name: 'willy'
    };
    _$jscoverage["server.coffee"][12]++;
    response = [machine];
    _$jscoverage["server.coffee"][13]++;
    return res.status(200).send(response);
  });

  _$jscoverage["server.coffee"][15]++;

  server = app.listen(PORT, function() {
    _$jscoverage["server.coffee"][16]++;
    return console.log('server started');
  });

}).call(this);
