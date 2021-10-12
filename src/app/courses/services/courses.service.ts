import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  listCourses(): Course[] {
    return [
      { _id: '1', name: 'Course 1', category: 'Category 1' },
      { _id: '2', name: 'Course 2', category: 'Category 2' },
      { _id: '3', name: 'Course 3', category: 'Category 3' },
      { _id: '4', name: 'Course 4', category: 'Category 4' },
    ];
  }
}
