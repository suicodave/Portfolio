import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <div class="bg-gray-900 h-4/5 w-full text-white ">
      <div class="grid grid-cols-2 p-16 h-full justify-center items-center">
        <div class="ml-16 flex ">
          <app-greeting></app-greeting>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
