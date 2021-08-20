import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <div class="bg-gray-900 h-4/5 w-full text-white ">
      <div class="grid grid-cols-2 p-16 h-full justify-center items-center">
        <div class="grid-1 ml-16 flex ">
          <app-greeting></app-greeting>
        </div>

        <div class="grid-2 p-16 mr-16">
          <app-profile-card></app-profile-card>
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
