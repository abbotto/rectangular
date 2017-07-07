"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function xmlhttp(path, cb) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                var contentType = xmlhttp.getResponseHeader("Content-Type");
                cb(null, xmlhttp);
            }
            else {
                cb(path + " was not found upon request'");
            }
        }
    };
    xmlhttp.open("GET", path, true);
    xmlhttp.send();
}
exports.xmlhttp = xmlhttp;
function lazyLoad(name) {
    return new Promise(function (resolve, reject) {
        var cfg = FuseBox.global("__fsbx__bundles__");
        var info = cfg.bundles[name];
        var moduleFound = false;
        if (!info) {
            return FuseBox.import(name, function (module) {
                return resolve(module);
            });
        }
        if (!info) {
            return reject({ message: "Name " + name + " is not registered in FuseBox" });
        }
        var main = "~/" + info.main;
        if (FuseBox.exists(main)) {
            return resolve(FuseBox.import(main));
        }
        else {
            if (FuseBox.isBrowser) {
                if (!cfg.browser.match(/\/$/)) {
                    cfg.browser += "/";
                }
                var targetBrowserPath = cfg.browser + info.file;
                xmlhttp(targetBrowserPath, function (e, res) {
                    if (e) {
                        return reject(e);
                    }
                    new Function(res.responseText)();
                    resolve(FuseBox.import(main));
                });
            }
            else {
                var serverPathLib = "path";
                var path = require(serverPathLib);
                var target = path.resolve(cfg.server, info.file);
                console.log("Load " + name + "  -> " + target);
                require(target);
                resolve(FuseBox.import(main));
            }
        }
    });
}
exports.lazyLoad = lazyLoad;
