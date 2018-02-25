"use strict";

const deps = require("./dev/deps.json");
const fs = require("fs");
const sh = require("shellcmd");
const vendorCss = deps.style;
const vendorJs = deps.script;
const prompt = require("yesno");

prompt.options.yes = ["Y", "Yes", "y", "yes"];
prompt.options.no = ["N", "No", "n", "no"];

// Message
console.log("\nChoose extra packages to install:\n");

const msg = {
	"Angular Material": "Install Angular Material? [y/n]",
	"Angular Strap": "Install Angular Strap? [y/n]",
	"Angular Translate": "Install Angular Translate? [y/n]",
	"NG File Upload": "Install NG File Upload? [y/n]",
	Bluebird: "Install Bluebird? [y/n]",
	D3: "Install D3? [y/n]",
	Lodash: "Install Lodash? [y/n]",
	MomentJS: "Install MomentJS? [y/n]",
	Restangular: "Install Restangular? [y/n]",
	SocketIO: "Install SocketIO? [y/n]",
	Teleprint: "Install Teleprint? [y/n]"
};

prompt.ask(msg["Angular Strap"], true, (ok) => {
	if (ok) {
		console.log("");
		console.log("Installing Angular Strap...");

		sh("mkdir app/extension/ui/");
		sh("cp -a node_modules/rectangular/install/extra/extension/ui/bootstrap/. app/extension/ui/");
		sh("npm i --save bootstrap angular-strap");
	}
	else {
		delete vendorJs["angular-strap"];
		delete vendorCss.bootstrap;
	}
});

prompt.ask(msg.Bluebird, true, (ok) => {
	if (ok) {
		console.log("");
		console.log("Installing Bluebird...");

		sh("mkdir app/extension/promise/");
		sh("cp -a node_modules/rectangular/install/extra/extension/promise/. app/extension/promise/");
		sh("npm i --save bluebird");
	}
});

prompt.ask(msg.MomentJS, true, (ok) => {
	if (ok) {
		console.log("");
		console.log("Installing MomentJS...");

		sh("mkdir app/extension/date/");
		sh("cp -a node_modules/rectangular/install/extra/extension/date/. app/extension/date/");
		sh("npm i --save moment && npm i --save angular-moment");
	}
	else {
		delete vendorJs.moment;
	}
});

prompt.ask(msg.D3, true, (ok) => {
	if (ok) {
		console.log("");
		console.log("Installing D3...");

		sh("mkdir app/extension/chart/");
		sh("cp -a node_modules/rectangular/install/extra/extension/chart/. app/extension/chart/");
		sh("npm i --save d3");
	}
});

prompt.ask(msg.Lodash, true, (ok) => {
	if (ok) {
		console.log("");
		console.log("Installing Lodash...");

		sh("mkdir app/extension/_/");
		sh("cp -a node_modules/rectangular/install/extra/extension/_/. app/extension/_/");
		sh("npm i --save lodash");
	}
	else if (input.Restangular.match(/^(?:No|no|N|n)$/)) {
		delete vendorJs.lodash;
	}
});

prompt.ask(msg.D3, true, (ok) => {
	if (ok) {
		console.log("");
		console.log("Installing Teleprint...");

		sh("mkdir app/extension/print/");
		sh("cp -a node_modules/rectangular/install/extra/extension/print/. app/extension/print/");
		sh("npm i --save teleprint");
	}
});

prompt.ask(msg["Angular Translate"], true, (ok) => {
	if (ok) {
		console.log("");
		console.log("Installing Angular Translate...");

		sh("mkdir app/extension/locale/");
		sh("cp -a node_modules/rectangular/install/extra/extension/locale/. app/extension/locale/");
		sh("npm i --save angular-translate");
	}
	else {
		delete vendorJs["angular-translate"];
	}
});

prompt.ask(msg.Restangular, true, (ok) => {
	if (ok) {
		console.log("");
		console.log("Installing Restangular...");

		sh("mkdir app/extension/rest/");
		sh("cp -a node_modules/rectangular/install/extra/extension/rest/. app/extension/rest/");
		sh("npm i --save lodash restangular");
	}
	else {
		delete vendorJs.restangular;
	}
});

prompt.ask(msg.SocketIO, true, (ok) => {
	if (ok) {
		console.log("");
		console.log("Installing SocketIO...");

		sh("mkdir app/extension/upload/");
		sh("cp -a node_modules/rectangular/install/extra/extension/socket/. app/extension/socket/");
		sh("npm i --save socket.io");
	}
	else {
		delete vendorJs["socket.io"];;
	}
});

prompt.ask(msg["NG File Upload"], true, (ok) => {
	if (input.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing NG File Upload...");

		sh("mkdir app/extension/upload/");
		sh("cp -a node_modules/rectangular/install/extra/extension/upload/. app/extension/upload/");
		sh("npm i --save ng-file-upload");
	}
	else {
		delete vendorJs["ng-file-upload"];;
	}
});

// Update paths
deps.script = vendorJs;
deps.style = vendorCss;

fs.writeFile(__dirname + "/dev/deps.json", JSON.stringify(deps));
