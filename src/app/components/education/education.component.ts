import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  template: `
    <div class="relative grid grid-cols-2">
      <h1 class="text-center font-bold mb-16 col-span-2">
            Education
      </h1>

      <div class="grid-1">


        <div class="my-8 relative" *ngFor="let item of schools; last as isLast">
          <app-education-item [data]="item"></app-education-item>
          <mat-divider *ngIf="!isLast"></mat-divider>
        </div>
      </div>
      <div class="grid-2">
        <img src="assets/computer_guy.svg" class="h-4/5" alt="">
      </div>

    </div>

  `,
  styles: [
  ]
})
export class EducationComponent implements OnInit {

  schools: EducationModel[] = [
    {
      name: 'Christ the King College de Maranding',
      address: 'Maranding, Lala, Lanao del Norte',
      subLabel: 'Bachelor of Science in Computer Science',
      fromYear: 2014,
      toYear: 2018
    },
    {
      name: 'Lala National High School',
      address: 'Maranding, Lala, Lanao del Norte',
      subLabel: null,
      fromYear: 2010,
      toYear: 2014
    },
    {
      name: 'Maranding Central Elementary School',
      address: 'Maranding, Lala, Lanao del Norte',
      subLabel: null,
      fromYear: 2006,
      toYear: 2010
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

export interface EducationModel {
  name: string;
  subLabel: null | string;
  address: string;
  fromYear: number;
  toYear: number;
}



@Component({
  selector: 'app-education-item',
  template: `
    <div class="relative w-auto">
      <div class="font-normal text-xl mb-2">
        {{data?.name}}
      </div>

      <div class="mb-2 text-gray-500" *ngIf="data?.subLabel">
        {{data?.subLabel}}
      </div>


      <div class="mb-2 text-gray-500">
        {{data?.address}}
      </div>

      <div class="mb-2 text-gray-500">
        {{data?.fromYear}} - {{data?.toYear}}
      </div>
    </div>
  `,
  styles: [
  ]
})
export class EducationItemComponent implements OnInit {

  @Input() data: EducationModel | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
