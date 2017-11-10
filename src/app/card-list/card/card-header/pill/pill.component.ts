import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.less']
})

export class PillComponent implements OnInit {

  @Input() content: string;
  @Output() onClickPill = new EventEmitter<string>();
  backgroundColor: string;

  constructor() {}

  ngOnInit() {
    switch(this.content) {
      case 'Tarefa':  this.backgroundColor = 'rgb(130, 130, 130)';
                      break;
      case 'Atividade': this.backgroundColor = 'rgb(130, 130, 130)';
                        break;
      case 'Prova': this.backgroundColor = 'rgb(80, 187, 74)';
                    break;
      default:  this.backgroundColor = 'rgb(96, 84, 197)';
                break;
    }
  }

}
