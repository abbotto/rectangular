export declare class Chainable {
    protected $finalized: boolean;
    protected $killed: boolean;
    protected $manual: any;
    protected $collection: Object;
    protected break(manual: any): void;
    protected kill(): void;
}
export declare const Chain: (cls: any) => Promise<any>;
