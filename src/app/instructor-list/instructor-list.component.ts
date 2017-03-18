import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { InstructorService } from './../instructor.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css']
})
export class InstructorListComponent implements OnInit {

  instructors;

  constructor(public http: Http, public instructor: InstructorService) { }

  ngOnInit() {
    this.http.get('assets/data/instructors.json')
      .map(res => res.json())
      .subscribe(
        data => this.instructors = data,
        err => console.log(err)
      );

    this.instructor.instructorChange$.subscribe(
      instructor => this.instructors.push(instructor)
    );
  }

}
