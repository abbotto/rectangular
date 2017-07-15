# Rectangular
[![Build Status](https://travis-ci.org/abbotto/rectangular.svg?branch=master)](https://travis-ci.org/abbotto/rectangular)

## Table of Contents
* [Documentation](install/project/README.md)
* [Overview](#Overview)
* [Installation](#Installation)

---

## <a name='Overview'></a>Overview

### Focus on apps, not ops.
Essentially, there are 3 parts to Rectangular:
- the `Project Installer`
- the `Application Kit`
- the `Build System`

Once installed, you can immediately focus on building your app.
- All of the ops are done behind the scenes, but most are still configurable.
- With Rectangular, you can take advantage of the following goodies:
	- Autoprefixer
	- Babel
	- Code Minification
	- Dependency Management
	- ES6/ES2015
	- ESLint
	- Fuse-Box
	- Model Caching
	- PUG Templating
	- PurifyCSS
	- Sass
	- Stylelint
	- Template Caching
	- TypeScript

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

