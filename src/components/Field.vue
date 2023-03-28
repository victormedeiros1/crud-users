<script>
export default {
  name: 'Field',
  props: {
    required: { type: Boolean, default: false },
    type: { type: String, default: 'text' },
    name: { type: String, default: 'text' },
    label: { type: String, default: '' },
    maxLength: { type: String, default: '255' }
  },
  emits: ['update:modelValue']
}
</script>

<template>
  <div class="group">
    <label :for="name" class="group__label">{{ label }} <span v-if="required">*</span></label>
    <input
      :id="name"
      class="group__field"
      :name="name"
      :type="type"
      @input="$emit('update:modelValue', $event.target.value)"
      :maxlength="maxLength"
    />
  </div>
</template>

<style lang="scss" scoped>
.group {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--g-2);

  .group__toast {
    position: absolute;
    top: -1rem;
    background-color: var(--primary-main);
    border-radius: 1000px;
    padding: var(--p-16);
  }

  &__label {
    color: var(--gray-600);
    font-size: var(--fs-14);
  }
  &__field {
    width: 100%;
    color: var(--gray-900);
    font-size: var(--fs-14);
    border: 1px solid var(--gray-100);
    border-radius: 4px;
    padding: var(--p-14) var(--p-12);
  }
  &--full {
    width: 100%;
  }
}
</style>
