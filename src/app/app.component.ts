import { Component, OnInit } from '@angular/core';

import { Subject } from './models/subject.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {

  info: string;
  subject: Subject = {
    name: 'Inteligência Artificial',
    professor: 'André',
    assignments: [
      {
        type: 'Atividade',
        requestDate: new Date(),
        dueDate: new Date(),
        description: 'Criar um modelo de machine learning com base em algum dataset do site UCI. Criar um modelo de machine learning com base em algum dataset do site UCI. Criar um modelo de machine learning com base em algum dataset do site UCI.',
        status: 'pendente',
        grade: 0
      },
      {
        type: 'Prova',
        requestDate: new Date(),
        dueDate: new Date(),
        description: 'K-fold Cross Validation',
        status: 'pendente',
        grade: 0
      }
    ],
    grade: {
      criteria: '(A1 + A2 + N1 + 7 * N2) / 100',
      value: 0
    }
  };

  constructor() {}

  ngOnInit() {}

  openInfo(assignment): void {
    this.info = assignment.description;
  }

  closeInfo(): void {
    this.info = null;
  }

}
