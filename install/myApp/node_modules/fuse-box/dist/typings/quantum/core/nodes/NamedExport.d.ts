export declare class NamedExport {
    name: string;
    isUsed: boolean;
    eligibleForTreeShaking: boolean;
    private nodes;
    addNode(ast: any, prop: string, node: any): void;
    remove(): void;
}
