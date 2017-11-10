import { Component, OnInit } from '@angular/core';

import { SubjectService } from './services/subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {

  info: string;

  constructor(public subjectService: SubjectService) {}

  ngOnInit() { }

  openInfo(assignment): void {
    this.info = assignment.description;
  }

  closeInfo(): void {
    this.info = null;
  }

}
