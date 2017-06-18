"use strict";

const prompt = require("prompt");
const sh = require("shelljs");
const fs = require("fs");

let vendorJs = require("./../tmp/project/dev/asset/vendor.global.js.json");
let vendorCss = require("./../tmp/project/dev/asset/vendor.scss.json");

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
		
		!fs.exists("tmp/project/app/extension/ui/*")
			? sh.exec("mkdir tmp/project/app/extension/ui")
			: sh.exec("rm -rf tmp/project/app/extension/ui")
		;
		
		sh.exec("mkdir tmp/project/app/extension/ui/");
		sh.exec("cp -a install/extra/extension/ui/bootstrap/. tmp/project/app/extension/ui/");
		sh.exec("cd tmp/project && npm i --save bootstrap angular-strap && cd ..");
	}
	else {
		delete vendorJs["angular-strap"];
		delete vendorCss.bootstrap;
	}
	
	if (input["Angular Material"].match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Angular Material...");
		
		!fs.exists("tmp/project/app/extension/ui")
			? sh.exec("mkdir tmp/project/app/extension/ui")
			: sh.exec("rm -rf tmp/project/app/extension/ui")
		;
		
		sh.exec("mkdir tmp/project/app/extension/ui/");
		sh.exec("cp -a install/extra/extension/ui/material-design/. tmp/project/app/extension/ui/");
		sh.exec("cd tmp/project && npm i --save angular-material && cd ..");
	}
	else {
		delete vendorJs["angular-material"];
		delete vendorCss["angular-material"];
	}
	
	if (input.Bluebird.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Bluebird...");
		
		sh.exec("mkdir tmp/project/app/extension/promise/");
		sh.exec("cp -a install/extra/extension/promise/. tmp/project/app/extension/promise/");
		sh.exec("cd tmp/project && npm i --save bluebird && cd ..");
	}
	
	if (input.MomentJS.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing MomentJS...");
		
		sh.exec("mkdir tmp/project/app/extension/date/");
		sh.exec("cp -a install/extra/extension/date/. tmp/project/app/extension/date/");
		sh.exec("cd tmp/project && npm i --save moment && cd ..");
		sh.exec("cd tmp/project && npm i --save angular-moment && cd ..");
	}
	else {
		delete vendorJs.moment;
	}
	
	if (input.Lodash.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Lodash...");
		
		sh.exec("mkdir tmp/project/app/extension/_/");
		sh.exec("cp -a install/extra/extension/_/. tmp/project/app/extension/_/");
		sh.exec("cd tmp/project && npm i --save lodash && cd ..");
	}
	else if (input.Restangular.match(/^(?:No|no|N|n)$/)) {
		delete vendorJs.lodash;
	}

	if (input.Teleprint.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Teleprint...");
		
		sh.exec("mkdir tmp/project/app/extension/print/");
		sh.exec("cp -a install/extra/extension/print/. tmp/project/app/extension/print/");
		sh.exec("cd tmp/project && npm i --save teleprint && cd ..");
	}
	
	if (input["Angular Translate"].match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Angular Translate...");
		
		sh.exec("mkdir tmp/project/app/extension/locale/");
		sh.exec("cp -a install/extra/extension/locale/. tmp/project/app/extension/locale/");
		sh.exec("cd tmp/project && npm i --save angular-translate && cd ..");
	}
	else {
		delete vendorJs["angular-translate"];
	}
	
	if (input.Restangular.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Restangular...");
		
		sh.exec("mkdir tmp/project/app/extension/rest/");
		sh.exec("cp -a install/extra/extension/rest/. tmp/project/app/extension/rest/");
		sh.exec("cd tmp/project && npm i --save lodash restangular && cd ..");
	}
	else {
		delete vendorJs.restangular;
	}
	
	if (input["NG File Upload"].match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing NG File Upload...");
		
		sh.exec("mkdir tmp/project/app/extension/upload/");
		sh.exec("cp -a install/extra/extension/upload/. tmp/project/app/extension/upload/");
		sh.exec("cd tmp/project && npm i --save ng-file-upload && cd ..");
	}
	else {
		delete vendorJs["ng-file-upload"];;
	}
	
	sh.exec("rm -rf tmp/project/node_modules");
	
	// Update paths to point to the root project directory
	vendorJs = JSON.stringify(vendorJs);
	vendorCss = JSON.stringify(vendorCss);
	
	fs.writeFile("tmp/project/dev/asset/vendor.global.js.json", vendorJs);
	fs.writeFile("tmp/project/dev/asset/vendor.scss.json", vendorCss);
});
