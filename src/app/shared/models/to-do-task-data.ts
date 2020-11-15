export class ToDoTaskData {
  id: string;
  task: string;
  is_completed: boolean;

  constructor(id: string,
              task: string,
              is_completed: boolean,
  ) {
    this.id = id;
    this.task = task;
    this.is_completed = is_completed;
  }
}

