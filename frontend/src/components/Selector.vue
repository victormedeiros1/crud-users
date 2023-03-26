<script>
export default {
  name: 'Selector',
  props: {
    value: { type: String, default: '' },
    name: { type: String, default: 'text' },
    label: { type: String, default: '' },
    options: { type: Array, default: () => [] }
  },
  emits: ['update:modelValue']
}
</script>

<template>
  <div class="group">
    <!-- <div class="group__toast">{{ name }}</div> -->
    <label :for="name" class="group__label">{{ label }}</label>

    <select
      :id="name"
      class="group__selector"
      :name="name"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      <option v-for="{ id, name, value } in options" :key="id" class="group__option" :value="value">
        {{ name }}
      </option>
    </select>
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
  &__selector {
    color: var(--gray-900);
    font-size: var(--fs-14);
    border: 1px solid var(--gray-100);
    border-radius: 4px;
    padding: var(--p-14) var(--p-12);
  }
  &__option {
    padding: var(--p-14) var(--p-12);
  }
}
</style>
