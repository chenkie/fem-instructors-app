import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import { API_URL_DEV } from './../app.contants';
import { Instructor } from './../instructor/instructor';

@Injectable()
export class InstructorService {

  public observer: Observer<any>;
  instructorChange$: Observable<any> = new Observable(obs => this.observer = obs);

  constructor(public http: Http) { }

  getInstructor(slug: string): Observable<Instructor> {
    return this.http.get(`${API_URL_DEV}/instructors/${slug}`)
      .map(res => res.json());
  }

  getAllInstructors(): Observable<Array<Instructor>> {
    return this.http
      .get(`${API_URL_DEV}/instructors?sortKey=id&sortDirection=asc`)
      .map(res => res.json());
  }

  addInstructor(instructor: any): Observable<any> {
    return this.http.post(`${API_URL_DEV}/instructors`, instructor)
      .map(res => res.json());
  }

}
