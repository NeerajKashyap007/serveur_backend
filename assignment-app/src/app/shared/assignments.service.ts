import { Injectable } from '@angular/core';
import {Assignment} from "../assignments/assignment.model";
import {catchError, forkJoin, map, Observable, of, tap} from "rxjs";
import {LoggingService} from "./logging.service";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import fakeData from './data'

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  private HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  backendURL = 'http://localhost:8010/api/assignments/';

  constructor(private loggingService: LoggingService, private http: HttpClient) { }

  assignments : Assignment[] = [];

  private handleError<T>(operation : any, result?: T) {
    return (error:any) : Observable<T> =>  {
      console.error(error)
      console.log(operation + 'a échoué ' + error.message);

      return of(result as T);
    };
  }

  insertFakeIntoDB() : Observable<any> {
    let callsDoneToAddAssignment : Observable<any>[] = []

    fakeData.map(element => {
      const newAssignment = new Assignment()
      newAssignment.dateDeRendu = new Date(element.dateDeRendu);
      newAssignment.id = element.id;
      newAssignment.nom = element.nom;
      callsDoneToAddAssignment.push(
        this.addAssignment(newAssignment)
      )
    })

    return forkJoin(callsDoneToAddAssignment)

  }

  getAssignmentsPaginated(page:number, limit:number) {
    return this.http.get<Assignment[]>(`${this.backendURL}?page=${page}&limit=${limit}`)
  }

  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.backendURL, this.HttpOptions)
  }

  getAssignment(id: number): Observable<Assignment> {

    return this.http.get<Assignment>(this.backendURL + id)
      .pipe(
        map(a => {
          a.nom += '...'
          return a
        }),
        tap(_ => {
          console.log('tap : getAssignment', id)
        }),
        catchError(this.handleError<any>('### catchError : getAssignments by id avec id=' + id))
      )
  }


  addAssignment(assignment: Assignment) : Observable<any> {
    return this.http.post(this.backendURL, assignment, this.HttpOptions)
  }

  updateAssignment(assignment: Assignment) : Observable<any> {
    return this.http.put(this.backendURL, assignment, this.HttpOptions)
  }

  deleteAssignment(assignment: Assignment) : Observable<any> {
    let deleteURI = this.backendURL + '/' + assignment._id;
    return this.http.delete(deleteURI, this.HttpOptions)
  }
}
