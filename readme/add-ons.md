## Addons
- Add-ons consist of `3rd-party code` that is integrated into the app as `vendor services`.

### Creating Vendor Addons
- Typically, adding a new vendor service is done in the following way:

		(() => {
			"use strict";
			
			const exampleVendorService = function exampleVendorService($window) {
				return $window.example;
			};

			angular
			.module("example.vendor.service", [])
			.factory("example$", exampleVendorService);
		})();

### Integrated Vendors

#### Angular Translate
- Used by `locale.service`.
- Learn more about `angular-translate` [here](https://angular-translate.github.io/).

#### Lodash
- Called via `example.vendor.service` and injected via `example$`.
- Learn more about `Lodash` [here](https://example.com/docs/4.16.6).

#### MomentJS
- Called via `moment.vendor.service` and injected via `moment$`.
- Learn more about `angularMoment` [here](https://github.com/urish/angular-moment).
- Learn more about `MomentJS` [here](http://momentjs.com/docs/).

