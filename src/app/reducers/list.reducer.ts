/**
 * Created by damian.kmiecik on 11.12.2016.
 */

import {Action} from 'redux';

import * as ActionTypes from '../action-types';
import {IItem} from '../item.interfaces';


const INITIAL_STATE: IItem[] = [];

export function ListReducer(state: IItem[] = INITIAL_STATE, action: Action): IItem[] {
  if (!action['payload']) {
    return state;
  }

  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      let newState = state.concat(action['payload']);
      return Object.assign([], state, newState);
    default:
      return state;
  }
}
