<script setup lang="ts"></script>

<template>
  <div class="container">
    <ElContainer direction="vertical">
      <ELMain>
        <slot />
      </ELMain>
    </ElContainer>
  </div>
</template>

<style scoped>
.container {
  min-height: 100dvh;
  max-width: 1400px;
  padding: 20px 0;
  margin: 0 auto;
}

.main {
  min-height: calc(100dvh - 64px);
  background-color: var(--app-bg-secondary-color);
}
</style>
