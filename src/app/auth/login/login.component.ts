import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/my-api.service';
// import { AuthService } from 'src/app/services/my-api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  UserName: string = '';
  password: string = '';

  constructor(private router: Router, private apiServices: AuthService) {}

  login(): void {
    if (!this.UserName || !this.password) {
      alert("Please fill in all fields.");
      return;
    }

    const loginModel = {
      userName: this.UserName,
      password: this.password
    };

    this.apiServices.login(loginModel).subscribe({
      next: (response: any) => {
        console.log("Login successful:", response);

        // Optional: Save token or role if needed
        // localStorage.setItem('role', response.role);

        // Auto redirect based on role
        if (response.role === 'admin') {
          this.router.navigate(['auth/display/admin']);
        } else if (response.role === 'user') {
          this.router.navigate(['user']);
        } else {
          alert("Unknown role");
        }
      },
      error: (err: any) => {
        console.error("Login failed", err);
        alert("Invalid credentials or API error.");
      }
    });
  }
}
