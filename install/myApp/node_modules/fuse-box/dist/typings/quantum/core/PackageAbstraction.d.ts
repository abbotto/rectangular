import { BundleAbstraction } from "./BundleAbstraction";
import { FileAbstraction } from "./FileAbstraction";
export declare class PackageAbstraction {
    name: string;
    bundleAbstraction: BundleAbstraction;
    fileAbstractions: Map<string, FileAbstraction>;
    entryFile: string;
    constructor(name: string, bundleAbstraction: BundleAbstraction);
    registerFileAbstraction(fileAbstraction: FileAbstraction): void;
    loadAst(ast: any): void;
}
