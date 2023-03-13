export interface ActionWithCondition<TCondition extends BaseActionCondition = BaseActionCondition> {
  id: string;
  icon?: string;
  text?: string;
  tooltip?: string;
  condition?: TCondition;
}

// eslint-disable-next-line no-shadow
export enum ActionConditionType {
  AmountOfSelectedItemsRange = 'amount_of_items_range',
}

export interface BaseActionCondition {
  type?: ActionConditionType;
}

export interface ActionAmountSelectedItemsCondition extends BaseActionCondition {
  min?: number;
  max?: number;
}
