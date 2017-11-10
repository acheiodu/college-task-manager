import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.less']
})

export class CardListComponent implements OnInit {

  @Input() assignments;
  @Output() onClickPill = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

}
