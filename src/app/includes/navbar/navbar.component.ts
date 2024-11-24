import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.verifyIfUserIsLogged();
  }

  verifyIfUserIsLogged() {
    const token = localStorage.getItem('token');

    if(!token) {
      this.router.navigate(['']);
    }
  }

  logout() {
    localStorage.removeItem('token');

    this.router.navigate([''])
  }

  redirect(url: string) {
    this.router.navigate([url])
  }
}
