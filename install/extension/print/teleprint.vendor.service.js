"use strict";

/**
* Service - `print$`
* - A service for printing HTML
* - Requires `teleprint`
*
* @module Extension->Print-Service
*/

// eslint-disable-next-line no-unused-vars
import Teleprint from "teleprint";

export default function teleprintVendorService() {
	return window.teleprint;
};
