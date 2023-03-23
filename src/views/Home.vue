<script>
import SignIn from '../components/SignIn.vue'

export default {
  components: { SignIn },
  name: 'Home'
}
</script>

<template>
  <div class="home">
    <header class="home__header">Olá, visitante!</header>
    <SignIn />
  </div>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--g-32);

  &__header {
    color: var(--light);
    font-size: var(--fs-32);
    text-shadow: var(--text-shadow);
  }
}
</style>
