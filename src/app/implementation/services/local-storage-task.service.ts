import { Injectable } from '@angular/core';
import { TaskService } from '../../abstraction/services/task-service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageTaskService implements TaskService {
  public static TASK_LOCAL_STORAGE_KEY = 'TASK_LOCAL_STORAGE_KEY';

  constructor() { }

  getTaskCount(): number {
    return this.getTaskList().length;
  }

  getTaskList(): string[] {
    const storedString = localStorage.getItem(LocalStorageTaskService.TASK_LOCAL_STORAGE_KEY);

    if (!storedString) {
      return [];
    }

    const parsed = JSON.parse(storedString);
    const result = parsed as string[];
    return result;
  }
  addTask(taskName: string): void {
    const taskList = this.getTaskList();
    taskList.push(taskName);

    this.saveToStorage(taskList);
  }
  removeTask(taskText: string): void {
    const taskList = this.getTaskList();
    for (let i = 0; i < taskList.length; i++) {
      const item = taskList[i];

      if (taskText === item) {
        taskList.splice(i, 1);
      }
    }
    this.saveToStorage(taskList);
  }

  private saveToStorage(taskList: string[]) {
    localStorage.setItem(LocalStorageTaskService.TASK_LOCAL_STORAGE_KEY, JSON.stringify(taskList));
  }
}
