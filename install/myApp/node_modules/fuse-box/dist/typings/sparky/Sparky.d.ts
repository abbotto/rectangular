import { SparkTask } from "./SparkTask";
import { SparkFlow } from "./SparkFlow";
import { SparkyFilePatternOptions } from "./SparkyFilePattern";
import { Log } from "../Log";
export declare const log: Log;
export declare class Sparky {
    static launch: boolean;
    static testMode: boolean;
    static tasks: Map<string, SparkTask>;
    static flush(): void;
    /** Create a new task */
    static task(name: string, ...args: any[]): Sparky;
    static src(glob: string | string[], opts?: SparkyFilePatternOptions): SparkFlow;
    static watch(glob: string | string[], opts?: SparkyFilePatternOptions): SparkFlow;
    static start(tname?: string): Promise<any>;
    private static execute(result);
    private static resolve(name);
}
