"use strict";

const prompt = require("prompt");
const sh = require("shelljs");
const fs = require("fs");
const slice = require("./../build/slice.js");

let vendorJS = require("./../tmp/project/dev/asset/vendor.js.json");
let vendorCSS = require("./../tmp/project/dev/asset/vendor.scss.json");

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
		vendorJS = slice(vendorJS, "./node_modules/angular-strap/dist/angular-strap.min.js");
		vendorJS = slice(vendorJS, "./node_modules/angular-strap/dist/angular-strap.tpl.min.js");
		vendorCSS = slice(vendorCSS, "./node_modules/bootstrap/dist/css/bootstrap.min.css");
		vendorCSS = slice(vendorCSS, "./node_modules/bootstrap/dist/css/bootstrap-theme.min.css");
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
		vendorJS = slice(vendorJS, "./node_modules/angular-material/angular-material.min.js");
		vendorCSS = slice(vendorCSS, "./node_modules/angular-material/angular-material.min.css");
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
		vendorJS = slice(vendorJS, "./node_modules/moment/min/moment.min.js");
		vendorJS = slice(vendorJS, "./node_modules/angular-moment/angular-moment.min.js");
	}
	
	if (input.Lodash.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Lodash...");
		
		sh.exec("mkdir tmp/project/app/extension/_/");
		sh.exec("cp -a install/extra/extension/_/. tmp/project/app/extension/_/");
		sh.exec("cd tmp/project && npm i --save lodash && cd ..");
	}
	else if (input.Restangular.match(/^(?:No|no|N|n)$/)) {
		vendorJS = slice(vendorJS, "./node_modules/lodash/lodash.min.js");
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
		vendorJS = slice(vendorJS, "./node_modules/angular-translate/dist/angular-translate.min.js");
	}
	
	if (input.Restangular.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Restangular...");
		
		sh.exec("mkdir tmp/project/app/extension/rest/");
		sh.exec("cp -a install/extra/extension/rest/. tmp/project/app/extension/rest/");
		sh.exec("cd tmp/project && npm i --save lodash restangular && cd ..");
	}
	else {
		vendorJS = slice(vendorJS, "./node_modules/restangular/dist/restangular.min.js");
	}
	
	if (input["NG File Upload"].match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing NG File Upload...");
		
		sh.exec("mkdir tmp/project/app/extension/upload/");
		sh.exec("cp -a install/extra/extension/upload/. tmp/project/app/extension/upload/");
		sh.exec("cd tmp/project && npm i --save ng-file-upload && cd ..");
	}
	else {
		vendorJS = slice(vendorJS, "./node_modules/ng-file-upload/dist/ng-file-upload-shim.min.js");
		vendorJS = slice(vendorJS, "./node_modules/ng-file-upload/dist/ng-file-upload.min.js");
	}
	
	sh.exec("rm -rf tmp/project/node_modules");
	
	// Update paths to point to the root project directory
	vendorJS = JSON.stringify(vendorJS);
	vendorCSS = JSON.stringify(vendorCSS);
	
	fs.writeFile("tmp/project/dev/asset/vendor.js.json", vendorJS);
	fs.writeFile("tmp/project/dev/asset/vendor.scss.json", vendorCSS);
});
