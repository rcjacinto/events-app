import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterParentPage } from './register-parent.page';

describe('RegisterParentPage', () => {
  let component: RegisterParentPage;
  let fixture: ComponentFixture<RegisterParentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterParentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterParentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
