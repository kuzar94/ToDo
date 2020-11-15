export class ToDoTask {
  id: string;
  candidate: string;
  task: string;
  is_completed: boolean;

  constructor(id: string,
              candidate: string,
              task: string,
              is_completed: boolean,
  ) {
    this.id = id;
    this.candidate = candidate;
    this.task = task;
    this.is_completed = is_completed;
  }
}

