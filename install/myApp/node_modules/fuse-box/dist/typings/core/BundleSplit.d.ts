import { File } from "./File";
import { Bundle } from "./Bundle";
import { FuseBox } from "./FuseBox";
import { WorkFlowContext } from "./WorkflowContext";
export declare class SplitConfig {
    fuse: FuseBox;
    name: string;
    main: string;
    dest: string;
    parent: Bundle;
    files: File[];
    rules: RegExp[];
}
export declare class BundleSplit {
    bundle: Bundle;
    bundles: Map<string, SplitConfig>;
    browserPath: string;
    dest: string;
    serverPath: string;
    bundleBrowserConfig: any;
    constructor(bundle: Bundle);
    addRule(rule: string, bundleName: string): void;
    /**
     *
     * @param name
     */
    createFuseBoxInstance(name: string, mainFile: string): FuseBox;
    getFuseBoxInstance(name: string, mainFile: string): FuseBox | SplitConfig;
    beforeMasterWrite(masterContext: WorkFlowContext): Promise<any>;
    /**
     * Checks if a file should go to a master bundle
     * If not puts it to a target bundle
     * @param file File
     */
    verify(file: File): boolean;
}
