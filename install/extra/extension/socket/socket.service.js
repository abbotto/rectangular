"use strict";

import SocketIoVendorService from "~/app/extension/socket/socket-io.vendor.service.js";

export default angular
	.module("socket.service", [])
	.factory("socket$", SocketIoVendorService)
;
