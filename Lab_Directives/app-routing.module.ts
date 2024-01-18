import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatabindingComponent } from './databinding/databinding.component';

import { DirectivesComponent } from './directives/directives.component';
const appRoutes: Routes = [{ 
  path: 'Home', component: HomeComponent}, 
  { 
  path: 'About', component: AboutComponent, 
  }, {
    path: 'Dashboard', component: DashboardComponent
  },
{path: 'Databinding', component: DatabindingComponent},
{path: 'Directives', component: DirectivesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
