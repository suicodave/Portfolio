import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexPageComponent } from './index-page/index-page.component';
import { ComponentModule } from '../components/component.module';
import { MaterialModule } from '../material/material.module';
import { PageSectionModule } from '../page-section/page-section.module';



@NgModule({
  declarations: [
    IndexPageComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    PageSectionModule
  ],
  exports: [
    IndexPageComponent
  ]
})
export class PageModule { }
