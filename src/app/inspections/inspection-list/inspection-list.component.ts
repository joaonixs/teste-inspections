import { Component, OnInit } from '@angular/core';
import { Inspection } from '../../../services/models/data-api.interfaces';
import { DataApiService } from '../../../services/data-api.service';

@Component({
  selector: 'app-inspection-list',
  templateUrl: './inspection-list.component.html',
  styleUrls: ['./inspection-list.component.scss']
})
export class InspectionListComponent implements OnInit {

  inspections: Inspection[] = [];

  constructor(private inspectionService: DataApiService) { }

  ngOnInit(): void {
    this.inspectionService.getInspections().subscribe(inspections => {
      this.inspections = inspections;
    });
  }
}
