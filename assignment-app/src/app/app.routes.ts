import { Routes } from '@angular/router';
import {AssignmentsComponent} from "./assignments/assignments.component";
import {AddAssignmentComponent} from "./assignments/add-assignment/add-assignment.component";
import {AssignmentDetailsComponent} from "./assignments/assignment-details/assignment-details.component";
import {EditAssignmentComponent} from "./assignments/edit-assignment/edit-assignment.component";
import {authGuard} from "./shared/auth.guard";
import {administratrorGuard} from "./shared/administratror.guard";
import {SignInComponent} from "./authenticated/sign-in/sign-in.component";

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: SignInComponent },
  { path: 'home', component: AssignmentsComponent},
  { path: 'add', component: AddAssignmentComponent, canActivate: [authGuard] },
  { path: 'assignment/:id', component: AssignmentDetailsComponent, canActivate: [authGuard] },
  { path: 'assignment/:id/edit', component: EditAssignmentComponent, canActivate: [administratrorGuard] },

];
