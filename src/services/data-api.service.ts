import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inspection, Report } from './models/data-api.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getInspections(): Observable<Inspection[]> {
    return this.http.get<Inspection[]>(`${this.apiUrl}/inspections`);
  }

  getInspection(id: number): Observable<Inspection> {
    return this.http.get<Inspection>(`${this.apiUrl}/inspections/${id}`);
  }

  addInspection(inspection: Inspection): Observable<Inspection> {
    return this.http.post<Inspection>(`${this.apiUrl}/inspections`, inspection);
  }

  updateInspection(id: number, inspection: Inspection): Observable<Inspection> {
    return this.http.put<Inspection>(`${this.apiUrl}/inspections/${id}`, inspection);
  }

  getReports(inspectionId: number): Observable<Report[]> {
    return this.http.get<Report[]>(`${this.apiUrl}/inspections/${inspectionId}/reports`);
  }

  getReport(inspectionId: number, reportId: number): Observable<Report> {
    return this.http.get<Report>(`${this.apiUrl}/inspections/${inspectionId}/reports/${reportId}`);
  }

  addReport(inspectionId: number, report: Report): Observable<Report> {
    return this.http.post<Report>(`${this.apiUrl}/inspections/${inspectionId}/reports`, report);
  }

  updateReport(inspectionId: number, reportId: number, report: Report): Observable<Report> {
    return this.http.put<Report>(`${this.apiUrl}/inspections/${inspectionId}/reports/${reportId}`, report);
  }
}
