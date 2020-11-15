import { Component, OnInit } from '@angular/core';
import { ToDoTaskService } from '../../shared/services/data/to-do-task.service';
import { ToDoTask } from '../../shared/models/to-do-task';
import { ToDoTaskData } from '../../shared/models/to-do-task-data';

@Component({
  selector: 'app-to-do-list',
  styleUrls: ['./to-do-list.component.scss'],
  templateUrl: './to-do-list.component.html',
})
export class ToDoListComponent implements OnInit {
  private _toDoTasks: ToDoTask[];
  private _showAllTasks: boolean;

  constructor(private toDoTaskService: ToDoTaskService) {
  }

  public ngOnInit(): void {
    this.refreshToDoTasks();
    this.showAllTasks = false;
  }

  get toDoTasks(): ToDoTask[] {
    return this._toDoTasks;
  }

  set toDoTasks(toDoTasks: ToDoTask[]) {
    this._toDoTasks = toDoTasks;
  }

  get showAllTasks(): boolean {
    return this._showAllTasks;
  }

  set showAllTasks(showAllTasks: boolean) {
    this._showAllTasks = showAllTasks;
  }

  shouldShowTask(isTaskComplete: boolean): boolean {
    if (this.showAllTasks) {
      return true;
    } else {
      return !isTaskComplete;
    }
  }

  onToggleShowAllTaskClick() {
    this.showAllTasks = !this.showAllTasks;
  }

  onDeleteTaskButtonClick(taskTargetId: string) {
    this.deleteTargetTask(taskTargetId);
  }

  onAddNewTaskButtonClick() {
    this.addNewTask();
  }

  onTaskChange(changeTask: ToDoTaskData) {
    this.editTask(changeTask);
  }

  private addNewTask() {
    const newTask = this.createNewTask();
    this.toDoTaskService.editOrAddNewTask(newTask).subscribe(
      (dataNewTask) => {
        this.toDoTasks.push(dataNewTask[0]);
      });
  }

  private editTask(changeTask: ToDoTaskData) {
    this.toDoTaskService.editOrAddNewTask(changeTask).subscribe(
      () => {
        this.refreshToDoTasks();
      });
  }

  private deleteTargetTask(targetId: string) {
    this.toDoTaskService.deleteTask$(targetId).subscribe(
      () => {
        this.toDoTasks = this.toDoTasks.filter((task) => task.id !== targetId);
      });
  }

  private createNewTask(): ToDoTaskData {
    return new ToDoTaskData('', '', false);
  }

  private refreshToDoTasks(): void {
    this.toDoTaskService.getToDoTasks$().subscribe((dataList: any) => this.toDoTasks = dataList.data);
  }
}
