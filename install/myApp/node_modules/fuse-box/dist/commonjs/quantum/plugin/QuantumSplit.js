"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("../../Utils");
class QuantumItem {
    constructor(rule, bundleName, entryFile) {
        this.abstractions = new Set();
        this.expression = Utils_1.string2RegExp(rule);
        this.name = bundleName;
        this.entry = Utils_1.ensurePublicExtension(entryFile);
    }
    getFiles() {
        return this.abstractions;
    }
    addFile(file) {
        this.abstractions.add(file);
    }
    matches(path) {
        return this.expression.test(path);
    }
}
exports.QuantumItem = QuantumItem;
class QuantumSplitConfig {
    constructor(context) {
        this.items = new Set();
        this.resolveOptions = {};
    }
    register(rule, bundleName, entryFile) {
        this.items.add(new QuantumItem(rule, bundleName, entryFile));
    }
    resolve(name) {
        return Utils_1.joinFuseBoxPath(this.resolveOptions.dest ? this.resolveOptions.dest : "", name);
    }
    getItems() {
        return this.items;
    }
    findByEntry(file) {
        let config;
        this.items.forEach(value => {
            if (value.entry === file.fuseBoxPath) {
                config = value;
            }
        });
        return config;
    }
    matches(path) {
        let target;
        this.items.forEach(item => {
            if (item.matches(path)) {
                target = item;
            }
        });
        return target;
    }
}
exports.QuantumSplitConfig = QuantumSplitConfig;
