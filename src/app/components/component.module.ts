import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingComponent } from './greeting/greeting.component';
import { MaterialModule } from '../material/material.module';
import { EducationComponent, EducationItemComponent } from './education/education.component';
import { WorkExperienceComponent, WorkExperienceItemComponent } from './work-experience/work-experience.component';



@NgModule({
  declarations: [
    GreetingComponent,
    EducationComponent,
    EducationItemComponent,
    WorkExperienceComponent,
    WorkExperienceItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    GreetingComponent,
    EducationComponent,
    EducationItemComponent,
    WorkExperienceComponent,
    WorkExperienceItemComponent
  ]
})
export class ComponentModule { }
