import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AssignmentService } from '../services/assignment.service';

@Component({selector: 'app-edit-assignment', templateUrl: './edit-assignment.component.html', styleUrls: ['./edit-assignment.component.less']})

export class EditAssignmentComponent {

  constructor(public assignmentService: AssignmentService, public router: Router) {}

  cancelUpdate() {
    this.router.navigate(['home']);
  }

  saveUpdate() {
    this.assignmentService.updateAssignment().subscribe((result) => {
      this.router.navigate(['home']);
    });
  }

}
