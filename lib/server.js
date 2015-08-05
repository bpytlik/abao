(function() {
  var PORT, app, express, server;

  express = require('express');

  PORT = '3333';

  app = express();

  app.get('/machines', function(req, res) {
    var machine, response;
    res.setHeader('Content-Type', 'application/json');
    machine = {
      type: 'bulldozer',
      name: 'willy'
    };
    response = [machine];
    return res.status(200).send(response);
  });

  server = app.listen(PORT, function() {
    return console.log('server started');
  });

}).call(this);

//# sourceMappingURL=server.js.map
