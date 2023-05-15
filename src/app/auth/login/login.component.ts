import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
    });
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      nome: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  login() {
  }
}
