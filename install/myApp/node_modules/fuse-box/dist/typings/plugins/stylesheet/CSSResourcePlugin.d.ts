import { File } from "../../core/File";
import { Plugin, WorkFlowContext } from "../../core/WorkflowContext";
export interface CSSResourcePluginOptions {
    dist?: string;
    inline?: boolean;
    resolve?: (path: string) => any;
    macros?: any;
    resolveMissing?: any;
}
/**
 * @export
 * @class RawPluginClass
 * @implements {Plugin}
 */
export declare class CSSResourcePluginClass implements Plugin {
    test: RegExp;
    distFolder: string;
    inlineImages: boolean;
    macros: any;
    resolveMissingFn: any;
    constructor(opts?: CSSResourcePluginOptions);
    init(context: WorkFlowContext): void;
    resolveFn: (p: any) => string;
    createResouceFolder(file: File): void;
    transform(file: File): any;
}
export declare const CSSResourcePlugin: (options?: CSSResourcePluginOptions) => CSSResourcePluginClass;
