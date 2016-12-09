import {Component} from '@angular/core';
import ItemsRepository from "../items-repository";

@Component({
  selector: 'app-list',
  template: `
<ul>
<li *ngFor="let item of itemsRepository.items | async">{{item}}</li>
</ul>`,
})
export class ListComponent {

  constructor(public itemsRepository: ItemsRepository) {
    //
  }
}
