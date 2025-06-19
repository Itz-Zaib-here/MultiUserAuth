import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  Firstname: string = '';
  Lastname: string = '';
  password: string=''; 


  signup() {
    // Implement your login logic here
    console.log('Username:', this.Firstname);
    console.log('Lastname:', this.Lastname);
    console.log('password:', this.password);
    // You can also add logic to check the username and password against a database or API
  } 
}



