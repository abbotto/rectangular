"use strict";

const fs = require("fs");
const sh = require("shelljs");
const getPath = require("./utility/get.path.js");

// Load environment variables
require("dotenv").config();

let html = fs.readFileSync(getPath() + "/app/index.html").toString();

// Inject Livereload
if (process.env.NODE_ENV === "development") {
	html = html.replace(
		"</body>",
		"	<script src=\"http://localhost:35729/livereload.js\"></script>\n	</body>"
	);
}

fs.writeFile(getPath() + "/dist/index.html", html);
