
import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class AssignmentsService {
    assignments: Assignment[] = [
        {
            nom: "TP1 sur WebComponents, un lecteur audio amélioré",
            dateDeRendu: new Date('20/08/2024'),
            rendu: true
        },
        {
            nom: "TP2 sur Angular, un jolie gestionnaire de devoir",
            dateDeRendu: new Date('01/09/2024'),
            rendu: false
        },
        {
            nom: "TP3 sur Angular, utilisation du routeur et de Web Services",
            dateDeRendu: new Date('15/07/2024'),
            rendu: false
        }
    ];


    getAssignments(): Observable<Assignment[]> {
        return of(this.assignments);

    }
    addAssignment(assignment: Assignment): Observable<string> {
        this.assignments.push(assignment);
        return of('Assignment ajouté');
    }

   

    updateAssignment(assignment:Assignment):Observable<string>{
        return of("Assignment service: assignment modifié !")
    }
}