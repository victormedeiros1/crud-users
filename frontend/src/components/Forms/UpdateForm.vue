<script>
import Field from '@/components/Field.vue'
import Submit from '@/components/Submit.vue'

export default {
  name: 'UpdateForm',
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
  <div class="update">
    <form class="update__form" @submit.prevent="handleSubmit">
      <h2 class="dashboard__title">DADOS PESSOAIS</h2>
      <div class="d-grid grid-col-2 grid-gap-24">
        <Field v-model="data.name" label="Nome" />
        <Field v-model="data.email" label="Email" />
      </div>

      <div class="d-grid grid-col-2 grid-gap-24">
        <Field v-model="data.address.cpf" label="CPF" />
        <Field v-model="data.address.pis" label="PIS" />
      </div>

      <h2 class="dashboard__title">ENDEREÇO</h2>
      <div class="d-grid grid-col-2 grid-gap-24">
        <Field v-model="data.address.country" label="País" />
        <Field v-model="data.address.state" label="Estado" />
      </div>

      <div class="d-grid grid-col-3 grid-gap-24">
        <Field v-model="data.address.city" label="Município" />
        <Field v-model="data.address.cep" label="CEP" />
        <Field v-model="data.address.street" label="Rua" />
      </div>

      <h2 class="dashboard__title">SEGURANÇA</h2>
      <div class="d-grid grid-col-2 grid-gap-24">
        <Field v-model="data.address.number" label="Número" />
        <Field v-model="data.address.complement" label="Complemento" />
      </div>

      <div class="d-grid grid-col-2 grid-gap-24">
        <Field v-model="data.address.password" label="Senha" />
        <Field v-model="data.address.confirmPassword" label="Confirmar senha" />
      </div>

      <footer class="update__footer">
        <Submit color="success">SALVAR</Submit>
        <Submit color="error">DELETAR USUÁRIO</Submit>
      </footer>
    </form>
  </div>
</template>
<style lang="scss" scoped>
.update {
  width: 100%;
  max-width: 800px;
  background-color: var(--light);
  display: flex;
  flex-direction: column;
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
    gap: var(--g-24);
  }

  &__footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
