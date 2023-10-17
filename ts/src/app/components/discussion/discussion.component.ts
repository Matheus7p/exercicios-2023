import { Component } from '@angular/core';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent {
  topics = [
    {
      title: 'Assunto da pergunta aparece aqui',
      author: 'Carlos Henrique Santos',
      body: 'Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...',
      likes: 1,
      answers: 1
    },

  ];

  expandedTopicIndex: number = -1; 
  
  expandTopic(index: number): void {
    this.expandedTopicIndex = index === this.expandedTopicIndex ? -1 : index;
  }

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
    this.showMensage = false; 
  }

  submitTopic() {
   
    this.createTopic = false;
    this.showMensage = true;
  }

  
}
