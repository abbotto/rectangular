"use strict";

const prompt = require("prompt");
const sh = require("shelljs");
const fs = require("fs");
const slice = require("./../dev/task/slice.js");

let vendorJS = require("./project/dev/asset/vendor.js.json");
let vendorCSS = require("./project/dev/asset/vendor.scss.json");

// Start the prompt 
prompt.start();

const schema = {
	"properties": {
		"Extras": {
			"pattern": /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			"message": "Yes|No|yes|no|Y|N|y|n",
			"description": "Choose extra packages to install? [y/n]",
			"required": true
		},
		"Bootstrap": {
			"pattern": /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			"message": "Yes|No|yes|no|Y|N|y|n",
			"description": "Install Bootstrap? [y/n]",
			"required": true
		},
		"Material Design": {
			"pattern": /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			"message": "Yes|No|yes|no|Y|N|y|n]",
			"description": "Install Material Design? [y/n]",
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
		"NG File Upload": {
			"pattern": /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			"message": "Yes|No|yes|no|Y|N|y|n]",
			"description": "Install NG File Upload? [y/n]",
			"required": true
		},
		"MomentJS": {
			"pattern": /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			"message": "Yes|No|yes|no|Y|N|y|n]",
			"description": "Install MomentJS? [y/n]",
			"required": true
		},
		"Angular Translate": {
			"pattern": /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			"message": "Yes|No|yes|no|Y|N|y|n]",
			"description": "Install AngularTranslate? [y/n]",
			"required": true
		}
	}
};

prompt.get(schema, (err, input) => {
	
	if (!input.Extras.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Skipping extras...");
		process.exit();
	}
	
	if (input.Bootstrap.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Bootstrap...");
		
		!fs.exists("install/project/app/shared/service/ui/*")
			? sh.exec("mkdir install/project/app/shared/service/ui")
			: sh.exec("rm -rf install/project/app/shared/service/ui")
		;
		
		sh.exec("rm -rf install/project/app/extension/ng-strap && mkdir install/project/app/extension/ng-strap");
		sh.exec("cp -r install/extra/extension/ng-strap/* install/project/app/extension/ng-strap/");
		sh.exec("cp -r install/extra/shared/service/ui/bootstrap/* install/project/app/shared/service/ui/");
		sh.exec("cd install/project && npm i --save bootstrap angular-strap && cd ..");
	}
	else {
		vendorJS = slice(vendorJS, "./node_modules/angular-strap/dist/angular-strap.min.js");
		vendorJS = slice(vendorJS, "./node_modules/angular-strap/dist/angular-strap.tpl.min.js");
		vendorCSS = slice(vendorCSS, "./node_modules/bootstrap/dist/css/bootstrap.min.css");
		vendorCSS = slice(vendorCSS, "./node_modules/bootstrap/dist/css/bootstrap-theme.min.css");
	}
	
	if (input["Material Design"].match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Material Design...");
		
		!fs.exists("install/project/app/shared/service/ui")
			? sh.exec("mkdir install/project/app/shared/service/ui")
			: sh.exec("rm -rf install/project/app/shared/service/ui")
		;
		
		sh.exec("mkdir install/project/app/extension/angular-material");
		sh.exec("cp -r install/extra/extension/angular-material/* install/project/app/extension/angular-material/");
		sh.exec("cp -r install/extra/shared/service/ui/material-design/* install/project/app/shared/service/ui/");
		sh.exec("cd install/project && npm i --save angular-material && cd ..");
	}
	else {
		vendorJS = slice(vendorJS, "./node_modules/angular-material/angular-material.min.js");
		vendorCSS = slice(vendorCSS, "./node_modules/angular-material/angular-material.min.css");
	}
	
	if (input.Bluebird.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Bluebird...");
		
		sh.exec("rm -rf install/project/app/extension/bluebird && mkdir install/project/app/extension/bluebird");
		sh.exec("rm -rf install/project/app/shared/service/promise && mkdir install/project/app/shared/service/promise");
		sh.exec("cp -r install/extra/extension/bluebird/* install/project/app/extension/bluebird/");
		sh.exec("cp -r install/extra/shared/service/promise/* install/project/app/shared/service/promise/");
		sh.exec("cd install/project && npm i --save bluebird && cd ..");
	}
	else {
		vendorJS = slice(vendorJS, "./node_modules/bluebird/js/browser/bluebird.min.js");
	}
	
	if (input.MomentJS.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing MomentJS...");
		
		sh.exec("rm -rf install/project/app/extension/moment && mkdir install/project/app/extension/moment");
		sh.exec("rm -rf install/project/app/shared/service/date && mkdir install/project/app/shared/service/date");
		sh.exec("cp -r install/extra/extension/moment/* install/project/app/extension/moment/");
		sh.exec("cp -r install/extra/shared/service/date/* install/project/app/shared/service/date/");
		sh.exec("cd install/project && npm i --save moment && cd ..");
		sh.exec("cd install/project && npm i --save angular-moment && cd ..");
	}
	else {
		vendorJS = slice(vendorJS, "./node_modules/moment/min/moment.min.js");
		vendorJS = slice(vendorJS, "./node_modules/angular-moment/angular-moment.min.js");
	}
	
	if (input.Lodash.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Lodash...");
		
		sh.exec("rm -rf install/project/app/extension/lodash && mkdir install/project/app/extension/lodash");
		sh.exec("rm -rf install/project/app/shared/service/_ && mkdir install/project/app/shared/service/_");
		sh.exec("cp -r install/extra/extension/lodash/* install/project/app/extension/lodash/");
		sh.exec("cp -r install/extra/shared/service/_/* install/project/app/shared/service/_/");
		sh.exec("cd install/project && npm i --save lodash && cd ..");
	}
	else {
		vendorJS = slice(vendorJS, "./node_modules/lodash/lodash.min.js");
	}
	
	if (input["Angular Translate"].match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Angular Translate...");
		
		sh.exec("rm -rf install/project/app/extension/angular-translate && mkdir install/project/app/extension/angular-translate");
		sh.exec("rm -rf install/project/app/shared/service/locale && mkdir install/project/app/shared/service/locale");
		sh.exec("cp -r install/extra/extension/angular-translate/* install/project/app/extension/angular-translate/");
		sh.exec("cp -r install/extra/shared/service/locale/* install/project/app/shared/service/locale/");
		sh.exec("cd install/project && npm i --save angular-translate && cd ..");
	}
	else {
		vendorJS = slice(vendorJS, "./node_modules/angular-translate/dist/angular-translate.min.js");	
	}
	
	if (input.Restangular.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Restangular...");
		
		sh.exec("rm -rf install/project/app/extension/restangular && mkdir install/project/app/extension/restangular");
		sh.exec("rm -rf install/project/app/shared/service/promise && mkdir install/project/app/shared/service/promise");
		sh.exec("cp -r install/extra/extension/restangular/* install/project/app/extension/restangular/");
		sh.exec("cp -r install/extra/shared/service/promise/* install/project/app/shared/service/promise/");
		sh.exec("cd install/project && npm i --save restangular && cd ..");
	}
	else {
		vendorJS = slice(vendorJS, "./node_modules/restangular/dist/restangular.min.js");
	}
	
	if (input["NG File Upload"].match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing NG File Upload...");
		
		sh.exec("rm -rf install/project/app/extension/ng-file-upload && mkdir install/project/app/extension/ng-file-upload");
		sh.exec("rm -rf install/project/app/shared/service/upload && mkdir install/project/app/shared/service/upload");
		sh.exec("cp -r install/extra/extension/ng-file-upload/* install/project/app/extension/ng-file-upload/");
		sh.exec("cp -r install/extra/shared/service/upload/* install/project/app/shared/service/upload/");
		sh.exec("cd install/project && npm i --save ng-file-upload && cd ..");
	}
	else {
		vendorJS = slice(vendorJS, "./node_modules/ng-file-upload/dist/ng-file-upload-shim.min.js");
		vendorJS = slice(vendorJS, "./node_modules/ng-file-upload/dist/ng-file-upload.min.js");
	}

	sh.exec("rm -rf install/project/node_modules");
	
	// Update paths to point to the root project directory
	vendorJS = JSON.stringify(vendorJS);
	vendorCSS = JSON.stringify(vendorCSS);
	
	fs.writeFile("install/project/dev/asset/vendor.js.json", vendorJS);
	fs.writeFile("install/project/dev/asset/vendor.scss.json", vendorCSS);
});
