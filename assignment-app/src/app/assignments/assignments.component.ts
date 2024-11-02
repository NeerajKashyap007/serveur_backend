import { Component, ChangeDetectionStrategy } from '@angular/core';
import {DatePipe, NgStyle, NgClass} from "@angular/common";
import { RenduDirective } from '../shared/rendu.directive';
import { NonRenduDirective } from '../shared/non-rendu.directive';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { Assignment } from './assignment.model';
import {MatList, MatListItem, MatListSubheaderCssMatStyler} from "@angular/material/list";
import {AssignmentDetailsComponent} from "./assignment-details/assignment-details.component";
import {AddAssignmentComponent} from "./add-assignment/add-assignment.component";
import {AssignmentsService} from "../shared/assignments.service";
import {RouterLink} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [
    DatePipe,
    NgStyle,
    NgClass,
    RenduDirective,
    NonRenduDirective,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatList,
    MatListItem,
    MatListSubheaderCssMatStyler,
    AssignmentDetailsComponent,
    AddAssignmentComponent,
    RouterLink,
    MatPaginator,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css',
})
export class AssignmentsComponent {
  title = 'assignment-app';

  formVisible = false;

  assignementSelectionne!:Assignment;

  assignments!: Assignment[];

  page ?: number = 1;
  limit ?: number = 10;
  totalDocs !: number;
  totalPages !: number;
  pagingCounter !: number;
  hasPrevPage !: boolean;
  hasNextPage !: boolean;
  prevPage !: number;
  nextPage !: number;

  constructor(private assignmentService: AssignmentsService) {
  }

  ngOnInit() {
    this.getAssignments();
  }

  getAssignments() {
    // this.assignmentService.getAssignments().subscribe( assignments => this.assignments = assignments );
    this.assignmentService.getAssignmentsPaginated(this.page!, this.limit!).subscribe( (data : any) => {

      this.assignments = data.docs

      this.totalDocs = data.totalDocs;
      this.totalPages = data.totalPages;
      this.prevPage = data.prevPage;
      this.nextPage = data.nextPage;
      this.hasPrevPage = data.hasPrevPage;
      this.hasNextPage = data.hasNextPage;

    } );
  }

  handlePageEvent(e:any) {
    console.log('handlePageEvent', e)
    this.limit = e.pageSize
    this.getAssignments();
  }

  assignmentClique(assignment:Assignment) {
    this.assignementSelectionne = assignment
  }

  // onAddAssignmentBtnClick() {
  //   this.formVisible = true;
  // }
  //
  // onNouvelAssignment(event: Assignment) {
  //   //this.assignments.push(event);
  //   this.assignmentService.addAssignment(event).subscribe( message => {
  //     console.log(message)
  //   })
  //   this.formVisible = false;
  // }

}
