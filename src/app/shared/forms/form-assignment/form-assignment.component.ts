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
  title: string;
  toast: any;

  constructor(public assignmentService: AssignmentService, public router: Router) {}

  ngOnInit() {
    this.toast = {isVisible: false, message: ''};
    if (this.router.url !== '/add-assignment') {
      this.title = 'Atualizar Atividade';
      this.content = this.assignmentService.getAssignment();
    } else {
      this.assignmentService.cleanAssignment();
      this.content = this.assignmentService.getAssignment();
      this.title = 'Criar Atividade';
    }
  }

  cancelAssignment() {
    this.router.navigate(['']);
  }

  hideToast() {
    this.toast.isVisible = false;
    this.toast.message = '';
  }

  save(assignment: any) {
    if (assignment.type && assignment.subject && assignment.status && assignment.grade && assignment.totalGrade) {
      this.onClickSave.emit(this.assignmentService.getAssignment());
    } else {
      this.toast.isVisible = true;
      this.toast.message = 'Campos obrigatórios foram deixados em branco.';
    }
  }

  selectDate(date: Date) {
    this.content.dueDate = date;
  }

}
