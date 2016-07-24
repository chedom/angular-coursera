module.exports = function(config) {
	config.set({
		basePath: '../',

		frameworks: ['jasmine'],

		files: [
			'bower_components/angular/angular.js',
			'bower_components/angular-resource/angular-resource.js',
			'bower_components/angular-ui-router/release/angular-ui-router.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'app/scripts/*.js',
			'test/**/*.js'
		],

		exclude: [
			'test/protractor.conf.js',
			'test/e2e/*.js'
		],

		preprocessors: {},

		reporters: ['progress'],

		port: 9000,

		colors: true,
		logLevel: config.LOG_INFO,

		autoWatch: true,

		 // start these browsers
	    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
	     browsers: ['Chrome','PhantomJS', 'PhantomJS_custom'],

	    // you can define custom flags
	    customLaunchers: {
	      'PhantomJS_custom': {
	        base: 'PhantomJS',
	        options: {
	          windowName: 'my-window',
	          settings: {
	            webSecurityEnabled: false
	          },
	        },
	        flags: ['--load-images=true'],
	        debug: true
	      }
	    },

	    phantomjsLauncher: {
	      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
	      exitOnResourceError: true
	    },

	    // Continuous Integration mode
	    // if true, Karma captures browsers, runs the tests and exits
	    singleRun: false,

	    // Concurrency level
	    // how many browser should be started simultaneous
	    concurrency: Infinity



	})
}