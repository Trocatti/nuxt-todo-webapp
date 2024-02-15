import { nanoid } from "nanoid";

export type Task = {
  id: string;
  value: string;
  done: boolean;
  date: string;
};

interface UseTasks {
  tasks: Task[];
  tasksDone: ComputedRef<Task[]>;
  clearTasks(): void;
  doneTask(task: Task): void;
  addTask(): void;
}

const TASK_DEFAULT = { value: "", done: false, date: "" };

const UNIQUE_ID = (range: number = 10) => nanoid(range);

const TASKS_LIST = (range: number = 5) => {
  return Array(range)
    .fill({})
    .map(() => ({ id: UNIQUE_ID(), ...TASK_DEFAULT }));
};

export function useTasks(): UseTasks {
  const tasks = reactive<Task[]>(TASKS_LIST());

  const tasksDone = computed(() => tasks.filter((t) => t.done));

  function getIndex(task: Task): number {
    return tasks.findIndex((item) => item.id === task.id);
  }

  function getDateDone(
    lang: string = "pt-BR",
    options: Object = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }
  ): string {
    return new Intl.DateTimeFormat(lang, options)
      .format(new Date())
      .replace(",", " às");
  }

  function doneTask(task: Task): void {
    if (!task.value.trim()) {
      return;
    }

    const index = getIndex(task);

    if (index >= 0) {
      task.done = !task.done;
      task.date = getDateDone();
      tasks[index] = task;
    }
  }

  function addTask(): void {
    tasks.push({
      id: UNIQUE_ID(),
      ...TASK_DEFAULT,
    });
  }

  function clearTasks(): void {
    tasks.splice(0, tasks.length, ...TASKS_LIST());
  }

  return {
    tasks,
    tasksDone,
    clearTasks,
    doneTask,
    addTask,
  };
}
