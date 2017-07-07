"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FuseBoxIsServerCondition {
    constructor(file, ast, astProp, idx) {
        this.file = file;
        this.ast = ast;
        this.astProp = astProp;
        this.idx = idx;
    }
    setFunctionName(name) {
        let target = this.ast[this.astProp];
        if (target instanceof Array && this.idx !== undefined) {
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
exports.FuseBoxIsServerCondition = FuseBoxIsServerCondition;
