<template>
  <section class="hero-section">
    <div class="hero-bg">
      <div class="bg-gradient-mesh"></div>
      <div class="bg-noise"></div>
    </div>

    <div class="hero-container">

      <div class="hero-video">
        <div class="video-glow"></div>

        <div class="video-wrapper">
          <video autoplay muted loop playsinline preload="metadata">
            <source src="/video/works3.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div class="hero-content">
        <span class="hero-eyebrow">SOLUÇÕES DE SEGURANÇA</span>

        <h1>
          WORKS<br />
          <span>SISTEMAS INTELIGENTES</span>
        </h1>

        <p>
          O mais alto nível de tecnologia Hikvision em segurança,
          controle de acesso e gestão operacional.
        </p>

        <button class="hero-button" @click="scrollToSection('#quem-somos')">
          Conhecer agora
        </button>
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero-section {
  --bg-base: #000000; /* Ajustado para preto sólido para evitar transparência indesejada */
  --yellow-primary: #ba7928;
  --yellow-light: #f8dd73;
  --text-muted: #9ca3af;
  
  background: var(--bg-base);
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  
  /* MUDANÇA 1: Forçar altura da viewport no desktop */
  height: 100vh;
  min-height: 700px; /* Evita quebra em telas muito achatadas */
}

/* =====================
   BACKGROUND
   ===================== */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.bg-gradient-mesh {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 30%, #1a1a1a, #000 70%);
}

.bg-noise {
  position: absolute;
  inset: 0;
  opacity: 0.05;
}

/* =====================
   CONTAINER
   ===================== */
.hero-container {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1440px;
  
  /* MUDANÇA 2: Redução drástica dos paddings verticais */
  padding: 80px 2rem 40px; 
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Garante centralização vertical */
  height: 100%; /* Ocupa a altura da section */
}

/* =====================
   VIDEO HERO
   ===================== */
.hero-video {
  position: relative;
  width: 100%;
  max-width: 1000px; /* Levemente reduzido para não estourar lateralmente */
  
  /* MUDANÇA 3: Altura controlada e Margem Negativa */
  height: 45vh; /* Ocupa no máximo 45% da altura da tela */
  margin-bottom: -10vh; /* Puxa o texto para CIMA do vídeo (overlap) */
  
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-glow {
  position: absolute;
  inset: -10%;
  background: radial-gradient(
    circle,
    rgba(250, 138, 1, 0.2),
    transparent 60%
  );
  filter: blur(80px);
  z-index: 0;
}

.video-wrapper {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%; /* Respeita a altura do pai (.hero-video) */
  
  -webkit-mask-image: 
    radial-gradient(ellipse at center, black 15%, transparent 85%),
    linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%),
    linear-gradient(to bottom, black 0%, black 50%, transparent 100%); /* Fade mais agressivo embaixo */

  mask-image: 
    radial-gradient(ellipse at center, black 15%, transparent 85%),
    linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%),
    linear-gradient(to bottom, black 0%, black 50%, transparent 100%);

  -webkit-mask-composite: source-in;
  mask-composite: intersect;
}

.video-wrapper video {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Garante que preencha a área */
  mix-blend-mode: screen;
}

/* =====================
   CONTENT
   ===================== */
.hero-content {
  text-align: center;
  max-width: 760px;
  position: relative;
  z-index: 10; /* Garante que fique SOBRE o vídeo */
}

.hero-eyebrow {
  display: block;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  color: var(--yellow-light);
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0,0,0,0.8); /* Legibilidade sobre o vídeo */
}

.hero-content h1 {
  /* Clamp ajustado para desktop */
  font-size: clamp(2.5rem, 4.5vw, 4.5rem); 
  line-height: 1.05;
  color: var(--yellow-light);
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-content h1 span {
  background: linear-gradient(
    90deg,
    var(--yellow-light),
    var(--yellow-primary)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-content p {
  font-size: 1.125rem;
  line-height: 1.5;
  color: var(--text-muted);
  margin-bottom: 2rem;
}

/* =====================
   BUTTON
   ===================== */
.hero-button {
  background: linear-gradient(
    135deg,
    var(--yellow-primary),
    var(--yellow-light)
  );
  color: #111;
  font-weight: 600;
  padding: 0.8rem 2.5rem; /* Levemente menor para economizar espaço */
  border-radius: 999px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hero-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(186, 121, 40, 0.45);
}

/* =====================
   MOBILE
   ===================== */
@media (max-width: 768px) {
  .hero-section {
    height: auto; /* Devolve altura automática no mobile */
    min-height: 100vh;
  }

  .hero-container {
    padding: 90px 2rem 80px; /* Padding-bottom uniformizado para 80px */
    justify-content: flex-start;
  }

  .hero-video {
    height: auto;
    max-height: 35vh;
    margin-bottom: 5rem; /* No mobile, talvez você queira menos overlap ou nenhum */
  }

  .video-wrapper {
    -webkit-mask-image: linear-gradient(
      to bottom,
      black 30%,
      transparent 100%
    );
    mask-image: linear-gradient(
      to bottom,
      black 30%,
      transparent 100%
    );
  }

  .hero-content h1 {
    font-size: 2.8rem;
  }

  .hero-content p {
    margin-bottom: 5rem;
  }
  }
</style>

<script setup>
const scrollToSection = (sectionId) => {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>