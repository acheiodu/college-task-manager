import { inject } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { AssignmentService } from './assignment.service';

describe('SubjectService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssignmentService]
    });
  });

  it('should be created', inject([AssignmentService], (service: AssignmentService) => {
    expect(service).toBeTruthy();
  }));

});
