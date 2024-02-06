<script setup>
import {ref} from 'vue'
import BaseInput from '@/components/ui/inputs/BaseInput.vue'
import BaseBtn from "@/components/ui/buttons/BaseBtn.vue";
import {apiInstance} from "@/api/api";
const nameField = ref('')
const submitForm = () => {
  alert('Form submitted')
}

apiInstance.get('crossroad', null)
    .then(data => console.log(data))
    .catch(err => console.log(err))
</script>

<template>
  <div class="about">
    <form @submit.prevent="submitForm">
      <BaseInput
          label="Your name"
          name="name"
          placeholder="your name"
          v-model="nameField"
      />

      <BaseBtn
          label="Отправить"
          color="success"
      />
    </form>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
