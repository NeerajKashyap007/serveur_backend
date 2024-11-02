import { Component } from '@angular/core';
import {MatFormField, MatLabel, MatPrefix, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {FormControl, FormsModule, Validators} from "@angular/forms";
import {AssignmentsService} from "../../shared/assignments.service";
import {AuthService} from "../../shared/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatIcon,
    MatSuffix,
    MatButton,
    MatPrefix,
    FormsModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  username = 'user2';
  password = 'user2';

  constructor(private authService: AuthService, private router: Router) {}

  signIn() {
    if (!this.username || !this.password) return

    this.authService.newLogIn(this.username, this.password)

    if (this.authService.loggedIn) {
      this.router.navigate(['/home']);
    }
  }

}
