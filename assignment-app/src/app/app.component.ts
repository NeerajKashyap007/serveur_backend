import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {AssignmentsComponent} from "./assignments/assignments.component";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {MatList, MatListItem} from "@angular/material/list";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {AuthService} from "./shared/auth.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AssignmentsComponent, MatButton, MatSidenav, MatSidenavContainer, MatSidenavContent, MatIcon, MatIconButton, MatToolbar, MatList, MatListItem, RouterLink, MatSlideToggle, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Application de gestion des devoirs ';
  opened = false

  constructor(private authService: AuthService, private router : Router) {}

  toggleSidenav() {
    this.opened = !this.opened;
  }

  login() {
    if (this.authService.loggedIn) {
      this.authService.logOut()
      this.router.navigate(['/home']);
    } else {
      this.authService.logIn()
    }
  }
}
