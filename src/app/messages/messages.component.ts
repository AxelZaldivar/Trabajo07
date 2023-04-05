import { Component } from '@angular/core';

//importar el servicio de messages
import { MessageService } from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent {
  //recibe como parametro al servicio messages.service
  constructor(public messageService: MessageService) {}
}
