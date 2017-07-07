import { File } from "../../core/File";
import { WorkFlowContext } from "./../../core/WorkflowContext";
import { Plugin } from "../../core/WorkflowContext";
export interface LESSPluginOptions {
    sourceMap?: any;
}
export interface LESSPluginInternalOpts {
    filename?: string;
}
/**
 * @export
 * @class LESSPluginClass
 * @implements {Plugin}
 */
export declare class LESSPluginClass implements Plugin {
    /**
     * @type {RegExp}
     * @memberOf LESSPluginClass
     */
    test: RegExp;
    options: LESSPluginOptions & LESSPluginInternalOpts;
    constructor(options?: LESSPluginOptions);
    init(context: WorkFlowContext): void;
    /**
     * @param {File} file
     * @memberOf LESSPluginClass
     */
    transform(file: File): any;
}
export declare const LESSPlugin: (opts?: LESSPluginOptions) => LESSPluginClass;
