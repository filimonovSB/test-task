<script setup lang="ts">
import { useDark } from '@vueuse/core'

import IconDarkTheme from '@/components/icons/IconDarkTheme.vue'
import IconLightTheme from '@/components/icons/IconLightTheme.vue'

const isDark = useDark()
</script>

<template>
  <button class="toggler">
    <IconDarkTheme v-if="isDark" />
    <IconLightTheme v-else />
  </button>
</template>

<style scoped>
.toggler {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 10px;
  cursor: pointer;
  background: transparent;
}
</style>
