<script>
import Field from '@/components/Field.vue'
import Submit from '@/components/Submit.vue'
import Selector from '@/components/Selector.vue'
import Toast from '@/components/Toast.vue'
import { countries, states } from '../../helpers/slugs'
import {
  cpfValidation,
  emailValidation,
  cepValidation,
  pisValidation,
  passwordValidation,
  clearData
} from '../../helpers/validations'
import { messages } from '../../helpers/messages'

export default {
  name: 'SignIn',
  components: {
    Field,
    Submit,
    Selector,
    Toast
  },
  data() {
    return {
      countries,
      states,
      toastMessage: '',
      loading: false,
      data: {
        name: '',
        email: '',
        address: {
          country: '',
          state: '',
          city: '',
          cep: '',
          street: '',
          number: '',
          complement: ''
        },
        cpf: '',
        pis: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // Alternativa às máscaras
      this.data.cpf = clearData(this.data.cpf)
      this.data.pis = clearData(this.data.pis)
      this.data.address.cep = clearData(this.data.address.cep)

      if (!emailValidation(this.data.email)) {
        this.toastMessage = messages.email
        return false
      }
      if (!cepValidation(this.data.address.cep)) {
        this.toastMessage = messages.cep
        return false
      }
      if (!cpfValidation(this.data.cpf)) {
        this.toastMessage = messages.cpf
        return false
      }
      if (!pisValidation(this.data.pis)) {
        this.toastMessage = messages.pis
        return false
      }
      if (!passwordValidation(this.data.password)) {
        this.toastMessage = messages.password
        return false
      }
      if (this.data.password !== this.data.confirmPassword) {
        this.toastMessage = messages.confirmPassword
        return false
      }

      // // Se os dados forem válidos, é feito o cadastro.
      this.requestAttempt()
    },
    requestAttempt() {
      try {
        this.loading = true

        fetch(import.meta.env.VITE_VUE_APP_API_BASE_URL + '/create-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify(this.data)
        }).then(({ status }) => {
          if (status === 200) {
            this.requestSuccess(status)
          } else {
            this.requestFailure(status)
          }
        })
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },
    requestSuccess() {
      this.$router.push('/')
    },
    requestFailure() {
      this.toastMessage = messages.errorRequest
      setTimeout(() => (this.toastMessage = ''), 5000)
    }
  }
}
</script>

<template>
  <div class="register">
    <Toast :message="toastMessage" />
    <h2 class="register__title">Preencha o formulário de cadastro</h2>

    <form class="register__form" @submit.prevent="handleSubmit">
      <Field v-model="data.name" name="name" label="Nome" />
      <Field v-model="data.email" name="email" label="Email" />

      <div class="d-grid grid-col-2 grid-gap-24">
        <Selector v-model="data.address.country" name="country" label="País" :options="countries" />
        <Selector v-model="data.address.state" name="state" label="Estado" :options="states" />
      </div>

      <div class="d-grid grid-col-2 grid-gap-24">
        <Field v-model="data.address.city" name="city" label="Município" />
        <Field v-model="data.address.cep" name="cep" label="CEP" />
      </div>

      <div class="d-grid grid-col-2 grid-gap-24">
        <Field v-model="data.address.street" name="street" label="Rua" />
        <Field v-model="data.address.number" name="number" label="Número" />
      </div>

      <Field v-model="data.address.complement" name="complement" label="Complemento" />
      <Field v-model="data.cpf" name="cpf" label="CPF" />
      <Field v-model="data.pis" name="pis" label="PIS" />
      <Field v-model="data.password" type="password" name="password" label="Senha" />
      <Field
        v-model="data.confirmPassword"
        type="password"
        name="confirmPassword"
        label="Confirmar senha"
      />

      <Submit>CRIAR CONTA</Submit>
    </form>
  </div>
</template>
<style lang="scss" scoped>
.register {
  width: 100%;
  max-width: 800px;
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
}
</style>
