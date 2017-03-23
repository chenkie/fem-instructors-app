import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { InstructorService } from './../instructor/instructor.service';
import { Instructor } from './../instructor/instructor';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css']
})
export class InstructorListComponent implements OnInit {

  instructors: Array<Instructor>;
  loading = true;

  constructor(public http: Http, public instructorService: InstructorService) { }

  ngOnInit(): void {
    this.instructorService.getAllInstructors()
      .subscribe(
        data => {
          this.instructors = data;
          this.loading = false;
        },
        err => {
          console.log(err);
          this.loading = false;
        }
      );

    this.instructorService.instructorChange$.subscribe(
      instructor => this.instructors.push(instructor)
    );
  }

}
