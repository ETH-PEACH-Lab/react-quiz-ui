import type IExerciseObject from './IExerciseObject'
import type IExerciseAnswer from './IExerciseAnswer'

export interface ExerciseProps {
  exerciseObject: IExerciseObject
  onAnswerChanges: (answer: IExerciseAnswer) => void
  initialAnswer: IExerciseAnswer
}
