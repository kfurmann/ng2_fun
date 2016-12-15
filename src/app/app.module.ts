import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DevToolsExtension, NgRedux, NgReduxModule} from 'ng2-redux';

import { AppComponent } from './app.component';
import {ListComponent} from "./components/list/list.component";
import {ItemComponent} from "./components/item/item.component";
import {IAppState, rootReducer} from './store/store';
import {middleware} from './store/index';
import ListContainer from './containers/list.container';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    ListContainer
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>,
              public devTool: DevToolsExtension) {

    this.ngRedux.configureStore(
      rootReducer,
      { },
      middleware,
      [devTool.isEnabled() ? devTool.enhancer() : f => f]
    );

  }
}
