# connect-pushstate

> Connect middleware that rewrites select requests to the site/custom root, thus allowing your pushstate router to handle them.
>
> Requests including a file extension are left untouched so site assets like your images, stylesheets, and JavaScripts will load unaffected, while requests without a file extension, presumably pages or actions within your site, are rewritten to point at the root, with the original URL intact.
>
> This functionality is commonly needed by single page webapps such as those developed using frameworks such as Backbone, Ember, Angular, etc.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install connect-pushstate --save
```

### Overview

Load the middleware by adding the following line of JavaScript.

```js
var pushState = require('connect-pushstate/lib/pushstate').pushState;
```

Add the pushState() middleware call to your server definition, amongst your other middleware. You can customize the root path by passing it in as a parameter.  eg) `pushState('/somewhere/')`  Note that connect.static is needed as well in order to actually serve your files.

```js
var connect = require('connect'),
	pushState = require('connect-pushstate/lib/pushstate').pushState
	port = process.env.PORT || 3000

var app = connect()
  .use(connect.logger('dev'))
  .use(pushState())
  .use(connect.static('www/'))
  .listen(port, function() {
    console.log('Application server stated on port', port);
  });
```

For a quick demo, see the examples directory, or run the test suite.

```shell
# Examples
cd examples
node server.js

# Run Tests
grunt
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
- 0.1.0 Initial release
