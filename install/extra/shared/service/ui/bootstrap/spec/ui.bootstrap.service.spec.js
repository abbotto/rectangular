"use strict";

describe("ui.bootstrap.service", () => {
	let affix$,
		alert$,
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
			"ui.affix.service",
			"ui.alert.service",
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

	describe("When the `Angular Strap` extension is installed", () => {
		it("the `affix$` service should be available", () => {
			expect(affix$).toBeDefined();
			expect(typeof affix$).toBe("object");
		});

		it("the `alert$` service should be available", () => {
			expect(alert$).toBeDefined();
			expect(typeof alert$).toBe("object");
		});

		it("the `datepicker$` service should be available", () => {
			expect(datepicker$).toBeDefined();
			expect(typeof datepicker$).toBe("object");
		});

		it("the `dropdown$` service should be available", () => {
			expect(dropdown$).toBeDefined();
			expect(typeof dropdown$).toBe("function");
		});

		it("the `modal$` service should be available", () => {
			expect(modal$).toBeDefined();
			expect(typeof modal$).toBe("object");
		});

		it("the `popover$` service should be available", () => {
			expect(popover$).toBeDefined();
			expect(typeof popover$).toBe("function");
		});

		it("the `scrollspy$` service should be available", () => {
			expect(scrollspy$).toBeDefined();
			expect(typeof scrollspy$).toBe("object");
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
			expect(typeof tooltip$).toBe("object");
		});
		
		it("the `typeahead$` service should be available", () => {
			expect(typeahead$).toBeDefined();
			expect(typeof typeahead$).toBe("object");
		});
	});
});
