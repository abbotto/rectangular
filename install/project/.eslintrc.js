module.exports = {
	"env": {
		"browser": true,
		"node": true,
		"es6": true,
		"mocha": true
	},
	"globals": {
		"$": true,
		"angular": true
	},
	"ecmaFeatures": {
		"impliedStrict": true
	},
	"plugins": [
		"angular",
		"disable",
		"json"
	],
	"rules": {
		"accessor-pairs": 0,
		"array-bracket-spacing": ["error", "never"],
		"block-scoped-var": 2,
		"brace-style": ["error", "stroustrup", {
			"allowSingleLine": false
		}],
		"complexity": [0, 11],
		"consistent-return": "error",
		"consistent-this": [1, "self", "ctrl", "vm"],
		"comma-dangle": ["error", "never"],
		"comma-spacing": ["error", {
			"before": false,
			"after": true
		}],
		"comma-style": ["error", "last"],
		"curly": [2, "multi-line"],
		"default-case": 2,
		"dot-location": 0,
		"dot-notation": [2, {
			"allowKeywords": true
		}],
		"eol-last": ["error", "always"],
		"eqeqeq": 2,
		"func-style": [2, "expression", {
			"allowArrowFunctions": true
		}],
		"func-names": 2,
		"guard-for-in": 2,
		"id-match": ["error", "^((_|\\$|_\\$|)+(_|[A-Z]+[A-Z0-9]*|[a-z]+[a-zA-Z0-9]*)+(_|))"],
		"indent": ["error", "tab", {
			"SwitchCase": 1
		}],
		"key-spacing": ["error", {
			"afterColon": true,
			"beforeColon": false
		}],
		"keyword-spacing": ["error", {
			"overrides": {
				"if": {
					"after": true,
					"before": false
				},
				"else": {
					"after": true,
					"before": false
				},
				"for": {
					"after": true,
					"before": false
				},
				"while": {
					"after": true,
					"before": false
				},
				"do": {
					"after": true,
					"before": false
				},
				"switch": {
					"after": true,
					"before": false
				},
				"case": {
					"after": true,
					"before": false
				},
				"return": {
					"after": true,
					"before": false
				},
				"try": {
					"after": true,
					"before": false
				},
				"catch": {
					"after": true,
					"before": false
				},
				"finally": {
					"after": true,
					"before": false
				},
				"typeof": {
					"after": true
				}
			}
		}],
		"linebreak-style": ["error", "unix"],
		"multiline-ternary": 0,
		"new-cap": 1,
		"newline-per-chained-call": [1, {
			"ignoreChainWithDepth": 2
		}],
		"no-alert": 1,
		"no-array-constructor": 2,
		"no-bitwise": 2,
		"no-caller": 2,
		"no-case-declarations": 2,
		"no-const-assign": 2,
		"no-div-regex": 0,
		"no-else-return": 2,
		"no-empty": "error",
		"no-empty-pattern": 0,
		"no-eq-null": 0,
		"no-eval": 2,
		"no-extend-native": 2,
		"no-extra-bind": 2,
		"no-extra-boolean-cast": 1,
		"no-fallthrough": 2,
		"no-floating-decimal": 2,
		"no-implicit-coercion": 0,
		"no-implied-eval": 2,
		"no-invalid-this": 0,
		"no-iterator": 2,
		"no-labels": [2, {
			"allowLoop": true,
			"allowSwitch": true
		}],
		"no-lone-blocks": 2,
		"no-loop-func": 2,
		"no-magic-numbers": 0,
		"no-mixed-spaces-and-tabs": 2,
		"no-multiple-empty-lines": [2, {
			"max": 1
		}],
		"no-multi-spaces": 2,
		"no-multi-str": 2,
		"no-global-assign": 2,
		"no-self-assign": 2,
		"no-new-func": 2,
		"no-new-object": 2,
		"no-new-wrappers": 2,
		"no-new": 2,
		"no-octal-escape": 2,
		"no-octal": 2,
		"no-param-reassign": [0, {
			"props": false
		}],
		"no-plusplus": 2,
		"no-process-env": 0,
		"no-proto": 2,
		"no-redeclare": 2,
		"no-return-assign": 1,
		"no-script-url": 2,
		"no-self-compare": 2,
		"no-sequences": 2,
		"no-throw-literal": 1,
		"no-trailing-spaces": [2, {
			"skipBlankLines": true
		}],
		"no-undef": 1,
		"no-undefined": 0,
		"no-unused-expressions": [2, {
			"allowShortCircuit": true,
			"allowTernary": true
		}],
		"no-unused-vars": 1,
		"no-use-before-define": 2,
		"no-useless-call": 0,
		"no-useless-concat": 0,
		"no-var": 2,
		"no-void": 0,
		"no-warning-comments": [
			0, {
				"terms": [
					"todo",
					"fixme",
					"xxx"
				],
				"location": "start"
			}
		],
		"no-with": 2,
		"object-curly-spacing": ["error", "never"],
		"object-shorthand": 2,
		"operator-linebreak": ["error", "before", {
			"overrides": {
				"&&": "ignore",
				"+": "ignore",
				"=": "ignore"
			}
		}],
		"one-var": [1, {
			"initialized": "never",
			"uninitialized": "always"
		}],
		"one-var-declaration-per-line": [2, "initializations"],
		"padded-blocks": ["error", "never"],
		"prefer-const": 2,
		"quotes": [2, "double"],
		"quote-props": ["error", "as-needed"],
		"radix": 2,
		"semi": ["error", "always"],
		"sort-vars": 1,
		"space-before-blocks": 2,
		"space-before-function-paren": ["error", {
			"anonymous": "always",
			"named": "ignore",
			"asyncArrow": "ignore"
		}],
		"spaced-comment": ["error", "always", {
			"line": {
				"exceptions": ["-"]
			},
			"block": {
				"markers": ["!"],
				"exceptions": ["-"],
				"balanced": true
			}
		}],
		"space-infix-ops": 2,
		"space-in-parens": ["error", "never"],
		"space-unary-ops": [2, {
			"words": true,
			"nonwords": false
		}],
		"valid-jsdoc": "error",
		"vars-on-top": 0,
		"wrap-iife": [2, "outside"],
		"yoda": 2
	}
}
