import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
}


}
