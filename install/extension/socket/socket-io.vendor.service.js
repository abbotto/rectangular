"use strict";

/**
* Service - `rest$`
* - A service for dealing with RESTful APIs
* - Requires `restangular`
*
* @module Extension->Socket-Service
*/

import * as SocketIO from "socket.io-client";

export default function socketIoVendorService() {
	return SocketIO;
};
