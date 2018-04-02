import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AssignmentService } from '../services/assignment.service';

@Component({selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.less']})

export class HomeComponent implements OnInit {

  assignments: Array<any> = [];
  filteredAssignments: Array<any> = [];
  filters: Array<any> = [];
  teste: string = '';
  result: any = {};

  constructor(private assignmentService: AssignmentService, private router: Router) {}

  ngOnInit(): void {
    this.getAssignments();
    this.assignmentService.setAssignment({});
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

  deleteFilter(selectedFilter): void {
    if (selectedFilter === 'TODOS' || this.filters.length === 2) {
      this.filters = [];
      this.filteredAssignments = this.assignments;
    } else {
      let index = this.filters.findIndex((filter) => {
        return filter.value.toUpperCase() === selectedFilter
      });
      this.filters.splice(index, 1);
      this.filter();
    }
  }

  editAssignment(assignment): void {
    this.assignmentService.setAssignment(assignment);
    this.navigate(`edit/${assignment._id}`);
  }

  filter(): void {
    this.filteredAssignments = this.assignments;
    this.filters.forEach((filter) => {
      if (filter.key === 'assignment') {
        this.filteredAssignments = this.filteredAssignments.filter((assignment) => {
          return assignment.type.toUpperCase() === filter.value;
        });
      } else if (filter.key === 'subject') {
        this.filteredAssignments = this.filteredAssignments.filter((assignment) => {
          return assignment.subject.toUpperCase() === filter.value;
        });
      }
    });
  }

  finishAssignment(assignment: string) {
    this.assignmentService.finishAssignment(assignment).subscribe((result) => {
      this.getAssignments();
    });
  }

  getAssignments(): void {
    this.assignmentService.getAssignments()
    .subscribe((assignments) => {
      this.assignments = assignments;
      this.filteredAssignments = assignments;
      this.assignmentService.setAssignments(assignments);
      this.filter();
    });
  }

  navigate(url: string): void {
    this.router.navigate([url]);
  }

  removeAssignment(assignmentId): void {
    this.assignmentService.removeAssignment(assignmentId)
    .subscribe(() => {
      this.getAssignments();
    });
  }

}
