"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FlatFileGenerator {
    constructor(core, bundleAbstraction) {
        this.core = core;
        this.bundleAbstraction = bundleAbstraction;
        this.contents = [];
    }
    addGlobal(code) {
        this.contents.push(code);
    }
    init() {
        if (this.core.opts.isTargetBrowser() || this.core.opts.isTargetUniveral()) {
            if (this.core.opts.isContained()) {
                this.contents.push("(function(){\n/*$$CONTAINED_API_PLACEHOLDER$$*/");
            }
            else {
                this.contents.push("(function($fsx){");
            }
        }
        else {
            if (this.core.opts.isContained()) {
                this.contents.push("/*$$CONTAINED_API_PLACEHOLDER$$*/");
            }
        }
    }
    addFile(file, ensureES5 = false) {
        if (file.canBeRemoved) {
            return;
        }
        let args = [];
        if (file.isExportInUse()) {
            args.push("module");
        }
        if (file.isExportStatementInUse()) {
            args.push("exports");
        }
        if (args.length) {
            file.wrapWithFunction(args);
        }
        let fileId = file.getID();
        if (file.isEntryPoint) {
            this.entryId = fileId;
            this.globalsName = file.globalsName;
        }
        this.contents.push(`// ${file.packageAbstraction.name}/${file.fuseBoxPath}`);
        this.contents.push(`$fsx.f[${JSON.stringify(fileId)}] = ${file.generate(ensureES5)}`);
    }
    addHoistedVariables() {
        this.bundleAbstraction.hoisted.forEach((item, key) => {
            this.contents.push(`var ${key} = $fsx.r(${item.getID()});`);
        });
    }
    render() {
        if (this.bundleAbstraction) {
            this.addHoistedVariables();
        }
        if (this.entryId !== undefined) {
            const req = `$fsx.r(${JSON.stringify(this.entryId)})`;
            if (this.globalsName) {
                if (this.core.opts.isTargetServer()) {
                    this.contents.push(`module.exports = ${req}`);
                }
                if (this.core.opts.isTargetBrowser()) {
                    if (this.globalsName === "*") {
                        this.contents.push(`var r = ${req}`);
                        this.contents.push(`if (r){for(var i in r){ window[i] = r[i] }}`);
                    }
                    else {
                        this.contents.push(`window['${this.globalsName}']=${req}`);
                    }
                }
            }
            else {
                this.contents.push(req);
            }
        }
        if (this.core.opts.isTargetBrowser() || this.core.opts.isTargetUniveral()) {
            if (this.core.opts.isContained()) {
                this.contents.push("})();");
            }
            else {
                this.contents.push("})($fsx);");
            }
        }
        return this.contents.join("\n");
    }
}
exports.FlatFileGenerator = FlatFileGenerator;
