<script setup>
import { RouterView } from 'vue-router'
import Container from '@/components/Container.vue'
</script>

<template>
  <Container>
    <header>Olá, visitante!</header>
    <RouterView />
  </Container>
</template>

<style lang="scss" scoped>
header {
  color: var(--light);
  font-size: var(--fs-32);
  text-shadow: var(--text-shadow);
}
</style>
