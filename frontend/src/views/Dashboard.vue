<script>
import Submit from '@/components/Submit.vue'

export default {
  name: 'Dashboard',
  components: {
    Submit
  }
}
</script>

<template>
  <main class="dashboard">
    <section class="dashboard__section">
      <h2 class="dashboard__title">DADOS PESSOAIS</h2>
      <table>
        <tr>
          <td>
            <span>Nome</span>
            <span>nome</span>
          </td>
          <td>
            <span>Email</span>
            <span>email</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>CPF</span>
            <span>cpf</span>
          </td>
          <td>
            <span>PIS</span>
            <span>pis</span>
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
            <span>country</span>
          </td>
          <td>
            <span>Estado</span>
            <span>state</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>Município</span>
            <span>city</span>
          </td>
          <td>
            <span>CEP</span>
            <span>cep</span>
          </td>
          <td colspan="2">
            <span>Rua</span>
            <span>street</span>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <span>Número</span>
            <span>number</span>
          </td>
          <td>
            <span>Complemento</span>
            <span>complement</span>
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
            <span>senha</span>
          </td>
        </tr>
      </table>
    </section>

    <footer class="dashboard__footer">
      <Submit>EDITAR</Submit>
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
