import { Component, inject } from '@angular/core';
import { UserService } from '../../user.service';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export default class UserProfileComponent {

  userService = inject(UserService);
  router=inject(Router)

  // logout(){
  //   this.userService.onLogout();
    
  // }
  logout(){
    this.userService.logout();
    
  }


}
