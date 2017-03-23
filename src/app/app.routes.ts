import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InstructorDetailComponent } from './instructor-detail/instructor-detail.component';
import { AddInstructorComponent } from './add-instructor/add-instructor.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'instructors/new', component: AddInstructorComponent },
  { path: 'instructors/:slug', component: InstructorDetailComponent }
];
