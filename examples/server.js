var connect = require('connect'),
  pushState = require('../lib/pushstate').pushState,
  port = process.env.PORT || 3000;

var app = connect()
  .use(connect.logger('dev'))
  .use(pushState())
  .use(connect.static('../test/fixtures/www/'))
  .listen(port, function() {
    console.log('Application server stated on port', port);
  });
