import { FileAbstraction } from "../core/FileAbstraction";
import { QuantumCore } from "./QuantumCore";
import { BundleAbstraction } from "../core/BundleAbstraction";
export declare class FlatFileGenerator {
    core: QuantumCore;
    bundleAbstraction: BundleAbstraction;
    contents: any[];
    entryId: any;
    globalsName: string;
    constructor(core: QuantumCore, bundleAbstraction?: BundleAbstraction);
    addGlobal(code: string): void;
    init(): void;
    addFile(file: FileAbstraction, ensureES5?: boolean): void;
    addHoistedVariables(): void;
    render(): string;
}
