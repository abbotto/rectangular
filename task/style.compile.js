const sh = require("shelljs");
const finder = require("glob-concat");
const vendorSCSS = finder.sync(require("./asset/vendor.scss.json"));
const appSCSS = finder.sync(require("./asset/source.scss.json"));
const tmpCSS = "tmp/source.scss";
const postCSS = "chmod +x node_modules/postcss/lib/postcss.js && node node_modules/postcss/lib/postcss.js";
const nodeSASS = "node_modules/node-sass/bin/node-sass";
vendorSCSS.push(tmpCSS);

sh.exec("node_modules/stylelint/dist/cli.js src/**/*.scss");
sh.exec("node task/font.copy.js");
sh.exec("node task/image.copy.js");

sh.cat(appSCSS).to(tmpCSS);
sh.exec(nodeSASS + " -q --output-style compressed --include-path " + tmpCSS + " " + tmpCSS);
sh.exec(postCSS + " --use autoprefixer -b 'last 5 versions' < " + tmpCSS);
sh.cat(vendorSCSS).to("dist/app.css");
