<script>
import Field from '@/components/Field.vue'
import Submit from '@/components/Submit.vue'
import Selector from '@/components/Selector.vue'
import Toast from '@/components/Toast.vue'
import { countries, states } from '../../helpers/slugs'
import { formDataValidate } from '../../helpers/validations'
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
      const { isValid, message } = formDataValidate(this.formData)

      if (isValid) {
        this.requestAttempt()
        this.toastMessage = message
      } else {
        this.toastMessage = message
      }
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
      <Field v-model="formData.email" name="email" label="Email" required />

      <div class="register__row">
        <Selector
          v-model="formData.address.country"
          name="country"
          label="País"
          :options="countries"
        />
        <Selector v-model="formData.address.state" name="state" label="Estado" :options="states" />
      </div>

      <div class="register__row">
        <Field v-model="formData.address.city" name="city" label="Município" />
        <Field v-model="formData.address.cep" name="cep" label="CEP" maxLength="8" />
      </div>

      <div class="register__row">
        <Field v-model="formData.address.street" name="street" label="Rua" />
        <Field v-model="formData.address.number" name="number" label="Número" />
      </div>

      <Field v-model="formData.address.complement" name="complement" label="Complemento" />

      <div class="register__row">
        <Field v-model="formData.cpf" name="cpf" label="CPF" maxLength="11" required />
        <Field v-model="formData.pis" name="pis" label="PIS" maxLength="11" required />
      </div>

      <div class="register__row">
        <Field v-model="formData.password" type="password" name="password" label="Senha" required />
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
