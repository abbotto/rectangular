import { Plugin } from "../core/WorkflowContext";
import { BundleProducer } from "../core/BundleProducer";
export interface IndexPluginOptions {
    title?: string;
    charset?: string;
    description?: string;
    keywords?: string;
    author?: string;
    bundles?: string[];
    path?: string;
    target?: string;
    template?: string;
    async?: boolean;
}
export declare class WebIndexPluginClass implements Plugin {
    opts: IndexPluginOptions;
    constructor(opts?: IndexPluginOptions);
    producerEnd(producer: BundleProducer): void;
}
export declare const WebIndexPlugin: (opts?: IndexPluginOptions) => WebIndexPluginClass;
