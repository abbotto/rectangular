// Todo
// Make sure UI scripts and styles get added to the build process
// Make sure UI dependencies get injected into app.service.js

const prompt = require("prompt");
const sh = require("shelljs");
const fs = require("fs");

let vendorJS = [];
let vendorCSS = [];

// Start the prompt 
prompt.start();

const schema = {
	"properties": {
		// "Bootstrap": {
		// 	"pattern": /^(?:Yes|No|yes|no|Y|N|y|n)$/,
		// 	"message": "Yes|No|yes|no|Y|N|y|n",
		// 	"description": "Install Bootstrap UI? [y/n]",
		// 	"required": true
		// },
		"MaterialDesign": {
			"pattern": /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			"message": "Yes|No|yes|no|Y|N|y|n]",
			"description": "Install Material UI? [y/n]",
			"required": true
		},
		"Lodash": {
			"pattern": /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			"message": "Yes|No|yes|no|Y|N|y|n]",
			"description": "Install Lodash? [y/n]",
			"required": true
		},
		"Restangular": {
			"pattern": /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			"message": "Yes|No|yes|no|Y|N|y|n]",
			"description": "Install Restangular? [y/n]",
			"required": true
		},
		"Bluebird": {
			"pattern": /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			"message": "Yes|No|yes|no|Y|N|y|n]",
			"description": "Install Bluebird? [y/n]",
			"required": true
		},
		"ngFileUpload": {
			"pattern": /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			"message": "Yes|No|yes|no|Y|N|y|n]",
			"description": "Install ngFileUpload? [y/n]",
			"required": true
		},
		"MomentJS": {
			"pattern": /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			"message": "Yes|No|yes|no|Y|N|y|n]",
			"description": "Install MomentJS? [y/n]",
			"required": true
		},
		"AngularTranslate": {
			"pattern": /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			"message": "Yes|No|yes|no|Y|N|y|n]",
			"description": "Install AngularTranslate? [y/n]",
			"required": true
		}
	}
};

