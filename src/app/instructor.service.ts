import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Observer } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class InstructorService {

  private observer: Observer<any>;
  instructorChange$: Observable<any> = new Observable(obs => this.observer = obs);

  constructor(public http: Http) { }

  getInstructors() {
    return this.http.get('assets/data/instructors.json').map(res => res.json());
  }

  getAllInstructors() {

  }

  addInstructor(instructor: any): void {
    this.observer.next(instructor);
  }

}
