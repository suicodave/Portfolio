import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="w-full h-4/5 bg-blue-400 text-white p-5">
      <div class="flex justify-center gap-4">
        <mat-card class=" w-full m-16 grid grid-cols-2 mat-elevation-z7 rounded-lg">
          <div class="grid-1 border-r-2 p-5">
              <app-education></app-education>
          </div>

          <div class="grid-2 p-5">
              <app-work-experience></app-work-experience>
          </div>
        </mat-card>

      </div>
    </div>
  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
