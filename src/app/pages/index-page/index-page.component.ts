import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-page',
  template: `
    <app-hero></app-hero>
    <div id="skills">
      <app-skill></app-skill>
    </div>
    <div id="aboutMe">
      <app-about></app-about>
    </div>



  `,
  styles: [
  ]
})
export class IndexPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
