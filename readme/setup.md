# Auomated method

## Fetch and run the install file
	curl -O https://raw.githubusercontent.com/abbotto/rectangular/master/install && chmod +x install && ./install
	cd myApp && nvm use && npm i

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
	
## Change directory
	cd myApp

## Install ppackages
	nvm use && npm i