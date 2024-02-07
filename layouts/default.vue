<script setup lang="ts"></script>

<template>
  <div class="p-4 h-dvh dark:bg-black">
    <AppHeader></AppHeader>
    <div class="flex justify-center items-center flex-col h-full gap-20">
      <slot />
    </div>
    <AppFooter></AppFooter>
  </div>
</template>
