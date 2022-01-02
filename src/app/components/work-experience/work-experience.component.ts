import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  template: `
    <h1 class="text-center font-bold mb-16 text-blue-700">Work Experience</h1>

    <div class="grid lg:grid-cols-2 ">
      <div class="grid-1 hidden lg:block">
        <img src="assets/blogging.svg" class="h-4/5" alt="" />
      </div>

      <div class="grid-2 flex flex-col pr-5">
        <div class="mb-8" *ngFor="let item of workExperiences; last as isLast">
          <app-work-experience-item [data]="item"></app-work-experience-item>
          <mat-divider *ngIf="!isLast"></mat-divider>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class WorkExperienceComponent implements OnInit {
  workExperiences: WorkExperienceModel[] = [
    {
      name: '1st Valley Bank Inc., A Development Bank',
      website: 'https://1stvalleybank.com.ph',
      role: 'Programmer',
      fromDate: new Date(2018, 3, 28),
      toDate: new Date(Date.now()),
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

export interface WorkExperienceModel {
  name: string;

  role: string;
  website: null | string;

  fromDate: Date;

  toDate: Date;
}

@Component({
  selector: 'app-work-experience-item',
  template: `
    <div class="relative w-auto">
      <a [href]="data?.website" target="_">
        <div class="font-normal underline text-blue-700  text-xl mb-2">
          {{ data?.name }}
        </div>
      </a>

      <div class="mb-2 text-gray-500">
        {{ data?.role }}
      </div>

      <div class="mb-2 text-gray-500">
        {{ data?.fromDate | date: 'longDate' }} -
        <span *ngIf="isPresent">Present</span>
        <span *ngIf="!isPresent">{{ data?.toDate | date: 'longDate' }}</span>
      </div>
    </div>
  `,
  styles: [],
})
export class WorkExperienceItemComponent implements OnInit {
  @Input() data: WorkExperienceModel | null = null;

  get now() {
    return new Date(Date.now());
  }

  get isPresent() {
    return (
      this.now.getMonth() == this.data?.toDate.getMonth() &&
      this.now.getFullYear() == this.data?.toDate.getFullYear()
    );
  }

  constructor() {}

  ngOnInit(): void {}
}
