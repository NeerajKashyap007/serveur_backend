import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Assignment} from "../assignment.model";
import {MatCard, MatCardActions, MatCardContent, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {DatePipe} from "@angular/common";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {AssignmentsService} from "../../shared/assignments.service";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-assignment-details',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle,
    DatePipe,
    MatCheckbox,
    MatIcon,
    MatButton,
    MatCardActions,
    RouterLink
  ],
  templateUrl: './assignment-details.component.html',
  styleUrl: './assignment-details.component.css'
})
export class AssignmentDetailsComponent {

  assignmentTransmis !: Assignment ;

  constructor(private assignmentService: AssignmentsService, private route: ActivatedRoute, private router : Router, private authService : AuthService) {}

  ngOnInit() {
    this.getAssignment()
  }


  getAssignment() {
    const id = +this.route.snapshot.params['id'];

    // @ts-ignore
    this.assignmentService.getAssignment(id).subscribe(assignment => {this.assignmentTransmis = assignment;})
  }

  onAssignmentRendu() {
    this.assignmentTransmis.rendu = true;

    this.assignmentService.updateAssignment(this.assignmentTransmis).subscribe( message => {
      console.log(message)
      this.router.navigate(['/home'])
    })
  }

  onDeleteAssignment(event:Assignment) {
    this.assignmentService.deleteAssignment(event).subscribe(message => {
      console.log(message)
      this.router.navigate(['/home'])
    })
  }

  onClickEdit() {
    this.router.navigate(
      ['/assignment', this.assignmentTransmis.id, 'edit'],
      {
        queryParams: {
          nom : this.assignmentTransmis.nom,
        },
        fragment: 'edition'
      }
    )
  }

  isAdmin() : boolean {
    return this.authService.loggedAsAdmin
  }

}
