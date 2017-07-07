import { FileAbstraction } from "../core/FileAbstraction";
import { WorkFlowContext } from "../../core/WorkflowContext";
export interface QuantumSplitResolveConfiguration {
    browser?: string;
    server?: string;
    dest?: string;
}
export declare class QuantumItem {
    expression: RegExp;
    name: string;
    entry: string;
    entryId: any;
    private abstractions;
    constructor(rule: string, bundleName: string, entryFile: string);
    getFiles(): Set<FileAbstraction>;
    addFile(file: FileAbstraction): void;
    matches(path: string): boolean;
}
export declare class QuantumSplitConfig {
    items: Set<QuantumItem>;
    resolveOptions: QuantumSplitResolveConfiguration;
    constructor(context: WorkFlowContext);
    register(rule: string, bundleName: string, entryFile: string): void;
    resolve(name: string): string;
    getItems(): Set<QuantumItem>;
    findByEntry(file: FileAbstraction): QuantumItem;
    matches(path: string): QuantumItem;
}
