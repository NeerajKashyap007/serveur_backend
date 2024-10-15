import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service';
import { ActivatedRoute,Router } from '@angular/router';






@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [
    AssignmentDetailComponent,
  ],

  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssignmentDetailComponent implements OnInit {

  // @Input() assignmentTransmis !: Assignment;
  assignmentTransmis: Assignment;

  constructor(private assignmentsService: AssignmentsService, 
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.assignmentsService.getAssignment(id)
    .subscribe(assignment=> this.assignmentTransmis=assignment);
  }

  // getAssignment(){
  //   const id=+this.route.snapshot.params.id;
  //   this.assignmentsService.getAssignment(id)
  //   .subscribe(assignment=> this.assignmentTransmis=assignment);
  // }

  onAssignmentRendu() {
    this.assignmentTransmis.rendu = true
    this.assignmentsService.updateAssignment(this.assignmentTransmis)
      .subscribe(message => console.log(message));
       this.assignmentTransmis = null;
    this.router.navigate(["home"]);
  }

  onDelete() {

    this.assignmentsService.deleteAssignment(this.assignmentTransmis)
      .subscribe(message => console.log(message));

    this.assignmentTransmis = null;
    this.router.navigate(["home"]);
  }

}
