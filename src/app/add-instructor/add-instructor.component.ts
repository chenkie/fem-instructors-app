import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { InstructorService } from './../instructor.service';

@Component({
  selector: 'app-add-instructor',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.css']
})
export class AddInstructorComponent implements OnInit {

  @ViewChild('newInstructorForm') newInstructorForm;
  @ViewChild('addCourseForm') addCourseForm;

  courses: Array<string> = [];

  constructor(public router: Router, public instructor: InstructorService) { }

  ngOnInit() {
  }

  onAddCourseSubmit(course) {
    this.courses.push(course);
    this.addCourseForm.reset();
  }

  removeCourse(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onInstructorSubmit(data) {
    data.courses = this.courses;
    this.newInstructorForm.reset();
    this.instructor.addInstructor(data);
  }

  cancel() {
    this.addCourseForm.reset();
    this.newInstructorForm.reset();
    this.router.navigate(['']);
  }

}
