import React from 'react';
import { MarkdownComponent } from '../../../src-elements';
import { type IMultipleChoiceItemConfig } from './types/IMultipleChoiceItemConfig';
import { type IMultipleChoiceItem } from './types';
import { MultipleChoiceResultIndicatorComponent } from '../result-indicator';

interface MultipleChoiceItemComponentProps {
  item: IMultipleChoiceItem;
  parentId: string;
  config: IMultipleChoiceItemConfig;
  onChange: (id: string, checked: boolean) => void;
}
export const MultipleChoiceItemComponent: React.FC<
  MultipleChoiceItemComponentProps
> = ({
  config,
  item,
  onChange,
  parentId,
}: MultipleChoiceItemComponentProps) => {
  return (
    <div className="form-control">
      <label className="cursor-pointer label">
        <MarkdownComponent {...item} config={config.markdownConfig} />
        <div className="flex space-x-4">
          <div className="ml-4 my-auto flex">
            {config.multi && (
              <input
                type="checkbox"
                disabled={config.disabled}
                className={
                  'checkbox checkbox-sm ' +
                  (config.showEvaluation
                    ? !config.incorrect
                      ? config.coloring?.colorCorrectCheckbox ??
                        'checked:checkbox-success'
                      : config.coloring?.colorIncorrectCheckbox ??
                        'checkbox-error'
                    : config.coloring?.colorSelectedCheckbox ?? '')
                }
                onChange={(event) => {
                  onChange(item.id, event.target.checked);
                }}
                defaultChecked={config.checked}
              />
            )}

            {!config.multi && (
              <input
                type="radio"
                disabled={config.disabled}
                name={parentId}
                className={
                  'radio radio-sm ' +
                  (config.showEvaluation
                    ? !config.incorrect
                      ? config.coloring?.colorCorrectRadio ??
                        'checked:radio-success'
                      : config.coloring?.colorIncorrectRadio ?? 'radio-error'
                    : config.coloring?.colorSelectedCheckbox ?? '')
                }
                onChange={(event) => {
                  onChange(item.id, event.target.checked);
                }}
                checked={config.checked}
              />
            )}
          </div>
          {config?.showIndicator && (
            <MultipleChoiceResultIndicatorComponent
              correct={
                !config.incorrect
              }></MultipleChoiceResultIndicatorComponent>
          )}
        </div>
      </label>
    </div>
  );
};
