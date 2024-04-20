import type IMetadata from '../../types/IMetadata'
import type IMultipleChoiceAnswer from './IMultipleChoiceAnswer'

export interface IMultipleChoiceMetadata extends IMetadata {
  correctAnswers?: string[]
  showEvaluation?: boolean
  multi?: boolean
  random?: boolean
  disabled?: boolean
  initialAnswer?: IMultipleChoiceAnswer
}
