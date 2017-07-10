"use strict";

const sh = require("shelljs");

const port = 4444;
const bundle = require("./producer.js");

sh.exec("node producer.js --env --font --index --image --model --route --script --style --template --build");

bundle.dev(
	{
		port,
		root: "dist",
		httpServer: true,
		socketURI: "ws://localhost:" + port
	}
);
