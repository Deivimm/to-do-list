import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoButttonDeleteAllComponent } from './todo-buttton-delete-all.component';

describe('TodoButttonDeleteAllComponent', () => {
  let component: TodoButttonDeleteAllComponent;
  let fixture: ComponentFixture<TodoButttonDeleteAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoButttonDeleteAllComponent]
    });
    fixture = TestBed.createComponent(TodoButttonDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
