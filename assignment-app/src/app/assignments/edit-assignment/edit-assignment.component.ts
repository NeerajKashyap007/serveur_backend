import { Component } from '@angular/core';
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatButton} from "@angular/material/button";
import {AssignmentsService} from "../../shared/assignments.service";
import {Assignment} from "../assignment.model";
import {MatInput} from "@angular/material/input";
import {provideNativeDateAdapter} from "@angular/material/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-assignment',
  standalone: true,
  imports: [
    MatFormField,
    FormsModule,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatButton,
    MatInput,
    MatLabel,
    MatSuffix
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './edit-assignment.component.html',
  styleUrl: './edit-assignment.component.css'
})
export class EditAssignmentComponent {

  nomDevoir : string = '';

  dateDeRendu !: Date;

  constructor(private assignmentsService: AssignmentsService, private route: ActivatedRoute, private router : Router) {
  }

  ngOnInit() : void {
    console.log('Query Params :')
    console.log(this.route.snapshot.queryParams);
    console.log('Fragment :')
    console.log(this.route.snapshot.fragment);
  }

  onSaveAssignment(event:any) {
    const newAssignment = new Assignment()

    newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.nom = this.nomDevoir;
    newAssignment.rendu = false;

    this.assignmentsService.updateAssignment(newAssignment).subscribe( message => {
      console.log(message);
      this.router.navigate(['/home'])
    })
  }

}
