"use strict";

const prompt = require("prompt");
const sh = require("shelljs");
const fs = require("fs");
const slice = require("./../dev/task/slice.js");

let vendorJS = require("./../tmp/project/dev/asset/vendor.js.json");
let vendorCSS = require("./../tmp/project/dev/asset/vendor.scss.json");

// Message
console.log("\nChoose extra packages to install:\n");

// Start the prompt 
prompt.start();

const schema = {
	"properties": {
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
	if (input.Bootstrap.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Bootstrap...");
		
		!fs.exists("tmp/project/app/shared/service/ui/*")
			? sh.exec("mkdir tmp/project/app/shared/service/ui")
			: sh.exec("rm -rf tmp/project/app/shared/service/ui")
		;
		
		sh.exec("rm -rf tmp/project/app/extension/ng-strap && mkdir tmp/project/app/extension/ng-strap");
		sh.exec("cp -r install/extra/extension/ng-strap/* tmp/project/app/extension/ng-strap/");
		sh.exec("cp -r install/extra/shared/service/ui/bootstrap/* tmp/project/app/shared/service/ui/");
		sh.exec("cd tmp/project && npm i --save bootstrap angular-strap && cd ..");
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
		
		!fs.exists("tmp/project/app/shared/service/ui")
			? sh.exec("mkdir tmp/project/app/shared/service/ui")
			: sh.exec("rm -rf tmp/project/app/shared/service/ui")
		;
		
		sh.exec("mkdir tmp/project/app/extension/angular-material");
		sh.exec("cp -r install/extra/extension/angular-material/* tmp/project/app/extension/angular-material/");
		sh.exec("cp -r install/extra/shared/service/ui/material-design/* tmp/project/app/shared/service/ui/");
		sh.exec("cd tmp/project && npm i --save angular-material && cd ..");
	}
	else {
		vendorJS = slice(vendorJS, "./node_modules/angular-material/angular-material.min.js");
		vendorCSS = slice(vendorCSS, "./node_modules/angular-material/angular-material.min.css");
	}
	
	if (input.Bluebird.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Bluebird...");
		
		sh.exec("rm -rf tmp/project/app/extension/bluebird && mkdir tmp/project/app/extension/bluebird");
		sh.exec("rm -rf tmp/project/app/shared/service/promise && mkdir tmp/project/app/shared/service/promise");
		sh.exec("cp -r install/extra/extension/bluebird/* tmp/project/app/extension/bluebird/");
		sh.exec("cp -r install/extra/shared/service/promise/* tmp/project/app/shared/service/promise/");
		sh.exec("cd tmp/project && npm i --save bluebird && cd ..");
	}
	else {
		vendorJS = slice(vendorJS, "./node_modules/bluebird/js/browser/bluebird.min.js");
	}
	
	if (input.MomentJS.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing MomentJS...");
		
		sh.exec("rm -rf tmp/project/app/extension/moment && mkdir tmp/project/app/extension/moment");
		sh.exec("rm -rf tmp/project/app/shared/service/date && mkdir tmp/project/app/shared/service/date");
		sh.exec("cp -r install/extra/extension/moment/* tmp/project/app/extension/moment/");
		sh.exec("cp -r install/extra/shared/service/date/* tmp/project/app/shared/service/date/");
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
		
		sh.exec("rm -rf tmp/project/app/extension/lodash && mkdir tmp/project/app/extension/lodash");
		sh.exec("rm -rf tmp/project/app/shared/service/_ && mkdir tmp/project/app/shared/service/_");
		sh.exec("cp -r install/extra/extension/lodash/* tmp/project/app/extension/lodash/");
		sh.exec("cp -r install/extra/shared/service/_/* tmp/project/app/shared/service/_/");
		sh.exec("cd tmp/project && npm i --save lodash && cd ..");
	}
	else {
		vendorJS = slice(vendorJS, "./node_modules/lodash/lodash.min.js");
	}
	
	if (input["Angular Translate"].match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Angular Translate...");
		
		sh.exec("rm -rf tmp/project/app/extension/angular-translate && mkdir tmp/project/app/extension/angular-translate");
		sh.exec("rm -rf tmp/project/app/shared/service/locale && mkdir tmp/project/app/shared/service/locale");
		sh.exec("cp -r install/extra/extension/angular-translate/* tmp/project/app/extension/angular-translate/");
		sh.exec("cp -r install/extra/shared/service/locale/* tmp/project/app/shared/service/locale/");
		sh.exec("cd tmp/project && npm i --save angular-translate && cd ..");
	}
	else {
		vendorJS = slice(vendorJS, "./node_modules/angular-translate/dist/angular-translate.min.js");	
	}
	
	if (input.Restangular.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Restangular...");
		
		sh.exec("rm -rf tmp/project/app/extension/restangular && mkdir tmp/project/app/extension/restangular");
		sh.exec("rm -rf tmp/project/app/shared/service/promise && mkdir tmp/project/app/shared/service/promise");
		sh.exec("cp -r install/extra/extension/restangular/* tmp/project/app/extension/restangular/");
		sh.exec("cp -r install/extra/shared/service/promise/* tmp/project/app/shared/service/promise/");
		sh.exec("cd tmp/project && npm i --save restangular && cd ..");
	}
	else {
		vendorJS = slice(vendorJS, "./node_modules/restangular/dist/restangular.min.js");
	}
	
	if (input["NG File Upload"].match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing NG File Upload...");
		
		sh.exec("rm -rf tmp/project/app/extension/ng-file-upload && mkdir tmp/project/app/extension/ng-file-upload");
		sh.exec("rm -rf tmp/project/app/shared/service/upload && mkdir tmp/project/app/shared/service/upload");
		sh.exec("cp -r install/extra/extension/ng-file-upload/* tmp/project/app/extension/ng-file-upload/");
		sh.exec("cp -r install/extra/shared/service/upload/* tmp/project/app/shared/service/upload/");
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
