import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { Router } from '@angular/router';

import { AssignmentService } from '../../../services/assignment.service';

@Component({selector: 'app-form-assignment', templateUrl: './form-assignment.component.html', styleUrls: ['./form-assignment.component.less']})

export class FormAssignmentComponent {

  @Output() onClickCancel = new EventEmitter<any>();
  @Output() onClickSave = new EventEmitter<any>();
  content: any = {};

  constructor(public assignmentService: AssignmentService, public router: Router) {}

  ngOnInit() {
    this.content = this.assignmentService.getAssignment();
  }

  cancelAssignment() {
    this.router.navigate(['home']);
  }

  selectAssignment(type: string) {
    this.content.type = type;
  }

  selectDate(date: Date) {
    this.content.dueDate = date;
  }

  selectDescription(description: Date) {
    this.content.description = description;
  }

  selectGrade(grade: string) {
    this.content.grade = grade;
  }

  selectStatus(status: string) {
    this.content.status = status;
  }

  selectSubject(subject: string) {
    this.content.subject = subject;
  }

  selectTotalGrade(grade: string) {
    this.content.totalGrade = grade;
  }

}
