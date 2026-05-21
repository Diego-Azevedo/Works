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
    background:
      radial-gradient(circle at 50% 0%, rgba(186, 121, 40, 0.12), transparent 24rem),
      linear-gradient(180deg, #000 0%, #060606 38%, #000 100%);
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  </style>