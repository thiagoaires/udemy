import { Component } from '@angular/core';

import { Student } from './student/student.model'

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  students: Student[] = [
    { name: 'Luke Skywalker', isJedi: true, temple: 'Coruscant' },
    { name: 'Leia Organa', isJedi: false },
    { name: 'Han Solo', isJedi: false }
  ]
}
