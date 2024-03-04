import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  constructor(
    private readonly http: HttpClient,
    private readonly formBuilder: FormBuilder,
    private router: Router
    ) {}

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
    });
  }

  onSubmit(): void {
    this.http.post('http://localhost:8000/api/register', this.form.getRawValue()).subscribe(() => {
      // console.log(res)
      this.router.navigate(['/login'])
    })
  }
}
