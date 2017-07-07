"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SocketServer_1 = require("./SocketServer");
const Utils_1 = require("../Utils");
const HTTPServer_1 = require("./HTTPServer");
const realm_utils_1 = require("realm-utils");
const process = require("process");
class Server {
    constructor(fuse) {
        this.fuse = fuse;
    }
    start(opts) {
        opts = opts || {};
        let rootDir = this.fuse.context.output.dir;
        const root = opts.root !== undefined
            ? (realm_utils_1.utils.isString(opts.root) ? Utils_1.ensureUserPath(opts.root) : false) : rootDir;
        const port = opts.port || 4444;
        if (opts.hmr !== false && this.fuse.context.useCache === true) {
            setTimeout(() => {
                this.fuse.context.log.echo(`HMR is enabled`);
            }, 1000);
        }
        else {
            setTimeout(() => { this.fuse.context.log.echo(`HMR is disabled. Caching should be enabled and {hmr} option should be NOT false`); }, 1000);
        }
        this.httpServer = new HTTPServer_1.HTTPServer(this.fuse);
        process.nextTick(() => {
            if (opts.httpServer === false) {
                SocketServer_1.SocketServer.startSocketServer(port, this.fuse);
            }
            else {
                this.httpServer.launch({ root, port });
            }
        });
        return this;
    }
}
exports.Server = Server;
