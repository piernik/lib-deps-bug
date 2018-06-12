import {NgModule} from '@angular/core';
import {SecondComponent} from './second.component';
import {FirstModule} from 'first';

@NgModule({
  imports: [
    FirstModule
  ],
  declarations: [SecondComponent],
  exports: [SecondComponent]
})
export class SecondModule {
}
