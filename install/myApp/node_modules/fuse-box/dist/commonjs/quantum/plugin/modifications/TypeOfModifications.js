"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const realm_utils_1 = require("realm-utils");
class TypeOfModifications {
    static perform(core, file) {
        return realm_utils_1.each(file.typeofExportsKeywords, (keyword) => {
            keyword.replaceWithString("object");
        }).then(() => {
            return realm_utils_1.each(file.typeofModulesKeywords, (keyword) => {
                keyword.replaceWithString("object");
            });
        }).then(() => {
            return realm_utils_1.each(file.typeofGlobalKeywords, (keyword) => {
                if (core.opts.isTargetBrowser()) {
                    keyword.replaceWithString("undefined");
                }
                if (core.opts.isTargetServer()) {
                    keyword.replaceWithString("object");
                }
            });
        }).then(() => {
            return realm_utils_1.each(file.typeofWindowKeywords, (keyword) => {
                if (core.opts.isTargetBrowser()) {
                    keyword.replaceWithString("object");
                }
                if (core.opts.isTargetServer()) {
                    keyword.replaceWithString("undefined");
                }
            });
        }).then(() => {
            return realm_utils_1.each(file.typeofDefineKeywords, (keyword) => {
                keyword.replaceWithString("undefined");
            });
        }).then(() => {
            return realm_utils_1.each(file.typeofRequireKeywords, (keyword) => {
                keyword.replaceWithString("function");
            });
        });
    }
}
exports.TypeOfModifications = TypeOfModifications;
