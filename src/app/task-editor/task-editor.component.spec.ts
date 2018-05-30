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
  it('should add a task with submit method', async(() => {
    component.inTaskTextValue = 'New task';
    fixture.detectChanges();
    component.submit();
    fixture.detectChanges();
    expect(component.tasks.length).toBe(1);
    expect(component.inTaskTextValue).toBeFalsy();
    expect(fixture.debugElement.nativeElement.querySelector('ol li')).toBeDefined();
  }));
  it('should remove (existing) task with remove method', async(() => {
    const taskName = 'Task to be removed';
    component.tasks.push(taskName);
    component.removeTask(taskName);

    expect(component.tasks.length).toBe(0);
  }));
  // TODO: test removing not existing task to show error message (dependency injection?)
});
