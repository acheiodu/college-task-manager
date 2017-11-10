import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent implements OnInit {

  @Input() assignments;
  filteredAssignments: Array<any>;
  filters: Array<string> = [];
  subjectTypes: Array<string> = ['PROVA', 'ATIVIDADE', 'TAREFA'];

  constructor() {}

  ngOnInit() {
    this.filteredAssignments = this.assignments;
  }

  cleanFilters(content) {
    let index = this.filters.indexOf(content);
    this.filters.splice(index, 1);
    this.filter(this.filters);
  }

  filter(items: Array<string>) {
    this.filteredAssignments = this.assignments;
    let filters = this.filters;
    items.forEach((item) => {
      if (!this.filters.includes(item)) {
        filters.push(item);
      }
    });
    this.filters = filters;
    this.filters.forEach((filter) => {
      if (this.subjectTypes.includes(filter)) {
        this.filteredAssignments = this.filteredAssignments.filter((assignment) => {
          return assignment.type.toUpperCase() === filter;
        });
      } else {
        this.filteredAssignments = this.filteredAssignments.filter((assignment) => {
          return assignment.subject.toUpperCase() === filter;
        });
      }
    });
  }

}
