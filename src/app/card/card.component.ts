import { Component, OnInit } from '@angular/core';

import { ISubject } from '../models/subject.model';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})

export class CardComponent implements OnInit {

  subjects: ISubject[];
  
  constructor(public subjectService: SubjectService) { }

  ngOnInit() {
    this.subjects = this.subjectService.subjects;
    console.log(this.subjects);
  }

}
