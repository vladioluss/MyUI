<script setup lang="ts">

const items = [
  { label: 'UI Kit (Vue 3 + Composition API)', url: '/' },
]
</script>

<template>
  <header class="header">
    <router-link
        v-for="item in items"
        :to="item.url">
      {{ item.label }}
    </router-link>
  </header>
</template>

<style scoped lang="scss">
.header {
  background: #fff;
  font-weight: bold;
  padding: 0 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);
  height: 62px;
  display: flex;
  align-items: center;
  z-index: 1;
  position: relative;
}
</style>