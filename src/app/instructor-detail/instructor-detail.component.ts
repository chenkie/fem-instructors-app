import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { InstructorService } from './../instructor.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.css']
})
export class InstructorDetailComponent implements OnInit {

  instructor: any = {};

  constructor(public route: ActivatedRoute, public instructorService: InstructorService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.instructorService.getInstructors()
        .subscribe(
          data => { 
            this.instructor = data.filter(instructor => instructor.slug === params['slug'])[0];
          },
          err => console.log(err)
        );
    })
  }

}
