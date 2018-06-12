import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'lib-second',
  template: `
      <p>
          second works! 
          <lib-first></lib-first> 
          {{'from first' | myPipe}}
      </p>
  `,
  styles: []
})
export class SecondComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
