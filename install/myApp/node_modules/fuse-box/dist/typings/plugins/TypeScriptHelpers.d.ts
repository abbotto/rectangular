import { File } from "../core/File";
import { WorkFlowContext, Plugin } from "../core/WorkflowContext";
export interface TypeScriptHelpersOptions {
}
/**
 *
 *
 * @export
 * @class FuseBoxTypeScriptHelpersPlugin
 * @implements {Plugin}
 */
export declare class TypeScriptHelpersClass implements Plugin {
    /**
     *
     *
     * @type {RegExp}
     * @memberOf FuseBoxTypeScriptHelpersPlugin
     */
    test: RegExp;
    private registeredHelpers;
    constructor(opts?: TypeScriptHelpersOptions);
    /**
     *
     *
     * @param {WorkFlowContext} context
     *
     * @memberOf FuseBoxTypeScriptHelpersPlugin
     */
    init(context: WorkFlowContext): void;
    bundleEnd(context: WorkFlowContext): void;
    /**
     *
     *
     * @param {File} file
     *
     * @memberOf FuseBoxTypeScriptHelpersPlugin
     */
    transform(file: File): void;
}
export declare let TypeScriptHelpers: (options?: TypeScriptHelpersOptions) => TypeScriptHelpersClass;
