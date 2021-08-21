import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ComponentModule } from '../components/component.module';
import { AboutComponent } from './about/about.component';
import { MaterialModule } from '../material/material.module';
import { SkillComponent } from './skill/skill.component';



@NgModule({
  declarations: [
    HeroComponent,
    AboutComponent,
    SkillComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    MaterialModule
  ],
  exports: [
    HeroComponent,
    AboutComponent,
    SkillComponent
  ]
})
export class PageSectionModule { }
