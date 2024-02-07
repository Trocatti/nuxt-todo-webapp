<script setup lang="ts">
import { useTasks } from "~/composables/useTasks"

const { deleteTask, tasks } = useTasks()

const handleTaskDelete = () => {
  deleteTask()
}

</script>

<template>
  <TasksDone :tasks="tasks" />
  <Tasks :tasks="tasks" @delete-task="handleTaskDelete" />
</template>
