"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SparkTask_1 = require("./SparkTask");
const SparkFlow_1 = require("./SparkFlow");
const realm_utils_1 = require("realm-utils");
const WorkflowContext_1 = require("../core/WorkflowContext");
const Log_1 = require("../Log");
const context = new WorkflowContext_1.WorkFlowContext();
context.doLog = process.env.SPARKY_LOG !== 'false';
exports.log = new Log_1.Log(context);
class Sparky {
    static flush() {
        this.tasks = new Map();
    }
    static task(name, ...args) {
        let callback;
        let dependencies = [];
        if (arguments.length === 2) {
            callback = arguments[1];
        }
        if (arguments.length === 3) {
            dependencies = [].concat(arguments[1]);
            callback = arguments[2];
        }
        this.tasks.set(name, new SparkTask_1.SparkTask(name, dependencies, callback));
        if (this.launch === false && this.testMode === false) {
            this.launch = true;
            process.nextTick(() => this.start());
        }
        return this;
    }
    static src(glob, opts) {
        const flow = new SparkFlow_1.SparkFlow();
        let globs = Array.isArray(glob) ? glob : [glob];
        return flow.glob(globs, opts);
    }
    static watch(glob, opts) {
        const flow = new SparkFlow_1.SparkFlow();
        let globs = Array.isArray(glob) ? glob : [glob];
        return flow.watch(globs, opts);
    }
    static start(tname) {
        const taskName = tname || process.argv[2] || "default";
        if (!this.tasks.get(taskName)) {
            exports.log.echoWarning(`Task with such name ${taskName} was not found!`);
            return Promise.reject("Task not found");
        }
        const task = this.tasks.get(taskName);
        exports.log.echoHeader(`Launch "${taskName}"`);
        return Promise.all([
            Promise.all(task.parallelDependencies.map(name => this.resolve(name))),
            realm_utils_1.each(task.waterfallDependencies, name => this.resolve(name))
        ]).then(() => {
            return this.execute(task.fn());
        });
    }
    static execute(result) {
        if (result instanceof SparkFlow_1.SparkFlow) {
            return result.exec();
        }
        return result;
    }
    static resolve(name) {
        if (!this.tasks.get(name)) {
            return exports.log.echoWarning(`Task with such name ${name} was not found!`);
        }
        exports.log.echoHeader(` Resolve "${name}"`);
        return this.start(name);
    }
}
Sparky.launch = false;
Sparky.testMode = false;
Sparky.tasks = new Map();
exports.Sparky = Sparky;
