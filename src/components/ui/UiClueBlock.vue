<script setup lang="ts">
import IconQuestion from '@/components/icons/IconQuestion.vue'
</script>

<template>
  <div class="clue-block">
    <IconQuestion />
    <p>
      <slot />
    </p>
  </div>
</template>

<style scoped>
.clue-block {
  display: flex;
  align-items: center;
  gap: 5px;
  width: fit-content;
  min-width: fit-content;
  padding: 10px;
  background: var(--app-red-background);
  border-radius: 10px;
}

p {
  font-weight: 500;
  color: var(--app-red-color);
}
</style>
