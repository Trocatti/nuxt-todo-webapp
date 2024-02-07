<script setup lang="ts">
const links = ref<Array<{ name: string; url: string; icon: string, class?: string }>>();

links.value = [
  {
    name: "github",
    url: "https://github.com/Trocatti",
    icon: "uil:github",
  },
  {
    name: "twitter",
    url: "https://twitter.com/GTrocatti",
    icon: "uil:twitter",
    class: 'text-indigo-700'
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/guilherme-trocatti-519667149/",
    icon: "uil:linkedin",
    class: 'text-sky-700'
  },
];
</script>

<template>
  <footer
    class="flex justify-center flex-col py-4 w-full items-center fixed bottom-0 pl-5 pr-12"
  >
    <div class="flex items-center gap-8">
      <AppLink
        v-for="link in links"
        :name="link.name"
        :url="link.url"
        :icon="link.icon"
        :class="link.class"
      />
    </div>
    <a href="#">2024 gtrocatti</a>
  </footer>
</template>
