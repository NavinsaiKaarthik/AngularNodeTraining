import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router'; 
import { UserService } from '../user.service'; 

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule], 
})
export class SigninComponent {
  isLoginSuccessful = false; 
  isLoginFailed = false;

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(form: NgForm) {
    const { username, password } = form.value;

    const user = this.userService.getUsers().find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      this.isLoginSuccessful = true;
      this.isLoginFailed = false;
    } else {
      this.isLoginSuccessful = false;
      this.isLoginFailed = true;
    }
  }

  goBack() {
    this.router.navigate(['/']); 
  }
}