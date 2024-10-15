import {Component} from '@angular/core';
import {Assignment} from "../assignment.model";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {provideNativeDateAdapter} from '@angular/material/core';
import {AssignmentsService} from "../../shared/assignments.service";


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

  constructor(private assignmentsService: AssignmentsService) {
  }


  onSubmit(event:any) {
    const newAssignment = new Assignment()

    newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.nom = this.nomDevoir;
    newAssignment.rendu = false;

    this.assignmentsService.addAssignment(newAssignment).subscribe( message => {
      console.log(message)})
  }

}
