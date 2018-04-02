import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { ParamMap } from '@angular/router';
import { Router } from '@angular/router';

import { AssignmentService } from '../services/assignment.service';

import {Observable} from 'rxjs/Observable'

import 'rxjs/add/operator/switchMap';

@Component({selector: 'app-edit-assignment', templateUrl: './edit-assignment.component.html', styleUrls: ['./edit-assignment.component.less']})

export class EditAssignmentComponent {

  assignmentId: boolean;

  constructor(public assignmentService: AssignmentService, public route: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    this.route.paramMap
    .subscribe((param) => {
      this.assignmentId = param.has('assignmentId');
    });
  }

  cancel() {
    this.router.navigate(['']);
  }

  saveUpdate(assignment) {
    this.assignmentService.updateAssignment(assignment)
    .subscribe(() => {
      this.router.navigate(['']);
    });
  }

}
