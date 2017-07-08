"use strict";

const fs = require("fs");

// Load environment variables
require("dotenv").config();

let html = fs.readFileSync("app/index.html").toString();

// Inject Livereload
if (process.env.NODE_ENV === "development") {
	html = html.replace(
		"</body>",
		"	<script src=\"http://localhost:35729/livereload.js\"></script>\n	</body>"
	);
}

fs.writeFile("dist/index.html", html);
