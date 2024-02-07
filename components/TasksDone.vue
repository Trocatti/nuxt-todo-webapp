<script setup lang="ts">
import { type Task } from '~/composables/useTasks'

const props = defineProps<{
  tasks: Task[];
}>();
</script>

<template>
  <ul
    class="w-80  overflow-hidden divide-y divide-black dark:divide-white"
  >
    <li
      v-for="(_, index) in props.tasks"
      class="group flex items-center justify-between dark:bg-black"
    >
      <span
        class="w-full h-12 px-4 focus:outline-none py-3 dark:text-white dark:bg-black"
      >
        {{ tasks[index] }}
      </span>
    </li>
  </ul>
</template>
