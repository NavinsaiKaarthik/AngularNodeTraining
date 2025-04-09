import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: any[] = []; // Array to store user data

  constructor(private http: HttpClient) {
    this.loadUsersFromJson(); // Load users from the JSON file
  }

  addUser(user: any) {
    this.users.push(user); // Add user to the array
    console.log('User added:', user);
  }

  getUsers() {
    return this.users; // Return all users
  }

  private loadUsersFromJson() {
    this.http.get<any[]>('/users.json').subscribe((data) => {
      this.users = data; // Load users from the JSON file
      console.log('Users loaded from JSON:', this.users);
    });
  }
}