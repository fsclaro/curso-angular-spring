import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    { _id: '1', name: 'Course 1', category: 'Category 1' },
    { _id: '2', name: 'Course 2', category: 'Category 2' },
    { _id: '3', name: 'Course 3', category: 'Category 3' },
  ];
  displayedColumns = ['name', 'category'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
