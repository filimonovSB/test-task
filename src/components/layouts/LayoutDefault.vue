<script setup lang="ts">
import LayoutHeader from '@/components/layouts/LayoutHeader.vue'
</script>

<template>
  <div class="container">
    <ElContainer direction="vertical">
      <LayoutHeader />
      <ElMain class="main">
        <slot />
      </ElMain>
    </ElContainer>
  </div>
</template>

<style scoped>
.main {
  min-height: 100dvh;
  max-width: 1400px;
  width: 100%;
  padding: 20px 0;
  margin: 0 auto;
}
.header {
  display: grid;
  align-items: center;
  border-bottom: 1px solid var(--el-border-color);
}

.left-side {
  display: flex;
  gap: 10px;
}
</style>
