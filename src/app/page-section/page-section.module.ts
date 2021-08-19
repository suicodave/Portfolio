import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ComponentModule } from '../components/component.module';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    HeroComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    ComponentModule
  ],
  exports: [
    HeroComponent,
    AboutComponent
  ]
})
export class PageSectionModule { }
