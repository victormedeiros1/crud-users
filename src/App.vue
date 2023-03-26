<script>
import { RouterView } from 'vue-router'
import Container from '@/components/Container.vue'

export default {
  components: {
    Container
  },
  data() {
    return {
      RouterView,
      userName: sessionStorage.name ? sessionStorage.name : ''
    }
  }
}
</script>

<template>
  <Container>
    <header>Olá, {{ userName }}!</header>
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
