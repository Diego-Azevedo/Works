<template>
  <section id="quem-somos" class="enterprise-section">
    <div class="content-container">
      
      <div class="main-grid">
        <div class="text-content">
          <span class="eyebrow">NOSSA ESSÊNCIA</span>
          
          <p class="description">
            A <strong>Works Sistemas Inteligentes</strong> é especialista em entregar soluções que realmente funcionam.
            Fundada para resolver problemas reais de operação, atua com foco em segurança eletrônica, automação e sistemas
            inteligentes, utilizando exclusivamente tecnologia <strong>Hikvision</strong> para garantir confiabilidade, padronização e alto desempenho.
          </p>
          
          <p class="description">
            Desenvolvemos e gerenciamos sistemas profissionais de monitoramento por câmeras IP, controle de acesso, reconhecimento
            facial e automação, sempre com foco em inteligência artificial, segurança da informação e funcionamento contínuo no ambiente real.
          </p>

          <p class="description">
            A atuação da Works é guiada por um padrão técnico rigoroso. Trabalhamos exclusivamente com soluções IP, descartando sistemas
            analógicos, com arquitetura bem definida e acompanhamento contínuo. Todas as decisões técnicas são baseadas em experiência prática de campo, garantindo
            que a tecnologia entregue funcione de forma confiável ao longo do tempo.
          </p>
        </div>

        <div class="segments-display">
          <span class="eyebrow-small">SEGMENTOS ATENDIDOS</span>
          
          <div class="segments-column">
            <div 
              v-for="(segment, index) in segments" 
              :key="index" 
              class="segment-card"
            >
              <div class="card-inner">
                <div class="card-bg" :style="{ backgroundImage: `url(${segment.image})` }"></div>

                <div class="segment-overlay"></div>
                
                <div class="segment-info">
                  <span class="segment-name">{{ segment.name }}</span>
                  <div class="segment-indicator"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="actions">
          <button class="btn-primary" @click="scrollToSection('#contato')">Contate com um especialista</button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import imgResidencial from '../assets/segments/residence.jpg'
import imgCondominium from '../assets/segments/condominium.jpg'
import imgCam from '../assets/segments/cam.png'
import imgFactory from '../assets/segments/factory.jpg'
import imgWork from '../assets/segments/obra.png'
import imgCar from '../assets/segments/carro.png'
import imgParking from '../assets/segments/estacionamento.png'

const segments = [
  { name: 'Residencial', image: imgResidencial },
  { name: 'Condomínios', image: imgCondominium },
  { name: 'Empresas e Comércios', image: imgCam },
  { name: 'Indústrias', image: imgFactory },
  { name: 'Obras e Canteiros', image: imgWork },
  { name: 'Estacionamentos', image: imgParking },
  { name: 'Frotas e Veículos Corporativos', image: imgCar },
]

const scrollToSection = (sectionId) => {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.enterprise-section {
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 2rem;
  width: 100%;
  /* Otimização: força renderização do background */
  transform: translateZ(0);
  will-change: background-color;
}

.content-container {
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
}

.main-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr; /* Ajuste sutil na proporção */
  gap: 6rem;
  align-items: start; /* Alinhamento ao topo garantido */
}

/* --- Texto --- */
.eyebrow {
  color: #ba7928;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  display: block;
  margin-bottom: 2rem;
}

.eyebrow-small {
  color: #f8dd73;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  margin-bottom: 2rem; /* Alinhado com a margem do eyebrow da esquerda */
  display: block;
  opacity: 0.7;
}

.description {
  color: #9ca3af;
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 1.8rem;
  max-width: 600px;
}

.actions {
  display: flex;
  justify-content: flex-start;
  /* margin-top: 2rem; */
}

.btn-primary {
  background: linear-gradient(135deg, #ba7928, #f8dd73);
  color: #000;
  font-weight: 600;
  padding: 0.8rem 2.5rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(186, 121, 40, 0.45);
}

/* --- Segmentos com Vídeo --- */
.segments-column {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.segment-card {
  position: relative;
  height: 58px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  cursor: pointer;
  will-change: border-color;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
}

.card-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.segment-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #000000 30%, rgba(0, 0, 0, 0.2) 100%);
  z-index: 1;
}

.segment-info {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1.8rem;
}

.segment-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
}

.segment-indicator {
  height: 1px;
  width: 0;
  background: #f8dd73;
  margin-left: 1.2rem;
}

/* --- HOVER: Borda dourada --- */
.segment-card:hover {
  border-color: rgba(186, 121, 40, 0.4);
}

/* Mobile */
@media (max-width: 1024px) {
  .enterprise-section {
    padding-top: 0;
    padding-bottom: 80px;
  }

  .main-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .actions {
    margin-top: 2rem;
    justify-content: center;
  }
}
</style>