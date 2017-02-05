## Structure

### Functional File Structure (FFS)
- Basically, files are organized according to what they are used for and folders are kept as flat as possible.
	- For example, the `home` component is located here: `src/client/component/home/`.
	- Component-specific directives, models, view, route, and styles are all kept in the same directory.
	- Now you can save your fingers from years of scrolling hell!

```
.
|____ client
| |____ .eslintrc
| |____ app
| | |____ app.data.json
| | |____ app.js
| | |____ app.route.js
| | |____ app.service.js
| | |____ app.spec.js
| | |____ app.html
| | |____ app.scss
| |____ component
| | |____ home
| | | |____ home.component.html
| | | |____ home.component.js
| | | |____ home.route.js
| | | |____ home.scss
| |____ extension
| | |____ angular-translate
| | | |____ translate.extension.js
| | |____ bluebird
| | | |____ bluebird.extension.js
| | |____ file-upload
| | | |____ upload.extension.js
| | |____ lodash
| | | |____ lodash.extension.js
| | |____ moment
| | | |____ moment.extension.js
| | |____ restangular
| | | |____ restangular.extension.js
| |____ shared
| | |____ design
| | | |____ style
| | | | |____ scaffold.scss
| | | | |____ vendor.scss
| | |____ model
| | | |____ app.data.json
| | |____ service
| | | |____ _
| | | | |____ _.service.js
| | | |____ date
| | | | |____ date.service.js
| | | |____ locale
| | | | |____ locale.service.js
| | | |____ model
| | | | |____ mixin.service.js
| | | | |____ model.service.js
| | | |____ promise
| | | | |____ promise.service.js
| | | |____ rest
| | | | |____ rest.service.js
| | | |____ upload
| | | | |____ upload.service.js
|____ server
  |____ index.js

```
