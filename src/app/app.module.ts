import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoTaskElementComponent } from './components/to-do-task-element/to-do-task-element.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoTaskElementComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
})
export class AppModule {
}
