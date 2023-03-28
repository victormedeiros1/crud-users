<script>
import { RouterView } from 'vue-router'
import Container from '@/components/Container.vue'

export default {
  components: {
    Container,
    RouterView
  },
  data() {
    return {
      userName: 'visitante'
    }
  },
  mounted() {
    // Como não há verificação por Token, essa linha simula uma autenticação.
    // this.simulatingAuthentication()
  },
  methods: {
    // simulatingAuthentication() {
    //   if (location.pathname === '/' || location.pathname === '/register') {
    //     if (sessionStorage.getItem('id')) {
    //       this.userName = sessionStorage.getItem('name')
    //       this.$router.push('/dashboard')
    //     }
    //   } else {
    //     if (sessionStorage.getItem('id')) {
    //       this.userName = sessionStorage.getItem('name')
    //     } else {
    //       this.$router.push('/')
    //     }
    //   }
    // }
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
