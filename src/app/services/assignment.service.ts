import { HttpClient } from '@angular/common/http';
import { IAssignment } from '../shared/models/assignment.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AssignmentService {

  assignment: IAssignment = {};
  assignments: Array<IAssignment> = [];
  types: Array<string> = [];
  subjects: Array<string> = [];
  status: Array<string> = [];

  getAssignmentsUrl: string = 'http://35.226.159.16:8080/assignments';
  saveAssignmentUrl: string = 'http://35.226.159.16:8080/save/assignment';
  removeAssignmentUrl: string = 'http://35.226.159.16:8080/remove/assignment';
  
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

  // Methods that DON'T make HTTP calls

  addItem(key: string, value: string): void {
    if (!this[key].includes(value)) {
      this[key].push(value.toUpperCase());
    }
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
