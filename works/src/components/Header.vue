<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <div class="header-container">
      
      <div class="logo-area">
        <img
          src="/src/assets/works.png"
          alt="Cube Security Logo"
          class="logo-icon"
        />
        <div class="brand-name">
          <span class="brand-primary">WORKS</span>
          <span class="brand-secondary">SISTEMAS</span>
        </div>
      </div>


      <nav class="desktop-nav">
        <ul class="nav-list">
          <li v-for="item in menuItems" :key="item.id">
            <a :href="`#${item.id}`" @click.prevent="handleScroll(item.id)">
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

      <button 
        class="hamburger-btn" 
        :class="{ 'is-active': isMenuOpen }" 
        @click="toggleMenu"
        aria-label="Menu"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <transition name="fade">
        <div v-if="isMenuOpen" class="mobile-menu">
          <ul class="mobile-nav-list">
            <li v-for="item in menuItems" :key="item.id">
              <a 
                :href="`#${item.id}`" 
                @click.prevent="handleScroll(item.id)"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>
      </transition>

    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const menuItems = [
  { id: 'home', label: 'Home' },
  { id: 'quem-somos', label: 'Empresa' },
  { id: 'nossos-servicos', label: 'Serviços' },
  { id: 'tecnologia', label: 'Tecnologia' },
  { id: 'contato', label: 'Contato' },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  // Bloqueia o scroll do body quando o menu está aberto
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
};

const handleScroll = (id) => {
  // Fecha o menu mobile se estiver aberto
  if (isMenuOpen.value) {
    toggleMenu();
  }

  // Lógica de scroll suave
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// Efeito de background ao rolar a página
const updateScrollState = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', updateScrollState);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollState);
});
</script>

<style scoped>
/* --- Layout Base --- */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1.2rem 2rem;
  transition: all 0.4s ease;
  background: transparent; /* Transparente no topo */
}

/* Estado quando a página é rolada */
.header.scrolled {
  background-color: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  padding: 0.8rem 2rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
}

.header-container {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* --- Branding --- */
.logo-area {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  z-index: 1002; /* Fica acima do menu mobile */
}

.logo-icon {
  width: 50px;   /* ajuste conforme necessário */
  height: 50px;
  object-fit: contain;
}


.brand-name {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.brand-primary {
  color: #f8dd73;
  font-weight: 800;
  font-size: 1.4rem;
  letter-spacing: 1px;
}

.brand-secondary {
  color: #ba7928;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding-left: 2px;
}

/* --- Desktop Nav --- */
.desktop-nav .nav-list {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.desktop-nav a {
  color: #fff;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  position: relative;
  transition: color 0.3s;
}

.desktop-nav a:hover {
  color: #f8dd73;
}

.desktop-nav a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #ba7928, #f8dd73);
  transition: width 0.3s ease;
}

.desktop-nav a:hover::after {
  width: 100%;
}

/* --- Hamburger Button --- */
.hamburger-btn {
  display: none; /* Escondido no desktop */
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1002;
  padding: 10px;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  background-color: #f8dd73;
  transition: all 0.3s ease-in-out;
  border-radius: 2px;
}

/* Animação do Hamburger para X */
.hamburger-btn.is-active .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
  background-color: #fff;
}

.hamburger-btn.is-active .bar:nth-child(2) {
  opacity: 0;
}

.hamburger-btn.is-active .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
  background-color: #fff;
}

/* --- Mobile Menu Overlay --- */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
}

.mobile-nav-list {
  list-style: none;
  text-align: center;
  padding: 0;
}

.mobile-nav-list li {
  margin: 2rem 0;
  opacity: 0;
  animation: slideUp 0.5s forwards;
}

/* Stagger animation para os itens */
.mobile-nav-list li:nth-child(1) { animation-delay: 0.1s; }
.mobile-nav-list li:nth-child(2) { animation-delay: 0.2s; }
.mobile-nav-list li:nth-child(3) { animation-delay: 0.3s; }
.mobile-nav-list li:nth-child(4) { animation-delay: 0.4s; }
.mobile-nav-list li:nth-child(5) { animation-delay: 0.5s; }

.mobile-nav-list a {
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.mobile-nav-list a:hover {
  color: #f8dd73;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* --- Media Queries --- */
@media (max-width: 900px) {
  .desktop-nav {
    display: none;
  }
  
  .hamburger-btn {
    display: block;
  }
}

/* Transição do Vue */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>