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
  padding: 7px;
  background: var(--app-orange-color);
  border-radius: 10px;
}

p {
  font-size: 14px;
  font-weight: 500;
}
</style>
