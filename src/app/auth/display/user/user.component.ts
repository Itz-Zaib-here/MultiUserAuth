import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  UserName: string = 'User'; // Default name, will be updated if found in localStorage

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Get username from local storage (you can also use a service)
    const storedUser = localStorage.getItem('UserName');
    if (storedUser) {
      this.UserName = storedUser;
    }
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}
