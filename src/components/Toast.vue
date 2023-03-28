<script>
export default {
  name: 'Toast',
  props: {
    message: { type: String, default: '' }
  }
}
</script>

<template>
  <div class="toast" v-if="message !== ''">
    {{ message }}
  </div>
</template>

<style lang="scss" scoped>
.toast {
  z-index: 9999;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 10px;
  color: var(--light);
  background-color: var(--error);
  padding: var(--p-16);
  border-radius: 8px;
}
</style>
