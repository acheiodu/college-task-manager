import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.less']
})

export class CardInfoComponent implements OnInit {

  @Input() assignment;
  
  constructor() {}

  ngOnInit() {}

}
