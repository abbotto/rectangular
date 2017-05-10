"use strict";

(() => {
	const dataDirective = () => {
		// Options
		const priority = 2500;
		const scope = true;
		
		const link = (scope, el, attrs) => {
			const {dataSrc} = attrs;
			
			// Charater match
			if (!(/^[a-zA-Z0-9_$]+$/).test(dataSrc)) {
				return false;
			}
			
			// Warning
			!scope[dataSrc] && console.warn(`No ${dataSrc} property found.`);
			
			// Watcher
			scope
				.$watch(() => {
					return scope.$parent[dataSrc];
				},
				(val) => {
					scope[dataSrc] = val.toJS();
				})
			;
		};
		
		return {priority, scope, link};
	};
	
	angular
		.module("data.directive", [])
		.directive("dataSrc", dataDirective)
	;
})();
