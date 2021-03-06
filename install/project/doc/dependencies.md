# Dependencies

- Dependency paths are stored in the `dev/deps.json` file that is used by Rectangular to build your app.
- Top-level key names are important because the [composer](composer.md) depends on them.
	- If you need to change them you must update the `composer` as well.
- Low-level key names are arbitrary.
- The dependency model looks something like this:

		{
			"font": {
				"font-awesome": ["./node_modules/font-awesome/fonts/*.{ttf,woff,woff2,eot,svg}"],
				"files": ["./app/**/*.{ttf,woff,woff2,eot,svg}"]
			},
			"image": { ... },
			"route": { ... },
			"template": { ... },
			"script": { ... },
			"spec": { ... },
			"style":{ ... },
		}
