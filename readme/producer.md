## Producer

### Overview
- The `producer` file, as it's name implies, produces things.

#### Flags
- The `producer` can be controlled by passing flags as arguments by calling:
	- `node producer.js --flag
	
##### --build
- Export all the JavaScript (ES6) to a bundle

##### --clean
- Clean tempoary directories and generate new ones
	- `tmp/`
	- `dist/`

##### --env
- Export environment variables to an Angular constants file
	- `.envrc`

##### --font
- Copy font files into the `dist/` folder

##### --image
- Copy image files into the `dist/` folder

##### --model
- Export all model (JSON) files to an Angular constants file 
	- *.data.json
	- *.mixin.json

##### --route
- Export all routes to an Angular service file
	- *.route.js

##### --script
- Export all scripts that can't be imported via ES6 to a `legacy.js` file

##### --server
- Start the development server
	- `watch` enabled
	- `hot module reload` enabled

##### --spec
- Export all tests and their dependencies to a bundle

##### --style
- Export all stylesheets to an bundle

##### --template
- Export an Angular `$templateCache` file containing all templates