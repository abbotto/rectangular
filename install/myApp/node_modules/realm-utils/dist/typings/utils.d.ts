export declare class Utils {
    static isPromise(item: any): item is Promise<any>;
    static isNotSet(input: any): boolean;
    static isMap(input: any): input is Map<any, any>;
    static isSet(input: any): input is Set<any>;
    static isFunction(value: any): value is Function;
    static isObject(input: any): input is Object;
    static isHostObject(value: any): boolean;
    static overArg(func: any, transform: any): (arg: any) => any;
    static isObjectLike(value: any): boolean;
    static flatten(data: any): any;
    static setHiddenProperty(obj: Object, key: string, value: Object): any;
    static isString(value: any): value is string;
    static isArray(input: any): input is Array<any>;
    static isPlainObject(value: any): boolean;
    static getParameterNamesFromFunction(func: any): any;
}
