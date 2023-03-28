<script>
import { RouterLink } from 'vue-router'
import Field from '@/components/Field.vue'
import Toast from '@/components/Toast.vue'
import Submit from '@/components/Submit.vue'
import { setSessionData } from '../../utils/session'
import { formDataValidate } from '../../helpers/validations'
import { loginRequest } from '../../utils/requests'

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
      const { isValid, message } = formDataValidate(this.formData)

      if (isValid) {
        const response = await loginRequest(this.formData)

        if (response.user) {
          this.toastMessage = response.message
          const user = { ...response.user }
          setSessionData(user)
          this.$router.push('/dashboard')
        } else {
          this.toastMessage = response.message
        }
      } else {
        this.toastMessage = message
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

  &__logo {
    width: 128px;
    height: 128px;

    @media (max-width: 576px) {
      width: 96px;
      height: 96px;
    }
  }

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
