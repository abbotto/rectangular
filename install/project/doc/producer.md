# Producer

## Overview
- The `producer` file, as it's name implies, produces things.
	- `producer.js`

## Flags
- The `producer` can be controlled by passing flags as arguments by calling:
	- `node producer.js --flag`
	
### --build
- Export all `custom` JavaScript (ES6) to a bundle

### --clean
- Clean tempoary directories
	- `tmp/`
	- `dist/`

### --bump-patch
- Increment the `SerVer` patch number (`*.*.1`).

### --bump-minor
- Increment the `SerVer` minor number (`*.1.*`).

### --bump-major
- Increment the `SerVer` major number (`1.*.*`).

### --doc
- Generate `JSDoc` documentation.

### --env
- Export `environment variables` to an Angular constants file
	- `.envrc`

### --font
- Copy font files into the `dist/` folder

### --image
- Copy image files into the `dist/` folder

### --model
- Export all `models` (JSON) to an Angular constants file 
	- `*.data.json`
	- `*.mixin.json`

### --production
- Force the app to be built in production mode

### --route
- Export all `routes` to an Angular service file
	- `*.route.js`

### --script
- Export all `scripts` that can't be imported via ES6 to a legacy bundle

### --server
- Start the development server
	- `watch` enabled
	- `hot module reload` enabled

### --spec
- Export all `tests` and their dependencies to a bundle

### --style
- Export all `stylesheets` to an bundle

### --template
- Export all `templates` to an Angular `$templateCache` file