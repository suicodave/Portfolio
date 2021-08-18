import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { PageModule } from './pages/page.module';

const routes: Routes = [
  {
    path: '',
    component: IndexPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
