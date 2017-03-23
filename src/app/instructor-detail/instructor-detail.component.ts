import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { InstructorService } from './../instructor/instructor.service';
import { Instructor } from './../instructor/instructor';

@Component({
  selector: 'app-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.css']
})
export class InstructorDetailComponent implements OnInit {

  instructor: Instructor;
  loading = false;

  constructor(public route: ActivatedRoute, public instructorService: InstructorService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loading = true;
      const instructorSlug = params['slug'];
      this.instructorService.getInstructor(instructorSlug)
        .subscribe(
          data => {
            this.instructor = data;
            this.loading = false;
          },
          err => {
            console.log(err);
            this.loading = false;
          }
        );
    });
  }

}
