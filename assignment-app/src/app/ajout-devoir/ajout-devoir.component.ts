import { Component } from '@angular/core';
import { AssignmentsComponent } from '../assignments/assignments.component';

import { RouterOutlet } from '@angular/router';
import {MatButton} from "@angular/material/button";
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ajout-devoir',
  standalone: true,
  imports: [RouterOutlet,
    AssignmentsComponent,
     MatButton,
     MatFormFieldModule,
     MatToolbarModule,
     MatIconModule,
     MatSidenavModule,
     MatListModule,
     RouterModule,
    ],
  templateUrl: './ajout-devoir.component.html',
  styleUrl: './ajout-devoir.component.css'
})
export class AjoutDevoirComponent {
  title = 'assignment-app';
  opened = false; 
}
