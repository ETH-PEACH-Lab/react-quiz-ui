import React from 'react';

interface MultipleChoiceResultIndicatorComponentProps {
  correct: boolean;
}
export const MultipleChoiceResultIndicatorComponent: React.FC<
  MultipleChoiceResultIndicatorComponentProps
> = (props: MultipleChoiceResultIndicatorComponentProps) => {
  return props.correct ? (
    <span className="text-success">✓</span>
  ) : (
    <span className="text-error">✗</span>
  );
};
