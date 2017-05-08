"use strict";

describe("ui.material.service", () => {
	let bottomSheet$,
		colors$,
		dialog$,
		icon$,
		inkRipple$,
		media$,
		panel$,
		sidenav$,
		sticky$,
		toast$;

	beforeEach(() => {
		module(
			"ui.material.service",
			"ui.bottomSheet.service",
			"ui.colors.service",
			"ui.dialog.service",
			"ui.icon.service",
			"ui.inkRipple.service",
			"ui.media.service",
			"ui.panel.service",
			"ui.sidenav.service",
			"ui.sticky.service",
			"ui.toast.service"
		);

		inject(($injector) => {
			bottomSheet$ = $injector.get("bottomSheet$");
			colors$ = $injector.get("colors$");
			dialog$ = $injector.get("dialog$");
			icon$ = $injector.get("icon$");
			inkRipple$ = $injector.get("inkRipple$");
			media$ = $injector.get("media$");
			panel$ = $injector.get("panel$");
			sidenav$ = $injector.get("sidenav$");
			sticky$ = $injector.get("sticky$");
			toast$ = $injector.get("toast$");
		});
	});

	describe("When the `Angular Material` extension is installed", () => {
		it("the `bottomSheet$` service should be available", () => {
			expect(bottomSheet$).toBeDefined();
			expect(typeof bottomSheet$).toBe("object");
		});

		it("the `colors$` service should be available", () => {
			expect(colors$).toBeDefined();
			expect(typeof colors$).toBe("object");
		});

		it("the `dialog$` service should be available", () => {
			expect(dialog$).toBeDefined();
			expect(typeof dialog$).toBe("object");
		});

		it("the `icon$` service should be available", () => {
			expect(icon$).toBeDefined();
			expect(typeof icon$).toBe("function");
		});

		it("the `inkRipple$` service should be available", () => {
			expect(inkRipple$).toBeDefined();
			expect(typeof inkRipple$).toBe("object");
		});

		it("the `media$` service should be available", () => {
			expect(media$).toBeDefined();
			expect(typeof media$).toBe("function");
		});

		it("the `panel$` service should be available", () => {
			expect(panel$).toBeDefined();
			expect(typeof panel$).toBe("object");
		});

		it("the `sidenav$` service should be available", () => {
			expect(sidenav$).toBeDefined();
			expect(typeof sidenav$).toBe("function");
		});

		it("the `sticky$` service should be available", () => {
			expect(sticky$).toBeDefined();
			expect(typeof sticky$).toBe("function");
		});

		it("the `toast$` service should be available", () => {
			expect(toast$).toBeDefined();
			expect(typeof toast$).toBe("object");
		});
	});
});
