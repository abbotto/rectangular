"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class DynamicImportStatement {
    static onNode(file, node, parent) {
        const analysis = file.analysis;
        if (node.type === "CallExpression" && node.callee) {
            if (node.callee.type === "Identifier" && node.callee.name === "$fsmp$") {
                let arg1 = node.arguments[0];
                if (analysis.nodeIsString(arg1)) {
                    let requireStatement = arg1.value;
                    let resolved = file.collection.pm.resolve(requireStatement, file.info.absDir);
                    if (resolved && resolved.fuseBoxPath && fs.existsSync(resolved.absPath)) {
                        arg1.value = `~/${resolved.fuseBoxPath}`;
                        file.analysis.requiresRegeneration = true;
                    }
                }
            }
        }
    }
    static onEnd() { }
}
exports.DynamicImportStatement = DynamicImportStatement;
