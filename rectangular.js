"use strict";

/**
 * Rectangular
 * Author: Jared Abbott
 * URL: https://github.com/abbotto/rectangular/
 * Copyright 2016-2017 Jared Abbott
 * Distributed under the MIT license
 */

(function Rectangular(name, context, factory) {
	if (typeof module !== "undefined" && module.exports) {
		module.exports = factory();
	}
	else if (typeof define === "function" && define.amd) {
		define(factory);
	}
	else {
		context[name] = factory();
	}
}(
	"RECTANGULAR",
	this,
	() => {
		const methods = {
			env: (deps, root) => {
				require(__dirname + "/src/env.js")(deps, root);
			},
			scripts: (deps, root) => {
				require(__dirname + "/src/script.js")(deps, root);
			},
			fonts: (deps, root) => {
				require(__dirname + "/src/font.js")(deps, root);
			},
			images: (deps, root) => {
				require(__dirname + "/src/image.js")(deps, root);
			},
			models: (deps, root) => {
				require(__dirname + "/src/model.js")(deps, root);
			},
			routes: (deps, root) => {
				require(__dirname + "/src/route.js")(deps, root);
			},
			specs: (deps, root) => {
				require(__dirname + "/src/spec.js")(deps, root);
			},
			styles: (deps, root, config) => {
				require(__dirname + "/src/style.js")(deps, root, config);
			},
			templates: (deps, root) => {
				require(__dirname + "/src/template.js")(deps, root);
			}
		};
		
		rectangular = (() => {
			rectangular = methods;
			return rectangular;
		}());
	}
));
