import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEditorComponent } from './task-editor.component';

import { FormsModule } from '@angular/forms'; // module for working with two way binding

describe('TaskEditorComponent', () => {
  let component: TaskEditorComponent;
  let fixture: ComponentFixture<TaskEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TaskEditorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render simple task', () => {
    const taskText = 'A simple task';
    component.tasks.push(taskText);
    fixture.detectChanges();
    const ol: HTMLOListElement = fixture.debugElement.nativeElement.querySelector('ol');
    expect(ol).toBeDefined();
    expect(ol.childElementCount).toBe(1);
    expect(ol.children[0].textContent).toContain(taskText);
  });
});
