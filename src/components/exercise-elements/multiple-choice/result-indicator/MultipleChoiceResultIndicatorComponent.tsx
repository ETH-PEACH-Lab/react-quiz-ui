import React from 'react';

interface MultipleChoiceResultIndicatorComponentProps {
  correct: boolean;
}
export const MultipleChoiceResultIndicatorComponent: React.FC<
  MultipleChoiceResultIndicatorComponentProps
> = ({ correct }: MultipleChoiceResultIndicatorComponentProps) => {
  return correct ? (
    <span className="text-success">✓</span>
  ) : (
    <span className="text-error">✗</span>
  );
};
