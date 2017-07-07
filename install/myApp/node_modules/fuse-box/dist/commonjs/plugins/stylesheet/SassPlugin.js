"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const Config_1 = require("../../Config");
let sass;
class SassPluginClass {
    constructor(options = {}) {
        this.options = options;
        this.test = /\.(scss|sass)$/;
    }
    init(context) {
        context.allowExtension(".scss");
        context.allowExtension(".sass");
        this.context = context;
    }
    transform(file) {
        file.addStringDependency("fuse-box-css");
        const context = file.context;
        if (context.useCache && this.options.cache) {
            let cached = context.cache.getStaticCache(file);
            if (cached) {
                if (cached.sourceMap) {
                    file.sourceMap = cached.sourceMap;
                }
                file.isLoaded = true;
                file.contents = cached.contents;
                return;
            }
        }
        file.loadContents();
        if (!file.contents) {
            return;
        }
        if (!sass) {
            sass = require("node-sass");
        }
        const defaultMacro = {
            "$homeDir": file.context.homeDir,
            "$appRoot": context.appRoot,
            "~": Config_1.Config.NODE_MODULES_DIR + "/",
        };
        const options = Object.assign({
            data: file.contents,
            sourceMap: true,
            outFile: file.info.fuseBoxPath,
            sourceMapContents: true
        }, this.options);
        options.includePaths = [];
        if (typeof this.options.includePaths !== "undefined") {
            this.options.includePaths.forEach((path) => {
                options.includePaths.push(path);
            });
        }
        options.macros = Object.assign(defaultMacro, this.options.macros || {});
        if (this.options.importer === true) {
            options.importer = (url, prev, done) => {
                if (/https?:/.test(url)) {
                    return done({ url });
                }
                for (let key in options.macros) {
                    if (options.macros.hasOwnProperty(key)) {
                        url = url.replace(key, options.macros[key]);
                    }
                }
                done({ file: path.normalize(url) });
            };
        }
        options.includePaths.push(file.info.absDir);
        return new Promise((resolve, reject) => {
            return sass.render(options, (err, result) => {
                if (err) {
                    file.contents = "";
                    console.log(err.stack || err);
                    return resolve();
                }
                file.sourceMap = result.map && result.map.toString();
                file.contents = result.css.toString();
                if (context.useCache && this.options.cache) {
                    context.cache.writeStaticCache(file, file.sourceMap);
                }
                return resolve();
            });
        });
    }
}
exports.SassPluginClass = SassPluginClass;
exports.SassPlugin = (options) => {
    return new SassPluginClass(options);
};
