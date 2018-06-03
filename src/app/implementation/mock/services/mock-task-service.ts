import { Injectable } from '@angular/core';
import { TaskService } from '../../../abstraction/services/task-service';

@Injectable({
    providedIn: 'root'
})
export class MockTaskService implements TaskService {

    public tasks: string[];

    constructor() {
        this.tasks = [];
    }

    getTaskCount(): number {
        return this.getTaskList().length;
    }

    getTaskList(): string[] {
        return this.tasks;
    }
    addTask(taskName: string): void {
        this.tasks.push(taskName);
    }
    removeTask(taskText: string): void {
        for (let i = 0; i < this.tasks.length; i++) {
            const item = this.tasks[i];

            if (taskText === item) {
                this.tasks.splice(i, 1);
            }
        }
    }
}
