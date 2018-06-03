import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// modules
import { FormsModule } from '@angular/forms'; // module for working with two way binding
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

// services
import { MockTaskService } from '../implementation/mock/services/mock-task-service';
import { TaskService } from '../abstraction/services/task-service';

// components
import { TaskEditorComponent } from './task-editor.component';
import { HomeComponent } from '../home/home.component';

describe('TaskEditorComponent', () => {
  let component: TaskEditorComponent;
  let taskServiceMock: MockTaskService;
  let fixture: ComponentFixture<TaskEditorComponent>;

  taskServiceMock = new MockTaskService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
      ],
      declarations: [
        TaskEditorComponent,
        HomeComponent
      ],
      providers: [
        { provide: TaskService, useValue: taskServiceMock }, // IoC/DI of mocks! :)
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    taskServiceMock.tasks = []; // resetting the tasks list before every test
    fixture = TestBed.createComponent(TaskEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render simple task', () => {
    const taskText = 'A simple task';
    taskServiceMock.tasks.push(taskText);
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
    expect(taskServiceMock.tasks.length).toBe(1);
    expect(component.inTaskTextValue).toBeFalsy();
    expect(fixture.debugElement.nativeElement.querySelector('ol li')).toBeDefined();
  }));
  it('should remove (existing) task with remove method', async(() => {
    const taskName = 'Task to be removed';
    taskServiceMock.tasks.push(taskName);
    component.removeTask(taskName);

    expect(taskServiceMock.tasks.length).toBe(0);
  }));
  // TODO: test removing not existing task to show error message (dependency injection?)
});
