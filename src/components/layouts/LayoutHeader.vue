<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

import ThemeToggle from '@/components/ui/UiTooggleTheme.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <ElHeader
    class="header"
    height="var(--app-header-height)"
  >
    <ElRow
      align="middle"
      justify="end"
    >
      <ThemeToggle @click="toggleDark()" />
    </ElRow>
  </ElHeader>
</template>

<style scoped></style>
