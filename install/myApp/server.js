"use strict";

const sh = require("shelljs");

const port = 4444;
const producer = require("./producer.js");

sh.exec("node producer.js --env --font --index --image --model --route --script --style --template --build --watch");

producer.dev(
	{
		port,
		root: "dist",
		httpServer: true,
		socketURI: "ws://localhost:" + port
	}
);
