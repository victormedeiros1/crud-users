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
      this.userData = await getUser()
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
  <main class="dashboard">
    <Toast :message="toastMessage" />
    <section class="dashboard__section">
      <h2 class="dashboard__title">DADOS PESSOAIS</h2>
      <table>
        <tr>
          <td>
            <span>Nome</span>
            <span>{{ userData.name }}</span>
          </td>
          <td>
            <span>Email</span>
            <span>{{ userData.email }}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>CPF</span>
            <span>{{ userData.cpf }}</span>
          </td>
          <td>
            <span>PIS</span>
            <span>{{ userData.pis }}</span>
          </td>
        </tr>
      </table>
    </section>

    <section class="dashboard__section">
      <h2 class="dashboard__title">ENDEREÇO</h2>
      <table>
        <tr>
          <td colspan="2">
            <span>País</span>
            <span>{{ userData.address.country }}</span>
          </td>
          <td>
            <span>Estado</span>
            <span>{{ userData.address.state }}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>Município</span>
            <span>city</span>
          </td>
          <td>
            <span>CEP</span>
            <span>{{ userData.address.cep }}</span>
          </td>
          <td colspan="2">
            <span>Rua</span>
            <span>{{ userData.address.street }}</span>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <span>Número</span>
            <span>{{ userData.address.number }}</span>
          </td>
          <td>
            <span>Complemento</span>
            <span>{{ userData.address.complement }}</span>
          </td>
        </tr>
      </table>
    </section>

    <section class="dashboard__section">
      <h2 class="dashboard__title">SEGURANÇA</h2>
      <table>
        <tr>
          <td>
            <span>Senha</span>
            <span>{{ userData.password }} </span>
          </td>
        </tr>
      </table>
    </section>

    <footer class="dashboard__footer">
      <RouterLink to="/dashboard/update">Editar</RouterLink>
    </footer>
  </main>
</template>

<style lang="scss" scoped>
.dashboard {
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
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid var(--gray-100);

    tr {
      td {
        border: 1px solid var(--gray-100);
        color: var(--gray-600);
        font-size: var(--fs-14);
        padding: var(--p-6);

        span {
          display: block;
        }
      }
    }
  }
}
</style>
