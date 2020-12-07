import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodolisComponent } from './todolis.component';

describe('TodolisComponent', () => {
  let component: TodolisComponent;
  let fixture: ComponentFixture<TodolisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolisComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
