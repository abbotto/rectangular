"use strict";

describe("ui.bootstrap.service", () => {
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

	beforeEach(() => {
		module(
			"ui.bootstrap.service",
			"ui.affix.service",
			"ui.alert.service",
			"ui.aside.service",
			"ui.datepicker.service",
			"ui.dropdown.service",
			"ui.modal.service",
			"ui.popover.service",
			"ui.scrollspy.service",
			"ui.select.service",
			"ui.timepicker.service",
			"ui.tooltip.service",
			"ui.typeahead.service"
		);

		inject(($injector) => {
			affix$ = $injector.get("affix$");
			alert$ = $injector.get("alert$");
			datepicker$ = $injector.get("datepicker$");
			aside$ = $injector.get("aside$");
			dropdown$ = $injector.get("dropdown$");
			modal$ = $injector.get("modal$");
			popover$ = $injector.get("popover$");
			scrollspy$ = $injector.get("scrollspy$");
			select$ = $injector.get("select$");
			timepicker$ = $injector.get("timepicker$");
			tooltip$ = $injector.get("tooltip$");
			typeahead$ = $injector.get("typeahead$");
		});
	});

	describe("When the `Angular Strap` package is installed", () => {
		it("the `affix$` service should be available", () => {
			expect(affix$).toBeDefined();
			expect(typeof affix$).toBe("function");
		});

		it("the `alert$` service should be available", () => {
			expect(alert$).toBeDefined();
			expect(typeof alert$).toBe("function");
		});

		it("the `aside$` service should be available", () => {
			expect(aside$).toBeDefined();
			expect(typeof aside$).toBe("function");
		});

		it("the `datepicker$` service should be available", () => {
			expect(datepicker$).toBeDefined();
			expect(typeof datepicker$).toBe("function");
		});

		it("the `dropdown$` service should be available", () => {
			expect(dropdown$).toBeDefined();
			expect(typeof dropdown$).toBe("function");
		});

		it("the `modal$` service should be available", () => {
			expect(modal$).toBeDefined();
			expect(typeof modal$).toBe("function");
		});

		it("the `popover$` service should be available", () => {
			expect(popover$).toBeDefined();
			expect(typeof popover$).toBe("function");
		});

		it("the `scrollspy$` service should be available", () => {
			expect(scrollspy$).toBeDefined();
			expect(typeof scrollspy$).toBe("function");
		});

		it("the `select$` service should be available", () => {
			expect(select$).toBeDefined();
			expect(typeof select$).toBe("function");
		});

		it("the `timepicker$` service should be available", () => {
			expect(timepicker$).toBeDefined();
			expect(typeof timepicker$).toBe("function");
		});

		it("the `tooltip$` service should be available", () => {
			expect(tooltip$).toBeDefined();
			expect(typeof tooltip$).toBe("function");
		});
		
		it("the `typeahead$` service should be available", () => {
			expect(typeahead$).toBeDefined();
			expect(typeof typeahead$).toBe("function");
		});
	});
});