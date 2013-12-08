/*
 * connect-pushstate
 * https://github.com/brent/connect-pushstate
 *
 * Copyright (c) 2013 Brent Ertz
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  // Project configuration
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        'lib/*.js',
        '<%= mochaTest.test.src %>'
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*_test.js']
      }
    }
  });

  // These plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');

  // Run the tests
  grunt.registerTask('test', ['mochaTest']);

  // By default, lint and run all tests
  grunt.registerTask('default', ['jshint', 'test']);
};
