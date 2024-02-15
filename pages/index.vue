<script setup lang="ts">
import { type Task, useTasks } from "~/composables/useTasks"

const { doneTask, addTask, clearTasks, tasks, tasksDone } = useTasks()

const handleDoneTask = (task: Task) => {
  doneTask(task)
}

const handAddTask = () => {
  addTask()
}

const handleClearTasks = () => {
  clearTasks()
}

</script>

<template>
  <FeaturesTasksDone :tasks="tasksDone"></FeaturesTasksDone>
  <FeaturesTasks :tasks="tasks" @done-task="handleDoneTask" @add-task="handAddTask" @clear-tasks="handleClearTasks"></FeaturesTasks>
</template>
