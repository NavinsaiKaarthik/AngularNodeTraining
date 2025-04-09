import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { UserlistComponent } from './userlist/userlist.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: "signup", component: SignupComponent },
  {path : "signin", component: SigninComponent},
  {path : "userlist", component: UserlistComponent}
];