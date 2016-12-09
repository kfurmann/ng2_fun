/**
 * Created by krzysztof.furmann on 09.12.2016.
 */
import {Component} from '@angular/core';

import ItemsRepository from "../items-repository";


@Component({
  selector: 'app-item-form',
  template: `<form>
<button (click)="addItem($event)">add</button>
</form>
`,
})
export class ItemComponent {

  constructor(private itemsRepository: ItemsRepository) {
    //
  }

  public addItem() {

    this.itemsRepository.addItem('new item, created:  ' + (new Date()).toLocaleTimeString());

  }

}
