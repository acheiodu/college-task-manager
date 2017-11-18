import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { AssignmentService } from '../services/assignment.service';

@Component({selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.less']})

export class HomeComponent implements OnInit {

  assignments: Array<any> = [];
  filteredAssignments: Array<any> = [];
  filters: Array<any> = [];
  teste: string = '';

  constructor(public assignmentService: AssignmentService) {}

  ngOnInit() {
    this.assignmentService.getAssignments()
    .subscribe((data) => {
      this.assignments = data;
      this.filteredAssignments = data;
    });
  }

  deleteFilter(selectedFilter): void {
    if (selectedFilter === 'TODOS' || this.filters.length === 2) {
      this.filters = [];
      this.filteredAssignments = this.assignments;
    } else {
      let index = this.filters.findIndex((filter) => {
        return filter.value === selectedFilter
      });
      this.filters.splice(index, 1);
      this.filter();
    }
  }

  addFilter(selectedFilter: any): void {
    if (!this.filters.length) {
      this.filters.push({type: 'all', value: 'TODOS'});
    }
    if (!this.filters.some((filter) => filter.value === selectedFilter.value)) {
      this.filters.push(selectedFilter);
    }
    this.filter();
  }

  filter(): void {
    this.filteredAssignments = this.assignments;
    this.filters.forEach((filter) => {
      if (filter.type === 'assignment') {
        this.filteredAssignments = this.filteredAssignments.filter((assignment) => {
          return assignment.type.toUpperCase() === filter.value;
        });
      } else if (filter.type === 'subject') {
        this.filteredAssignments = this.filteredAssignments.filter((assignment) => {
          return assignment.subject.toUpperCase() === filter.value;
        });
      }
    });
  }

}
