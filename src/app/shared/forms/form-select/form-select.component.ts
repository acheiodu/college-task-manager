import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';

import { AssignmentService } from '../../../services/assignment.service';

@Component({selector: 'app-form-select', templateUrl: './form-select.component.html', styleUrls: ['./form-select.component.less']})

export class FormSelectComponent {

  @Input() content: any;
  assignment: any = {};

  constructor(public assignmentService: AssignmentService) {}

  ngOnInit() {
    this.assignment = JSON.parse(JSON.stringify(this.content));
    if (this.assignment.selected) {
      this.selectItem(this.assignment.selected);
    } else {
      this.assignment.selected = '';
      this.assignment.isCustom = false;
      this.assignment.isSelected = false;
    }
  }

  addItem(selected: string): boolean {
    if (!selected) return false;
    selected = selected.toUpperCase();
    this.assignmentService.addItem(this.assignment.serviceContent, selected);
    this.assignment.selected = selected;
    this.assignment.isSelected = true;
    return true;
  }

  editItem(): void {
    this.assignment.selected = '';
    this.assignment.isSelected = false;
    this.assignment.isCustom = false;
    this.assignmentService.setAssignmentItem(this.assignment);
  }

  removeItem(selected: string): void {
    this.editItem();
    this.assignmentService.removeItem(this.assignment.serviceContent, selected);
  }

  selectItem(selected: string): void {
    if (selected === 'NOVA') {
      this.assignment.selected = '';
      this.assignment.isCustom = true;
    } else {
      this.assignment.selected = selected;
      this.assignment.isSelected = true;
      this.assignmentService.setAssignmentItem(this.assignment);
    }
  }

}
