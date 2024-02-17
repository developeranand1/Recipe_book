import { CommonModule } from '@angular/common';
import { ApplicationModule, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../user.service';
import { error } from 'console';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule, HttpClientModule, ApplicationModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.scss'
})
export default class UserRegisterComponent {
  fb = inject(FormBuilder);
  userService = inject(UserService);

  userForm!: FormGroup;

  ngOnInit() {
    this.userRegister();
  }

  userRegister() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required],
    })
  }

  onUserSubmit() {
    this.userService.registerUser(this.userForm.value).subscribe(
      (res) => {
        alert('User Register Sucessfully!');
        this.userForm.reset();
      },
      (error) => {
        console.error(error);

      })
  }

}
