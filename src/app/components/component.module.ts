import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingComponent } from './greeting/greeting.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    GreetingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    GreetingComponent
  ]
})
export class ComponentModule { }
