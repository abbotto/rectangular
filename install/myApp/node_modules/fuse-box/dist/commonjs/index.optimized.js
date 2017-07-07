"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FuseBox_1 = require("./core/FuseBox");
module.exports = FuseBox_1.FuseBox;
module.exports.FuseBox = FuseBox_1.FuseBox;
function asNeededExport(name, path) {
    Object.defineProperty(module.exports, name, {
        configurable: true,
        enumerable: true,
        get() {
            return require(path);
        },
    });
}
const exporting = {
    ReplacePlugin: "./plugins/ReplacePlugin",
    VuePlugin: "./plugins/VuePlugin",
    ImageBase64Plugin: "./plugins/images/ImageBase64Plugin",
    CSSResourcePlugin: "./plugins/stylesheet/CSSResourcePlugin",
    HotReloadPlugin: "./plugins/HotReloadPlugin",
    EnvPlugin: "./plugins/EnvPlugin",
    ConcatPlugin: "./plugins/ConcatPlugin",
    StylusPlugin: "./plugins/stylesheet/StylusPlugin",
    PostCSS: "./plugins/stylesheet/PostCSSPlugin",
    PostCSSPlugin: "./plugins/stylesheet/PostCSSPlugin",
    TypeScriptHelpers: "./plugins/TypeScriptHelpers",
    SVGPlugin: "./plugins/images/SVGPlugin",
    BabelPlugin: "./plugins/js-transpilers/BabelPlugin",
    BublePlugin: "./plugins/js-transpilers/BublePlugin",
    CoffeePlugin: "./plugins/js-transpilers/CoffeePlugin",
    LESSPlugin: "./plugins/stylesheet/LESSPlugin",
    CSSPlugin: "./plugins/stylesheet/CSSplugin",
    HTMLPlugin: "./plugins/HTMLplugin",
    MarkdownPlugin: "./plugins/Markdownplugin",
    JSONPlugin: "./plugins/JSONplugin",
    BannerPlugin: "./plugins/BannerPlugin",
    SassPlugin: "./plugins/stylesheet/SassPlugin",
    UglifyJSPlugin: "./plugins/UglifyJSPlugin",
    SourceMapPlainJsPlugin: "./plugins/SourceMapPlainJsPlugin",
    RawPlugin: "./plugins/RawPlugin",
    OptimizeJSPlugin: "./plugins/OptimizeJSPlugin",
    Fluent: "./arithmetic/Fluent",
    FuseBox: "./core/FuseBox",
    Sparky: "./sparky/Sparky",
    CSSModules: "./plugins/stylesheet/CSSModules",
    CopyPlugin: "./plugins/CopyPlugin",
    WebIndexPlugin: "./plugins/WebIndexPlugin",
    PlainJSPlugin: "./plugins/PlainJSPlugin",
};
const keys = Object.keys(exporting);
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    asNeededExport(keys[key], exporting[key]);
}
