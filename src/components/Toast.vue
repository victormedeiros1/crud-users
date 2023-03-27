<template>
  <div class="toast" v-if="displayedMessage !== ''">
    {{ displayedMessage }}
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    message: { type: String, default: '' },
    duration: { type: Number, default: 5000 }
  },
  data() {
    return {
      displayedMessage: ''
    }
  },
  computed: {
    shouldShow() {
      return this.message !== ''
    }
  },
  watch: {
    message() {
      this.displayedMessage = this.message
      setTimeout(() => {
        this.displayedMessage = ''
      }, this.duration)
    }
  }
}
</script>

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
