<script setup lang="ts">
import { useDarkMode } from "~/composables/useDarkMode";

const { darkModeToggle, isDark } = useDarkMode();

const theme = ref({
  dark: {
    label: "Dark Mode",
    icon: "pi pi-moon",
  },
  light: {
    label: "Light Mode",
    icon: "pi pi-sun",
  },
});

const handleDarkModeToggle = () => {
  darkModeToggle();
};
</script>

<template>
  <nav class="flex justify-between px-4 items-center dark:text-white">
    <h1
      class="font-bold text-3xl underline-offset-4 underline decoration-sky-500 dark:decoration-pink-500 decoration-4"
    >
      Lista de compras
    </h1>
    <div class="flex gap-8 items-center">
      <PrimeButton
        text
        size="small"
        @click="handleDarkModeToggle()"
        :icon="isDark ? theme.dark.icon : theme.light.icon"
        :label="isDark ? theme.dark.label : theme.light.label"
      >
      </PrimeButton>
      <button>help</button>
      <slot></slot>
    </div>
  </nav>
</template>
