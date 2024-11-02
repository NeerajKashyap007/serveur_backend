import {Component} from '@angular/core';
import {Assignment} from "../assignment.model";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {provideNativeDateAdapter} from '@angular/material/core';
import {AssignmentsService} from "../../shared/assignments.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-add-assignment',
  standalone: true,
  imports: [
    MatFormField,
    FormsModule,
    MatDatepickerInput,
    MatInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatButton,
    MatLabel,
    MatSuffix
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css'
})
export class AddAssignmentComponent {

  nomDevoir : string = '';

  dateDeRendu !: Date;

  constructor(private assignmentsService: AssignmentsService, private router : Router) {
  }


  onSubmit(event:any) {
    event.preventDefault()

    if (!this.dateDeRendu || this.nomDevoir) return;

    const newAssignment = new Assignment()

    newAssignment.id = Math.floor(Math.random()*1000);
    newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.nom = this.nomDevoir;
    newAssignment.rendu = false;

    this.assignmentsService.addAssignment(newAssignment).subscribe( message => {
      console.log(message)
      this.router.navigate(['/home'])
    })
  }

}
