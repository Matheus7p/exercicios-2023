import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicResponsesComponent } from './topic-responses.component';

describe('TopicResponsesComponent', () => {
  let component: TopicResponsesComponent;
  let fixture: ComponentFixture<TopicResponsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicResponsesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
