"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const realm_utils_1 = require("realm-utils");
class EnvironmentConditionModification {
    static perform(core, file) {
        return realm_utils_1.each(file.fuseboxIsServerConditions, (isServerCondition) => {
            if (core.opts.isTargetUniveral()) {
                core.api.addIsServerFunction();
                isServerCondition.setFunctionName("$fsx.cs");
            }
            else {
                if (core.opts.isTargetBrowser()) {
                    isServerCondition.setFunctionName("false");
                }
                if (core.opts.isTargetServer()) {
                    isServerCondition.setFunctionName("true");
                }
            }
        }).then(() => {
            return realm_utils_1.each(file.fuseboxIsBrowserConditions, (isBrowserCondition) => {
                if (core.opts.isTargetUniveral()) {
                    core.api.addIsBrowserFunction();
                    isBrowserCondition.setFunctionName("$fsx.cb");
                }
                else {
                    if (core.opts.isTargetBrowser()) {
                        isBrowserCondition.setFunctionName("true");
                    }
                    if (core.opts.isTargetServer()) {
                        isBrowserCondition.setFunctionName("false");
                    }
                }
            });
        });
    }
}
exports.EnvironmentConditionModification = EnvironmentConditionModification;
