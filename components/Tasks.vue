<script setup lang="ts">
import { type Task } from '~/composables/useTasks'

defineProps<{
  tasks: Task[];
}>();

const emit = defineEmits<{
  (e: "delete-task"): void;
}>();

const handleDeleteTask = (task: Task) => {
    task.done = true 
    emit('delete-task')
}

</script>

<template>
  <ul
    class="w-80 rounded-xl border border-black dark:border-white overflow-hidden divide-y divide-black dark:divide-white transform shadow-brutalist-dark dark:shadow-white"
  >
    <li
      v-for="(task, index) in tasks"
      class="group flex items-center justify-between dark:bg-black"
    >
      <input
        v-model="task.value"
        :placeholder="index === 0 ? 'watch the office' : ''"
        class="w-full h-12 px-4 focus:outline-none py-3 dark:text-white dark:placeholder-white dark:bg-black"
      />
      <button
        @click="handleDeleteTask(task)"
        class="hidden group-hover:block bg-berryBlue dark:bg-pink-500 dark:text-white h-12 px-4 border-l border-black dark:border-white"
      >
        done?
      </button>
    </li>
  </ul>
</template>
