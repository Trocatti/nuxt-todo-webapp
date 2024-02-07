<script setup lang="ts">
import { useDarkMode } from "~/composables/useDarkMode";

const { darkModeToggle, isDark } = useDarkMode();

const emit = defineEmits<{
  (e: "help"): void;
}>();

const handleDarkModeToggle = () => {
  darkModeToggle();
};
</script>

<template>
  <nav class="flex justify-between px-4 items-center dark:text-white">
    <h1
      class="font-bold text-3xl underline-offset-4 underline decoration-berryBlue dark:decoration-pink-500 decoration-4"
    >
      Lista de compras
    </h1>
    <div class="flex gap-8 items-center">
      <button @click="handleDarkModeToggle()">
        <Icon :name="isDark ? 'i-carbon-moon' : 'i-carbon-sun'" class="inline-block align-middle"/>
        <span class="ml-2">{{ isDark ? "Dark" : "Light" }}</span>
      </button>
      <button @click="() => emit('help')">help</button>
    </div>
  </nav>
</template>
