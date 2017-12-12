import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

import { AssignmentService } from '../../../services/assignment.service';

@Component({selector: 'app-form-select', templateUrl: './form-select.component.html', styleUrls: ['./form-select.component.less']})

export class FormSelectComponent {

  @Input() content: any;

  constructor(public assignmentService: AssignmentService) {}

  ngOnInit() {
    if (this.content.selected) {
      this.selectItem(this.content.selected);
    } else {
      this.content.selected = '';
      this.content.isCustom = false;
      this.content.isSelected = false;
    }
  }

  addItem(selected: string): boolean {
    if (!selected) return false;
    this.content.service.addItem(this.content.serviceContent, selected);
    this.content.selected = selected.toUpperCase();
    this.content.isSelected = true;
    return true;
  }

  editItem(): void {
    this.content.selected = '';
    this.content.isSelected = false;
    this.content.isCustom = false;
  }

  removeItem(selected: string): void {
    this.editItem();
    this.content.service.removeItem(this.content.serviceContent, selected);
  }

  selectItem(selected: string): void {
    if (selected === 'NOVA') {
      this.content.selected = '';
      this.content.isCustom = true;
    } else {
      this.content.selected = selected;
      this.content.isSelected = true;
      this.assignmentService.setAssignmentItem(this.content);
    }
  }

}
