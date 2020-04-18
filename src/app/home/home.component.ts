import {Component, OnInit} from '@angular/core';
import {noop, Observable, Observer} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {createHttpObservable} from '../common/util';
import {map} from 'rxjs/operators';
import {Course} from '../model/course';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public beginnerCourses: Course[] = [];
  public advancedCourses: Course[] = [];

  constructor() {

  }

  ngOnInit(): void {

    const http$ = createHttpObservable('/api/courses');

    const courses$ = http$.pipe(
      map(res => res['payload'])
    );

    courses$.subscribe(
      data => console.log(data),
      noop,
      () => console.log('Complete!!!')
    );

  }

}
