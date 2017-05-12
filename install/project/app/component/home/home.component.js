"use strict";

import ReactHtmlParser from 'react-html-parser';

(() => {
	
	// Options
	const options = {};

	// Controller and ViewModel
	options.controllerAs = "vm";
	options.template = "<div id='home-component' ></div>";
	
	options.controller = function HomeController(
		view$
	) {
		const vm = this;
		vm.projectName = "Rectangular";
		
		const template = view$.template("home/home.component.html");
		
		view$
			.render(<div>{ ReactHtmlParser(template) }</div>,
			document.getElementById("home-component")
		);
	};

	// Register the component
	angular
		.module("home.component", ["view.service"])
		.component("home", options)
	;
})();
