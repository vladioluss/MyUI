<script setup lang="ts">
import type {IInput} from "@/types/ui/input";

const emit = defineEmits(['update:value'])
const props = withDefaults(defineProps<IInput>(), {
      value: '',
      type: 'text',
      width: '300px',
    }
)

const updateValue = (e) => {
  emit('update:value', e.target.value)
}
</script>

<template>
  <div
      class="form-input"
      :style="{width: width}"
  >
    <input
        class="input-text"
        :type="type"
        :name="name"
        :id="name"
        :placeholder="placeholder"
        :value="value"
        @input="updateValue"
    />
    <label
        :for="name"
        class="input-label"
    >
      {{ label }}
    </label>
  </div>
</template>

<style lang="scss" scoped>
.form {
  &-input {
    margin-bottom: 30px;
    position: relative;
  }

  &-error {
    background: var(--danger);
    margin-top: 4px;
    border-radius: 7px;
    font-size: 13px;
    color: #fff;
    padding: 5px;
  }
}

.input {
  &-text {
    border: 1px solid var(--primary);
    padding: 0 10px;
    height: 40px;
    border-radius: 7px;
    font-size: 15px;
    width: 100%;
    position: relative;
    z-index: 1;

    &:focus {
      & + .input-label {
        z-index: 1;
        opacity: 1;
        top: -20px;
      }
    }

    &:not(:placeholder-shown) {
      & + .input-label {
        z-index: 1;
        opacity: 1;
        top: -20px;
      }
    }
  }

  &-label {
    font-weight: bold;
    display: block;
    position: absolute;
    top: 20px;
    opacity: 0;
    z-index: -1;
    transition: .3s;
    font-size: 13px;
    color: var(--primary);

    &:has(+ [required])::after {
      content: " *";
      color: var(--danger);
      font-size: 22px;
    }
  }
}
</style>