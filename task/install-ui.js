// Todo
// Make sure UI scripts and styles get added to the build process
// Make sure UI dependencies get injected into app.service.js

const prompt = require("prompt");
const sh = require("shelljs");

// Start the prompt 
prompt.start();

const schema = {
	"properties": {
		"BootstrapUI": {
			"pattern": /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			"message": "Yes|No|yes|no|Y|N|y|n",
			"description": "Install Bootstrap UI? [y/n]",
			"required": true
		},
		"MaterialUI": {
			"pattern": /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			"message": "Yes|No|yes|no|Y|N|y|n]",
			"description": "Install Material UI? [y/n]",
			"required": true
		}
	}
};

prompt.get(schema, (err, input) => {
	sh.exec("npm i https://github.com/abbotto/rectangular-ui.git");
	if (input.BootstrapUI.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Bootstrap UI...");
		// sh.exec("npm i bootstrap angular-strap --save");
		sh.exec("cp -r ./node_modules/rectangular-ui/ui/bootstrap/src/**/*/ ./src/client/");
		sh.exec("curl https://raw.githubusercontent.com/abbotto/rectangular-ui/master/ui/bootstrap/README.md");
	}
	if (input.MaterialUI.match(/^(?:Yes|yes|Y|y)$/)) {
		console.log("");
		console.log("Installing Material UI...");
		// sh.exec("npm i angular-material --save");
		sh.exec("cp -r ./node_modules/rectangular-ui/ui/material-design/src/**/*/ ./src/client/");
		sh.exec("curl https://raw.githubusercontent.com/abbotto/rectangular-ui/master/ui/material-design/README.md");
	}
});
