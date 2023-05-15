import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportFormComponent } from './reports/report-form/report-form.component';
import { ReportListComponent } from './reports/report-list/report-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InspectionFormComponent } from './inspections/inspection-form/inspection-form.component';
import { InspectionListComponent } from './inspections/inspection-list/inspection-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InspectionFormComponent,
    InspectionListComponent,
    ReportFormComponent,
    ReportListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
