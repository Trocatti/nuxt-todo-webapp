<script setup lang="ts">
import { type Task } from "~/composables/useTasks";

defineProps<{
  task: Task;
}>();

const emit = defineEmits<{
  (e: "done-task"): void;
}>();
</script>

<template>
  <button
    :data-done="task.done"
    class="hidden group-hover:block data-[done=true]:block bg-sky-400 data-[done=true]:bg-green-500 dark:bg-pink-500 dark:data-[done=true]:bg-purple-400 dark:text-white h-12 px-4 min-w-[78px] border-l border-black dark:border-white"
    @click="() => emit('done-task')"
  >
    <span>
      {{ task.done ? "" : "done?" }}
    </span>
    <Icon
      v-if="task.done"
      :name="task.done ? 'uil:check' : ''"
      size="1.5rem"
      class="ml-1 inline-block align-middle"
    />
  </button>
</template>



