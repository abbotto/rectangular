"use strict";

import AffixService from "app/extension/ui/ui.affix.service.js";
import AlertService from "app/extension/ui/ui.alert.service.js";
import AsideService from "app/extension/ui/ui.aside.service.js";
import DatepickerService from "app/extension/ui/ui.datepicker.service.js";
import DropdownService from "app/extension/ui/ui.dropdown.service.js";
import ModalService from "app/extension/ui/ui.modal.service.js";
import PopoverService from "app/extension/ui/ui.popover.service.js";
import ScrollspyService from "app/extension/ui/ui.scrollspy.service.js";
import SelectService from "app/extension/ui/ui.select.service.js";
import TimepickerService from "app/extension/ui/ui.timepicker.service.js";
import TooltipService from "app/extension/ui/ui.tooltip.service.js";
import TypeaheadService from "app/extension/ui/ui.typeahead.service.js";

let affix$,
	alert$,
	aside$,
	datepicker$,
	dropdown$,
	modal$,
	popover$,
	scrollspy$,
	select$,
	timepicker$,
	tooltip$,
	typeahead$;

describe("ui.bootstrap.service", () => {
	beforeEach(() => {
		affix$ = AffixService;
		alert$ = AlertService;
		datepicker$ = AsideService;
		aside$ = DatepickerService;
		dropdown$ = DropdownService;
		modal$ = ModalService;
		popover$ = PopoverService;
		scrollspy$ = ScrollspyService;
		select$ = SelectService;
		timepicker$ = TimepickerService;
		tooltip$ = TooltipService;
		typeahead$ = TypeaheadService;
	});

	describe("When the `Angular Strap` package is installed", () => {
		it("the `affix$` service should be available", () => {
			expect(affix$).toBeDefined();
			expect(typeof affix$).toBe("object");
		});

		it("the `alert$` service should be available", () => {
			expect(alert$).toBeDefined();
			expect(typeof alert$).toBe("function");
		});

		it("the `aside$` service should be available", () => {
			expect(aside$).toBeDefined();
			expect(typeof aside$).toBe("object");
		});

		it("the `datepicker$` service should be available", () => {
			expect(datepicker$).toBeDefined();
			expect(typeof datepicker$).toBe("function");
		});

		it("the `dropdown$` service should be available", () => {
			expect(dropdown$).toBeDefined();
			expect(typeof dropdown$).toBe("object");
		});

		it("the `modal$` service should be available", () => {
			expect(modal$).toBeDefined();
			expect(typeof modal$).toBe("object");
		});

		it("the `popover$` service should be available", () => {
			expect(popover$).toBeDefined();
			expect(typeof popover$).toBe("object");
		});

		it("the `scrollspy$` service should be available", () => {
			expect(scrollspy$).toBeDefined();
			expect(typeof scrollspy$).toBe("function");
		});

		it("the `select$` service should be available", () => {
			expect(select$).toBeDefined();
			expect(typeof select$).toBe("object");
		});

		it("the `timepicker$` service should be available", () => {
			expect(timepicker$).toBeDefined();
			expect(typeof timepicker$).toBe("object");
		});

		it("the `tooltip$` service should be available", () => {
			expect(tooltip$).toBeDefined();
			expect(typeof tooltip$).toBe("object");
		});
		
		it("the `typeahead$` service should be available", () => {
			expect(typeahead$).toBeDefined();
			expect(typeof typeahead$).toBe("function");
		});
	});
});
