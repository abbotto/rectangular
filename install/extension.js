"use strict";

const deps = require("./dev/deps.json");
const fs = require("fs");
const prompt = require("prompt");
const sh = require("shellcmd");
const vendorCss = deps.style;
const vendorJs = deps.script;
const pattern = "/^(?:Yes|No|yes|no|Y|N|y|n)$/";
const message = "Yes|No|yes|no|Y|N|y|n";

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

const schema = {properties: extensions};
const yes = "/^(?:Yes|No|yes|no|Y|N|y|n)$/";

prompt.get(schema, (err, input) => {
	if (input["Angular Strap"].match(yes)) {
		console.log("");
		console.log("Installing Angular Strap...");
		
		sh("mkdir app/extension/ui/");
		sh("cp -a node_modules/rectangular/install/extension/ui/bootstrap/. app/extension/ui/");
		sh("npm i --save bootstrap angular-strap");
	}
	else {
		delete vendorJs["angular-strap"];
		delete vendorCss.bootstrap;
	}
	
	if (input["Angular Material"].match(yes)) {
		console.log("");
		console.log("Installing Angular Material...");
		
		!fs.existsSync("app/extension/ui") && sh("mkdir app/extension/ui/");
		
		sh("cp -a node_modules/rectangular/install/extension/ui/material-design/. app/extension/ui/");
		sh("npm i --save angular-material");
	}
	else {
		delete vendorJs["angular-material"];
		delete vendorCss["angular-material"];
	}
	
	if (input.Bluebird.match(yes)) {
		console.log("");
		console.log("Installing Bluebird...");
		
		sh("mkdir app/extension/promise/");
		sh("cp -a node_modules/rectangular/install/extension/promise/. app/extension/promise/");
		sh("npm i --save bluebird");
	}
	
	if (input.MomentJS.match(yes)) {
		console.log("");
		console.log("Installing MomentJS...");
		
		sh("mkdir app/extension/date/");
		sh("cp -a node_modules/rectangular/install/extension/date/. app/extension/date/");
		sh("npm i --save moment && npm i --save angular-moment");
	}
	else {
		delete vendorJs.moment;
	}

	if (input.D3.match(yes)) {
		console.log("");
		console.log("Installing Lodash...");
		
		sh("mkdir app/extension/chart/");
		sh("cp -a node_modules/rectangular/install/extension/chart/. app/extension/chart/");
		sh("npm i --save d3");
	}

	if (input.Lodash.match(yes)) {
		console.log("");
		console.log("Installing Lodash...");
		
		sh("mkdir app/extension/_/");
		sh("cp -a node_modules/rectangular/install/extension/_/. app/extension/_/");
		sh("npm i --save lodash");
	}
	else if (input.Restangular.match(/^(?:No|no|N|n)$/)) {
		delete vendorJs.lodash;
	}

	if (input.Teleprint.match(yes)) {
		console.log("");
		console.log("Installing Teleprint...");
		
		sh("mkdir app/extension/print/");
		sh("cp -a node_modules/rectangular/install/extension/print/. app/extension/print/");
		sh("npm i --save teleprint");
	}

	if (input["Angular Translate"].match(yes)) {
		console.log("");
		console.log("Installing Angular Translate...");
		
		sh("mkdir app/extension/locale/");
		sh("cp -a node_modules/rectangular/install/extension/locale/. app/extension/locale/");
		sh("npm i --save angular-translate");
	}
	else {
		delete vendorJs["angular-translate"];
	}

	if (input.Restangular.match(yes)) {
		console.log("");
		console.log("Installing Restangular...");
		
		sh("mkdir app/extension/rest/");
		sh("cp -a node_modules/rectangular/install/extension/rest/. app/extension/rest/");
		sh("npm i --save lodash restangular");
	}
	else {
		delete vendorJs.restangular;
	}

	if (input.SocketIO.match(yes)) {
		console.log("");
		console.log("Installing SocketIO...");

		sh("mkdir app/extension/upload/");
		sh("cp -a node_modules/rectangular/install/extension/socket/. app/extension/socket/");
		sh("npm i --save socket.io");
	}
	else {
		delete vendorJs["socket.io"];;
	}
	
	if (input["NG File Upload"].match(yes)) {
		console.log("");
		console.log("Installing NG File Upload...");
		
		sh("mkdir app/extension/upload/");
		sh("cp -a node_modules/rectangular/install/extension/upload/. app/extension/upload/");
		sh("npm i --save ng-file-upload");
	}
	else {
		delete vendorJs["ng-file-upload"];;
	}

	// Update paths
	deps.script = vendorJs;
	deps.style = vendorCss;

	fs.writeFile(__dirname + "/dev/deps.json", JSON.stringify(deps));
});
