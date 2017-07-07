"use strict";

const fs = require("fs");
const sh = require("shelljs");

module.exports = function image() {
	const globalVendorFiles = require("dev/asset/global.script.json");
	
	fs.writeFileSync(
		"dist/vendor-global.js",
		require("dev/utility/joinFiles.js")(
			require("dev/utility/parseAssets.js")(
				globalVendorFiles
			)
		), "utf8"
	);
	
	sh.exec("gzip -c -8 " + "dist/vendor-global.js > dist/vendor-global.js.gz");
};
