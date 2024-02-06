<script setup>
import BaseBtn from '@/components/ui/buttons/BaseBtn.vue'

const eventForBaseBtn = () => {
  alert('You clicked danger BaseBtn')
}
</script>

<template>
  <div class="about">
    <h1>BaseBtn</h1>
    <h2>Disabled</h2>
    <div>
      <BaseBtn label="Primary" color="primary" disabled/>
      <BaseBtn label="Secondary" color="second" disabled/>
    </div>
    <h2 >Colors</h2>
    <div class="line">
      <BaseBtn label="Primary" color="primary"/>
      <BaseBtn label="Secondary" color="second"/>
      <BaseBtn label="Success" color="success"/>
      <BaseBtn label="Info" color="info"/>
      <BaseBtn label="Warning" color="warning"/>
      <BaseBtn label="Danger" color="danger"/>
    </div>
    <h2 >Rounded</h2>
    <div>
      <BaseBtn label="Primary" color="primary" rounded/>
      <BaseBtn label="Secondary" color="second" rounded/>
      <BaseBtn label="Success" color="success" rounded/>
      <BaseBtn label="Info" color="info" rounded/>
      <BaseBtn label="Warning" color="warning" rounded/>
      <BaseBtn label="Danger" color="danger" rounded/>
    </div>
    <h2>Outlined</h2>
    <div>
      <BaseBtn label="Primary" color="primary" outlined/>
      <BaseBtn label="Secondary" color="second" outlined/>
      <BaseBtn label="Success" color="success" outlined/>
      <BaseBtn label="Info" color="info" outlined/>
      <BaseBtn label="Warning" color="warning" outlined/>
      <BaseBtn label="Danger" color="danger" outlined/>
    </div>
    <h2>Icon</h2>
    <div>
      <BaseBtn color="primary" icon="heart" outlined/>
      <BaseBtn color="second" icon="hand"/>
      <BaseBtn color="success" icon="address-book" outlined/>
      <BaseBtn color="info" icon="credit-card"/>
      <BaseBtn color="warning" icon="lemon" outlined/>
      <BaseBtn color="danger" icon="hourglass"/>
    </div>
    <h2>Size</h2>
    <div>
      <BaseBtn label="Normal" color="primary"/>
      <BaseBtn label="Large" color="primary" size="large"/>
    </div>
    <h2>Event</h2>
    <div>
      <BaseBtn label="@click" color="danger" @click="eventForBaseBtn"/>
    </div>
  </div>
</template>

<style>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
