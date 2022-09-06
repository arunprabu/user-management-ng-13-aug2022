import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

// config the child routes
const userRoutes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/add', component: AddUserComponent },
  { path: 'users/:id', component: UserDetailsComponent }, // id is the URL Param
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes) // reg child routes
  ], 
  exports: [RouterModule]
})
export class UsersRoutingModule { }
