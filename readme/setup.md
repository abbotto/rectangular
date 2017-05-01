# Auomated method
	curl -O https://raw.githubusercontent.com/abbotto/rectangular/master/install && chmod +x install && ./install

# Manual Method

## Create a project folder
	mkdir myApp
	cd myApp

## Initialize with NPM
	npm init --yes

## Install Rectangular
	npm i https://github.com/abbotto/rectangular.git
	
## Copy the project files
	cp -R node_modules/rectangular/project/ .

## Run setup
	npm run setup

