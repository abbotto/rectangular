"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const Utils_1 = require("../Utils");
class WebIndexPluginClass {
    constructor(opts) {
        this.opts = opts;
    }
    producerEnd(producer) {
        let bundlePaths = [];
        let bundles = producer.sortBundles();
        bundles.forEach((bundle) => {
            let pass = true;
            if (this.opts.bundles) {
                if (this.opts.bundles.indexOf(bundle.name) === -1) {
                    pass = false;
                }
            }
            pass = pass && bundle.webIndexed;
            if (pass) {
                const output = bundle.context.output;
                if (output && output.lastPrimaryOutput) {
                    bundlePaths.push(Utils_1.joinFuseBoxPath(this.opts.path ? this.opts.path : "/", output.folderFromBundleName || "/", output.lastPrimaryOutput.filename));
                }
            }
        });
        let html = `<!DOCTYPE html>
<html>
<head>
    <title>$title</title>
    $charset
    $description
    $keywords
    $author
</head>
<body>
    $bundles
</body>
</html>`;
        if (this.opts.template) {
            let filePath = Utils_1.ensureAbsolutePath(this.opts.template);
            html = fs.readFileSync(filePath).toString();
        }
        let jsTags = bundlePaths.map(bundle => `<script ${this.opts.async ? 'async' : ''} type="text/javascript" src="${bundle}"></script>`).join("\n");
        let macro = {
            title: this.opts.title ? this.opts.title : "",
            charset: this.opts.charset ? `<meta charset="${this.opts.charset}">` : "",
            description: this.opts.description ? `<meta name="description" content="${this.opts.description}">` : "",
            keywords: this.opts.keywords ? `<meta name="keywords" content="${this.opts.keywords}">` : "",
            author: this.opts.author ? `<meta name="author" content="${this.opts.author}">` : "",
            bundles: jsTags
        };
        for (let key in macro) {
            html = html.replace('$' + key, macro[key]);
        }
        producer.fuse.context
            .output.write(this.opts.target || "index.html", html, true);
    }
}
exports.WebIndexPluginClass = WebIndexPluginClass;
;
exports.WebIndexPlugin = (opts) => {
    return new WebIndexPluginClass(opts || {});
};
