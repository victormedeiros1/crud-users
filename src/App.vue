<script>
import { RouterView } from 'vue-router'
import Container from '@/components/Container.vue'
import { getSessionUserName } from './utils/session'
export default {
  components: {
    Container
  },
  data() {
    return {
      RouterView,
      userName: getSessionUserName()
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
