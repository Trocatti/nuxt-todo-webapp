<script setup lang="ts">
const emit = defineEmits<{
  (e: "add-task"): void;
  (e: "clear-tasks"): void;
}>();
</script>

<template>
  <div class="w-80 flex gap-4 items-center justify-end dark:text-white">
    <PrimeButton @click="() => emit('clear-tasks')" label="clear tasks" text size="small" severity="danger"></PrimeButton>
    <PrimeButton @click="() => emit('add-task')" label="add tasks" size="small" outlined></PrimeButton>
  </div>
</template>
