import { File } from "../../core/File";
import { WorkFlowContext } from "../../core/WorkflowContext";
import { Plugin } from "../../core/WorkflowContext";
export interface CSSModulesOptions {
    useDefault?: boolean;
}
export declare class CSSModulesClass implements Plugin {
    test: RegExp;
    options: CSSModulesOptions;
    useDefault: boolean;
    constructor(options?: CSSModulesOptions);
    init(context: WorkFlowContext): void;
    transform(file: File): Promise<any>;
}
export declare const CSSModules: (options?: CSSModulesOptions) => CSSModulesClass;
