import { Component } from '@angular/core';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent {
  createTopic = false;
  novoTopico = {
    subject: '',
    content: ''
  };
  showMensage = false;

  createNewTopic() {
    this.createTopic = true;
    this.novoTopico = {
      subject: '',
      content: ''
    };
    this.showMensage = false; // Oculte a mensagem de sucesso
  }

  submitTopic() {
    // Implemente aqui a lógica para enviar o novo tópico para o servidor.
    // Após o envio, defina createTopic como false e showMensagem como true.
    this.createTopic = false;
    this.showMensage = true;
  }
}
