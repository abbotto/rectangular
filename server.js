const host = "127.0.0.1";
const port = 8088;
const path = require("path");

const express = exports.express = require("express");
const app = module.exports.app = exports.app = express();
const route = exports.route = express.Router();
const www = __dirname + "/dist";

app.set("view cache", true);
app.use(express.static(www));

// Enable gzip encoding
if (process.env.NODE_ENV === "production") {
	app.use(require("compression")());
}

// This route handles HTML5Mode for AngularJS
// It forwards missing files to index.html
app.all("/*", (req, res) => {
	res.sendFile(path.resolve(www + "/index.html"));
});

const server = app.listen((process.env.PORT || port), function appServer() {
	const host = server.address().address;
	const port = server.address().port;
	// console.log("http://%s:%s", host, port);
});
