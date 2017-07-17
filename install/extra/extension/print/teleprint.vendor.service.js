"use strict";

/**
* Service - `print$`
* - A service for printing HTML
* - Requires `teleprint`
*
* @module Extension->Print-Service
*/

import Teleprint from "teleprint";

export default function teleprintVendorService() {
	return Teleprint;
};
