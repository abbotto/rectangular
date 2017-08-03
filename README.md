# Rectangular
#### Covering all the right angles

---

[![Build Status](https://travis-ci.org/abbotto/rectangular.svg?branch=master)](https://travis-ci.org/abbotto/rectangular)
[![David](https://img.shields.io/david/expressjs/express.svg)]()
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
<a href="https://twitter.com/intent/tweet" target="_blank"><img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social"/></a>

## Table of Contents
* [User Manual](install/project/README.md)
* [Overview](#Overview)
* [Installation](#Installation)

---

## <a name='Overview'></a>Overview
#### Focus on apps, not ops.
Rectangular has everything you need to get started building first-class web applications:
- An interactive `installer`
- A bare-bones `application`
- A powerful build `toolkit`

The `installer` asks you a few questions and downloads the bare-bones `application`. Once the `application` has been installed, it's ready for you to work your magic. Everything is well-organized, configurable and easy to operate. The build `toolkit` is used to help put everything together.

---

#### The following goodies are baked into Rectangular:
- [AngularJS](https://angularjs.org/)
- [Autoprefixer](https://github.com/postcss/autoprefixer/)
- [BabelJS](http://fuse-box.org/plugins/babelplugin/)
- [Bundles](http://fuse-box.org/page/bundle/)
- [Development Server](http://fuse-box.org/page/development#development-server)
- [ES6/ES2015](https://babeljs.io/learn-es2015/)
- [ESLint](http://eslint.org/)
- [Fuse-Box](http://fuse-box.org/)
- [Gulp](http://gulpjs.com/)
- [Hot Module Reloading](http://fuse-box.org/page/development#hot-module-reload)
- [ImmutableJS](https://facebook.github.io/immutable-js/)
- [PUG](https://pugjs.org/)
- [PurifyCSS](https://github.com/purifycss/purifycss/)
- [SASS](https://github.com/sass/node-sass)
- [Stylelint](https://stylelint.io/)
- [TypeScript](http://fuse-box.org/page/typescript#typescript)
- [UI-Router](https://ui-router.github.io/)

---

#### You can optionally include more goodies during the install process:
- [Angular Material](https://material.angularjs.org/latest/) - A UI component framework implementation of Google's `Material Design` specification.
- [Angular Moment](https://github.com/urish/angular-moment/) - MomentJS directives for your AngularJS app.
- [Angular Strap](https://mgcrea.github.io/angular-strap/) - A set of Bootstrap 3+ directives for your AngularJS app.
- [Angular Translate](https://angular-translate.github.io/) - Translate your AngularJS app.
- [Bluebird](http://bluebirdjs.com/) - A full-featured JavaScript promises library with unmatched performance.
- [Lodash](https://lodash.com/docs/) - A modern JavaScript utility library delivering modularity, performance & extras.
- [MomentJS](https://momentjs.com/) - Parse, validate, manipulate, and display dates and times in JavaScript.
- [NG File Upload](https://github.com/danialfarid/ng-file-upload/) - Lightweight directive to upload files with optional FileAPI shim for cross-browser support.
- [ReactJS](https://facebook.github.io/react/) - A JavaScript library for building user interfaces.
- [Restangular](https://github.com/mgonto/restangular/) - A service that simplifies common `GET`, `POST`, `DELETE`, and `UPDATE` requests.
- [Teleprint](https://github.com/abbotto/teleprint/) - Prints HTML from a `URL`, from the `DOM`, or from a `string`.

---

## <a name='Installation'></a>Installation

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
