<script>
import { RouterLink } from 'vue-router'
import Field from '@/components/Field.vue'
import Toast from '@/components/Toast.vue'
import Submit from '@/components/Submit.vue'
import { headers } from '../../utils/requests'
import { setSessionData } from '../../utils/session'
import { messages } from '../../helpers/messages'
import { passwordValidation } from '../../helpers/validations'

export default {
  name: 'SignIn',
  components: {
    Field,
    Submit,
    Toast,
    RouterLink
  },
  data() {
    return {
      toastMessage: '',
      loading: false,
      formData: {
        login: '',
        password: ''
      }
    }
  },
  methods: {
    async handleSubmit() {
      if (!passwordValidation(this.formData.password)) {
        this.toastMessage = messages.password
        return false
      }

      const response = await this.loginRequest()

      // O backend por enquanto só verifica se o usuário existe, se não, retorna 404.
      if (response.status === 404) {
        this.toastMessage = messages.userNotExist
      } else {
        const [data] = response
        const user = { ...data }
        setSessionData(user)
        this.$router.push('/dashboard')
      }
    },
    async loginRequest() {
      try {
        const response = await fetch(import.meta.env.VITE_VUE_APP_API_BASE_URL + '/auth', {
          method: 'POST',
          headers,
          body: JSON.stringify(this.formData)
        })
          .then((response) => response.json())
          .then((data) => data)

        return response
      } catch (error) {
        this.toastMessage = messages.requestError
      }
    }
  }
}
</script>

<template>
  <div class="sign-in">
    <Toast :message="toastMessage" />
    <img class="sign-in__logo" src="/src/assets/images/logo.svg" />

    <h2 class="sign-in__title">Entre na plataforma</h2>

    <form class="sign-in__form" @submit.prevent="handleSubmit">
      <Field v-model="formData.login" name="login" label="Email, CPF ou PIS" />
      <Field v-model="formData.password" type="password" name="password" label="Senha" />
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
