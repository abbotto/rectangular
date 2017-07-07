"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postcss = require("postcss");
class CSSModulesClass {
    constructor(options = {}) {
        this.test = /\.css$/;
        this.useDefault = true;
        this.options = options;
        if (this.options.useDefault !== undefined) {
            this.useDefault = this.options.useDefault;
        }
    }
    init(context) {
        context.allowExtension(".css");
    }
    transform(file) {
        file.addStringDependency("fuse-box-css");
        return new Promise((resolve, reject) => {
            file.loadContents();
            return postcss([
                require('postcss-modules')({
                    root: file.info.absDir,
                    getJSON: (cssFileName, json) => {
                        let exportsKey = this.useDefault ? "module.exports.default" : "module.exports";
                        file.addAlternativeContent(`${exportsKey} = ${JSON.stringify(json)};`);
                    }
                })
            ]).process(file.contents, {})
                .then(result => {
                file.contents = result.css;
                return resolve();
            });
        });
    }
}
exports.CSSModulesClass = CSSModulesClass;
exports.CSSModules = (options) => {
    return new CSSModulesClass(options);
};
