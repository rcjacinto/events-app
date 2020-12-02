import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsEventsPage } from './news-events.page';

describe('NewsEventsPage', () => {
  let component: NewsEventsPage;
  let fixture: ComponentFixture<NewsEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsEventsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
