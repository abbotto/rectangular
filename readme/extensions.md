## Table of Contents
* [Extensions](#Extensions)
	* [Adding Extensions](#AddingExtensions)
	* [Available Extensions](#AvailableExtensions)
		* [UI Services](#UIServices)
		* [Arrays, Objects & Strings](#ArraysObjectsStrings)
		* [Date & Time](#DateTime)
		* [REST](#REST)
		* [Promises](#Promises)
		* [File Uploading](#FileUploading)
		* [Language Support](#LanguageSupport)
		* [Immutable Data](#ImmutableData)
		* [Printing](#Printing)

##  <a name='Extensions'></a>Extensions
- Extensions consist of `3rd-party` or `custom` code that is integrated into the app.

### <a name='AddingExtensions'></a>Adding Extensions
- Typically, adding a new `extension` is done in the following way:

		(() => {
			const exampleExtension = function exampleExtension($window) {
				return $window.exampleLibrary;
			};

			angular.module("example.vendor", []).factory("exampleExtension", exampleExtension);
		})();

- The extension can then be wrapped as a custom service:

		(() => {
			const exampleService = function exampleService(exampleExtension) {
				return exampleExtension;
			};

			angular.module("example.service", ["example.vendor"]).factory("example$", exampleService);
		})();

### <a name='AvailableExtensions'></a>Available Extensions

#### <a name='UIServices'></a>UI Services

##### Material Design
- Learn more about `angular-material` [here](https://material.angularjs.org/latest/).

###### Sub-services
- Service is called `ui.bottomSheet.service` and is injected via `bottomSheet$`.
- Service is called `ui.colors.service` and is injected via `colors$`.
- Service is called `ui.dialog.service` and is injected via `dialog$`.
- Service is called `ui.icon.service` and is injected via `icon$`.
- Service is called `ui.inkRipple.service` and is injected via `inkRipple$`.
- Service is called `ui.media.service` and is injected via `media$`.
- Service is called `ui.panel.service` and is injected via `panel$`.
- Service is called `ui.sidenav.service` and is injected via `sidenav$`.
- Service is called `ui.sticky.service` and is injected via `sticky$`.
- Service is called `ui.toast.service` and is injected via `toast$`.

##### Bootstrap
- Learn more about `angular-strap` [here](https://mgcrea.github.io/angular-strap/).

###### Sub-services
- Service is called `ui.affix.service` and is injected via `affix$`.
- Service is called `ui.alert.service` and is injected via `alert$`.
- Service is called `ui.datepicker.service` and is injected via `datepicker$`.
- Service is called `ui.dropdown.service` and is injected via `dropdown$`.
- Service is called `ui.modal.service` and is injected via `modal$`.
- Service is called `ui.popover.service` and is injected via `popover$`.
- Service is called `ui.scrollspy.service` and is injected via `scrollspy$`.
- Service is called `ui.select.service` and is injected via `select$`.
- Service is called `ui.timepicker.service` and is injected via `timepicker$`.
- Service is called `ui.tooltip.service` and is injected via `tooltip$`.
- Service is called `ui.typeahead.service` and is injected via `typeahead$`.

#### <a name='ArraysObjectsStrings'></a>Arrays, Objects & Strings
- Service is called `_.service` and is injected via `_`.
- Learn more about `Lodash` [here](https://example.com/docs/4.16.6).

#### <a name='DateTime'></a>Date & Time
- Service is called `date.service` and is injected via `date$`.
- Learn more about `angularMoment` [here](https://github.com/urish/angular-moment).
- Learn more about `MomentJS` [here](http://momentjs.com/docs/).

#### <a name='REST'></a>REST
- Service is called `rest.service` and is injected via `rest$`.
- The rest$ service can be used in place of $resource.
- Learn more about `restangular` [here](https://github.com/mgonto/restangular/blob/master/README.md).

#### <a name='Promises'></a>Promises
- Service is called `promise.service` and is injected via `promise$`.
- `promise$` can be used in place of `$q` - it is a speedier and more robust implementation.
- Learn more about `bluebird` [here](http://bluebirdjs.com/docs/api-reference.html).

#### <a name='FileUploading'></a>File Uploading
- Service is called `upload.service` and is injected via `upload$`.
- Learn more about `ng-file-upload` [here](https://github.com/danialfarid/ng-file-upload).

#### <a name='LanguageSupport'></a>Language Support
- Service is called `locale.service` and is injected via `locale$`.
- Learn more about `angular-translate` [here](https://angular-translate.github.io/docs/#/guide).

#### <a name='ImmutableData'></a>Immutable Data
- Service is called `data.service` and is injected via `data$`.
- Directive is called `data.directive` and is added via `data-src`.
- Learn more about 'immutable-js' [here](http://facebook.github.io/immutable-js/docs/).

#### <a name='Printing'></a>Printing
- Service is called `print.service` and is injected via `print$`.
- Learn more about `teleprint` [here](https://github.com/abbotto/teleprint).