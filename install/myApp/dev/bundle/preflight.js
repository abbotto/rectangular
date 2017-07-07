"use strict";

require("dotenv").config();

const sh = require("shelljs");

const preflight = function preflight() {
	sh.exec("rm -rf dist && mkdir dist");
	sh.exec("rm -rf tmp && mkdir tmp");
	
	// GLOBAL SCRIPTS
	require("dev/task/global.js")();

	// IMAGES
	require("dev/task/image.js")();

	// FONTS
	require("dev/task/font.js")();
	
	// SASS
	require("dev/task/sass.js")();

	// ANGULAR SERVICES
	require("dev/task/service.js")();

	// ANGULAR CONSTANTS
	require("dev/task/constant.js")();
	
	// ANGULAR ROUTES
	require("dev/task/route.js")();

	// ANGULAR MODELS
	require("dev/task/model.js")();

	// ANGULAR TEMPLATES
	require("dev/task/template.js")();
};

module.exports = preflight;
