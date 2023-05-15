import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inspection } from '../../../services/models/data-api.interfaces';

@Component({
  selector: 'app-inspection-form',
  templateUrl: './inspection-form.component.html',
  styleUrls: ['./inspection-form.component.scss']
})
export class InspectionFormComponent implements OnInit {
  inspectionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.inspectionForm = this.fb.group({
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.inspectionForm = this.fb.group({
      companyId: ['', Validators.required],
      brokerCode: ['', Validators.required],
      productCode: ['', Validators.required],
      productName: ['', Validators.required],
      InspectionNumber: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.inspectionForm.valid) {
    }
  }
}
