import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.less']
})

export class PillComponent implements OnInit {

  @Input() content: string;
  backgroundColor: string;

  constructor() { }

  ngOnInit() {
    switch(this.content) {
      case 'Tarefa':  this.backgroundColor = 'rgb(130, 130, 130)';
                      break;
      case 'Atividade': this.backgroundColor = 'rgb(130, 130, 130)';
                        break;
      case 'Prova': this.backgroundColor = 'rgb(216, 74, 74)';
                    break;
      default:  this.backgroundColor = 'rgb(96, 84, 197)';
                break;
    }
  }

}
