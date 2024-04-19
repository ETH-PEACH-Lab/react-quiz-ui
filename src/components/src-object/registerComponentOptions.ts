import { ISrcObjectOptions } from "./types/ISrcObjectOptions";

const registeredComponentOptions: Map<string, ISrcObjectOptions> = new Map();

export const registerDefaultComponentOption = (type:string, options: ISrcObjectOptions) => {
    registeredComponentOptions.set(type, options);
};
export const getDefaultComponentOptions = (type:string) => {
    if (registeredComponentOptions.has(type)) {
        return registeredComponentOptions.get(type) as ISrcObjectOptions;
    }
    console.warn(`Component Option of type '${type}' is not registered.`);
    return undefined;
}