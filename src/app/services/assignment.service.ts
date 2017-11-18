import { HttpClient } from '@angular/common/http';
import { IAssignment } from '../shared/models/assignment.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AssignmentService {

  assignments: Array<IAssignment> = [];
  getAssignmentsUrl: string = 'http://localhost:3000/api/assignments';

  constructor(private http: HttpClient) {}

  getAssignments(): Observable<IAssignment[]> {
    return this.http.get<IAssignment[]>(this.getAssignmentsUrl);
  }

}
