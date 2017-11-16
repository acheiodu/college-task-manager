import { Injectable } from '@angular/core';
import { IAssignment } from '../models/assignment.model';

@Injectable()
export class AssignmentService {

  assignments: IAssignment[] = [
    {
      type: 'Prova',
      subject: 'Inteligência Artificial',
      requestDate: new Date(),
      dueDate: new Date(),
      description: 'Criar um modelo de machine learning com base em algum dataset do site UCI. Criar um modelo de machine learning com base em algum dataset do site UCI. Criar um modelo de machine learning com base em algum dataset do site UCI.',
      status: 'Pendente',
      grade: 0
    },
    {
      type: 'Tarefa',
      subject: 'Inteligência Artificial',
      requestDate: new Date(),
      dueDate: new Date(),
      description: 'K-fold Cross Validation',
      status: 'Pendente',
      grade: 0
    },
    {
      type: 'Atividade',
      subject: 'Compiladores',
      requestDate: new Date(),
      dueDate: new Date(),
      description: 'Atividade do Edmodo.',
      status: 'Pendente',
      grade: 0
    },
    {
      type: 'Atividade',
      subject: 'Compiladores',
      requestDate: new Date(),
      dueDate: new Date(),
      description: 'Criar um modelo de machine learning com base em algum dataset do site UCI.',
      status: 'Pendente',
      grade: 0
    },
    {
      type: 'Prova',
      subject: 'Compiladores',
      requestDate: new Date(),
      dueDate: new Date(),
      description: 'K-fold Cross Validation',
      status: 'Pendente',
      grade: 0
    },
    {
      type: 'Tarefa',
      subject: 'Computação Paralela',
      requestDate: new Date(),
      dueDate: new Date(),
      description: 'Criar um modelo de machine learning com base em algum dataset do site UCI.',
      status: 'Pendente',
      grade: 0
    },
    {
      type: 'Prova',
      subject: 'EAD - Antropologia',
      requestDate: new Date(),
      dueDate: new Date(),
      description: 'K-fold Cross Validation',
      status: 'Pendente',
      grade: 0
    },
    {
      type: 'Atividade',
      subject: 'EAD - Antropologia',
      requestDate: new Date(),
      dueDate: new Date(),
      description: 'Criar um modelo de machine learning com base em algum dataset do site UCI. Criar um modelo de machine learning com base em algum dataset do site UCI. Criar um modelo de machine learning com base em algum dataset do site UCI.',
      status: 'Pendente',
      grade: 0
    },
    {
      type: 'Prova',
      subject: 'EAD - Antropologia',
      requestDate: new Date(),
      dueDate: new Date(),
      description: 'K-fold Cross Validation',
      status: 'Pendente',
      grade: 0
    },
    {
      type: 'Atividade',
      subject: 'EAD - Sociologia',
      requestDate: new Date(),
      dueDate: new Date(),
      description: 'Criar um modelo de machine learning com base em algum dataset do site UCI. Criar um modelo de machine learning com base em algum dataset do site UCI. Criar um modelo de machine learning com base em algum dataset do site UCI.',
      status: 'Pendente',
      grade: 0
    },
    {
      type: 'Prova',
      subject: 'EAD - Sociologia',
      requestDate: new Date(),
      dueDate: new Date(),
      description: 'K-fold Cross Validation',
      status: 'Pendente',
      grade: 0
    }
  ];

}
