import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';

@Component({ selector: 'app-pill', templateUrl: './pill.component.html', styleUrls: ['./pill.component.less']})

export class PillComponent {

  @Input() content: any;
  @Output() onClickPill = new EventEmitter<string>();

  styles: any = {};

  ngOnInit() {
    if (this.content.key === 'assignment') {
      this.styles.color = 'rgb(255, 255, 255)';
      this.styles.backgroundColor = 'rgb(130, 130, 130)';
      this.styles.margin = '0px 5px 0px 0px';
      if (this.content.value === 'PROVA') {
        this.styles.backgroundColor = 'rgb(80, 187, 74)';
      }
    } else if (this.content.key === 'subject') {
      this.styles.color = 'rgb(255, 255, 255)';
      this.styles.backgroundColor = 'rgb(96, 84, 197)';
    } else if (this.content.key === 'filter') {
      this.styles.color = 'rgb(0, 0, 0)';
      this.styles.backgroundColor = 'rgb(230, 230, 230)';
      this.styles.margin = '0px 5px 20px 0px';
    } else if (this.content.key === 'button') {
      this.styles.backgroundColor = 'rgb(210, 210, 210)';
      this.styles.color = 'rgb(0, 0, 0)';
      this.styles.margin = '0px 5px 10px 0px';
    } else {
    this.styles.color = 'rgb(0, 0, 0)';
    this.styles.backgroundColor = 'rgb(230, 230, 230)';
    this.styles.margin = '0px 5px 10px 0px';
  }
}

}
