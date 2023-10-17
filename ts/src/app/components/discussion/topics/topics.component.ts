import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
