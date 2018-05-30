import { Component, OnInit } from '@angular/core';

/**
 * Editor for a task item
 */
@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css']
})
export class TaskEditorComponent implements OnInit {

  btnSubmitText = 'Add task';
  inTaskTextValue: string;
  tasks: string[] = [];


  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.tasks.push(this.inTaskTextValue);
    this.inTaskTextValue = null;
  }

  taskClick(taskText: string) {
    this.removeTask(taskText);
  }

  removeTask(taskText: string) {
    for (let i = 0; i < this.tasks.length; i++) {
      const item = this.tasks[i];

      if (taskText == item) {
        this.tasks.splice(i, 1);
      }
    }
  }

}
