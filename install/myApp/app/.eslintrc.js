module.exports = {
	"env": {
		"browser": true,
		"node": true,
		"es6": true,
		"mocha": true
	},
	"globals": {
		"$": true,
		"angular": true,
		"jasmine": true,
		"expect": true
	},
	"ecmaFeatures": {
		"jsx": true,
		"impliedStrict": true
	},
	"plugins": [
		"angular",
		"disable",
		"json"
	],
    "parserOptions": {
        "sourceType": "module",
		"ecmaVersion": 6,
		"ecmaFeatures": {
			"jsx": true
		}
    },
	"rules": {
		"angular/angularelement": 1,
		"angular/component-name": [2,
			"/^([a-z])+([A-Za-z]*)*/"
		],
		"angular/controller-as": 2,
		"angular/controller-as-route": 2,
		"angular/controller-as-vm": [2, "vm"],
		"angular/controller-name": [1,
			"/^([A-Z])+([A-Za-z]*)*/"
		],
		"angular/deferred": 0,
		"angular/definedundefined": 2,
		"angular/di": [2, "function"],
		"angular/di-order": [0, true],
		"angular/directive-name": [1,
			"/^([a-z])+([A-Za-z]*)*/"
		],
		"angular/component-limit": [2, 5],
		"angular/document-service": 2,
		"angular/empty-controller": 2,
		"angular/file-name": 0,
		"angular/filter-name": [1,
			"/^([a-z])+([A-Za-z]*)*/"
		],
		"angular/foreach": 2,
		"angular/function-type": 0,
		"angular/interval-service": 2,
		"angular/json-functions": 2,
		"angular/log": 0,
		"angular/module-getter": 2,
		"angular/module-name": [1,
			"/(\\.?([a-z])+([A-Z])*)+/"
		],
		"angular/module-setter": 2,
		"angular/no-angular-mock": 2,
		"angular/no-controller": 2,
		"angular/no-cookiestore": 2,
		"angular/no-jquery-angularelement": 2,
		"angular/no-private-call": 2,
		"angular/no-service-method": 2,
		"angular/no-services": [2, ["$http", "$resource", "Restangular"]],
		"angular/on-watch": 2,
		"angular/rest-service": 0,
		"angular/service-name": [1,
			"/^(\\_|[a-z])+([A-Za-z]*).*\\$$/"
		],
		"angular/timeout-service": 2,
		"angular/typecheck-array": 2,
		"angular/typecheck-date": 2,
		"angular/typecheck-function": 2,
		"angular/typecheck-number": 2,
		"angular/typecheck-object": 2,
		"angular/typecheck-string": 2,
		"angular/watchers-execution": [0, "$digest"],
		"angular/window-service": 2
	}
}
