"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const realm_utils_1 = require("realm-utils");
class FuseBoxIsBrowserCondition {
    constructor(file, ast, astProp, idx) {
        this.file = file;
        this.ast = ast;
        this.astProp = astProp;
        this.idx = idx;
    }
    setFunctionName(name) {
        let target = this.ast[this.astProp];
        if (realm_utils_1.utils.isArray(target) && this.idx) {
            this.ast[this.astProp][this.idx] = {
                type: "Identifier",
                name: name
            };
        }
        else {
            this.ast[this.astProp] = {
                type: "Identifier",
                name: name
            };
        }
    }
}
exports.FuseBoxIsBrowserCondition = FuseBoxIsBrowserCondition;
