<template>
  <div class="app-container">
    
    <Header />

    <main class="main-content">
      <section id="home" class="section home-section">
        <Home />
      </section>

      <section id="quem-somos" class="section section-about">
        <Enterprise />
      </section>

      <section id="nossos-servicos" class="section section-services">
        <Services />
      </section>

      <section id="tecnologia" class="section section-technology">
        <Technology />
      </section>

      <section id="contato" class="section section-contact">
        <Contact />
      </section>
    </main>
  </div>
</template>

<script setup>
import Enterprise from './components/Enterprise.vue';
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Services from './components/Services.vue'
import Technology from './components/Technology.vue'
import Contact from './components/Contact.vue'
import { onMounted } from 'vue';

onMounted(() => {
  window.addEventListener('hashchange', () => {
    history.replaceState(null, null, window.location.pathname);
  }, false);
});
</script>

<style>
/* Reset global e Smooth Scroll nativo */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
  font-family: 'Inter', sans-serif; /* Sugestão de fonte moderna */
}
</style>

<style scoped>
/* Container principal */
.app-container {
  width: 100%;
  min-height: 100vh;
  position: relative;
}

/* Main Content */
.main-content {
  width: 100%;
}

/* Configuração geral das Seções */
.section {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  isolation: isolate;
}

.section:not(.home-section)::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: min(220px, 55vw);
  height: 1px;
  transform: translateX(-50%);
  background: linear-gradient(90deg, transparent, rgba(248, 221, 115, 0.75), transparent);
  z-index: 3;
}

.section-about {
  background: #070707;
}

.section-services {
  background: #101010;
}

.section-technology {
  background: #000;
}

.section-contact {
  background: #0b0b0b;
}

.home-section {
  padding: 0;
  background: #000;
}

.section-content {
  max-width: 1200px;
  padding: 0 2rem;
  text-align: center;
  /* Espaçamento superior para compensar o header fixo se necessário, 
     embora o align-items: center centralize tudo verticalmente */
}

.section-content h1 {
  font-size: 3rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.section-content p {
  font-size: 1.125rem;
  color: #666;
  line-height: 1.6;
}

/* Responsividade Geral */
@media (max-width: 768px) {
  .section-content h1 {
    font-size: 2rem;
  }
  .section-content p {
    font-size: 1rem;
  }
}
</style>