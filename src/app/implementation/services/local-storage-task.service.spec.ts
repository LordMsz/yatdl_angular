import { async, TestBed, inject } from '@angular/core/testing';

import { LocalStorageTaskService } from './local-storage-task.service';

describe('LocalStorageTaskServiceService', () => {
  let service: LocalStorageTaskService;
  let storage: Array<{ key: string, value: string }> = [];

  function findElementInStorage(key: string): { key: string, value: string, index: number } {
    for (let i = 0; i < storage.length; i++) {
      const element = storage[i];
      if (element.key === key) {
        return { key: key, value: element.value, index: i };
      }
    }

    return null;
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageTaskService]
    });

    service = new LocalStorageTaskService();
    storage = [];

    // spy the local storage
    spyOn(localStorage, 'setItem').and.callFake(function (key: string, value: string) {
      const item = findElementInStorage(key);
      if (!item) {
        storage.push({ key: key, value: value });
        return;
      }
      storage[item.index].value = value;
    });
    spyOn(localStorage, 'removeItem').and.callFake(function (key: string) {
      const item = findElementInStorage(key);
      if (!item) {
        return;
      }
      storage.splice(item.index, 1);
    });
    spyOn(localStorage, 'getItem').and.callFake(function (key: string) {
      const item = findElementInStorage(key);
      if (!item) {
        return null;
      }
      return item.value;
    });
  });

  it('should be created', inject([LocalStorageTaskService], (svc: LocalStorageTaskService) => {
    expect(svc).toBeTruthy();
  }));
  it('should add/store a simple task in local storage', async(() => {
    expect(storage.length).toBe(0);
    const task = 'New task';
    service.addTask(task);
    expect(storage.length).toBe(1);
    const storedItem = storage[0];
    const parsed = JSON.parse(storedItem.value);
    expect(parsed.length).toBe(1);
    expect(parsed[0]).toBe(task);
  }));
  it('should remove stored task in local storage', async(() => {
    const task = 'New task';
    service.addTask(task);
    expect(storage.length).toBe(1);

    service.removeTask(task);

    expect(storage.length).toBe(1);
    const storedItem = storage[0];
    const parsed = JSON.parse(storedItem.value);
    expect(parsed.length).toBe(0);
  }));
  it('should return correct task count', async(() => {
    expect(service.getTaskCount()).toBe(0);
    service.addTask('Task');
    expect(service.getTaskCount()).toBe(1);
  }));
  it('should not fail removing inexistent task', async(() => {
    expect(service.getTaskCount()).toBe(0);
    expect(function () { service.removeTask('Task'); }).not.toThrow();

    service.addTask('Demo');

    expect(function () { service.removeTask('Task'); }).not.toThrow();
  }));
});
