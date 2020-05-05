import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarsComponent } from './cars/cars.component';
import { ReportComponent } from './report/report.component';


const routes: Routes = [
      {path:'', component:DashboardComponent},
      {path:'Dashboard', component:DashboardComponent},
      {path:'Cars', component:CarsComponent},
      {path:'Report', component: ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
