import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ListComponent} from "./list/list.component";
import ItemsRepository from "./items-repository";
import {ItemComponent} from "./item/item";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ItemsRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
