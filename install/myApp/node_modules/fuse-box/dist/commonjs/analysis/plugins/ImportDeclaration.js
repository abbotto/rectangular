"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ImportDeclaration {
    static onNode(file, node, parent) {
        const analysis = file.analysis;
        if (node.type === "CallExpression" && node.callee) {
            if (node.callee.type === "Identifier" && node.callee.name === "require") {
                let arg1 = node.arguments[0];
                if (analysis.nodeIsString(arg1)) {
                    let requireStatement = this.handleAliasReplacement(file, arg1.value);
                    arg1.value = requireStatement;
                    analysis.addDependency(requireStatement);
                }
            }
        }
        if (node.type === "ExportAllDeclaration") {
            file.es6module = true;
            analysis.addDependency(node.source.value);
        }
        if (node.type === "ImportDeclaration" || node.type === "ExportNamedDeclaration") {
            if (!file.context.rollupOptions) {
                file.es6module = true;
            }
            if (node.source && analysis.nodeIsString(node.source)) {
                let requireStatement = this.handleAliasReplacement(file, node.source.value);
                node.source.value = requireStatement;
                analysis.addDependency(requireStatement);
            }
        }
    }
    static onEnd(file) {
        if (file.es6module) {
            file.context.log.magicReason('used typescript to compile because an import was used', file.info.fuseBoxPath);
            const ts = require("typescript");
            let tsconfg = {
                compilerOptions: {
                    module: "commonjs",
                    target: "es5"
                },
            };
            ;
            let result = ts.transpileModule(file.contents, tsconfg);
            file.contents = result.outputText;
        }
    }
    static handleAliasReplacement(file, requireStatement) {
        if (file.collection && file.collection.info && file.collection.info.browserOverrides) {
            const overrides = file.collection.info.browserOverrides;
            if (overrides) {
                let requireStatementWithExt = requireStatement + '.js';
                if (overrides[requireStatement] || overrides[requireStatementWithExt]) {
                    requireStatement = overrides[requireStatement] || overrides[requireStatementWithExt];
                    file.analysis.requiresRegeneration = true;
                }
            }
        }
        if (!file.context.experimentalAliasEnabled) {
            return requireStatement;
        }
        const aliasCollection = file.context.aliasCollection;
        aliasCollection.forEach(props => {
            if (props.expr.test(requireStatement)) {
                requireStatement = requireStatement.replace(props.expr, `${props.replacement}$2`);
                file.analysis.requiresRegeneration = true;
            }
        });
        return requireStatement;
    }
}
exports.ImportDeclaration = ImportDeclaration;
