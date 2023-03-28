<script>
export default {
  name: 'Toast',
  props: {
    message: { type: String, default: '' }
  },
  data() {
    return {
      showToast: false
    }
  },
  watch: {
    message(newVal) {
      if (newVal !== '') {
        this.showToast = true
        setTimeout(() => {
          this.showToast = false
        }, 5000)
      }
    }
  }
}
</script>

<template>
  <div class="toast" v-if="showToast">
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
