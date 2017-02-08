const prompt = require("prompt");
const sh = require("shelljs");

// Start the prompt 
prompt.start();

const schema = {
	"properties": {
		"BootstrapUI": {
			"pattern": /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			"message": "Install Bootstrap UI? [y/n]",
			"required": true
		},
		"MaterialUI": {
			"pattern": /^(?:Yes|No|yes|no|Y|N|y|n)$/,
			"message": "Install Material UI? [y/n]",
			"required": true
		}
	}
};

// Get two properties from the user: username and email 
prompt.get(schema, (err, input) => {
	sh.exec("npm i https://github.com/abbotto/rectangular-ui/");
	if (input.BootstrapUI.match(/^(?:Yes|yes|Y|y)$/)) {
		sh.exec("cp ./node_modules/rectangular-ui/ui/bootstrap/src/ ./src/client/");
		sh.exec("echo Follow-up instructions: https://github.com/abbotto/rectangular-ui/blob/master/ui/bootstrap/README.md");
	}
	if (input.MaterialUI.match(/^(?:Yes|yes|Y|y)$/)) {
		sh.exec("cp ./node_modules/rectangular-ui/ui/material-design/src/ ./src/client/");
		sh.exec("echo Follow-up instructions: https://github.com/abbotto/rectangular-ui/blob/master/ui/material-design/README.md");
	}
});
