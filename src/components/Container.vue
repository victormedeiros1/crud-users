<script lang="ts">
export default {
  name: 'Container'
}
</script>

<template>
  <div class="container"><slot /></div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: var(--g-32);
  padding: var(--p-48) var(--p-20);
}
</style>
