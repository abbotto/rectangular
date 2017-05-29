const sh = require("shelljs");

module.exports = function scriptTranspile(files) {
	const n = files.length;
	let i = 0;

	// Prevent minified files from cramming together
	for (; i < n; i += 1) {
		sh.exec("node_modules/babel-cli/bin/babel.js " + files[i] + " --out-file " + files[i]);
	}
};
