import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageTaskService } from '../local-storage-task.service';
import { TaskService } from '../abstraction/services/task-service';

/**
 * Editor for a task item
 */
@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css']
})
export class TaskEditorComponent implements OnInit {

  private taskService: TaskService;
  private route: ActivatedRoute;
  private router: Router;

  activeQuoteId: number;
  btnSubmitText = 'Add task';
  inTaskTextValue: string;

  // just to show possibilities of routing with parameter
  quotes: string[] = [
    'There is no nonsense so gross that society will not, at some time, make a '
    + 'doctrine of it and defend it with every weapon of communal stupidity. - Robertson Davies',
    'It never hurts to ask. Unless you ask for hurt. - Takayuki Ikkaku, Arisa Hosaka and Toshihiro Kawabata',
    'The first half of our lives is ruined by our parents, and the second half by our children. - Clarence Darrow',
    'Man is the only animal that laughs and has a state legislature. - Samuel Butler',
    'Idleness is not doing nothing. Idleness is being free to do anything. - Floyd Dell'
  ];


  constructor(taskService: TaskService, route: ActivatedRoute, router: Router) {
    this.route = route;
    this.router = router;
    this.taskService = taskService;

    this.route.params.subscribe((response) => {
      this.activeQuoteId = response.quoteId;
    });
  }

  ngOnInit() {
  }

  submit() {
    this.taskService.addTask(this.inTaskTextValue);
    this.inTaskTextValue = null;
  }

  taskClick(taskText: string) {
    this.removeTask(taskText);
  }

  removeTask(taskText: string) {
    this.taskService.removeTask(taskText);
  }

  redirectHome() {
    this.router.navigate(['']);
  }

  getTaskCount(): number {
    return this.taskService.getTaskCount();
  }

  getTaskList(): string[] {
    return this.taskService.getTaskList();
  }

}
