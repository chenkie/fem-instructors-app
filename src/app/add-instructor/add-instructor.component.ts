import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { InstructorService } from './../instructor/instructor.service';

@Component({
  selector: 'app-add-instructor',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.css']
})
export class AddInstructorComponent implements OnInit {

  @ViewChild('newInstructorForm') newInstructorForm;
  @ViewChild('addCourseForm') addCourseForm;

  courses: Array<string> = [];
  submitSuccess = false;
  submitError: string;

  constructor(public router: Router, public instructorService: InstructorService) { }

  ngOnInit() {
  }

  onAddCourseSubmit(course): void {
    if (course) {
      this.courses.push(course);
      this.addCourseForm.reset();
    }
  }

  removeCourse(course): void {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onInstructorSubmit(instructor): void {
    instructor.courses = this.courses;
    this.instructorService.addInstructor(instructor)
      .subscribe(
        data => {
          this.instructorService.observer.next(data);
          this.newInstructorForm.reset();
          this.courses.splice(0);
          this.submitSuccess = true;
        },
        err => {
          this.submitError = err.json();
        }
      );
  }

  cancel(): void {
    this.addCourseForm.reset();
    this.newInstructorForm.reset();
    this.router.navigate(['']);
  }

  formatError(error): string {
    // naive formatting, not prod ready
    return error.replace('[', '').replace(']', '');
  }

}
