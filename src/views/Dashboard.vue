<script>
import Toast from '@/components/Toast.vue'
import { getUser } from '../utils/requests'
import { messages } from '../helpers/messages'

export default {
  name: 'Dashboard',
  components: {
    Toast
  },
  data() {
    return {
      userData: {},
      toastMessage: ''
    }
  },
  mounted() {
    this.loadUserData()
  },
  methods: {
    async loadUserData() {
      const { user } = await getUser()
      this.userData = user
      console.log(this.userData)

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
  <main class="table">
    <Toast :message="toastMessage" />
    <section class="table__section">
      <h2 class="table__title">DADOS PESSOAIS</h2>
      <div class="table__row">
        <div class="table__cell">
          <span>Nome</span>
          <span>{{ userData.name }}</span>
        </div>
        <div class="table__cell">
          <span>Email</span>
          <span>{{ userData.email }}</span>
        </div>

        <div class="table__cell">
          <span>CPF</span>
          <span>{{ userData.cpf }}</span>
        </div>
        <div class="table__cell">
          <span>PIS</span>
          <span>{{ userData.pis }}</span>
        </div>
      </div>
    </section>

    <section class="table__section">
      <h2 class="table__title">ENDEREÇO</h2>
      <div class="table__row">
        <div class="table__cell">
          <span>País</span>
          <span>{{ userData.address && userData.address.country }}</span>
        </div>
        <div class="table__cell">
          <span>Estado</span>
          <span>{{ userData.address && userData.address.state }}</span>
        </div>

        <div class="table__cell">
          <span>Município</span>
          <span>city</span>
        </div>
        <div class="table__cell">
          <span>CEP</span>
          <span>{{ userData.address && userData.address.cep }}</span>
        </div>
        <div class="table__cell">
          <span>Rua</span>
          <span>{{ userData.address && userData.address.street }}</span>
        </div>

        <div class="table__cell">
          <span>Número</span>
          <span>{{ userData.address && userData.address.number }}</span>
        </div>
        <div class="table__cell table__cell--full">
          <span>Complemento</span>
          <span>{{ userData.address && userData.address.complement }}</span>
        </div>
      </div>
    </section>

    <section class="table__section">
      <h2 class="table__title">SEGURANÇA</h2>
      <div class="table__row">
        <div class="table__cell table__cell--full">
          <span>Senha</span>
          <span>{{ userData.password }} </span>
        </div>
      </div>
    </section>

    <footer class="table__footer">
      <RouterLink to="/dashboard/update">Editar</RouterLink>
    </footer>
  </main>
</template>

<style lang="scss" scoped>
.table {
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: var(--g-24);
  background-color: var(--light);
  border-radius: 8px;
  padding: var(--p-32);

  &__title {
    color: var(--gray-900);
    font-size: var(--fs-24);
    margin-bottom: var(--m-8);

    @media (max-width: 576px) {
      font-size: var(--fs-20);
    }
  }

  &__row {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid var(--gray-100);
    display: flex;
    flex-wrap: wrap;
  }

  &__cell {
    width: 50%;
    border: 1px solid var(--gray-100);
    color: var(--gray-600);
    font-size: var(--fs-14);
    padding: var(--p-6);

    @media (max-width: 576px) {
      width: 100%;
    }

    span {
      display: block;
    }
  }
}
</style>
