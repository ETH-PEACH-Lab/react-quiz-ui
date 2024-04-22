class ExerciseComponentRegistry {
  private readonly registry = new Map<string, React.FC<any>>();

  registerExerciseComponent: (t: string, c: React.FC<any>) => void = (
    type: string,
    component: React.FC<any>,
  ) => {
    console.log('test');
    if (this.registry.has(type)) {
      console.warn(`Exercise with ${type} is already registered`);
      return;
    }
    console.log(`Exercise with ${type} registerd successfully`);
    this.registry.set(type, component);
  };

  getExerciseComponent: (t: string) => React.FC<any> | undefined = (
    type: string,
  ) => {
    if (!this.registry.has(type)) {
      console.warn(`Exercise with ${type} is not registered`);
      return undefined;
    }
    return this.registry.get(type);
  };
}
export default new ExerciseComponentRegistry();
