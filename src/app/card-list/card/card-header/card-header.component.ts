import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.less']
})

export class CardHeaderComponent implements OnInit {

  @Input() assignment;
  @Output() onClickPill = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

}
