"use strict";

const fs = require("fs");
const sh = require("shelljs");

// Load environment variables
require("dotenv").config();

// Inject Livereload
if (process.env.NODE_ENV === "development") {
	let html = fs.readFileSync("./../../dev/app/app.index.html").toString();
	html = html.replace(
		"</body>",
		"	<script src=\"http://localhost:35729/livereload.js\"></script>\n	</body>"
	);
	fs.writeFile("./dist/index.html", html);
}
