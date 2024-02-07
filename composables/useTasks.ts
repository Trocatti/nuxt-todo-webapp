export type Task = {
    id: number,
    value: string,
    done: boolean
}

interface UseTasks {
    tasks: Ref<Task[]>
    deleteTask(): void
}

export function useTasks (): UseTasks {
    const tasks = ref<Task[]>(Array(5).fill({}).map((_, i) => ({ id: i++, value: "", done: false })))

    function deleteTask(): void {
        const tasksInProgress: Task[] = tasks.value.filter((task: Task) => task.done === false)
        tasks.value = tasksInProgress
    }

    return {
        tasks,
        deleteTask
    }
}