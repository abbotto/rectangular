import { FileAbstraction } from "./../FileAbstraction";
export declare class FuseBoxIsServerCondition {
    file: FileAbstraction;
    ast: any;
    astProp: any;
    idx: any;
    constructor(file: FileAbstraction, ast: any, astProp: any, idx: any);
    setFunctionName(name: string): void;
}
