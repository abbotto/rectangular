"use strict";

const deps = require("./dev/deps.json");
const fs = require("fs");
const prompt = require("prompt");
const sh = require("shellcmd");
const vendorCss = deps.style;
const vendorJs = deps.script;
const pattern = /^(?:Yes|No|yes|no|Y|N|y|n)$/;
const message = "Yes|No|yes|no|Y|N|y|n";
const yes = /^(?:Yes|yes|Y|y)$/;

const extensions = {
	"Angular Strap": {
		description: "Install Angular Strap? [y/n]",
		message,
		pattern,
		required: true
	},
	"Angular Material": {
		description: "Install Angular Material? [y/n]",
		message,
		pattern,
		required: true
	},
	D3: {
		description: "Install D3? [y/n]",
		message,
		pattern,
		required: true
	},
	Lodash: {
		description: "Install Lodash? [y/n]",
		message,
		pattern,
		required: true
	},
	Restangular: {
		description: "Install Restangular? [y/n]",
		message,
		pattern,
		required: true
	},
	Bluebird: {
		description: "Install Bluebird? [y/n]",
		message,
		pattern,
		required: true
	},
	"NG File Upload": {
		description: "Install NG File Upload? [y/n]",
		message,
		pattern,
		required: true
	},
	MomentJS: {
		description: "Install MomentJS? [y/n]",
		message,
		pattern,
		required: true
	},
	SocketIO: {
		description: "Install SocketIO? [y/n]",
		message,
		pattern,
		required: true
	},
	Teleprint: {
		description: "Install Teleprint? [y/n]",
		message,
		pattern,
		required: true
	},
	"Angular Translate": {
		description: "Install Angular Translate? [y/n]",
		message,
		pattern,
		required: true
	}
};

console.log("\nChoose extra packages to install:\n");
prompt.start();

const schema = { properties: extensions };
sh("cd tmp && git clone https://github.com/abbotto/rectangular.git")

prompt.get(schema, (err, input) => {
	if (input["Angular Strap"].match(yes)) {
		console.log("");
		console.log("Installing Angular Strap...");

		sh(
			"mkdir app/extension/ui/",
			"cp -a tmp/rectangular/install/extension/ui/bootstrap/. app/extension/ui/",
			"npm i --save bootstrap angular-strap"
		);
	}
	else {
		delete vendorJs["angular-strap"];
		delete vendorCss.bootstrap;
	}

	if (input["Angular Material"].match(yes)) {
		console.log("");
		console.log("Installing Angular Material...");

		!fs.existsSync("app/extension/ui") && sh("mkdir app/extension/ui/");

		sh(
			"cp -a tmp/rectangular/install/extension/ui/material-design/. app/extension/ui/",
			"npm i --save angular-material"
		);
	}
	else {
		delete vendorJs["angular-material"];
		delete vendorCss["angular-material"];
	}

	if (input.Bluebird.match(yes)) {
		console.log("");
		console.log("Installing Bluebird...");

		sh(
			"mkdir app/extension/promise/",
			"cp -a tmp/rectangular/install/extension/promise/. app/extension/promise/",
			"npm i --save bluebird"
		);
	}

	if (input.MomentJS.match(yes)) {
		console.log("");
		console.log("Installing MomentJS...");

		sh(
			"mkdir app/extension/date/",
			"cp -a tmp/rectangular/install/extension/date/. app/extension/date/",
			"npm i --save moment && npm i --save angular-moment"
		);
	}
	else {
		delete vendorJs.moment;
	}

	if (input.D3.match(yes)) {
		console.log("");
		console.log("Installing D3...");

		sh(
			"mkdir app/extension/chart/",
			"cp -a tmp/rectangular/install/extension/chart/. app/extension/chart/",
			"npm i --save d3"
		);
	}

	if (input.Lodash.match(yes)) {
		console.log("");
		console.log("Installing Lodash...");

		sh(
			"mkdir app/extension/_/",
			"cp -a tmp/rectangular/install/extension/_/. app/extension/_/",
			"npm i --save lodash"
		);
	}
	else if (input.Restangular.match(/^(?:No|no|N|n)$/)) {
		delete vendorJs.lodash;
	}

	if (input.Teleprint.match(yes)) {
		console.log("");
		console.log("Installing Teleprint...");

		sh(
			"mkdir app/extension/print/",
			"cp -a tmp/rectangular/install/extension/print/. app/extension/print/",
			"npm i --save teleprint"
		);
	}

	if (input["Angular Translate"].match(yes)) {
		console.log("");
		console.log("Installing Angular Translate...");

		sh(
			"mkdir app/extension/locale/",
			"cp -a tmp/rectangular/install/extension/locale/. app/extension/locale/",
			"npm i --save angular-translate"
		);
	}
	else {
		delete vendorJs["angular-translate"];
	}

	if (input.Restangular.match(yes)) {
		console.log("");
		console.log("Installing Restangular...");

		sh(
			"mkdir app/extension/rest/",
			"cp -a tmp/rectangular/install/extension/rest/. app/extension/rest/",
			"npm i --save lodash restangular"
		);
	}
	else {
		delete vendorJs.restangular;
	}

	if (input.SocketIO.match(yes)) {
		console.log("");
		console.log("Installing SocketIO...");

		sh(
			"mkdir app/extension/upload/",
			"cp -a tmp/rectangular/install/extension/socket/. app/extension/socket/",
			"npm i --save socket.io-client"
		);
	}

	if (input["NG File Upload"].match(yes)) {
		console.log("");
		console.log("Installing NG File Upload...");

		sh(
			"mkdir app/extension/upload/",
			"cp -a tmp/rectangular/install/extension/upload/. app/extension/upload/",
			"npm i --save ng-file-upload"
		);
	}
	else {
		delete vendorJs["ng-file-upload"];;
	}

	deps.script = vendorJs;
	deps.style = vendorCss;

	fs.writeFile(__dirname + "/dev/deps.json", JSON.stringify(deps));
});
