import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AssignmentsComponent } from "./assignments/assignments.component";
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
  selector: 'app-root',
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
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment-app';
  opened = false; 
}