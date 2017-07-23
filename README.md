# Rectangular
#### Covering all the right angles

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
### Focus on apps, not ops.
Rectangular has everything you need to get started building first-class web applications:
- An interactive `installer`
- A bare-bones `application`
- A powerful build `toolkit`

The `installer` asks you a few questions and downloads the bare-bones `application`. Once you have the `application` installed, you can immediately focus on building your app. Everything is well-organized, configurable and easy to operate. The build `toolkit` is used to help put everything together.

With Rectangular, you get to take advantage of the following goodies:

- [AngularJS](https://angularjs.org/)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [ES6/ES2015](https://babeljs.io/learn-es2015/)
- [ESLint](http://eslint.org/)
- [Fuse-Box](http://fuse-box.org/)
	- [BabelJS](http://fuse-box.org/plugins/babelplugin)
	- [Bundles](http://fuse-box.org/page/bundle)
	- [Development Server](http://fuse-box.org/page/development#development-server)
	- [Hot Module Reloading](http://fuse-box.org/page/development#hot-module-reload)
	- [TypeScript](http://fuse-box.org/page/typescript#typescript)
- [Gulp](http://gulpjs.com/)
- [PUG](https://pugjs.org/)
- [PurifyCSS](https://github.com/purifycss/purifycss)
- [SASS](https://github.com/sass/node-sass)
- [Stylelint](https://stylelint.io/)
- [UI-Router](https://ui-router.github.io/)

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
