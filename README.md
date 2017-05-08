# Rectangular
[![Build Status](https://travis-ci.org/abbotto/rectangular.svg?branch=master)](https://travis-ci.org/abbotto/rectangular)

---

## Table of Contents

* [Requirements](#Requirements)
* [Install](#Install)
* [Overview](#Overview)
	* [Installer](#Installer)
	* [Application Kit](#ApplicationKit)
	* [Build System](#BuildSystem)
* [Documentation](#Documentation)

---

##  <a name='Requirements'></a>Requirements
- NodeJS, NPM, NVM
- MacOS/Linux

##  <a name='Install'></a>Install
	curl -O https://raw.githubusercontent.com/abbotto/rectangular/master/install/install && chmod +x install && ./install
	cd myApp && nvm use && npm i

##  <a name='Overview'></a>Overview
Out-of-the-box, Rectangular gives the power to build apps that are:
- Scalable
- Testable
- Organized
- Responsive
- Modular

Essentially, there are 3 parts to Rectangular:
- the `Installer`
- the `Application Kit`
- the `Build System`

###  <a name='Installer'></a>Installer
- An `project installer` for initializing the application kit.
- An `extension installer` for several popular 3rd-party packages.

###  <a name='ApplicationKit'></a>Application Kit
- A built-in `extension system` for integrating 3rd-party vendor plugins and libraries in a jiffy.
- A built-in `caching system` that retains your environment variables, models, and templates.
- A built-in `karma` + `jasmine` testing suite to help your code pass with flying colors.
- A built-in `service loader` that injects `services` at an application level.
- A built-in `asset loader` for easily adding additional styles and scripts.
- A built-in `route loader` that finds and compiles `routes` for you.
- A built-in `eslint` config for `ES6` and `AngularJS`.
- A built-in `livereload` server for development.
- A built-in task-runner provided by `gulp`.
- A built-in `semantic versioning` system.

###  <a name='BuildSystem'></a>Build System
- Support for `SASS` syntax for powerful stylesheets.
- Support for `ES6` syntax for modernized JavaScript.
- Support for `PUG` syntax for cleaner HTML templates.
- Support for `stylelint` to make sure your styles come out shiny.
- Support for `autoprefixer` so your styles are welcome in web browsers.

---

##  <a name='Documentation'></a>Documentation
- App:				[View](readme/app.md)
- Assets: 			[View](readme/assets.md)
- Extensions:		[View](readme/extensions.md)
- Functions:		[View](readme/functions.md)
- Models:			[View](readme/models.md)
- Naming:			[View](readme/naming.md)
- Structure:		[View](readme/structure.md)
- Tasks: 			[View](readme/tasks.md)
- User Experience:	[View](readme/user-experience.md)


