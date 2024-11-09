import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../core/services/login.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [
	  CommonModule, 
	  FormsModule,  
	],
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
  })
export class LoginComponent {
	public username!: string;
	public password!: string;

	constructor(private loginService: LoginService, private router: Router) {}

	public login() {
		this.loginService.verifyLogin(this.username, this.password).subscribe((resp) => {
			if(!resp.ERROR) {
				localStorage.setItem("token", resp);
				
				this.redirect('home');
			}
		})
	}

	public redirect(page: string) {
		this.router.navigate([page])
	}
}
