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

  assignment: Assignment | undefined;

  nomDevoir : string = '';

  dateDeRendu !: Date;

  constructor(private assignmentsService: AssignmentsService, private route: ActivatedRoute, private router : Router) {
  }

  ngOnInit() : void {
    console.log('Query Params :')
    console.log(this.route.snapshot.queryParams);
    console.log('Fragment :')
    console.log(this.route.snapshot.fragment);
    this.getComponent();
  }

  private getComponent() {
    const id = +this.route.snapshot.params['id'];
    this.assignmentsService.getAssignment(id)
      .subscribe(assignment => {
        this.assignment = assignment;
      });
  }

  onSaveAssignment(event:any) {
    event.preventDefault();

    if (!this.assignment) return;
    if (this.nomDevoir == '' || this.dateDeRendu === undefined) return;

    this.assignment.nom = this.nomDevoir;
    this.assignment.dateDeRendu = this.dateDeRendu;
    this.assignmentsService
      .updateAssignment(this.assignment)
      .subscribe((message) => {
        console.log(message);
        this.router.navigate(['/home']);
      });
  }

}
