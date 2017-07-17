"use strict";

/**
* SERVICE - `data$`
* - A service for working with immutable data
*
* @module Extension->Data-Service
*
* @example
* // Immutable list
* model.TodoList.todo = data$.fromJS([
*	"get groceries",
*	"mow the lawn",
*	"be a ninja"
* ]);
*/

import Immutable from "immutable";

export default function immutableVendorService() {
	return Immutable;
};
