import { TestBed, inject } from '@angular/core/testing';

import { LocalStorageTaskService } from './local-storage-task.service';

describe('LocalStorageTaskServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageTaskService]
    });
  });

  it('should be created', inject([LocalStorageTaskService], (service: LocalStorageTaskService) => {
    expect(service).toBeTruthy();
  }));
});
