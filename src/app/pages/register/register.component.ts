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
  public registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private registerService: RegisterService) {}

  public register() {
    this.registerService.registerUser(this.username, this.email, this.password).subscribe((resp) => {
      console.log(resp)
    })
  }

  public redirect(page: string) {
    this.router.navigate([page]);
  }
}
