import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { SciencenewsComponent } from './sciencenews/sciencenews.component'
import {EntertainmentnewsComponent} from './entertainmentnews/entertainmentnews.component'

const routes: Routes = [
  {path:'', component:TopheadingComponent}, //home
  {path:'tech', component:TechnewsComponent}, //tech
  {path:'science', component:SciencenewsComponent}, //science
  {path:'entertainment', component:EntertainmentnewsComponent}, //entertainment
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
