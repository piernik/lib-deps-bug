import {NgModule} from '@angular/core';
import {FirstComponent} from './first.component';
import {MyPipePipe} from './pipes';
// import {MyPipePipe} from './pipes/my-pipe/my-pipe.pipe';

@NgModule({
  imports: [],
  declarations: [
    FirstComponent,
    MyPipePipe
  ],
  exports: [
    FirstComponent,
    MyPipePipe
  ]
})
export class FirstModule {
}
