/**
 * Created by damian.kmiecik on 11.12.2016.
 */

import {combineReducers} from 'redux';

import {IItem} from '../item.interfaces';
import {ListReducer} from './list.reducer';


export interface IListState {
  list: IItem[];
}

export const listReducer = combineReducers<IListState>({
  list: ListReducer
});
