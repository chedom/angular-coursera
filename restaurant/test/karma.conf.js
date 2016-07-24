module.exports = function(config) {
	config.set({
		basePath: './',

		frameworks: ['jasmine'],

		files: [
			'bower_components/angular/angular.js',
			'bower_components/angular-resource/angular-resource.js',
			'bower_components/angular-ui-router/angular-ui-router.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'app/scripts/*.js',
			'test/**/*.js'
		],

		exclude: [
			'test/protractor.conf.js',
			'test/e2e/*.js'
		]
	})
}