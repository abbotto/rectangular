# Dependencies

- Dependency paths are stored in the `dev/deps.json` file that is used by Rectangular to build your app.
- The top-level key names are important because the [producer](producer.md) depends on them. If you need to change them you need to update the `producer` as well.
- Lower level key names are arbitrary.
- The dependency model looks something like this:

		{
			"font": {
				"font-awesome": ["./node_modules/font-awesome/fonts/*.{ttf,woff,woff2,eot,svg}"],
				"files": ["./app/**/*.{ttf,woff,woff2,eot,svg}"]
			},
			"image": { ... },
			"model": { ... },
			"template": { ... },
			"script": { ... },
			"spec": { ... },
			"style":{ ... },
		}
