import { Component } from '@angular/core';

import { AssignmentService } from '../services/assignment.service';

@Component({selector: 'app-add-assignment', templateUrl: './add-assignment.component.html', styleUrls: ['./add-assignment.component.less']})

export class AddAssignmentComponent {

  assignment: any = {};

  constructor(public assignmentService: AssignmentService) {}

  ngOnInit() {
    this.assignment = this.assignmentService.getAssignment();
  }

}
