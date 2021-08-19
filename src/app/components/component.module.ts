import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingComponent } from './greeting/greeting.component';
import { MaterialModule } from '../material/material.module';
import { EducationComponent, EducationItemComponent } from './education/education.component';



@NgModule({
  declarations: [
    GreetingComponent,
    EducationComponent,
    EducationItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    GreetingComponent,
    EducationComponent,
    EducationItemComponent
  ]
})
export class ComponentModule { }
