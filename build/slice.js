/* eslint-disable impliedStrict */

module.exports = (arr, val) => {
	const i = arr.indexOf(val);
	(i > -1) && arr.splice(i, 1);
	return arr;
};
