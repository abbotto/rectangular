"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const process = require("process");
const realm_utils_1 = require("realm-utils");
const Utils_1 = require("./../Utils");
const ShimCollection_1 = require("./../ShimCollection");
const Server_1 = require("./../devServer/Server");
const JSONplugin_1 = require("./../plugins/JSONplugin");
const PathMaster_1 = require("./PathMaster");
const WorkflowContext_1 = require("./WorkflowContext");
const CollectionSource_1 = require("./../CollectionSource");
const Arithmetic_1 = require("./../arithmetic/Arithmetic");
const ModuleCollection_1 = require("./ModuleCollection");
const MagicalRollup_1 = require("../rollup/MagicalRollup");
const UserOutput_1 = require("./UserOutput");
const BundleProducer_1 = require("./BundleProducer");
const Bundle_1 = require("./Bundle");
const isWin = /^win/.test(process.platform);
const appRoot = require("app-root-path");
class FuseBox {
    constructor(opts) {
        this.opts = opts;
        this.producer = new BundleProducer_1.BundleProducer(this);
        this.context = new WorkflowContext_1.WorkFlowContext();
        this.context.fuse = this;
        this.collectionSource = new CollectionSource_1.CollectionSource(this.context);
        opts = opts || {};
        let homeDir = appRoot.path;
        if (opts.target !== undefined) {
            this.context.target = opts.target;
        }
        if (opts.experimentalFeatures !== undefined) {
            this.context.experimentalFeaturesEnabled = opts.experimentalFeatures;
        }
        if (opts.homeDir) {
            homeDir = Utils_1.ensureUserPath(opts.homeDir);
        }
        if (opts.debug !== undefined) {
            this.context.debugMode = opts.debug;
        }
        if (opts.ignoreModules) {
            this.context.ignoreGlobal = opts.ignoreModules;
        }
        this.context.debugMode = opts.debug !== undefined ? opts.debug : Utils_1.contains(process.argv, "--debug");
        if (opts.modulesFolder) {
            this.context.customModulesFolder =
                Utils_1.ensureUserPath(opts.modulesFolder);
        }
        if (opts.tsConfig) {
            this.context.tsConfig = opts.tsConfig;
        }
        if (opts.sourceMaps) {
            this.context.setSourceMapsProperty(opts.sourceMaps);
        }
        this.context.plugins = opts.plugins || [JSONplugin_1.JSONPlugin()];
        if (opts.package) {
            if (realm_utils_1.utils.isPlainObject(opts.package)) {
                const packageOptions = opts.package;
                this.context.defaultPackageName = packageOptions.name || "default";
                this.context.defaultEntryPoint = packageOptions.main;
            }
            else {
                this.context.defaultPackageName = opts.package;
            }
        }
        if (opts.cache !== undefined) {
            this.context.useCache = opts.cache ? true : false;
        }
        if (opts.log !== undefined) {
            this.context.doLog = opts.log;
            this.context.log.printLog = opts.log;
        }
        if (opts.hash !== undefined) {
            this.context.hash = opts.hash;
        }
        if (opts.alias) {
            this.context.addAlias(opts.alias);
        }
        this.context.initAutoImportConfig(opts.natives, opts.autoImport);
        if (opts.globals) {
            this.context.globals = opts.globals;
        }
        if (opts.shim) {
            this.context.shim = opts.shim;
        }
        if (opts.standalone !== undefined) {
            this.context.standaloneBundle = opts.standalone;
        }
        if (opts.rollup) {
            this.context.rollupOptions = opts.rollup;
        }
        if (opts.customAPIFile) {
            this.context.customAPIFile = opts.customAPIFile;
        }
        this.context.setHomeDir(homeDir);
        if (opts.cache !== undefined) {
            this.context.setUseCache(opts.cache);
        }
        this.virtualFiles = opts.files;
        if (opts.output) {
            this.context.output = new UserOutput_1.UserOutput(this.context, opts.output);
        }
        this.compareConfig(this.opts);
    }
    static init(opts) {
        return new FuseBox(opts);
    }
    triggerPre() {
        this.context.triggerPluginsMethodOnce("preBundle", [this.context]);
    }
    triggerStart() {
        this.context.triggerPluginsMethodOnce("bundleStart", [this.context]);
    }
    triggerEnd() {
        this.context.triggerPluginsMethodOnce("bundleEnd", [this.context]);
    }
    triggerPost() {
        this.context.triggerPluginsMethodOnce("postBundle", [this.context]);
    }
    copy() {
        const config = Object.assign({}, this.opts);
        config.plugins = [].concat(config.plugins || []);
        return FuseBox.init(config);
    }
    bundle(name, arithmetics) {
        let fuse = this.copy();
        const bundle = new Bundle_1.Bundle(name, fuse, this.producer);
        bundle.arithmetics = arithmetics;
        this.producer.add(name, bundle);
        return bundle;
    }
    dev(opts, fn) {
        opts = opts || {};
        opts.port = opts.port || 4444;
        this.producer.devServerOptions = opts;
        this.producer.runner.bottom(() => {
            let server = new Server_1.Server(this);
            server.start(opts);
            if (fn) {
                fn(server);
            }
        });
    }
    register(packageName, opts) {
        this.producer.runner.top(() => {
            return this.producer.register(packageName, opts);
        });
    }
    run(opts) {
        return this.producer.run(opts);
    }
    compareConfig(config) {
        if (!this.context.useCache)
            return;
        const mainStr = fs.readFileSync(require.main.filename, "utf8");
        if (this.context.cache) {
            const configPath = path.resolve(this.context.cache.cacheFolder, "config.json");
            if (fs.existsSync(configPath)) {
                const storedConfigStr = fs.readFileSync(configPath, "utf8");
                if (storedConfigStr !== mainStr)
                    this.context.nukeCache();
            }
            if (isWin)
                fs.writeFileSync(configPath, mainStr);
            else
                fs.writeFile(configPath, mainStr, () => { });
        }
    }
    createSplitBundle(conf) {
        let files = conf.files;
        let defaultCollection = new ModuleCollection_1.ModuleCollection(this.context, this.context.defaultPackageName);
        defaultCollection.pm = new PathMaster_1.PathMaster(this.context, this.context.homeDir);
        this.context.reset();
        const bundleData = new Arithmetic_1.BundleData();
        this.context.source.init();
        bundleData.entry = "";
        this.context.log.subBundleStart(this.context.output.filename, conf.parent.name);
        return defaultCollection.resolveSplitFiles(files).then(() => {
            return this.collectionSource.get(defaultCollection).then((cnt) => {
                this.context.log.echoDefaultCollection(defaultCollection, cnt);
            });
        }).then(() => {
            return new Promise((resolve, reject) => {
                this.context.source.finalize(bundleData);
                this.triggerEnd();
                this.triggerPost();
                this.context.writeOutput(() => {
                    return resolve(conf);
                });
            });
        });
    }
    process(bundleData, bundleReady) {
        let bundleCollection = new ModuleCollection_1.ModuleCollection(this.context, this.context.defaultPackageName);
        bundleCollection.pm = new PathMaster_1.PathMaster(this.context, bundleData.homeDir);
        if (bundleData.typescriptMode) {
            this.context.tsMode = true;
            bundleCollection.pm.setTypeScriptMode();
        }
        let self = this;
        return bundleCollection.collectBundle(bundleData).then(module => {
            this.context.log.bundleStart(this.context.bundle.name);
            return realm_utils_1.chain(class extends realm_utils_1.Chainable {
                constructor() {
                    super(...arguments);
                    this.globalContents = [];
                }
                setDefaultCollection() {
                    return bundleCollection;
                }
                addDefaultContents() {
                    return self.collectionSource.get(this.defaultCollection).then((cnt) => {
                        self.context.log.echoDefaultCollection(this.defaultCollection, cnt);
                    });
                }
                addNodeModules() {
                    return realm_utils_1.each(self.context.nodeModules, (collection) => {
                        if (collection.cached || (collection.info && !collection.info.missing)) {
                            return self.collectionSource.get(collection).then((cnt) => {
                                self.context.log.echoCollection(collection, cnt);
                                if (!collection.cachedName && self.context.useCache) {
                                    self.context.cache.set(collection.info, cnt);
                                }
                                this.globalContents.push(cnt);
                            });
                        }
                    });
                }
                format() {
                    return {
                        contents: this.globalContents,
                    };
                }
            }).then(() => {
                if (self.context.bundle && self.context.bundle.bundleSplit) {
                    return self.context.bundle.bundleSplit.beforeMasterWrite(self.context);
                }
            }).then(result => {
                let self = this;
                const rollup = this.handleRollup();
                if (rollup) {
                    self.context.source.finalize(bundleData);
                    rollup().then(() => {
                        self.context.log.end();
                        this.triggerEnd();
                        this.triggerPost();
                        this.context.writeOutput(bundleReady);
                        return self.context.source.getResult();
                    });
                }
                else {
                    self.context.log.end();
                    this.triggerEnd();
                    self.context.source.finalize(bundleData);
                    this.triggerPost();
                    this.context.writeOutput(bundleReady);
                    return self.context.source.getResult();
                }
            });
        });
    }
    handleRollup() {
        if (this.context.rollupOptions) {
            return () => {
                let rollup = new MagicalRollup_1.MagicalRollup(this.context);
                return rollup.parse();
            };
        }
        else {
            return false;
        }
    }
    addShims() {
        let shim = this.context.shim;
        if (shim) {
            for (let name in shim) {
                if (shim.hasOwnProperty(name)) {
                    let data = shim[name];
                    if (data.exports) {
                        let shimedCollection = ShimCollection_1.ShimCollection.create(this.context, name, data.exports);
                        this.context.addNodeModule(name, shimedCollection);
                        if (data.source) {
                            let source = Utils_1.ensureUserPath(data.source);
                            let contents = fs.readFileSync(source).toString();
                            this.context.source.addContent(contents);
                        }
                    }
                }
            }
        }
    }
    initiateBundle(str, bundleReady) {
        this.context.reset();
        this.context.defer.lock();
        this.triggerPre();
        this.context.source.init();
        this.addShims();
        this.triggerStart();
        let parser = Arithmetic_1.Arithmetic.parse(str);
        let bundle;
        return Arithmetic_1.Arithmetic.getFiles(parser, this.virtualFiles, this.context.homeDir).then(data => {
            bundle = data;
            if (bundle.tmpFolder) {
                this.context.homeDir = bundle.tmpFolder;
            }
            if (bundle.standalone !== undefined) {
                this.context.debug("Arithmetic", `Override standalone ${bundle.standalone}`);
                this.context.standaloneBundle = bundle.standalone;
            }
            if (bundle.cache !== undefined) {
                this.context.debug("Arithmetic", `Override cache ${bundle.cache}`);
                this.context.useCache = bundle.cache;
            }
            return this.process(data, bundleReady);
        }).then((contents) => {
            bundle.finalize();
            return contents;
        }).catch(e => {
            console.log(e.stack || e);
        });
    }
}
exports.FuseBox = FuseBox;
process.on('unhandledRejection', (reason, promise) => {
    console.log(reason.stack);
});
