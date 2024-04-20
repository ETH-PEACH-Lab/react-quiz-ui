import IMetadata from "../../types/IMetadata";

export interface IMultipleChoiceMetadata extends IMetadata{
    correctAnswers?: string[]; 
    showEvaluation?: boolean;
    multi?: boolean,
    random?: boolean,
    disabled?: boolean
}