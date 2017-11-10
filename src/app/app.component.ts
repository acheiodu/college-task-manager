import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { IAssignment } from './models/assignment.model';

import { AssignmentService } from './services/assignment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {

  assignments: IAssignment[];
  
  constructor(public assignmentService: AssignmentService) {}

  ngOnInit() {
    this.assignments = this.assignmentService.assignments;
  }

}
