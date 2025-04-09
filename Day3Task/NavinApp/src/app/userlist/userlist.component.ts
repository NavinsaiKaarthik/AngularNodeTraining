import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router'; 
import { UserService } from '../user.service'; 

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  standalone: true,
  imports: [CommonModule], 
})
export class UserlistComponent {
  users: any[] = []; 

  constructor(private userService: UserService, private router: Router) {
    this.users = this.userService.getUsers(); 
  }

  goBack() {
    this.router.navigate(['/']); 
  }
}