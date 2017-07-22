const fs = require("fs");
const glob = require("glob-concat");
const showdown = require("showdown");
const markdown = new showdown.Converter();

module.exports = () => {
	const readme = fs
		.readFileSync("doc/api/index.html", "utf8")
		.split("doc/").join("")
		.split(".md").join(".html")
	;
	
	fs.writeFile("doc/api/index.html", readme);
	
	const files = glob.sync(["doc/*.md"]);
	
	let md;
	
	files.forEach((file) => {
		md = markdown.makeHtml(fs.readFileSync(file, "utf8"));
		fs.writeFile(
			file
				.split("doc/").join("doc/api/")
				.split(".md").join(".html")
			, md
		);
	});
};
