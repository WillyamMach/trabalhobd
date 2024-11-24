import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../core/services/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  public password!: string;
  public username!: string;
  public email!: string;

  constructor(private router: Router, private registerService: RegisterService) {}

  public register() {
    this.registerService.registerUser(this.username, this.email, this.password).subscribe((resp) => {})
  }

  public redirect(page: string) {
    this.router.navigate([page]);
  }
}
