/* eslint-disable impliedStrict */

const sh = require("shelljs");
const getPath = require("./get.path.js");

sh.exec(". ~/.nvm/nvm.sh && nvm use && npm i");
sh.exec("node " + getPath() + "/node_modules/rectangular/build/reset.js");
sh.exec("node " + getPath() + "/node_modules/rectangular/build/app.intro.js");
sh.exec("node " + getPath() + "/node_modules/rectangular/build/script.compile.js");
sh.exec("node " + getPath() + "/node_modules/rectangular/build/html.compile.js");
sh.exec("node " + getPath() + "/node_modules/rectangular/build/style.compile.js");
sh.exec("rm -rf " + getPath() + "/dist && mv dist " + getPath());
