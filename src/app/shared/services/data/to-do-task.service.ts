import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToDoTask } from '../../models/to-do-task';
import { ToDoTaskData } from '../../models/to-do-task-data';

@Injectable({
  providedIn: 'root',
})
export class ToDoTaskService {
  private readonly URL = 'https://angular.massivepixel.io/api/szalkowska.weronika';

  constructor(private http: HttpClient) {
  }

  getToDoTasks$(): Observable<ToDoTask[]> {
    return this.http.get<ToDoTask[]>(this.URL);
  }

  editOrAddNewTask(newTask: ToDoTaskData): Observable<ToDoTask[]> {
    return this.http.post<ToDoTask[]>(this.URL, newTask);
  }

  deleteTask$(deleteTaskTarget): Observable<void> {
    return this.http.delete<void>(this.URL + `/${deleteTaskTarget}`);
  }
}
