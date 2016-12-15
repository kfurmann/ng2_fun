/**
 * Created by krzysztof.furmann on 09.12.2016.
 */
import {Component} from '@angular/core';
import {NgRedux} from 'ng2-redux';

import * as ActionTypes from '../../action-types';
import {IAppState} from '../../store/';


@Component({
  selector: 'app-item-form',
  template: `<form>
<button (click)="addItem($event)">add</button>
</form>
`,
})
export class ItemComponent {

  constructor(private ngRedux: NgRedux<IAppState>) {
    //
  }

  public addItem() {

    this.ngRedux.dispatch({ type: ActionTypes.ADD_ITEM, payload: 'new item, created:  ' + (new Date()).toLocaleTimeString()});

  }

}
