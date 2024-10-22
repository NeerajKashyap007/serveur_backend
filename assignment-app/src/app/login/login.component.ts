import { NgClass, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardContent, MatCardHeader, MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { AuthService } from '../shared/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AssignmentsComponent } from '../assignments/assignments.component';






@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    MatCardModule,
    MatCardHeader,
    MatCardContent,
    MatFormFieldModule,
    MatLabel,
    MatIconModule,
    MatButtonModule,
    MatIconButton,
    MatIcon,
    FormsModule,
    MatInput,
    RouterOutlet,
    RouterLink,
    AssignmentsComponent,

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  // hide = signal(true);
  // clickEvent(event: MouseEvent) {
  //   this.hide.set(!this.hide());
  //   event.stopPropagation();
  // }
  // opened = "false";



  username = 'admin1';
  password = 'admin1';
 
  constructor(private authService: AuthService, private router: Router) { }
  
  ngOnInit(): void { }



  login() {
    if (this.authService.loggedIn) {
      this.authService.logOut();
     this.router.navigate(['/home']);
    } else {
      // Récupérer les informations saisies par l'utilisateur
      const username = this.username;
      const password = this.password;

      // Vérifier si les informations existent dans le tableau
      if (this.authService.authentificateUser(username, password)) {          
        this.authService.logIn();
        this.router.navigate(['/home']);
      } else {
        // Afficher un message d'erreur
        alert('Nom d\'utilisateur ou mot de passe incorrect.');
      }
    }

  }

}