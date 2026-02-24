<template>
  <section id="tecnologia" class="technology-section">
    
    <Cftv />

    <Monitoring />

    <AccessControl />

  </section>
</template>

<script setup>
  import Cftv from './technology/Cftv.vue'
  import AccessControl from './technology/AccessControl.vue'
  import Monitoring from './technology/Monitoring.vue'
</script>

<style scoped>
  .technology-section {
    background-color: #000;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  </style>