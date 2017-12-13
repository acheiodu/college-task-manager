import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';

import { AssignmentService } from '../../../services/assignment.service';

@Component({selector: 'app-form-textarea', templateUrl: './form-textarea.component.html', styleUrls: ['./form-textarea.component.less']})

export class FormTextareaComponent {

  @Input() content: any;
  assignment: any = {};

  constructor(public assignmentService: AssignmentService) {}

  ngOnInit() {
    this.assignment = JSON.parse(JSON.stringify(this.content));
    if (this.assignment.selected) {
      this.selectItem(this.assignment.selected);
    } else {
      this.assignment.selected = '';
      this.assignment.isSelected = false;
    }
  }

  addItem(selected: string): boolean {
    if (!selected) return false;
    this.assignmentService.addItem(this.assignment.serviceContent, selected);
    this.assignment.selected = selected;
    this.assignment.isSelected = true;
    return true;
  }

  editItem(): void {
    this.assignment.isSelected = false;
  }

  removeItem(selected: string): void {
    this.assignment.selected = '';
    this.editItem();
  }

  selectItem(selected: string): void {
    this.assignment.isSelected = true;
    this.assignmentService.setAssignmentItem(this.assignment);
  }

}
