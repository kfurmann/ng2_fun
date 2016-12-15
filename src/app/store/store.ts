/**
 * Created by damian.kmiecik on 11.12.2016.
 */

import {combineReducers} from 'redux';

import {listReducer, IListState} from '../reducers/index';


export interface IAppState {
  store?: IListState;
}

export const rootReducer = combineReducers<IAppState>({
  store: listReducer
});

export function deimmutify(store) {
  return {
    list: store.list
  };
}

export function reimmutify(plain) {
  return {
    list: plain.list
  };
}
