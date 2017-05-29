"use strict";

import BottomSheetService from "app/extension/ui/ui.bottomSheet.service.js";
import ColorsService from "app/extension/ui/ui.colors.service.js";
import DialogService from "app/extension/ui/ui.dialog.service.js";
import IconService from "app/extension/ui/ui.icon.service.js";
import InkRippleService from "app/extension/ui/ui.inkRipple.service.js";
import MediaService from "app/extension/ui/ui.media.service.js";
import PanelService from "app/extension/ui/ui.panel.service.js";
import SidenavService from "app/extension/ui/ui.sidenav.service.js";
import StickyService from "app/extension/ui/ui.sticky.service.js";
import ToastService from "app/extension/ui/ui.toast.service.js";

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

describe("angular-material.vendor.service", () => {
	beforeEach(() => {
		bottomSheet$ = BottomSheetService;
		colors$ = ColorsService;
		dialog$ = DialogService;
		icon$ = IconService;
		inkRipple$ = InkRippleService;
		media$ = MediaService;
		panel$ = PanelService;
		sidenav$ = SidenavService;
		sticky$ = StickyService;
		toast$ = ToastService;
	});

	describe("When the `Angular Material` package is installed", () => {
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
			expect(typeof icon$).toBe("object");
		});

		it("the `inkRipple$` service should be available", () => {
			expect(inkRipple$).toBeDefined();
			expect(typeof inkRipple$).toBe("object");
		});

		it("the `media$` service should be available", () => {
			expect(media$).toBeDefined();
			expect(typeof media$).toBe("object");
		});

		it("the `panel$` service should be available", () => {
			expect(panel$).toBeDefined();
			expect(typeof panel$).toBe("object");
		});

		it("the `sidenav$` service should be available", () => {
			expect(sidenav$).toBeDefined();
			expect(typeof sidenav$).toBe("object");
		});

		it("the `sticky$` service should be available", () => {
			expect(sticky$).toBeDefined();
			expect(typeof sticky$).toBe("object");
		});

		it("the `toast$` service should be available", () => {
			expect(toast$).toBeDefined();
			expect(typeof toast$).toBe("object");
		});
	});
});
