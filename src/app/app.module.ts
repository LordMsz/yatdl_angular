import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // module for working with two way binding
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// modules
import { AppRoutingModule } from './app-routing.module';

// services
import { TaskService } from './abstraction/services/task-service';
import { LocalStorageTaskService } from './local-storage-task.service';

// components
import { AppComponent } from './app.component';
import { TaskEditorComponent } from './task-editor/task-editor.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskEditorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: TaskService, useClass: LocalStorageTaskService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
