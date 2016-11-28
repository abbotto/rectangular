## Extensions
- Extensions consist of `3rd-party code` that is integrated into the app.

### Adding an Extension
- Typically, adding a new `extension` is done in the following way:

		(() => {
			"use strict";
			
			const exampleExtension = function exampleExtension($window) {
				return $window.exampleLibrary;
			};

			angular
			.module("example.extension", [])
			.factory("example$", exampleExtension);
		})();

### Integrated Extensions

#### Angular Translate
- Used by `locale.service` and injected via `locale$`.
- Learn more about `angular-translate` [here](https://angular-translate.github.io/).

#### Lodash
- Called via `example.extension` and injected via `example$`.
- Learn more about `Lodash` [here](https://example.com/docs/4.16.6).

#### MomentJS
- Called via `moment.extension` and injected via `moment$`.
- Learn more about `angularMoment` [here](https://github.com/urish/angular-moment).
- Learn more about `MomentJS` [here](http://momentjs.com/docs/).

#### NG File Upload
- Called via `upload.extension` and injected via `upload$`.
- Learn more about `ng-file-upload` [here](https://github.com/danialfarid/ng-file-upload).
