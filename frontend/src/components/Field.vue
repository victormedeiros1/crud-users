<script>
export default {
  name: 'Field',
  props: {
    value: { type: String, default: '' },
    type: { type: String, default: 'text' },
    label: { type: String, default: '' }
  },
  emits: ['update:modelValue']
}
</script>

<template>
  <div class="group">
    <label class="group__label">{{ label }}</label>
    <input class="group__field" @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>

<style lang="scss" scoped>
.group {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--g-2);

  &__label {
    color: var(--gray-600);
    font-size: var(--fs-14);
  }
  &__field {
    color: var(--gray-900);
    font-size: var(--fs-14);
    border: 1px solid var(--gray-100);
    border-radius: 4px;
    padding: var(--p-14) var(--p-12);
  }
}
</style>
