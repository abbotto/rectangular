"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const realm_utils_1 = require("realm-utils");
class DynamicImportStatementsModifications {
    static perform(core, file) {
        return realm_utils_1.each(file.dynamicImportStatements, (statement) => {
            let target = statement.resolve();
            if (target) {
                const splitConfig = core.context.quantumSplitConfig;
                if (splitConfig) {
                    const config = splitConfig.findByEntry(target);
                    if (config) {
                        statement.setValue(config.name);
                        core.api.considerStatement(statement);
                    }
                }
                else {
                }
            }
            else {
                core.api.considerStatement(statement);
            }
            statement.setFunctionName('$fsx.l');
        });
    }
}
exports.DynamicImportStatementsModifications = DynamicImportStatementsModifications;
