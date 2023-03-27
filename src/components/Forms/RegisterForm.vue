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
  name: 'RegisterForm',
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
      formData: {
        name: '',
        email: '',
        address: {
          country: 'Brasil',
          state: 'Acre',
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
      this.formData.cpf = clearData(this.formData.cpf)
      this.formData.pis = clearData(this.formData.pis)
      this.formData.address.cep = clearData(this.formData.address.cep)

      if (!emailValidation(this.formData.email)) {
        this.toastMessage = messages.email
        return false
      }
      if (!cepValidation(this.formData.address.cep)) {
        this.toastMessage = messages.cep
        return false
      }
      if (!cpfValidation(this.formData.cpf)) {
        this.toastMessage = messages.cpf
        return false
      }
      if (!pisValidation(this.formData.pis)) {
        this.toastMessage = messages.pis
        return false
      }
      if (!passwordValidation(this.formData.password)) {
        this.toastMessage = messages.password
        return false
      }
      if (this.formData.password !== this.formData.confirmPassword) {
        this.toastMessage = messages.confirmPassword
        return false
      }

      // // Se os dados forem válidos, é feito o cadastro.
      this.requestAttempt()
    },
    requestAttempt() {
      try {
        fetch(import.meta.env.VITE_VUE_APP_API_BASE_URL + '/create-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify(this.formData)
        }).then(({ status }) => {
          if (status === 200) {
            this.requestSuccess(status)
          } else {
            this.requestFailure(status)
          }
        })
      } catch (error) {
        console.log(error)
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
    <h2 class="register__title">Formulário de cadastro</h2>

    <form class="register__form" @submit.prevent="handleSubmit">
      <Field v-model="formData.name" name="name" label="Nome" />
      <Field v-model="formData.email" name="email" label="Email" />

      <div class="register__row">
        <Selector
          v-model="formData.address.country"
          name="country"
          label="País"
          :options="countries"
          @change="test"
        />
        <Selector v-model="formData.address.state" name="state" label="Estado" :options="states" />
      </div>

      <div class="register__row">
        <Field v-model="formData.address.city" name="city" label="Município" />
        <Field v-model="formData.address.cep" name="cep" label="CEP" />
      </div>

      <div class="register__row">
        <Field v-model="formData.address.street" name="street" label="Rua" />
        <Field v-model="formData.address.number" name="number" label="Número" />
      </div>

      <Field v-model="formData.address.complement" name="complement" label="Complemento" />

      <div class="register__row">
        <Field v-model="formData.cpf" name="cpf" label="CPF" />
        <Field v-model="formData.pis" name="pis" label="PIS" />
      </div>

      <div class="register__row">
        <Field v-model="formData.password" type="password" name="password" label="Senha" />
        <Field
          v-model="formData.confirmPassword"
          type="password"
          name="confirmPassword"
          label="Confirmar senha"
        />
      </div>

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

    @media (max-width: 576px) {
      gap: var(--g-16);
    }
  }

  &__row {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--g-24);

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
      gap: var(--g-16);
    }
  }
}
</style>
