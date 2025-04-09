import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router'; // 
import { CommonModule } from '@angular/common'; 
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true, 
  imports: [FormsModule, CommonModule], 
})
export class SignupComponent {
  isSubmitted = false; 

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(form: NgForm) {
    const userData = form.value;
    this.userService.addUser(userData); 
    console.log('User data saved:', userData);
    this.isSubmitted = true; 
  }

  goBack() {
    this.router.navigate(['/']); 
  }
}