# Rectangular
[![Build Status](https://travis-ci.org/abbotto/rectangular.svg?branch=master)](https://travis-ci.org/abbotto/rectangular)

## Table of Contents
* [Documentation](install/project/README.md)
* [Installation](#Installation)
	* [Procedure](#Procedure)
* [Overview](#Overview)
	* [Project Installer](#Project-Installer)
	* [Application Kit](#ApplicationKit)
	* [Build System](#BuildSystem)

---

## <a name='Installation'></a>Installation

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

### Focus on apps, not ops.

Once installed, you can immediatley focus on the features of your app.
- All the ops are done behind the scenes, but most are still configurable.
- With Rectangular, you can take advantage of the following goodies:
	- Autoprefixer
	- Build System
	- Code Minification
	- Dependency Management
	- ES6
	- ESLint
	- Fuse-Box
	- Model Caching
	- PUG Templating
	- Sass
	- Stylelint
	- Template Caching
	- TypeScript

Out-of-the-box, Rectangular gives you the power to build AngularJS apps that are:
- Scalable
- Testable
- Organized
- Responsive
- Modular

Essentially, there are 3 parts to Rectangular:
- the `Project Installer`
- the `Application Kit`
- the `Build System`
