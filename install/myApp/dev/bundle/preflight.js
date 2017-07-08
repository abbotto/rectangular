"use strict";

require("dotenv").config();

// const rectangular = require("rectangular");
const sh = require("shelljs");

const preflight = function preflight() {
	sh.exec("rm -rf dist && mkdir dist");
	sh.exec("rm -rf tmp && mkdir tmp");
	
	require("../../dev/bundle/task/env.js")(".envrc");
	require("../../dev/bundle/task/font.js")();
	require("../../dev/bundle/task/image.js")();
	require("../../dev/bundle/task/model.js")();
	require("../../dev/bundle/task/route.js")();
	require("../../dev/bundle/task/script.js")();
	require("../../dev/bundle/task/service.js")();
	require("../../dev/bundle/task/style.js")();
	require("../../dev/bundle/task/template.js")();
};

module.exports = preflight;
