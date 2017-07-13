const sh = require("shelljs");
const watch = require("chokidar")
	.watch([
		"app/**/*.*",
		"deps.json",
		"uglify.json"
	],
	{
		ignored: /[\/\\]\./,
		persistent: true
	})
;

module.exports = (fuse, app) => {
	fuse.dev({
		port: 4444,
		root: "dist",
		httpServer: true,
		socketURI: "ws://localhost:4444"
	});
	
	// Hot-module reload
	app.hmr().watch(__dirname + "/app/**");
	
	watch.on("change", (path, stats) => {
		console.log("\"" + path + "\" has been changed...\n");
		
		if (path === "deps.json") sh.exec("node producer.js --env --font --image --script --model --route --template");
		else if (path.indexOf(".html") > -1 || path.indexOf(".jsx") > -1) sh.exec("node producer.js --template");
		else if (path.indexOf(".json") > -1) sh.exec("node producer.js --model");
		else if (path.indexOf(".scss") > -1) sh.exec("node producer.js --style");
		else if (path.indexOf(".route.js") > -1) sh.exec("node producer.js --route");
		else if (path.indexOf(".spec.js") > -1) sh.exec("node producer.js --spec");
		else if (path.indexOf(".js") < 0) sh.exec("node producer.js --env --font --image");
	});
};
