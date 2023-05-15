import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportListComponent } from './report-list/report-list.component';
import { ReportFormComponent } from './report-form/report-form.component';

import { AuthGuard } from '../../services/auth.guard';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
{
  path: 'report',
  canActivate: [AuthGuard],
  children: [
    {
      path: '',
      component: ReportListComponent
    },
    {
      path: 'new',
      component: ReportFormComponent
    },
    {
      path: 'form/:id',
      component: ReportFormComponent
    }
  ]
},
{
  path: '',
  redirectTo: 'auth',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: 'auth'
}
];

@NgModule({
imports: [
  RouterModule.forRoot(routes),
  SharedModule],
exports: [RouterModule]
})
export class AppRoutingModule { }
