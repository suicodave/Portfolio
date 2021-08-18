import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-page',
  template: `
    <div class="bg-blue-900  w-full h-4/5 text-white  ">
      <div class="grid grid-cols-2 p-16">
        <div class="ml-16 mt-5">
          <app-greeting></app-greeting>
        </div>
      </div>


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
