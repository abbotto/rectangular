require("dotenv").config();

const args = process.argv.slice(2);
const sh = require("shelljs");
const NODE_ENV = process.env.NODE_ENV;
const isProduction = NODE_ENV === "production";
const uglifyRules = require("./uglify.json");
const deps = require("./deps.json");

// --------------------------------
// Flags
// --------------------------------
args.indexOf("--clean") > -1 && sh.exec("rm -rf dist && mkdir dist && rm -rf tmp && mkdir tmp")
args.indexOf("--env") > -1 && require("./dev/bundle/task/env.js")(".envrc", __dirname)
args.indexOf("--font") > -1 && require("./dev/bundle/task/font.js")(deps.font, __dirname)
args.indexOf("--image") > -1 && require("./dev/bundle/task/image.js")(deps.image, __dirname)
args.indexOf("--model") > -1 && require("./dev/bundle/task/model.js")(deps.model, __dirname)
args.indexOf("--route") > -1 && require("./dev/bundle/task/route.js")(["./app/**/*.route.js"], __dirname)
args.indexOf("--script") > -1 && require("./dev/bundle/task/script.js")(deps.script, __dirname)
args.indexOf("--style") > -1 && require("./dev/bundle/task/style.js")(deps.style, __dirname)
args.indexOf("--template") > -1 && require("./dev/bundle/task/template.js")(deps.template, __dirname)
args.indexOf("--index") > -1 && sh.exec("cp app/index.html dist/")

const {
	BabelPlugin,
	CSSPlugin,
	EnvPlugin,
	FuseBox,
	HTMLPlugin,
	SassPlugin,
	UglifyJSPlugin
} = require("fuse-box");

const plugins = [
	EnvPlugin({
		NODE_ENV: isProduction
			? "production"
			: "development"
	}),
	HTMLPlugin({
		useDefault: true
	}),
	BabelPlugin(),
	SassPlugin({outputStyle: "compressed"}),
	CSSPlugin()
];

isProduction && plugins.push(UglifyJSPlugin(uglifyRules));

const fuse = FuseBox.init({
	homeDir: "./",
	output: "dist/$name.js",
	cache: true,
	plugins
});

const vendor = fuse
	.bundle("vendor")
	.target("browser")
	.instructions("~ app/index.js")
;

const app = fuse
	.bundle("app")
	.target("browser")
	.sourceMaps(NODE_ENV === "development")
	.instructions("!> [app/index.js]")
;

if (args.indexOf("--spec") > -1 || args.indexOf("-s") > -1) {
	require("./dev/bundle/task/spec.js")(deps.spec, __dirname);
	
	fuse
		.bundle("spec")
		.target("browser")
		.instructions("!> tmp/spec.auto.js")
	;
};

if (NODE_ENV === "development") {
	// vendor.hmr().watch();
	// app.watch("app/**");
}

if (args.indexOf("--build") > -1) {
	fuse
		.run()
		.then(()=>{
			if (isProduction) {
				sh.exec("gzip -c -8 " + "dist/legacy.js > dist/legacy.js.gz");
				sh.exec("gzip -c -8 " + "./dist/vendor.js > ./dist/vendor.js.gz");
				sh.exec("gzip -c -8 " + "./dist/app.js > ./dist/app.js.gz");
			}
		})
	;
}

module.exports = fuse;
