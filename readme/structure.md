## Files by Functionality (FBF) Structure
- Basically, files are organized according to what they are used for.
	- For example, the demo `excuse` component is located here: `src/client/private/component/excuse/`.
	- It's directives, models, template, route, controller, and styles are all in the same directory as the view.
	- Now you can save your fingers from years of scrolling hell!

### Inclusive
- Inclusive parts of the app are kept in `src/client/public`.
- Inclusive parts of the app are `shared` resources that can be used by multiple components.
	- An example of this would be the main SCSS file for your site: `src/client/public/design/style/scaffold.scss`.
	- Another example would be the language service: `service.locale` found at `src/client/public/component/locale/service.locale.js`.

### Exclusive
- Exclusive parts of the app are kept in `src/client/private`.
- Exclusive parts of the app are `self-contained` and aren't used by other components.
	- An example of this would be the controller for the main view for your app: `src/client/private/component/home/home.js`.
	- `Routes` are considered to be `exclusive`.
	
### Index Naming Convention
- Never name a file `src/**/index.ext` unless you are evil or it is an actual index for something.