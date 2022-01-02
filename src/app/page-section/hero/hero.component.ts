import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <div class="bg-gray-900 min-h-screen w-full text-white ">
      <div
        class="grid lg:grid-cols-2 grid-cols-1  p-8 lg:pt-16 h-full justify-center items-center"
      >
        <div class="grid-2 pb-16 lg:p-16 lg:mr-16 flex justify-center">
          <app-profile-card></app-profile-card>
        </div>

        <div class="grid-1 lg:ml-16 flex justify-center">
          <app-greeting></app-greeting>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class HeroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
