<script setup lang="ts">
import { type Task } from "~/composables/useTasks";

defineProps<{
  tasks: Task[] | undefined;
}>();
</script>

<template>
  <ul class="w-80 list-disc">
    <li v-for="task in tasks" class="dark:bg-black">
      <span class="dark:text-white dark:bg-black">
        {{ task.value }} - concluído no dia {{ task.date }}
      </span>
    </li>
  </ul>
</template>
