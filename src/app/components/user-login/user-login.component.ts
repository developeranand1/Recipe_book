import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserService } from '../../user.service';
import { error } from 'console';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule, ],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export default class UserLoginComponent {
  loginFrom!: FormGroup;


  fb = inject(FormBuilder);
  router = inject(Router);
  userService = inject(UserService);

  ngOnInit() {
    this.userLogin();
  }

  userLogin() {
    this.loginFrom = this.fb.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    })
  }


  // onloginUser() {
  //   localStorage.setItem('userData', JSON.stringify(this.loginFrom.value));
  //   this.userService.userlogin(this.loginFrom.value).subscribe(res => {
  //     console.log(res);
  //     this.router.navigate(['/user-profile']);
  //   })

  // }


  onloginUser() {
    const {email, password} = this.loginFrom.value;

    this.userService.login(email, password).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/user-profile']);
    },
    (error)=>{
      console.error(error);
      
    }
    )

  }

}
