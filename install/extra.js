"use strict";

const deps = require("./dev/deps.json");
const fs = require("fs");
const prompt = require("prompt");
const sh = require("shelljs");
const vendorCss = deps.style;
const vendorJs = deps.script;

// Message
console.log("\nChoose extra packages to install:\n");

// Start the prompt
prompt.start();

const schema = {
	properties: {
		"Angular Strap": {
			pattern: /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			message: "Yes|No|yes|no|Y|N|y|n",
			description: "Install Angular Strap? [y/n]",
			required: true
		},
		"Angular Material": {
			pattern: /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			message: "Yes|No|yes|no|Y|N|y|n]",
			description: "Install Angular Material? [y/n]",
			required: true
		},
		Lodash: {
			pattern: /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			message: "Yes|No|yes|no|Y|N|y|n]",
			description: "Install Lodash? [y/n]",
			required: true
		},
		ReactJS: {
			pattern: /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			message: "Yes|No|yes|no|Y|N|y|n]",
			description: "Install ReactJS? [y/n]",
			required: true
		},
		Restangular: {
			pattern: /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			message: "Yes|No|yes|no|Y|N|y|n]",
			description: "Install Restangular? [y/n]",
			required: true
		},
		Bluebird: {
			pattern: /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			message: "Yes|No|yes|no|Y|N|y|n]",
			description: "Install Bluebird? [y/n]",
			required: true
		},
		"NG File Upload": {
			pattern: /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			message: "Yes|No|yes|no|Y|N|y|n]",
			description: "Install NG File Upload? [y/n]",
			required: true
		},
		MomentJS: {
			pattern: /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			message: "Yes|No|yes|no|Y|N|y|n]",
			description: "Install MomentJS? [y/n]",
			required: true
		},
		Teleprint: {
			pattern: /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			message: "Yes|No|yes|no|Y|N|y|n]",
			description: "Install Teleprint? [y/n]",
			required: true
		},
		"Angular Translate": {
			pattern: /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			message: "Yes|No|yes|no|Y|N|y|n]",
			description: "Install Angular Translate? [y/n]",
			required: true
		}
	}
};

prompt.get(schema, (err, input) => {
	if (input["Angular Strap"].match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Angular Strap...");
		
		sh.exec("mkdir app/extension/ui/");
		sh.exec("cp -a node_modules/rectangular/install/extra/extension/ui/bootstrap/. app/extension/ui/");
		sh.exec("npm i --save bootstrap angular-strap");
	}
	else {
		delete vendorJs["angular-strap"];
		delete vendorCss.bootstrap;
	}
	
	if (input["Angular Material"].match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Angular Material...");
		
		!fs.existsSync("app/extension/ui") && sh.exec("mkdir app/extension/ui/");
		
		sh.exec("cp -a node_modules/rectangular/install/extra/extension/ui/material-design/. app/extension/ui/");
		sh.exec("npm i --save angular-material");
	}
	else {
		delete vendorJs["angular-material"];
		delete vendorCss["angular-material"];
	}
	
	if (input.Bluebird.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Bluebird...");
		
		sh.exec("mkdir app/extension/promise/");
		sh.exec("cp -a node_modules/rectangular/install/extra/extension/promise/. app/extension/promise/");
		sh.exec("npm i --save bluebird");
	}
	
	if (input.MomentJS.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing MomentJS...");
		
		sh.exec("mkdir app/extension/date/");
		sh.exec("cp -a node_modules/rectangular/install/extra/extension/date/. app/extension/date/");
		sh.exec("npm i --save moment && npm i --save angular-moment");
	}
	else {
		delete vendorJs.moment;
	}
	
	if (input.Lodash.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Lodash...");
		
		sh.exec("mkdir app/extension/_/");
		sh.exec("cp -a node_modules/rectangular/install/extra/extension/_/. app/extension/_/");
		sh.exec("npm i --save lodash");
	}
	else if (input.Restangular.match(/^(?:No|no|N|n)$/)) {
		delete vendorJs.lodash;
	}
	
	if (input.Teleprint.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Teleprint...");
		
		sh.exec("mkdir app/extension/print/");
		sh.exec("cp -a node_modules/rectangular/install/extra/extension/print/. app/extension/print/");
		sh.exec("npm i --save teleprint");
	}
	
	if (input["Angular Translate"].match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Angular Translate...");
		
		sh.exec("mkdir app/extension/locale/");
		sh.exec("cp -a node_modules/rectangular/install/extra/extension/locale/. app/extension/locale/");
		sh.exec("npm i --save angular-translate");
	}
	else {
		delete vendorJs["angular-translate"];
	}

	if (input.ReactJS.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing ReactJS...");
		
		sh.exec("mkdir app/extension/component/");
		sh.exec("cp -a node_modules/rectangular/install/extra/extension/component/. app/extension/component/");
		sh.exec("npm i --save react reat-dom react-jsx");
	}
	else {
		delete vendorJs.react;
	}
	
	if (input.Restangular.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Restangular...");
		
		sh.exec("mkdir app/extension/rest/");
		sh.exec("cp -a node_modules/rectangular/install/extra/extension/rest/. app/extension/rest/");
		sh.exec("npm i --save lodash restangular");
	}
	else {
		delete vendorJs.restangular;
	}
	
	if (input["NG File Upload"].match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing NG File Upload...");
		
		sh.exec("mkdir app/extension/upload/");
		sh.exec("cp -a node_modules/rectangular/install/extra/extension/upload/. app/extension/upload/");
		sh.exec("npm i --save ng-file-upload");
	}
	else {
		delete vendorJs["ng-file-upload"];;
	}
	
	// Update paths
	deps.script = vendorJs;
	deps.style = vendorCss;
	
	fs.writeFile(__dirname + "/dev/deps.json", JSON.stringify(deps));
});
