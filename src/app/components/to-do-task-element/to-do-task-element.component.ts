import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDoTask } from '../../shared/models/to-do-task';
import { ToDoTaskData } from '../../shared/models/to-do-task-data';

@Component({
  selector: 'app-to-do-task',
  styleUrls: ['./to-do-task-element.component.scss'],
  templateUrl: './to-do-task-element.component.html',
})
export class ToDoTaskElementComponent {
  private _taskData: ToDoTask;
  private _showTask: boolean;
  @Output() deleteTaskButtonClicked = new EventEmitter<string>();
  @Output() taskChanged = new EventEmitter<ToDoTaskData>();

  get showTask(): boolean {
    return this._showTask;
  }

  @Input() set showTask(showTask: boolean) {
    this._showTask = showTask;
  }

  get taskData(): ToDoTask {
    return this._taskData;
  }

  @Input() set taskData(taskData: ToDoTask) {
    this._taskData = taskData;
  }

  onDeleteTaskButtonClick(): void {
    this.deleteTaskButtonClicked.emit(this.taskData.id);
  }

  onTaskChange(): void {
    const editedTask = new ToDoTaskData(this.taskData.id, this.taskData.task, this.taskData.is_completed);
    this.taskChanged.emit(editedTask);
  }

}
