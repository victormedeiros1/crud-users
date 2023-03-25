<script>
export default {
  name: 'Submit',
  props: {
    color: { type: String, default: 'primary' }
  }
}
</script>

<template>
  <button :class="['submit', color]"><slot /></button>
</template>

<style lang="scss" scoped>
.submit {
  width: fit-content;
  color: var(--light);
  font-size: var(--fs-20);
  border: none;
  border-radius: 8px;
  padding: var(--p-12) var(--p-24);
}
.primary {
  background-color: var(--primary-main);
}
.success {
  background-color: var(--success);
}
.error {
  background-color: var(--error);
}
</style>
