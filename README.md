# Rectangular
[![Build Status](https://travis-ci.org/abbotto/rectangular.svg?branch=master)](https://travis-ci.org/abbotto/rectangular)

#### Focus on apps, not ops.
- Once installed, you can immediatley focus on the features of your app.
- All the ops are done behind the scenes, but most are still configurable:
	- Sass + Stylelint + Autoprefix
	- Fuse-Box + ESLint
	- Template + Model Caching
	- HTML templating w/ PUG
	- Asset Management
	- Minification

---

## Table of Contents
* [Installation](#Installation)
	* [Requirements](#Requirements)
	* [Procedure](#Procedure)
* [Overview](#Overview)
	* [Project Installer](#Project-Installer)
	* [Application Kit](#ApplicationKit)
	* [Build System](#BuildSystem)
* [Documentation](install/project/README.md)

---

## <a name='Installation'></a>Installation

### <a name='Requirements'></a>Requirements
- Bash
- Node.js
- NPM
- NVM

### <a name='Procedure'></a>Procedure
	# Download the install script
	curl -O https://raw.githubusercontent.com/abbotto/rectangular/master/install/install
	
	# Make the script executable
	chmod +x install
	
	# Run the script and fill in the blanks
	./install
	
	# Go to the app directory
	cd myApp

	# Start developing
	npm start

## <a name='Overview'></a>Overview
Out-of-the-box, Rectangular gives you the power to build Angular 1 apps that are:
- Scalable
- Testable
- Organized
- Responsive
- Modular

Essentially, there are 3 parts to Rectangular:
- the `Project Installer`
- the `Application Kit`
- the `Build System`

### <a name='Project-Installer'></a>Project Installer
- Initialize the application kit.
- Add extras from popular 3rd-party packages.

### <a name='ApplicationKit'></a>Application Kit
- A built-in `extension system` for integrating 3rd-party vendor plugins and libraries in a jiffy.
- A built-in `caching system` that retains your environment variables, models, and templates.
- A built-in `karma` + `jasmine` testing suite to help your code pass with flying colors.
- A built-in `service loader` that injects `services` at an application level.
- A built-in `dependency loader` for easily adding additional styles and scripts.
- A built-in `route loader` that finds and compiles `routes` for you.
- A built-in `eslint` config for `ES6` and `AngularJS`.
- A built-in `development` server with `hot module reload` support.
- A built-in `documentation generator` so devs can RTFM.
- A built-in `semantic versioning` system.

### <a name='BuildSystem'></a>Build System
- Supporting `SASS` syntax for expressive stylesheets.
- Supporting `ES6` syntax for modernized JavaScript.
- Supporting `TypeScript` for even more script features.
- Supporting `PUG` syntax for cleaner HTML templates.
- Supporting `stylelint` to make sure your styles come out shiny.
- Supporting `autoprefixer` so your styles are welcome in web browsers.
