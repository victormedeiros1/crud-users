<script>
import { RouterView } from 'vue-router'
import Container from '@/components/Container.vue'
import Submit from '@/components/Submit.vue'

export default {
  components: {
    Container,
    Submit,
    RouterView
  },
  data() {
    return {
      isLogged: false,
      userName: 'visitante'
    }
  },
  methods: {
    logout() {
      sessionStorage.clear()
      this.isLogged = false
      this.$router.push('/')
    }
  },
  watch: {
    $route() {
      const token = !!sessionStorage.getItem('token')
      if (token) {
        this.userName = sessionStorage.getItem('name')
        this.isLogged = true
      } else {
        this.userName = 'visitante'
        this.isLogged = false
      }
    }
  }
}
</script>

<template>
  <Container>
    <header class="app-header">
      <Submit v-if="isLogged" @click="logout" class="app-header__logout">SAIR</Submit>
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
  &__logout {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
}
</style>
