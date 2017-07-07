"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let postcss;
class PostCSSPluginClass {
    constructor(processors = [], options) {
        this.processors = processors;
        this.options = options;
        this.test = /\.css$/;
        this.dependencies = [];
    }
    init(context) {
        context.allowExtension(".css");
    }
    transform(file) {
        file.addStringDependency("fuse-box-css");
        file.loadContents();
        if (!postcss) {
            postcss = require("postcss");
        }
        return postcss(this.processors)
            .process(file.contents, this.options)
            .then(result => {
            file.contents = result.css;
            return result.css;
        });
    }
}
exports.PostCSSPluginClass = PostCSSPluginClass;
exports.PostCSS = (processors, opts) => {
    return new PostCSSPluginClass(processors, opts);
};
