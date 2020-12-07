import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TododetailComponent } from './tododetail.component';

describe('TododetailComponent', () => {
  let component: TododetailComponent;
  let fixture: ComponentFixture<TododetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TododetailComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TododetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
