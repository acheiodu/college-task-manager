import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';

@Component({ selector: 'app-card', templateUrl: './card.component.html', styleUrls: ['./card.component.less']})

export class CardComponent {

  @Input() assignment;
  @Output() onClickEdit = new EventEmitter<string>();
  @Output() onClickFinish = new EventEmitter<string>();
  @Output() onClickPill = new EventEmitter<any>();
  @Output() onClickRemove = new EventEmitter<string>();

}
