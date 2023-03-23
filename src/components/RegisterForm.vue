<script>
import Field from '@/components/Field.vue'
import Submit from '@/components/Submit.vue'

export default {
  name: 'SignIn',
  components: {
    Field,
    Submit
  },
  data() {
    return {
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
  }
}
</script>

<template>
  <div class="register">
    <h2 class="register__title">Preencha o formulário de cadastro</h2>

    <form class="register__form" @submit.prevent="handleSubmit">
      <Field v-model="data.name" label="Nome" />
      <Field v-model="data.password" label="Senha" />

      <div class="d-grid grid-col-2 grid-gap-24">
        <Field v-model="data.address.country" label="País" />
        <Field v-model="data.address.state" label="Estado" />
      </div>

      <div class="d-grid grid-col-2 grid-gap-24">
        <Field v-model="data.address.city" label="Município" />
        <Field v-model="data.address.cep" label="CEP" />
      </div>

      <div class="d-grid grid-col-2 grid-gap-24">
        <Field v-model="data.address.street" label="Rua" />
        <Field v-model="data.address.number" label="Número" />
      </div>

      <Field v-model="data.address.complement" label="Complemento" />
      <Field v-model="data.address.cpf" label="CPF" />
      <Field v-model="data.address.pis" label="PIS" />
      <Field v-model="data.address.password" label="Senha" />
      <Field v-model="data.address.confirmPassword" label="Confirmar senha" />

      <Submit>CRIAR CONTA</Submit>
    </form>
  </div>
</template>
<style lang="scss" scoped>
.register {
  width: 100%;
  max-width: 700px;
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
