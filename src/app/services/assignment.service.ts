import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { IAssignment } from '../shared/models/assignment.model';
import { environment } from '../../environments/environment';

@Injectable()
export class AssignmentService {

  assignment: any = {};
  assignments: Array<IAssignment> = [];
  type: Array<string> = [];
  subject: Array<string> = [];
  status: Array<string> = [];
  grade: Array<number> = [];
  totalGrade: Array<number> = [];
  description: Array<string> = [];

  getAssignmentsUrl: string = environment.path + '/assignment/find';
  editAssignmentUrl: string = environment.path + '/assignment/edit';
  removeAssignmentUrl: string = environment.path + '/assignment/remove';
  saveAssignmentUrl: string = environment.path + '/assignment/save';

  constructor(private http: HttpClient) {}

  // Methods that make HTTP calls

  getAssignments(): Observable<IAssignment[]> {
    return this.http.get<IAssignment[]>(this.getAssignmentsUrl);
  }

  removeAssignment(assignmentId: string): Observable<any> {
    return this.http.post<any>(this.removeAssignmentUrl, {id: assignmentId});
  }

  saveAssignment(body): Observable<any[]> {
    return this.http.post<any[]>(this.saveAssignmentUrl, body);
  }

  updateAssignment(assignment: any): Observable<any[]> {
    return this.http.post<any[]>(this.editAssignmentUrl, {filter: {_id: assignment._id}, query: assignment});
  }

  // Methods that DON'T make HTTP calls

  addItem(key: string, value: string): void {
    if (!this[key].includes(value)) {
      this[key].push(value);
    }
    this.assignment[key] = value;
  }

  cleanAssignment(): void {
    this.assignment = {};
  }

  finishAssignment(assignment: any): any {
    assignment.status = 'FINALIZADO';
    return this.updateAssignment(assignment);
  }

  getAssignment(): IAssignment {
    return this.assignment;
  }

  removeItem(key: string, value: string): void {
    let index = this[key].indexOf(value);
    if (index !== -1) {
      this[key].splice(index, 1);
    }
  }

  setAssignment(assignment: IAssignment): void {
    this.assignment = assignment;
  }

  setAssignmentItem(item: any): void {
    this.assignment[item.serviceContent] = item.selected;
  }

  setAssignments(assignments: Array<any>): void {
    this.assignments = assignments;
    this.type = [];
    assignments.filter((assignment, index, array) => {
      return array.findIndex((arrayAssignment) => arrayAssignment.type === assignment.type) === index;
    })
    .map((assignment) => {
      return this.type.push(assignment.type);
    })
    this.subject = [];
    assignments.filter((assignment, index, array) => {
      return array.findIndex((arrayAssignment) => arrayAssignment.subject === assignment.subject) === index;
    })
    .map((assignment) => {
      return this.subject.push(assignment.subject);
    })
    this.status = [];
    assignments.filter((assignment, index, array) => {
      return array.findIndex((arrayAssignment) => arrayAssignment.status === assignment.status) === index;
    })
    .map((assignment) => {
      return this.status.push(assignment.status);
    })
    this.grade = [];
    assignments.filter((assignment, index, array) => {
      return array.findIndex((arrayAssignment) => arrayAssignment.grade === assignment.grade) === index;
    })
    .map((assignment) => {
      return this.grade.push(assignment.grade);
    })
    this.totalGrade = [];
    assignments.filter((assignment, index, array) => {
      return array.findIndex((arrayAssignment) => arrayAssignment.totalGrade === assignment.totalGrade) === index;
    })
    .map((assignment) => {
      return this.totalGrade.push(assignment.totalGrade);
    })
  }

}
