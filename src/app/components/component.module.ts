import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingComponent } from './greeting/greeting.component';
import { MaterialModule } from '../material/material.module';
import { EducationComponent, EducationItemComponent } from './education/education.component';
import { WorkExperienceComponent, WorkExperienceItemComponent } from './work-experience/work-experience.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { SkillListComponent, SkillListItemComponent } from './skill-list/skill-list.component';



@NgModule({
  declarations: [
    GreetingComponent,
    EducationComponent,
    EducationItemComponent,
    WorkExperienceComponent,
    WorkExperienceItemComponent,
    ProfileCardComponent,
    SkillListComponent,
    SkillListItemComponent
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
    WorkExperienceItemComponent,
    ProfileCardComponent,
    SkillListComponent,
    SkillListItemComponent
  ]
})
export class ComponentModule { }
