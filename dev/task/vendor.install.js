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
		"Bootstrap": {
			"pattern": /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			"message": "Yes|No|yes|no|Y|N|y|n",
			"description": "Install Bootstrap UI? [y/n]",
			"required": true
		},
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
		sh.exec("mkdir project/app/extension/bluebird");
		sh.exec("mkdir project/app/shared/service/promise");
		sh.exec("cp -r dev/task/install/extension/bluebird/* project/app/extension/bluebird/");
		sh.exec("cp -r dev/task/install/shared/service/promise/* project/app/shared/service/promise/");
		sh.exec("cd project && npm i --save-dev bluebird && cd ..");
		vendorJS.push("./node_modules/bluebird/js/browser/bluebird.min.js");
	}
	if (input.MomentJS.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing MomentJS...");
		sh.exec("mkdir project/app/extension/moment");
		sh.exec("mkdir project/app/shared/service/date");
		sh.exec("cp -r dev/task/install/extension/moment/* project/app/extension/moment/");
		sh.exec("cp -r dev/task/install/shared/service/date/* project/app/shared/service/date/");
		sh.exec("cd project && npm i --save-dev moment && cd ..");
		sh.exec("cd project && npm i --save-dev angular-moment && cd ..");
		vendorJS.push("./node_modules/moment/min/moment.min.js");
		vendorJS.push("./node_modules/angular-moment/angular-moment.min.js");
	}
	if (input.Lodash.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Lodash...");
		sh.exec("mkdir project/app/extension/lodash");
		sh.exec("mkdir project/app/shared/service/_");
		sh.exec("cp -r dev/task/install/extension/lodash/* project/app/extension/lodash/");
		sh.exec("cp -r dev/task/install/shared/service/_/* project/app/shared/service/_/");
		sh.exec("cd project && npm i --save-dev lodash && cd ..");
		vendorJS.push("./node_modules/lodash/lodash.min.js");
	}
	if (input.AngularTranslate.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Angular Translate...");
		sh.exec("mkdir project/app/extension/angular-translate");
		sh.exec("mkdir project/app/shared/service/locale");
		sh.exec("cp -r dev/task/install/extension/angular-translate/* project/app/extension/angular-translate/");
		sh.exec("cp -r dev/task/install/shared/service/locale/* project/app/shared/service/locale/");
		sh.exec("cd project && npm i --save-dev angular-translate && cd ..");
		vendorJS.push("./node_modules/angular-translate/dist/angular-translate.min.js");
	}
	if (input.Restangular.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Restangular...");
		sh.exec("mkdir project/app/extension/restangular");
		sh.exec("mkdir project/app/shared/service/promise");
		sh.exec("cp -r dev/task/install/extension/restangular/* project/app/extension/restangular/");
		sh.exec("cp -r dev/task/install/shared/service/promise/* project/app/shared/service/promise/");
		sh.exec("cd project && npm i --save-dev restangular && cd ..");
		vendorJS.push("./node_modules/restangular/dist/restangular.min.js");
	}
	if (input.ngFileUpload.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing ngFileUpload...");
		sh.exec("mkdir project/app/extension/ngFileUpload");
		sh.exec("mkdir project/app/shared/service/upload");
		sh.exec("cp -r dev/task/install/extension/ngFileUpload/* project/app/extension/ngFileUpload/");
		sh.exec("cp -r dev/task/install/shared/service/upload/* project/app/shared/service/upload/");
		vendorJS.push("./node_modules/ng-file-upload/dist/ng-file-upload-shim.min.js");
		vendorJS.push("./node_modules/ng-file-upload/dist/ng-file-upload.min.js");
	}
	if (input.Bootstrap.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Bootstrap...");
		sh.exec("mkdir project/app/extension/bootstrap");
		sh.exec("mkdir project/app/shared/service/ui");
		sh.exec("cp -r dev/task/install/extension/bootstrap/* project/app/extension/bootstrap/");
		sh.exec("cp -r dev/task/install/shared/service/ui/* project/app/shared/service/ui/");
		sh.exec("cd project && npm i --save-dev angular-strap && cd ..");
		vendorJS.push("./node_modules/angular-strap/dist/angular-strap.min.js");
		vendorJS.push("./node_modules/angular-strap/dist/angular-strap.tpl.min.js");
		vendorCSS.push("./node_modules/bootstrap/dist/css/bootstrap.min.js");
		vendorCSS.push("./node_modules/bootstrap/dist/css/bootstrap-theme.min.js");
	}
	if (input.MaterialDesign.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Material Design...");
		sh.exec("mkdir project/app/extension/angular-material");
		sh.exec("mkdir project/app/shared/service/ui");
		sh.exec("cp -r dev/task/install/extension/angular-material/* project/app/extension/angular-material/");
		sh.exec("cp -r dev/task/install/shared/service/ui/* project/app/shared/service/ui/");
		sh.exec("cd project && npm i --save-dev angular-material && cd ..");
		vendorJS.push("./node_modules/angular-material/angular-material.min.js");
		vendorCSS.push("./node_modules/angular-material/angular-material.min.css");
	}
	
	sh.exec("rm -rf project/node_modules");
	vendorJS = JSON.stringify(vendorJS);
	vendorCSS = JSON.stringify(vendorJS);
	fs.writeFile(vendorJS, "project/dev/task/asset/source.js.json");
	fs.writeFile(vendorCSS, "project/dev/task/asset/source.js.scss");
});
