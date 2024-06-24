import React from 'react';

interface MultipleChoiceItemDistributionProps {
  correct?: boolean;
  distribution: number;
}
export const MultipleChoiceItemDistribution: React.FC<
  MultipleChoiceItemDistributionProps
> = ({ correct, distribution }) => {
  const roundedDistribution = distribution.toFixed(2);
  return (
    <div className="border w-full bg-grey-light">
      <div
        className={
          'text-xs leading-none py-1 text-center text-black ' +
          (correct ? 'bg-success' : 'bg-error')
        }
        style={{ width: roundedDistribution + '%' }}>
        {roundedDistribution}%
      </div>
    </div>
  );
};
