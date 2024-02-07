interface UseDarkMode {
  isDark: Ref<boolean>;
  darkModeToggle(): void;
}

export function useDarkMode(): UseDarkMode {
  const isDark = ref<boolean>(false);

  function darkModeToggle() {
    isDark.value = !isDark.value

    if (
      isDark.value &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return {
    isDark,
    darkModeToggle,
  };
}
