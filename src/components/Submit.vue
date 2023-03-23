<script>
export default {
  name: 'Submit'
}
</script>

<template>
  <button class="submit"><slot /></button>
</template>

<style lang="scss" scoped>
.submit {
  width: fit-content;
  background-color: var(--primary-main);
  color: var(--light);
  font-size: var(--fs-20);
  border: none;
  border-radius: 8px;
  padding: var(--p-12) var(--p-24);
}
</style>
