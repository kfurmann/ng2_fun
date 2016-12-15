import {Component, Input} from '@angular/core';
import {IItem} from '../../item.interfaces';

@Component({
  selector: 'app-list',
  template: `
    <ul>
    <li *ngFor="let item of list">{{item}}</li>
    </ul>
`
})
export class ListComponent {

  @Input() list: IItem[];
  constructor() {
    //
  }
}
