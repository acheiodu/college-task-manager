import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AssignmentService } from '../../services/assignment.service';

@Component({
  selector: 'app-form-assignment',
  templateUrl: './form-assignment.component.html',
  styleUrls: ['./form-assignment.component.less'],
})

export class FormAssignmentComponent {

  selectedAssignment: string;
  selectedDate: Date;
  selectedStatus: string;
  selectedSubject: string;

  constructor(public assignmentService: AssignmentService, public router: Router) {}

  cancelAssignment() {
    this.router.navigate(['home']);
  }

  saveAssignment() {
    let body = {
      type: this.selectedAssignment,
      subject: this.selectedSubject,
      status: this.selectedStatus,
      dueDate: this.selectedDate,
      grade: 8,
      totalGrade: 10,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    };
    this.assignmentService.saveAssignment(body).subscribe((result) => {
      this.router.navigate(['home']);
    });
  }

  selectAssignment(assignment: string) {
    this.selectedAssignment = assignment;
  }

  selectDate(date: Date) {
    this.selectedDate = date;
  }

  selectStatus(status: string) {
    this.selectedStatus = status;
  }

  selectSubject(subject: string) {
    this.selectedSubject = subject;
  }

}
