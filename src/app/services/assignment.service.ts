import { HttpClient } from '@angular/common/http';
import { IAssignment } from '../shared/models/assignment.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AssignmentService {

  assignments: Array<IAssignment> = [];
  types: Array<string> = [];
  subjects: Array<string> = [];
  status: Array<string> = [];

  assignmentUrl: string = 'http://192.168.1.33:3000/api/assignment';

  constructor(private http: HttpClient) {}

  // Methods that make HTTP calls

  getAssignments(): Observable<IAssignment[]> {
    return this.http.get<IAssignment[]>(this.assignmentUrl);
  }

  saveAssignment(body): Observable<any[]> {
    return this.http.post<any[]>(this.assignmentUrl, body);
  }

  // Methods that DON'T make HTTP calls

  addItem(key: string, value: string): void {
    if (!this[key].includes(value)) {
      this[key].push(value.toUpperCase());
    }
  }

  removeItem(key: string, value: string): void {
    let index = this[key].indexOf(value);
    if (index !== -1) {
      this[key].splice(index, 1);
    }
  }

  setAssignments(assignments: Array<IAssignment>): void {
    this.assignments = assignments;
    this.types = [];
    assignments.filter((assignment, index, array) => {
      return array.findIndex((arrayAssignment) => arrayAssignment.type === assignment.type) === index;
    })
    .map((assignment) => {
      return this.types.push(assignment.type);
    })
    this.subjects = [];
    assignments.filter((assignment, index, array) => {
      return array.findIndex((arrayAssignment) => arrayAssignment.subject === assignment.subject) === index;
    })
    .map((assignment) => {
      return this.subjects.push(assignment.subject);
    })
    this.status = [];
    assignments.filter((assignment, index, array) => {
      return array.findIndex((arrayAssignment) => arrayAssignment.status === assignment.status) === index;
    })
    .map((assignment) => {
      return this.status.push(assignment.status);
    })
  }

}
