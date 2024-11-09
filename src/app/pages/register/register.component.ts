import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  public password!: string;
  public username!: string;
  public email!: string;

  constructor(private router: Router) {}

  public login() {

  }

  public redirect(page: string) {
    this.router.navigate([page]);
  }
}
