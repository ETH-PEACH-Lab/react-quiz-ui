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
> = (props: MultipleChoiceItemComponentProps) => {
  return (
    <div className="form-control">
      <label className="cursor-pointer label">
        <MarkdownComponent
          {...props.item}
          config={props.config.markdownConfig}
        />
        <div className="flex space-x-4">
          <div className="ml-4 my-auto flex">
            {props.config.multi && (
              <input
                type="checkbox"
                disabled={props.config.disabled}
                className={
                  'checkbox checkbox-sm ' +
                  (props.config.showEvaluation
                    ? !props.config.incorrect
                      ? props.config.coloring?.colorCorrectCheckbox ??
                        'checked:checkbox-success'
                      : props.config.coloring?.colorIncorrectCheckbox ??
                        'checkbox-error'
                    : props.config.coloring?.colorSelectedCheckbox ?? '')
                }
                onChange={(event) => {
                  props.onChange(props.item.id, event.target.checked);
                }}
                defaultChecked={props.config.checked}
              />
            )}

            {!props.config.multi && (
              <input
                type="radio"
                disabled={props.config.disabled}
                name={props.parentId}
                className={
                  'radio radio-sm ' +
                  (props.config.showEvaluation
                    ? !props.config.incorrect
                      ? props.config.coloring?.colorCorrectRadio ??
                        'checked:radio-success'
                      : props.config.coloring?.colorIncorrectRadio ??
                        'radio-error'
                    : props.config.coloring?.colorSelectedCheckbox ?? '')
                }
                onChange={(event) => {
                  props.onChange(props.item.id, event.target.checked);
                }}
                checked={props.config.checked}
              />
            )}
          </div>
          {props.config?.showIndicator && (
            <MultipleChoiceResultIndicatorComponent
              correct={
                !props.config.incorrect
              }></MultipleChoiceResultIndicatorComponent>
          )}
        </div>
      </label>
    </div>
  );
};
