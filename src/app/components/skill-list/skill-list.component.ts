import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-list',
  template: `

    <div class="relative h-full">
       <img class="h-16 w-16 m-auto mb-8 object-contain" [src]="headerLogo" *ngIf="headerLogo" alt="">

      <div class="scroller  ">
        <div class="mb-4 " *ngFor="let item of data">
          <app-skill-list-item  [data]="item">
          </app-skill-list-item>
        </div>
      </div>
    </div>




  `,
  styles: [
  ]
})
export class SkillListComponent implements OnInit {

  @Input() data: SkillModel[] = [];

  @Input() headerLogo: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface SkillModel {
  logo: string;
  label: string;
  fromYear: number;

}



@Component({
  selector: 'app-skill-list-item',
  template: `
    <mat-card class="mx-16">
      <div class="grid grid-cols-3">
        <div class="grid-1 h-16 flex content-center">
          <img class="w-20 object-contain" [src]="data?.logo" [alt]="data?.label">
        </div>
        <div class="grid-2 grid content-center col-span-2">
          <p class="text-xl">
          {{data?.label}}
          </p>

          <span class="text-gray-400">
            {{data?.fromYear}}
          </span>
        </div>
      </div>




    </mat-card>
  `,
  styles: [
  ]
})
export class SkillListItemComponent implements OnInit {

  @Input() data: SkillModel | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}

