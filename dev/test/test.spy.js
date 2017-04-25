"use strict";

(() => {
	__.spy = function spy() {
		const Agents = function Agents(spies) {
			const keys = Object.keys(spies);
			const spied = {};
			
			keys.forEach((key) => {
				const spy = {};
				
				if (spies[key].length) {
					spies[key].forEach((prop) => {
						spy[key + "." + prop] = jasmine.createSpy(key + "." + prop);
					});
				}
				else {
					spy[key] = jasmine.createSpy(key);
				}
				
				angular.extend(spied, spy);
			});
			
			return spied;
		};
		
		return Agents;
	};
})();
