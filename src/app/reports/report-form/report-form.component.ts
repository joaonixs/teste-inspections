import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss']
})
export class ReportFormComponent implements OnInit {

  reportForm: FormGroup;
  formBuilder: any;

  constructor(private fb: FormBuilder) {
    this.reportForm = this.fb.group({

    });
  }

  ngOnInit(): void {
    this.reportForm = this.formBuilder.group({
      status: '',
      observation: ''
    });
  }

  onSubmit(): void {
    console.log(this.reportForm.value);
  }

}
