// Karma configuration
// Generated on Tue Mar 17 2015 08:50:53 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    frameworks: ['mocha','chai','sinon'],

      basePath : './',

      files : [
          'app/libs/angular/angular.js',
          'app/libs/angular-ui-router/release/angular-ui-router.js',
          'app/libs/angular-mocks/angular-mocks.js',
          'app/components/**/*.js',
          'app/guide/**/*.js',
          'app/atom/**/*.js',
          'app/atom/**/*.html',
          'tests/**/*.js'
      ],

      exclude : [
          'tests/e2e-tests/**/*'

      ],


    preprocessors: {
        '**/*.html': ['ng-html2js']
    },
    ngHtml2JsPreprocessor:{
        stripPrefix:'app/'
        //prependPrefix:'app/'
    },

    reporters: ['progress'],


    port: 9876,


    colors: true,

    logLevel: config.LOG_INFO,


    autoWatch: true,


    browsers: ['PhantomJS', 'Chrome'],


    singleRun: false
  });
};
