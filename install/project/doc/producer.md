# Composer

## Overview
The `composer` file is a master configuration that retains a context, plugins and other settings.

## Flags
The `composer` can be controlled by passing flags as arguments by calling:

	node composer.js --flag

### --build
Export all `custom` JavaScript (ES6) to a bundle.

### --clean
Clean tempoary directories.
- `tmp/`
- `dist/`

### --bump-patch
Increment the `SemVer` patch number (`*.*.1`).

### --bump-minor
Increment the `SemVer` minor number (`*.1.*`).

### --bump-major
Increment the `SemVer` major number (`1.*.*`).

### --doc
Generate `JSDoc` documentation.

### --env
Export `environment variables` to an AngularJS `constants` file.
- `.envrc`

### --font
Copy font files into the `dist/` folder.

### --image
Copy image files into the `dist/` folder.

### --production
Force the app to be built in production mode

### --route
Export all `routes` to an AngularJS `service` file
- `*.route.js`

### --script
Export all `scripts` that can't be imported via ES6 to a legacy bundle.

### --server
Start the development server:
- `watch` enabled
- `hot module reload` enabled

### --spec
Export all `tests` and their dependencies to a bundle.

### --style
Export all `stylesheets` to an bundle.

### --template
Export all `templates` to an AngularJS `$templateCache` file.
