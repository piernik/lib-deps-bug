import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FirstModule} from 'first';
import {SecondModule} from 'second';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FirstModule,
    SecondModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
