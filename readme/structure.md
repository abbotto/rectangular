## Files by Functionality (FBF) Structure
- Basically, files are organized according to what they are used for.
	- For example, the demo `excuse` component is located here: `src/client/private/component/excuse/`.
	- It's directives, models, template, route, controller, and styles are all in the same directory as the view.
	- Now you can save your fingers from years of scrolling hell!

### Public vs. Private Internals
- **Public** internals are parts of the app that can be used throughout the app by it's other parts.
	- Essentially, these are `inclusive` parts of the app.
	- An example of this would be the main SCSS file for your site: `src/client/public/design/style/scaffold.scss`.
	- Another example would be the language service: `service.vendor.language` found at `src/client/public/component/vendor/language/service.vendor.language.js`.

- **Private** internals are parts of the app that shouldn't be used throughout the app by it's other parts.
	- Essentially, these are `exclusive` parts of the app.
	- An example of this would be the controller for the main view for your app: `src/client/private/component/home/home.js`.
	
### Index Naming Convention
- Do not use it. It's cursed.
	- Never name a file `src/**/index.ext` unless you are evil or it is an actual index for something.