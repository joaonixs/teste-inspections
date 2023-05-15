import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../auth/login/login.component';
import { InspectionListComponent } from './inspection-list/inspection-list.component';
import { InspectionFormComponent } from './inspection-form/inspection-form.component';


import { AuthGuard } from '../../services/auth.guard';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: 'auth',
    component: LoginComponent
  },
  {
    path: 'inspections',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: InspectionListComponent
      },
      {
        path: 'new',
        component: InspectionFormComponent
      },
      {
        path: 'form/:id',
        component: InspectionFormComponent
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
