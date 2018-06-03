/**
 * Interface for TaskService; allows to manipulate list of tasks
 */
export abstract class TaskService {
    /**
     * Returns list of tasks
     */
    abstract getTaskList(): string[];

    /**
     * Returns a total number of tasks
     */
    abstract getTaskCount(): number;

    /**
     * Adds a new task to the list
     * @param taskName task to add
     */
    abstract addTask(taskName: string): void;

    /**
     * Removes given task from the list
     * @param taskName task to be removed
     */
    abstract removeTask(taskName: string): void;
}
