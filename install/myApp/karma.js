// Karma configuration
// npm run test
const files = [
	"./dist/legacy.js",
	"./node_modules/angular-mocks/angular-mocks.js",
	"./dist/vendor.js",
	"./dist/app.js",
	"./dist/spec.js"
];

module.exports = function karmaConfig(config) {
	config.set({
		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: "",
		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: [
			"jasmine"
		],
		client: {
			config: {
				browserConsoleLogOptions: true
			}
		},
		// list of files / patterns to load in the browser
		files,
		// list of files to exclude
		exclude: [],
		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			"app/**/*.js": [
				"coverage"
			]
		},
		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		coverageReporter: {
			type: "text-summary",
			dir: "coverage/"
		},
		reporters: [
			"spec",
			"coverage"
		],
		// web server port
		port: 9876,
		// enable / disable colors in the output (reporters and logs)
		colors: true,
		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,
		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,
		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ["PhantomJS"],
		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,
		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity
	});
};
