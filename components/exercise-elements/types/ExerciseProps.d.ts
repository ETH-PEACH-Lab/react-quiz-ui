import { default as IExerciseAnswer } from './IExerciseAnswer';
import { default as IExerciseObject } from './IExerciseObject';

export interface ExerciseProps<T extends IExerciseObject, E extends IExerciseAnswer> {
    exerciseObject: T;
    onAnswerChanges: (answer: E) => void;
    initialAnswer: E;
}
