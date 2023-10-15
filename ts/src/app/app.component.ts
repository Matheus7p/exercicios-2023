import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';

  isCreatingTopic: boolean = true;

  onTopicCreated() {
    this.isCreatingTopic = false;
  }

  onCreateNewTopic() {
    this.isCreatingTopic = true;
  }
}
