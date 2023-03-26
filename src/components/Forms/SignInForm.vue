<script>
import { RouterLink } from 'vue-router'
import Field from '@/components/Field.vue'
import Submit from '@/components/Submit.vue'
import { requestAttempt } from '../../utils/requests'

export default {
  name: 'SignIn',
  components: {
    Field,
    Submit,
    RouterLink
  },
  data() {
    return {
      requestAttempt,
      loading: false,
      route: '/auth',
      data: {
        login: '',
        password: ''
      }
    }
  },
  methods: {
    async handleSubmit() {
      const data = await this.requestAttempt(this.route, this.data)

      console.log(data)
    }
  }
}
</script>

<template>
  <div class="sign-in">
    <img class="sign-in__logo" src="/src/assets/images/logo.svg" />

    <h2 class="sign-in__title">Entre na plataforma</h2>

    <form class="sign-in__form" @submit.prevent="handleSubmit">
      <Field v-model="data.login" name="login" label="Email, CPF ou PIS" />
      <Field v-model="data.password" type="password" name="password" label="Senha" />
      <Submit>ENTRAR</Submit>
    </form>

    <footer class="sign-in__footer">
      <span class="sign-in__link"
        >Não possui conta? <RouterLink to="register">Clique aqui!</RouterLink></span
      >
    </footer>
  </div>
</template>
<style lang="scss" scoped>
.sign-in {
  width: 100%;
  max-width: 400px;
  background-color: var(--light);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--g-24);
  border-radius: 8px;
  padding: var(--p-32);

  &__title {
    color: var(--gray-600);
  }

  &__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--g-24);
  }
  &__link {
    color: var(--gray-600);
  }
}
</style>
