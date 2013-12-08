/*
 * connect-pushstate
 * https://github.com/brent/connect-pushstate
 *
 * Copyright (c) 2013 Brent Ertz
 * Licensed under the MIT license.
 */

'use strict';

var utils = module.exports;
var path = require('path');
var url = require('url');

// Returns a connect middleware that rewrites the url on http requests without
// a file extension to a custom path or the site root, thus allowing them to be
// handled by a pushstate router
utils.pushState = function(root) {
  root = root || '/';

  return function pushState(req, res, next) {
    var pathname = url.parse(req.url).pathname;
    if (!path.extname(pathname)) {
      req.url = root;
    }
    next();
  };
};
