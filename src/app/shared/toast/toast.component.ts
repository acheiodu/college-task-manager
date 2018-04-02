import { Component, OnInit } from '@angular/core';

import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.less']
})
export class ToastComponent implements OnInit {

  message: string;

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alertService.subject.subscribe((alert) => {
      this.message = alert.message;
    })
  }

  hideToast() {
    this.message = null;
  }

}
