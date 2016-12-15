/**
 * Created by damian.kmiecik on 11.12.2016.
 */

import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {IItem} from '../item.interfaces';
import {select} from 'ng2-redux';
@Component({
  selector: 'app-list-container',
  template: `<app-list [list]="list | async"></app-list>`
})
export default class ListContainer {

  @select(state => state.store.list) public list: Observable<IItem[]>;
  constructor() {  }
}
