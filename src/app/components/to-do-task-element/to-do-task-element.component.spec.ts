import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoTaskElementComponent } from './to-do-task-element.component';

describe('ToDoTaskElementComponent', () => {
  let component: ToDoTaskElementComponent;
  let fixture: ComponentFixture<ToDoTaskElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoTaskElementComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoTaskElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
