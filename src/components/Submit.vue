<script>
import Loading from '@/components/Loading.vue'
export default {
  name: 'Submit',
  props: {
    color: { type: String, default: 'primary' },
    loading: { type: Boolean, default: false }
  },
  components: {
    Loading
  }
}
</script>

<template>
  <button :class="['submit', color, loading && 'disabled']">
    <Loading v-if="loading" /> <slot v-else />
  </button>
</template>

<style lang="scss" scoped>
.submit {
  width: fit-content;
  color: var(--light);
  font-size: var(--fs-20);
  border: none;
  border-radius: 8px;
  padding: var(--p-12) var(--p-24);

  @media (max-width: 576px) {
    font-size: var(--fs-16);
  }

  &:hover {
    background-color: var(--primary-dark);
  }
}
.disabled {
  opacity: 0.8;
  pointer-events: none;
}
.primary {
  background-color: var(--primary-main);
}
.success {
  background-color: var(--success);

  &:hover {
    background-color: var(--successHover);
  }
}
.error {
  background-color: var(--error);

  &:hover {
    background-color: var(--errorHover);
  }
}
</style>
