import { TestBed } from '@angular/core/testing';

import { ToDoTaskService } from './to-do-task.service';

describe('ToDoTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToDoTaskService = TestBed.get(ToDoTaskService);
    expect(service).toBeTruthy();
  });
});
