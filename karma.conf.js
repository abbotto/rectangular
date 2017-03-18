// Karma configuration
module.exports = function karmaConfig(config) {
	let paths = [];
	const vendorJS = require("./dev/task/asset/vendor.js.json");
	const appJS = require("./dev/task/asset/source.js.json");
	const specJS = ["./tmp/spec.js"];

	paths = paths.concat(vendorJS);

	paths.push("node_modules/angular-mocks/angular-mocks.js");
	paths.push("node_modules/bardjs/dist/bard.js");

	paths = paths.concat(appJS);
	paths = paths.concat(specJS);

	config.set({
		// base path that will be used to resolve all patterns (eg. files, exclude)
		"basePath": "",
		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		"frameworks": [
			"mocha",
			"sinon-chai"
		],
		"client": {
			"chai": {
				"includeStack": true
			}
		},
		// list of files / patterns to load in the browser
		"files": paths,
		// list of files to exclude
		"exclude": [],
		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		"preprocessors": {
			"app/client/**/*.js": [
				"babel",
				"coverage"
			]
		},
		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		"coverageReporter": {
			"type": "text-summary",
			"dir": "coverage/"
		},
		"reporters": [
			"progress",
			"coverage"
		],
		// web server port
		"port": 9876,
		// enable / disable colors in the output (reporters and logs)
		"colors": true,
		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		"logLevel": config.LOG_INFO,
		// enable / disable watching file and executing tests whenever any file changes
		"autoWatch": true,
		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		"browsers": ["PhantomJS"],
		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		"singleRun": true,
		// Concurrency level
		// how many browser should be started simultaneous
		"concurrency": Infinity
	});
};
