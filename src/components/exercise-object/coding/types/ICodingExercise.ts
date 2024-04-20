import { ICode } from "../../../src-object";
import IExerciseObject from "../../types/IExerciseObject";

export interface ICodingExercise extends IExerciseObject{
    startingCode: ICode
    assertCode: ICode[]
}