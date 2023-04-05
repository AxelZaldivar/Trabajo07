import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class MessageService {
  //arreglo que almacena los mensajes
  messages: string[] = [];

  //agrega mensajes en el arreglo
  add(message: string) {
    this.messages.push(message);
  }

  //limpia el arreglo de los mensajes
  clear() {
    this.messages = [];
  }
}
