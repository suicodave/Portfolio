import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="w-full h-4/5 bg-blue-400 text-white p-5">
      <div class="flex justify-center gap-4">
        <div class="w-full my-16 lg:m-16 grid lg:grid-cols-2 gap-16 ">
          <mat-card class="grid-2 p-5">
            <app-work-experience></app-work-experience>
          </mat-card>

          <mat-card class="grid-1  p-5 w-full">
            <app-education></app-education>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
