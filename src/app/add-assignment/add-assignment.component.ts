import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

import { AssignmentService } from '../services/assignment.service';

@Component({selector: 'app-add-assignment', templateUrl: './add-assignment.component.html', styleUrls: ['./add-assignment.component.less']})

export class AddAssignmentComponent {

  assignment: any = {};

  constructor(public assignmentService: AssignmentService, public router: Router) {}

  ngOnInit() {
    this.assignment = this.assignmentService.getAssignment();
  }

  saveAssignment(assignment: any) {
    this.assignmentService.saveAssignment(this.assignment).subscribe(() => {
      this.router.navigate(['home']);
    });
  }

}
