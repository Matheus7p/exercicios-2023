import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NewsComponent } from './components/news/news.component';
import { ButtonComponent } from './components/button/button.component';
import { SummaryComponent } from './components/summary/summary.component';
import { EmphasisComponent } from './components/emphasis/emphasis.component';
import { DiscussionComponent } from './components/discussion/discussion.component';
import { TopicsComponent } from './components/discussion/topics/topics.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { TopicResponsesComponent } from './components/discussion/topics/topic-responses/topic-responses.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    NewsComponent,
    ButtonComponent,
    SummaryComponent,
    EmphasisComponent,
    DiscussionComponent,
    TopicsComponent,
    FooterComponent,
    TopicResponsesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
