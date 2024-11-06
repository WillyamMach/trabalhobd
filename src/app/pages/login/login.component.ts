import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../core/services/login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
	FormsModule,
	CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
	public username!: string;
	public password!: string;

	constructor(private loginService: LoginService, private http: HttpClient) {}

	login() {
		this.loginService.verifyLogin(this.username, this.password).subscribe((resp) => {
			console.log(resp)
		})
	}
}
