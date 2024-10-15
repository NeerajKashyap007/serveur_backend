import { Injectable } from '@angular/core';
import {Assignment} from "../assignments/assignment.model";
import { Observable, of } from "rxjs";
import {LoggingService} from "./logging.service";

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  constructor(private loggingService: LoggingService) { }

  assignments = [
    {
      id: 1,
      nom:"Devoir Angular de M.Buffa",
      dateDeRendu:new Date('2024-10-15'),
      rendu:true
    },
    {
      id: 2,
      nom:"Devoir Big Data de M.Donati",
      dateDeRendu:new Date('2024-11-25'),
      rendu:true
    },
    {
      id: 3,
      nom:"Fiche personnelle",
      dateDeRendu:new Date('2024-09-01'),
      rendu:false
    }
  ];

  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }

  getAssignment(id: number): Observable<Assignment|undefined> {
    return of(this.assignments.find(a => a.id === id));
  }

  addAssignment(assignment: Assignment) : Observable<string> {
    this.assignments.push(assignment);
    // return of(this.assignments);
    this.loggingService.log(assignment.nom, 'ajouté')
    return of('Assignment ajouté');
  }

  updateAssignment(assignment: Assignment) : Observable<string> {
    // this.assignments.splice(this.assignments.indexOf(assignment), 1);

    return of('Assignment updated !!!')
  }

  deleteAssignment(assignment: Assignment) : Observable<string> {
    this.assignments.splice(this.assignments.indexOf(assignment), 1);

    return of('Assignment deleted!!!')
  }
}
