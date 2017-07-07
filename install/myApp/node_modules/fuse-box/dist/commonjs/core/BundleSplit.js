"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("../Utils");
const FuseBox_1 = require("./FuseBox");
const realm_utils_1 = require("realm-utils");
class SplitConfig {
    constructor() {
        this.files = [];
        this.rules = [];
    }
}
exports.SplitConfig = SplitConfig;
class BundleSplit {
    constructor(bundle) {
        this.bundle = bundle;
        this.bundles = new Map();
        this.browserPath = "/";
        this.dest = "./";
        this.serverPath = `./`;
    }
    addRule(rule, bundleName) {
        const conf = this.bundles.get(bundleName);
        conf.rules.push(Utils_1.string2RegExp(rule));
    }
    createFuseBoxInstance(name, mainFile) {
        const producer = this.bundle.producer;
        const config = Object.assign({}, producer.fuse.opts);
        config.plugins = [].concat(config.plugins || []);
        config.standalone = false;
        const fuse = FuseBox_1.FuseBox.init(config);
        fuse.context.output.setName(Utils_1.joinFuseBoxPath(this.dest, name));
        let conf = new SplitConfig();
        conf.fuse = fuse;
        conf.name = name;
        conf.parent = this.bundle;
        conf.dest = this.dest;
        conf.main = mainFile;
        this.bundles.set(name, conf);
        return fuse;
    }
    getFuseBoxInstance(name, mainFile) {
        if (this.bundles.get(name)) {
            return this.bundles.get(name);
        }
        return this.createFuseBoxInstance(name, mainFile);
    }
    beforeMasterWrite(masterContext) {
        if (!this.bundleBrowserConfig) {
            let localManifest = masterContext.output.getManifest();
            ;
            this.bundleBrowserConfig = localManifest || {
                bundles: {},
                browser: this.browserPath,
                hash: masterContext.output.useHash,
                server: this.serverPath,
            };
        }
        return realm_utils_1.each(this.bundles, (conf, bundleName) => {
            let nchanged = true;
            conf.files.forEach(file => {
                if (!file.cached)
                    nchanged = false;
            });
            if (!this.bundleBrowserConfig.bundles[conf.name] || this.bundleBrowserConfig.hash !== masterContext.output.useHash) {
                nchanged = false;
            }
            if (nchanged) {
                this.bundle.context.log.echo(`Bundle "${conf.name}" is cached`);
            }
            return !nchanged ? conf.fuse.createSplitBundle(conf) : false;
        }).then((configs) => {
            configs.forEach(config => {
                if (config) {
                    let localFileName = config.fuse.context.output.lastPrimaryOutput.filename;
                    this.bundleBrowserConfig.bundles[config.name] = {
                        file: localFileName,
                        main: Utils_1.ensurePublicExtension(config.main)
                    };
                }
            });
            masterContext.source.bundleInfoObject = this.bundleBrowserConfig;
            return masterContext.output.writeManifest(this.bundleBrowserConfig);
        }).then(() => {
            this.bundles.forEach(conf => {
                conf.files = [];
            });
        });
    }
    verify(file) {
        let targetConfg;
        this.bundles.forEach(conf => {
            conf.rules.forEach(rx => {
                if (rx.test(file.info.fuseBoxPath)) {
                    targetConfg = conf;
                }
            });
        });
        if (targetConfg) {
            targetConfg.files.push(file);
            return true;
        }
        return false;
    }
}
exports.BundleSplit = BundleSplit;
