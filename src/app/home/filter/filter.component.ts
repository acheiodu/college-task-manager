import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less']
})

export class FilterComponent implements OnInit {

  @Input() content: string;
  @Output() onClickFilter = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

}
