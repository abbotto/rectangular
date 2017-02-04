## Extensions
- Extensions consist of `3rd-party code` that is integrated into the app.

### Adding an Extension
- Typically, adding a new `extension` is done in the following way:

		(() => {
			"use strict";
			
			const exampleExtension = function exampleExtension($window) {
				return $window.exampleLibrary;
			};

			angular.module("example.extension", []).factory("example$", exampleExtension);
		})();
