import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css']
})
export class TaskEditorComponent implements OnInit {

  btnSubmitText : string = "Add task";
  inTaskTextValue : string;
  tasks : string[] = [];


  constructor() { }

  ngOnInit() {
  }

  submit(){
    this.tasks.push(this.inTaskTextValue);
    this.inTaskTextValue = null;
  }

}
