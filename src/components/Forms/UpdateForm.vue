<script>
import Field from '@/components/Field.vue'
import Submit from '@/components/Submit.vue'
import Toast from '@/components/Toast.vue'
import Selector from '@/components/Selector.vue'
import { updateUser } from '../../utils/requests'
import { formDataValidate } from '../../helpers/validations'
import { getUser, deleteUser } from '../../utils/requests'
import { states, countries } from '../../helpers/slugs'
import { setSessionCookie, setSessionData } from '../../utils/session'

export default {
  name: 'UpdateForm',
  components: {
    Field,
    Submit,
    Toast,
    Selector
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
  // mounted() {
  //   this.loadUserData()
  // },
  methods: {
    async handleSubmit() {
      const { isValid, message } = formDataValidate(this.formData)

      if (isValid) {
        const response = await updateUser(this.formData)

        if (response.status) {
          this.toastMessage = response.message
          setSessionData(this.formData)
          setSessionCookie(this.formData)
          location.reload()
        } else {
          this.toastMessage = message
        }
      } else {
        this.toastMessage = message
      }
    },
    async loadUserData() {
      const response = await getUser()
      if (response.user) {
        this.formData = { ...response.user }
        this.toastMessage = response.message
      } else {
        this.toastMessage = response.message
      }
    },
    async handleDeleteUser() {
      const response = await deleteUser()

      if (response.status) {
        this.toastMessage = response.message
        sessionStorage.clear()
        this.$router.push('/')
      } else {
        this.toastMessage = response.message
      }
    }
  }
}
</script>

<template>
  <div class="update">
    <Toast :message="toastMessage" />
    <form class="update__form" @submit.prevent="handleSubmit">
      <section class="table">
        <h2 class="table__title">DADOS PESSOAIS</h2>
        <div class="table__row">
          <Field v-model="formData.name" name="name" label="Nome" />
          <Field v-model="formData.email" name="email" label="Email" required />
        </div>

        <div class="table__row">
          <Field v-model="formData.cpf" name="cpf" label="CPF" maxLength="11" required />
          <Field v-model="formData.pis" name="pis" label="PIS" maxLength="11" required />
        </div>

        <h2 class="table__title">ENDEREÇO</h2>
        <div class="table__row">
          <Selector
            v-model="formData.address.country"
            name="country"
            label="País"
            :options="countries"
          />
          <Selector
            v-model="formData.address.state"
            name="state"
            label="Estado"
            :options="states"
          />
        </div>

        <div class="table__row">
          <Field v-model="formData.address.city" name="city" label="Município" />
          <Field v-model="formData.address.cep" name="cep" label="CEP" maxLength="8" />
        </div>

        <div class="table__row">
          <Field v-model="formData.address.street" name="street" label="Rua" />
          <Field v-model="formData.address.number" name="number" label="Número" />
        </div>

        <Field v-model="formData.address.complement" name="complement" label="Complemento" />
      </section>

      <section class="table">
        <h2 class="table__title">SEGURANÇA</h2>
        <div class="table__row">
          <Field
            v-model="formData.password"
            type="password"
            name="password"
            label="Senha"
            required
          />
          <Field
            v-model="formData.confirmPassword"
            type="password"
            name="confirmPassword"
            label="Confirmar senha"
            required
          />
        </div>
      </section>

      <footer class="update__footer">
        <Submit color="success">SALVAR</Submit>
      </footer>
    </form>
    <Submit color="error" @click="handleDeleteUser">DELETAR</Submit>
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
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--g-16);

      @media (max-width: 576px) {
        grid-template-columns: 1fr;
        gap: var(--g-16);
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
