import { Injectable } from '@angular/core';
import {Assignment} from "../assignments/assignment.model";
import { tap,map, Observable, of, catchError } from "rxjs";
import {LoggingService} from "./logging.service";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  constructor(private loggingService: LoggingService, private http:HttpClient) { }

  backendURL="http://localhost:8010/api/assignments";

  assignments = [ ];

  getAssignments(): Observable<Assignment[]> {
 return this.http.get<Assignment[]>(this.backendURL);
    // return of(this.assignments);
  }

  getAssignment(id: number): Observable<Assignment|undefined> {
    // return of(this.assignments.find(a => a.id === id));
    return this.http.get<Assignment>(`${this.backendURL}/${id}`)
    .pipe(
      map(a=>{ 
      a.nom +="recu et transformer avec un pipe";
      return a;
    }),
  
      tap(_ => { 
        console.log("tap: assignment avec id = " + id + " requete GET envoyée sur MongoDB cloud");
      }),
      // catchError(this.handleError<Assignment>('getAssignment(id=${id})'))
      catchError(this.handleError<any>('### catchError: getAssignments by id avec id=' + id + "a echouer"))
  );
}

private handleError<T>(operation: any, result?: T) {
  return (error: any): Observable<T> => {
    console.log(error); // pour afficher dans la console
    console.log(operation + ' a échoué ' + error.message);

    return of(result as T);
  }
};

  addAssignment(assignment: Assignment) : Observable<any> {
    this.loggingService.log(assignment.nom, 'ajouté')
    return this.http.post<Assignment>(this.backendURL, assignment);
  }

  updateAssignment(assignment: Assignment) : Observable<any> {
       return this.http.put<Assignment>(this.backendURL, assignment);
  }

  deleteAssignment(assignment: Assignment) : Observable<any> {
    this.loggingService.log(assignment.nom, 'supprimé')
    return this.http.delete(this.backendURL + "/" + assignment._id);
  }

  // addAssignment(assignment: Assignment) : Observable<string> {
  //   this.assignments.push(assignment);
  //   // return of(this.assignments);
  //   this.loggingService.log(assignment.nom, 'ajouté')
  //   return of('Assignment ajouté');
  // }

  // updateAssignment(assignment: Assignment) : Observable<string> {
  //   // this.assignments.splice(this.assignments.indexOf(assignment), 1);

  //   return of('Assignment updated !!!')
  // }

  // deleteAssignment(assignment: Assignment) : Observable<string> {
  //   this.assignments.splice(this.assignments.indexOf(assignment), 1);

  //   return of('Assignment deleted!!!')
  // }
}
