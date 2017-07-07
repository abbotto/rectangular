export declare class SparkTask {
    name: string;
    fn: any;
    parallelDependencies: string[];
    waterfallDependencies: string[];
    constructor(name: string, dependencies: string[], fn: any);
}
