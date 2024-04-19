

const registeredComponents: Map<string, React.ComponentType<any>> = new Map();

export const registerComponent = (type:string, component: React.ComponentType<any>) => {
  if (!registeredComponents.has(type)) {
    registeredComponents.set(type, component);
  } else {
    console.warn(`Component of type '${type}' already registered.`);
  }
};
export const getComponent = (type:string) => {
    if (registeredComponents.has(type)) {
        return registeredComponents.get(type);
    }
    console.warn(`Component of type '${type}' is not registered.`);
    return null;
}