import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Emitters } from '../emitters/emitters';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  
  // Replace by signal
  authenticated = false;

  constructor(
    private readonly http: HttpClient
  ) {}

  ngOnInit() {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    )
  }

  logout(): void {
    this.http.post('http://localhost:8000/api/logout', {}, {withCredentials: true}).subscribe({
      next: () => {
        this.authenticated = false
      }
    })
  }
}
