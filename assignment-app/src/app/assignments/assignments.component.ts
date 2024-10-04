import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { DatePipe, NgStyle, NgClass } from "@angular/common";
import { RenduDirective } from '../shared/rendu.directive';
import { NonRenduDirective } from '../shared/non-rendu.directive';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Assignment } from './assignment.model';
import { AssignmentsService } from '../shared/assignments.service';
import { Form } from '@angular/forms';




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
    MatIconButton,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,

  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssignmentsComponent implements OnInit {
  title = 'Mon application sur les assignments!';

  ajoutActive = false;

  nomDevoir: string = '';

  dateDeRendu !: Date

  



  constructor(private assignmentsService: AssignmentsService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.ajoutActive = true
    }, 2000)
  }
  
  getAssignments() {
    this.assignmentsService.getAssignments()
      .subscribe(assignments => this.assignments = assignments);
  }



  assignments = [
    {
      nom: "Angular de M.Buffa",
      dateDeRendu: new Date('2024-09-15'),
      rendu: true
    },
    {
      nom: "Big Data de M.Donati",
      dateDeRendu: new Date('2024-09-25'),
      rendu: true
    },
    {
      nom: "Projet personnel",
      dateDeRendu: new Date('2024-10-02'),
      rendu: false
    }
  ];

  onSubmit(event: any) {
    const newAssignment = new Assignment()

    newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.nom = this.nomDevoir;
    newAssignment.rendu = false;

    this.assignments.push(newAssignment)
  }

  onNouvelAssignment(event: Assignment) {
    this.assignmentsService.addAssignment(event)
        .subscribe(message => console.log(message));

   
}

}
