const port = 4444;
const bundle = require("./bundle.js");

bundle.dev(
	{
		port,
		root: "dist",
		httpServer: true,
		socketURI: "ws://localhost:" + port
	}
);
