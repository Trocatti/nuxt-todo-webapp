<script setup lang="ts">
defineProps<{
  url: string;
  icon: string;
  name: string;
}>();
</script>

<template>
  <a :href="url" class="dark:text-white"><Icon :name="icon" /> {{ name }} </a>
</template>
