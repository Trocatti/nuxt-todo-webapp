<script setup lang="ts">
import { type Task } from "~/composables/useTasks";

defineProps<{
  tasks: Task[];
}>();

const emit = defineEmits<{
  (e: "done-task", taks: Task): void;
  (e: "add-task"): void;
  (e: "clear-tasks"): void;
}>();
</script>

<template>
  <div class="flex flex-col gap-4">
    <ul
      class="w-80 rounded-xl border border-black dark:border-white overflow-hidden divide-y divide-black dark:divide-white transform shadow-brutalist-dark dark:shadow-brutalist-light"
    >
      <li
        v-for="(task, index) in tasks"
        class="group flex items-center justify-between dark:bg-black"
      >
        <input
          v-model="task.value"
          required
          :placeholder="index === 0 ? 'watch the office' : ''"
          class="w-full h-12 px-4 focus:outline-none py-3 dark:text-white dark:placeholder-white dark:bg-black"
        />

        <FeaturesTasksButtonDone
          :task="task"
          @done-task="() => emit('done-task', task)"
        />
      </li>
    </ul>
    <FeaturesTasksFooterActions
      @add-task="() => emit('add-task')"
      @clear-tasks="() => emit('clear-tasks')"
    />
  </div>
</template>
