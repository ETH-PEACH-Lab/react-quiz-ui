import IStudentAnswer from "../../types/IStudentAnswer";

export default interface IMultipleChoiceAnswer extends IStudentAnswer{
    answers: string[]
}