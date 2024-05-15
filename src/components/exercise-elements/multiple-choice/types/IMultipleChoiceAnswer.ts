import type IExerciseAnswer from '../../types/IExerciseAnswer';

export interface IMultipleChoiceAnswer extends IExerciseAnswer {
  answer: string[];
}
