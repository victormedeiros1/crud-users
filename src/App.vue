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
      userName: sessionStorage.name ? sessionStorage.getItem('name') : 'visitante'
    }
  }
}
</script>

<template>
  <Container>
    <header class="app-header">
      <h1 class="app-header__title">
        Olá,<br />
        {{ userName }}!
      </h1>
    </header>
    <RouterView />
  </Container>
</template>

<style lang="scss" scoped>
.app-header {
  &__title {
    color: var(--light);
    text-shadow: var(--text-shadow);
    text-align: center;

    @media (max-width: 576px) {
      font-size: var(--fs-16);
    }
  }
}
</style>
