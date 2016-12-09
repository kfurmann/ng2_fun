import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export default class ItemsRepository {

  private _items: BehaviorSubject<Array<string>> = new BehaviorSubject([]);
  public items: Observable<Array<string>>;

  constructor() {

    this.items = this._items.asObservable()
      .map((v) => {
        console.log(v);
        return v.map(i => i.toUpperCase())
      })

  }

  public addItem(val: string) {

    this._items.next(this._items.value.concat(val));

  }

}
