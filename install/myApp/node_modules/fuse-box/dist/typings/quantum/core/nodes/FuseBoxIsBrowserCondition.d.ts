import { FileAbstraction } from "./../FileAbstraction";
export declare class FuseBoxIsBrowserCondition {
    file: FileAbstraction;
    ast: any;
    astProp: any;
    idx: any;
    constructor(file: FileAbstraction, ast: any, astProp: any, idx: any);
    setFunctionName(name: string): void;
}
