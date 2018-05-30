import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskEditorComponent } from './task-editor/task-editor.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tasks/:quoteId',
    component: TaskEditorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
