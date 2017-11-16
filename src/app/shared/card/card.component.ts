import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';

@Component({ selector: 'app-card', templateUrl: './card.component.html', styleUrls: ['./card.component.less']})

export class CardComponent {

  @Input() assignment;
  @Output() onClickPill = new EventEmitter<string>();

}
