var should = require('chai').should();
var request = require('request');
var connect = require('connect');
var pushState = require('../lib/pushstate').pushState;
var www = __dirname + '/fixtures/www';

describe('pushState', function() {
  var app = connect().use(pushState()).use(connect.static(www));

  it('calls the next middleware', function(done) {
    var server = app.listen(3000).on('listening', function() {
      request('http://0.0.0.0:3000', function(error, response, body) {
        response.statusCode.should.equal(200);
        body.should.contain('www/index.html');
        server.close(done);
      });
    });
  });

  it('rewrites the request url to point at the root when the request does not include a file extension', function(done) {
    var server = app.listen(3000).on('listening', function() {
      request('http://0.0.0.0:3000/pathname', function(error, response, body) {
        response.statusCode.should.equal(200);
        body.should.contain('www/index.html');
        server.close(done);
      });
    });
  });

  it('rewrites the request url to point at the root regardless of whether the querystring contains a file extension', function(done) {
    var server = app.listen(3000).on('listening', function() {
      request('http://0.0.0.0:3000/pathname/?q=foo.bar', function(error, response, body) {
        response.statusCode.should.equal(200);
        body.should.contain('www/index.html');
        server.close(done);
      });
    });
  });

  it('does not rewrite the request url when the request includes a file extension', function(done) {
    var server = app.listen(3000).on('listening', function() {
      request('http://0.0.0.0:3000/images/image.png', function(error, response, body) {
        response.statusCode.should.equal(200);
        response.headers['content-type'].should.contain('image/png');
        server.close(done);
      });
    });
  });

  it('rewrites the request url to point at a custom root if defined', function(done) {
    var app = connect().use(pushState('/other/')).use(connect.static(www));

    var server = app.listen(3000).on('listening', function() {
      request('http://0.0.0.0:3000/other/pathname', function(error, response, body) {
        response.statusCode.should.equal(200);
        body.should.contain('www/other/index.html');
        server.close(done);
      });
    });
  });
});