prompt.get(schema, (err, input) => {
	if (input.Bluebird.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Bluebird...");
		
		sh.exec("rm -rf project/app/extension/bluebird && mkdir project/app/extension/bluebird");
		sh.exec("rm -rf project/app/shared/service/promise && mkdir project/app/shared/service/promise");
		sh.exec("cp -r dev/task/vendor/extension/bluebird/* project/app/extension/bluebird/");
		sh.exec("cp -r dev/task/vendor/shared/service/promise/* project/app/shared/service/promise/");
		sh.exec("cd project && npm i --save-dev bluebird && cd ..");
		
		vendorJS.push("./node_modules/bluebird/js/browser/bluebird.min.js");
	}
	if (input.MomentJS.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing MomentJS...");
		
		sh.exec("rm -rf project/app/extension/moment && mkdir project/app/extension/moment");
		sh.exec("rm -rf project/app/shared/service/date && mkdir project/app/shared/service/date");
		sh.exec("cp -r dev/task/vendor/extension/moment/* project/app/extension/moment/");
		sh.exec("cp -r dev/task/vendor/shared/service/date/* project/app/shared/service/date/");
		sh.exec("cd project && npm i --save-dev moment && cd ..");
		sh.exec("cd project && npm i --save-dev angular-moment && cd ..");
		
		vendorJS.push("./node_modules/moment/min/moment.min.js");
		vendorJS.push("./node_modules/angular-moment/angular-moment.min.js");
	}
	if (input.Lodash.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Lodash...");
		
		sh.exec("rm -rf project/app/extension/lodash && mkdir project/app/extension/lodash");
		sh.exec("rm -rf project/app/shared/service/_ && mkdir project/app/shared/service/_");
		sh.exec("cp -r dev/task/vendor/extension/lodash/* project/app/extension/lodash/");
		sh.exec("cp -r dev/task/vendor/shared/service/_/* project/app/shared/service/_/");
		sh.exec("cd project && npm i --save-dev lodash && cd ..");
		
		vendorJS.push("./node_modules/lodash/lodash.min.js");
	}
	if (input.AngularTranslate.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Angular Translate...");
		
		sh.exec("rm -rf project/app/extension/angular-translate && mkdir project/app/extension/angular-translate");
		sh.exec("rm -rf project/app/shared/service/locale && mkdir project/app/shared/service/locale");
		sh.exec("cp -r dev/task/vendor/extension/angular-translate/* project/app/extension/angular-translate/");
		sh.exec("cp -r dev/task/vendor/shared/service/locale/* project/app/shared/service/locale/");
		sh.exec("cd project && npm i --save-dev angular-translate && cd ..");
		
		vendorJS.push("./node_modules/angular-translate/dist/angular-translate.min.js");
	}
	if (input.Restangular.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Restangular...");
		
		sh.exec("rm -rf project/app/extension/restangular && mkdir project/app/extension/restangular");
		sh.exec("rm -rf project/app/shared/service/promise && mkdir project/app/shared/service/promise");
		sh.exec("cp -r dev/task/vendor/extension/restangular/* project/app/extension/restangular/");
		sh.exec("cp -r dev/task/vendor/shared/service/promise/* project/app/shared/service/promise/");
		sh.exec("cd project && npm i --save-dev restangular && cd ..");
		
		vendorJS.push("./node_modules/restangular/dist/restangular.min.js");
	}
	// if (input.Bootstrap.match(/^(?:Yes|yes|Y|y)$/)) {
	// 	console.log("");
	// 	console.log("Installing Bootstrap...");
		
	// 	!fs.exists("project/app/shared/service/ui/*")
	// 		? sh.exec("mkdir project/app/shared/service/ui")
	// 		: sh.exec("rm -rf project/app/shared/service/ui")
	// 	;
		
	// 	sh.exec("rm -rf project/app/extension/ng-strap && mkdir project/app/extension/ng-strap");
	// 	sh.exec("cp -r dev/task/vendor/extension/ng-strap/* project/app/extension/ng-strap/");
	// 	sh.exec("cp -r dev/task/vendor/shared/service/ui/bootstrap/* project/app/shared/service/ui/");
	// 	sh.exec("cd project && npm i --save-dev angular-strap && cd ..");
		
	// 	vendorJS.push("./node_modules/angular-strap/dist/angular-strap.min.js");
	// 	vendorJS.push("./node_modules/angular-strap/dist/angular-strap.tpl.min.js");
		
	// 	vendorCSS.push("./node_modules/bootstrap/dist/css/bootstrap.min.css");
	// 	vendorCSS.push("./node_modules/bootstrap/dist/css/bootstrap-theme.min.css");
	// }
	if (input.MaterialDesign.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Material Design...");
		
		!fs.exists("project/app/shared/service/ui")
			? sh.exec("mkdir project/app/shared/service/ui")
			: sh.exec("rm -rf project/app/shared/service/ui")
		;
		
		sh.exec("mkdir project/app/extension/angular-material");
		sh.exec("cp -r dev/task/vendor/extension/angular-material/* project/app/extension/angular-material/");
		sh.exec("cp -r dev/task/vendor/shared/service/ui/material-design/* project/app/shared/service/ui/");
		sh.exec("cd project && npm i --save-dev angular-material && cd ..");
		
		vendorJS.push("./node_modules/angular-material/angular-material.min.js");
		vendorCSS.push("./node_modules/angular-material/angular-material.min.css");
	}
	if (input.ngFileUpload.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Angular File Upload...");
		
		sh.exec("rm -rf project/app/extension/ng-file-upload && mkdir project/app/extension/ng-file-upload");
		sh.exec("rm -rf project/app/shared/service/upload && mkdir project/app/shared/service/upload");
		sh.exec("cp -r dev/task/vendor/extension/ng-file-upload/* project/app/extension/ng-file-upload/");
		sh.exec("cp -r dev/task/vendor/shared/service/upload/* project/app/shared/service/upload/");
		
		vendorJS.push("./node_modules/ng-file-upload/dist/ng-file-upload-shim.min.js");
		vendorJS.push("./node_modules/ng-file-upload/dist/ng-file-upload.min.js");
	}
	
	sh.exec("rm -rf project/node_modules");
	
	vendorJS = JSON.stringify(vendorJS);
	vendorCSS = JSON.stringify(vendorCSS);
	
	fs.writeFile("project/dev/task/asset/vendor.js.json", vendorJS);
	fs.writeFile("project/dev/task/asset/vendor.scss.json", vendorCSS);
});
