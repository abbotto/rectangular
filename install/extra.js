"use strict";

const deps = require("./dev/deps.json");
const fs = require("fs");
const prompt = require("prompt");
const sh = require("shellcmd");
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
		D3: {
			pattern: /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			message: "Yes|No|yes|no|Y|N|y|n]",
			description: "Install D3? [y/n]",
			required: true
		},
		Lodash: {
			pattern: /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			message: "Yes|No|yes|no|Y|N|y|n]",
			description: "Install Lodash? [y/n]",
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
		
		sh("mkdir app/extension/ui/");
		sh("cp -a node_modules/rectangular/install/extra/extension/ui/bootstrap/. app/extension/ui/");
		sh("npm i --save bootstrap angular-strap");
	}
	else {
		delete vendorJs["angular-strap"];
		delete vendorCss.bootstrap;
	}
	
	if (input["Angular Material"].match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Angular Material...");
		
		!fs.existsSync("app/extension/ui") && sh("mkdir app/extension/ui/");
		
		sh("cp -a node_modules/rectangular/install/extra/extension/ui/material-design/. app/extension/ui/");
		sh("npm i --save angular-material");
	}
	else {
		delete vendorJs["angular-material"];
		delete vendorCss["angular-material"];
	}
	
	if (input.Bluebird.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Bluebird...");
		
		sh("mkdir app/extension/promise/");
		sh("cp -a node_modules/rectangular/install/extra/extension/promise/. app/extension/promise/");
		sh("npm i --save bluebird");
	}
	
	if (input.MomentJS.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing MomentJS...");
		
		sh("mkdir app/extension/date/");
		sh("cp -a node_modules/rectangular/install/extra/extension/date/. app/extension/date/");
		sh("npm i --save moment && npm i --save angular-moment");
	}
	else {
		delete vendorJs.moment;
	}

	if (input.D3.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Lodash...");
		
		sh("mkdir app/extension/chart/");
		sh("cp -a node_modules/rectangular/install/extra/extension/chart/. app/extension/chart/");
		sh("npm i --save d3");
	}

	if (input.Lodash.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Lodash...");
		
		sh("mkdir app/extension/_/");
		sh("cp -a node_modules/rectangular/install/extra/extension/_/. app/extension/_/");
		sh("npm i --save lodash");
	}
	else if (input.Restangular.match(/^(?:No|no|N|n)$/)) {
		delete vendorJs.lodash;
	}

	if (input.Teleprint.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Teleprint...");
		
		sh("mkdir app/extension/print/");
		sh("cp -a node_modules/rectangular/install/extra/extension/print/. app/extension/print/");
		sh("npm i --save teleprint");
	}

	if (input["Angular Translate"].match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Angular Translate...");
		
		sh("mkdir app/extension/locale/");
		sh("cp -a node_modules/rectangular/install/extra/extension/locale/. app/extension/locale/");
		sh("npm i --save angular-translate");
	}
	else {
		delete vendorJs["angular-translate"];
	}

	if (input.Restangular.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Restangular...");
		
		sh("mkdir app/extension/rest/");
		sh("cp -a node_modules/rectangular/install/extra/extension/rest/. app/extension/rest/");
		sh("npm i --save lodash restangular");
	}
	else {
		delete vendorJs.restangular;
	}

	if (input["NG File Upload"].match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing NG File Upload...");
		
		sh("mkdir app/extension/upload/");
		sh("cp -a node_modules/rectangular/install/extra/extension/upload/. app/extension/upload/");
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
