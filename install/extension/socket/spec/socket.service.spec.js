"use strict";

import SocketService from "~/app/extension/socket/socket.service.js";
let socket$;

describe("socket.service", () => {
	beforeEach(() => {
		socket$ = SocketService;
	});

	describe("When the `socket.io` package is installed", () => {
		it("the `socket$` service should be available", () => {
			expect(socket$).toBeDefined();
			expect(typeof socket$).toBe("object");
		});
	});
});
