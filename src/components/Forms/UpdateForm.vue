<script>
import Field from '@/components/Field.vue'
import Submit from '@/components/Submit.vue'

import { getUser } from '../../utils/requests'
import { messages } from '../../helpers/messages'

export default {
  name: 'UpdateForm',
  components: {
    Field,
    Submit
  },
  data() {
    return {
      userData: {
        address: {}
      }
    }
  },
  mounted() {
    this.loadUserData()
  },
  methods: {
    async loadUserData() {
      this.userData = await getUser()

      if (this.userData === 'error') {
        this.toastMessage = messages.requestError
      } else {
        this.toastMessage = messages.loginSuccess
      }
    }
  }
}
</script>

<template>
  <div class="update">
    <form class="update__form" @submit.prevent="handleSubmit">
      <section class="table">
        <h2 class="table__title">DADOS PESSOAIS</h2>
        <div class="table__row">
          <Field v-model="userData.name" label="Nome" :value="userData.name" />
          <Field v-model="userData.email" label="Email" />
        </div>

        <div class="table__row">
          <Field v-model="userData.cpf" label="CPF" />
          <Field v-model="userData.pis" label="PIS" />
        </div>

        <h2 class="table__title">ENDEREÇO</h2>
        <div class="table__row">
          <Field v-model="userData.address.country" label="País" />
          <Field v-model="userData.address.state" label="Estado" />
        </div>

        <div class="table__row">
          <Field v-model="userData.address.city" label="Município" />
          <Field v-model="userData.address.cep" label="CEP" />
        </div>

        <div class="table__row">
          <Field v-model="userData.address.street" label="Rua" />
          <Field v-model="userData.address.number" label="Número" />
        </div>

        <div class="table__row">
          <Field v-model="userData.address.complement" label="Complemento" />
        </div>
      </section>

      <section class="table">
        <h2 class="table__title">SEGURANÇA</h2>

        <div class="table__row">
          <Field v-model="userData.password" label="Senha" />
        </div>
      </section>

      <footer class="update__footer">
        <Submit color="success">SALVAR</Submit>
        <Submit color="error">DELETAR</Submit>
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

  &__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--g-24);
  }

  .table {
    display: flex;
    flex-direction: column;
    gap: var(--g-24);

    &__title {
      color: var(--gray-900);
      font-size: var(--fs-24);

      @media (max-width: 576px) {
        font-size: var(--fs-20);
      }
    }

    &__row {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: var(--g-16);

      @media (max-width: 576px) {
        display: grid;
      }

      .group {
        flex: 1;
        color: var(--gray-600);
        font-size: var(--fs-14);
      }
    }
  }

  &__footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
