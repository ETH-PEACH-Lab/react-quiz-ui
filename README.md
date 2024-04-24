# react-quiz-ui Library 

Showcase: [link](https://eth-peach-lab.github.io/react-quiz-ui/?path=/docs/exercise-object-multiple-choice-multiplechoice--docs)

## Data Types 
```mermaid
classDiagram

class IObject {
            <<interface>>
            +id: string
            
        }
class ITypedObject {
            <<interface>>
            +type: string
            
        }
IObject<|..ITypedObject
class ExerciseComponentRegistry{
            +registry: Map~string, FC~any~~*
+registerExerciseComponent: (t: string, c: FC~any~) =~ void
+getExerciseComponent: (t: string) =~ FC~any~
            
        }
class ExerciseProps~T,E~ {
            <<interface>>
            +exerciseObject: T
+onAnswerChanges: (answer: E) =~ void
+initialAnswer: E
            
        }
class IExerciseAnswer {
            <<interface>>
            +exerciseId: string
+answer: any
            
        }
class IExerciseObject {
            <<interface>>
            +description: IMarkdown
+metadata?: Record~string, any~
            
        }
ITypedObject<|..IExerciseObject
class ISrcObject {
            <<interface>>
            +type: string
+src: string
            
        }
ITypedObject<|..ISrcObject
class IMarkdownEditorConfig {
            <<interface>>
            +alignVertical?: boolean
+codeConfig?: ICodeConfig
            
        }
class ICodingAnswer {
            <<interface>>
            +answer: ICodeObject
            
        }
IExerciseAnswer<|..ICodingAnswer
class ICodingExercise {
            <<interface>>
            +startingCode?: ICode
+metadata?: ICodingMetadata
+assertCode?: ICode[]
+type: "coding-exercise"
            
        }
IExerciseObject<|..ICodingExercise
class ICodingMetadata {
            <<interface>>
            +startingCodeConfig: ICodeConfig
+answerCodeConfig: ICodeConfig
            
        }
class IMultipleChoiceAnswer {
            <<interface>>
            +answer: string[]
            
        }
IExerciseAnswer<|..IMultipleChoiceAnswer
class IMultipleChoiceExercise {
            <<interface>>
            +type: "multiple-choice-exercise"
+multi?: boolean
+items: IMultipleChoiceItem[]
+metadata?: IMultipleChoiceMetadata
            
        }
IExerciseObject<|..IMultipleChoiceExercise
class IMultipleChoiceItem {
            <<interface>>
            
            
        }
IMarkdown<|..IMultipleChoiceItem
class IMultipleChoiceMetadata {
            <<interface>>
            +correctAnswers?: string[]
+showEvaluation?: boolean
+multi?: boolean
+random?: boolean
+disabled?: boolean
            
        }
class ITextResponseAnswer {
            <<interface>>
            +answer: IMarkdown
            
        }
IExerciseAnswer<|..ITextResponseAnswer
class ITextResponseExercise {
            <<interface>>
            +type: "text-response-exercise"
+metadata?: ITextResponseMetadata
            
        }
IExerciseObject<|..ITextResponseExercise
class ITextResponseMetadata {
            <<interface>>
            +markdownEditorConfig?: IMarkdownEditorConfig
            
        }
class ICode {
            <<interface>>
            +type: "code"
            
        }
ICodeObject<|..ICode
class ICodeConfig {
            <<interface>>
            +options?: IStandaloneDiffEditorConstructionOptions
+fullHeight?: boolean
+theme?: "vs-dark" | "light"
            
        }
class ICodeObject {
            <<interface>>
            +language: string
            
        }
ISrcObject<|..ICodeObject
class IMarkdown {
            <<interface>>
            +type: "markdown"
            
        }
ISrcObject<|..IMarkdown
class IMultipleChoiceItemConfig {
            <<interface>>
            +multi?: boolean
+incorrect?: boolean
+disabled?: boolean
+defaultChecked?: boolean
            
        }