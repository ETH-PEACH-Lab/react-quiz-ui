import type IExerciseObject from './IExerciseObject';
import type IExerciseAnswer from './IExerciseAnswer';

export interface ExerciseProps<
  T extends IExerciseObject,
  E extends IExerciseAnswer,
> {
  exerciseObject: T;
  onAnswerChanges: (answer: E) => void;
  initialAnswer: E;
}
