import { QuantumCore } from "./QuantumCore";
export declare class BundleWriter {
    core: QuantumCore;
    private bundles;
    constructor(core: QuantumCore);
    private getUglifyJSOptions();
    private createBundle(name, code?);
    private addShims();
    private uglifyBundle(bundle);
    process(): Promise<void>;
}
