import { SparkyFile } from "./SparkyFile";
import { SparkyFilePatternOptions } from "./SparkyFilePattern";
export declare class SparkFlow {
    private activities;
    private watcher;
    private files;
    private completedCallback;
    private initialWatch;
    constructor();
    glob(globs: string[], opts?: SparkyFilePatternOptions): SparkFlow;
    stopWatching(): void;
    watch(globs: string[], opts?: SparkyFilePatternOptions): SparkFlow;
    completed(fn: any): SparkFlow;
    /** Gets all user files */
    protected getFiles(globs: string[], opts?: SparkyFilePatternOptions): Promise<SparkyFile[]>;
    protected getFile(globString: any, opts?: SparkyFilePatternOptions): Promise<{}>;
    /**
     * Removes folder if exists
     * @param dest
     */
    clean(dest: string): SparkFlow;
    plugin(plugin: Plugin): SparkFlow;
    file(mask: string, fn: any): this;
    dest(dest: string): SparkFlow;
    exec(): Promise<void>;
}
