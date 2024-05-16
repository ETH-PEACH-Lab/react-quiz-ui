import React from 'react';
import { MarkdownComponent } from '../../../src-elements';
import { type IMultipleChoiceItemConfig } from './types/IMultipleChoiceItemConfig';
import { type IMultipleChoiceItem } from './types';

interface MultipleChoiceItemComponentProps {
  item: IMultipleChoiceItem;
  parentId: string;
  config: IMultipleChoiceItemConfig;
  onChange: (id: string, checked: boolean) => void;
}
const MultipleChoiceItemComponent: React.FC<
  MultipleChoiceItemComponentProps
> = (props: MultipleChoiceItemComponentProps) => {
  return (
    <div className="form-control">
      <label className="cursor-pointer label">
        <MarkdownComponent {...props.item} />
        <div className="ml-4 my-auto flex">
          {props.config.multi && (
            <input
              type="checkbox"
              disabled={props.config.disabled}
              className={
                'checkbox checkbox-sm ' +
                (!props.config.incorrect ? 'checkbox-accent' : 'checkbox-error')
              }
              onChange={(event) => {
                props.onChange(props.item.id, event.target.checked);
              }}
              defaultChecked={props.config.defaultChecked}
            />
          )}

          {!props.config.multi && (
            <input
              type="radio"
              disabled={props.config.disabled}
              name={props.parentId}
              className={
                'radio radio-sm ' +
                (!props.config.incorrect ? 'radio-accent' : 'radio-error')
              }
              onChange={(event) => {
                props.onChange(props.item.id, event.target.checked);
              }}
              defaultChecked={props.config.defaultChecked}
            />
          )}
        </div>
      </label>
    </div>
  );
};

export default MultipleChoiceItemComponent;
