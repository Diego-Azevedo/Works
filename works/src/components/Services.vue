<template>
  <section class="services-section">
    <div class="content-container">
      
      <div class="section-header">
        <span class="eyebrow">SOLUÇÕES DE ELITE</span>
        <h2>
          <span class="text-gradient">SEGURANÇA REDEFINIDA</span> <br />
          <span class="text-gradient">COM INTELIGÊNCIA</span>
        </h2>
        <p class="header-desc">
          Tecnologias disruptivas e integração sistêmica de alta performance.
        </p>
      </div>

      <div class="services-grid">
        <div 
          v-for="(service, index) in services" 
          :key="service.id"
          class="service-card"
        >
          <div class="card-top">
            <div class="icon-wrapper">
              <component :is="service.icon" />
            </div>
            <span class="card-number">0{{ index + 1 }}</span>
          </div>

          <div class="card-content">
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>

          <div class="card-footer">
            <a :href="getServiceLink(service.id)" class="action-link" @click.prevent="scrollToSection(getServiceLink(service.id))">Detalhes <span>→</span></a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { h } from 'vue';

// --- Ícones SVG Otimizados ---

const IconCCTV = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 }, [
  h('path', { d: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4z' }),
  h('rect', { x: 3, y: 6, width: 12, height: 12, rx: 2 }),
  h('circle', { cx: 9, cy: 12, r: 2 })
]);

const IconMonitor = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 }, [
  h('path', { d: 'M3 12h3l3-9 6 18 3-9h3' }) // Heartbeat/Activity wave
]);

const IconBio = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 }, [
  h('path', { d: 'M12 12c0-3 2.5-5.5 5-5.5 4 0 4.5 4 4.5 4' }),
  h('path', { d: 'M7.5 7.5c-2.5 0-5 2.5-5 5.5 0 3 2.5 5.5 5 5.5' }),
  h('path', { d: 'M12 20v-8' })
]);

const IconShield = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 }, [
  h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }),
  h('path', { d: 'M12 8v4' })
]);

const IconFleet = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 }, [
  h('path', { d: 'M5 18H3a1 1 0 01-1-1v-4a1 1 0 011-1h2' }), // Front
  h('path', { d: 'M19 18h2a1 1 0 001-1v-4a1 1 0 00-1-1h-2' }), // Back
  h('rect', { x: 5, y: 10, width: 14, height: 8, rx: 2 }), // Body
  h('path', { d: 'M12 6v4' }), // Antenna
  h('path', { d: 'M9 10l-2-4h10l-2 4' }) // Window
]);

const IconProject = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 }, [
  h('rect', { x: 3, y: 3, width: 18, height: 18, rx: 2 }), // Blueprint paper
  h('path', { d: 'M9 3v18' }), // Grid line vert
  h('path', { d: 'M3 9h18' }), // Grid line horiz
  h('circle', { cx: 15, cy: 15, r: 2 }) // Focus point
]);

const services = [
  {
    id: 1,
    title: 'CFTV INTELIGENTE COM IA',
    description: 'Reconhecimento facial, análise comportamental e perícia forense em tempo real.',
    icon: IconCCTV
  },
  {
    id: 2,
    title: 'MONITORAMENTO & OPERAÇÃO',
    description: 'Central de Comando 24/7 com pronta resposta e protocolos preditivos de segurança.',
    icon: IconMonitor
  },
  {
    id: 3,
    title: 'ACESSO BIOMÉTRICO',
    description: 'Fluxo touchless de alta velocidade, reconhecimento facial e gestão em nuvem.',
    icon: IconBio
  },
  {
    id: 4,
    title: 'PERÍMETRO INTELIGENTE',
    description: 'Barreiras virtuais, radares e sensores sísmicos que antecipam a intrusão.',
    icon: IconShield
  },
  {
    id: 5,
    title: 'GESTÃO DE FROTA',
    description: 'Telemetria avançada, corte de combustível remoto e análise de condução.',
    icon: IconFleet
  },
  {
    id: 6,
    title: 'PROJETOS & IMPLANTAÇÃO',
    description: 'Consultoria técnica, desenho de soluções customizadas e gestão de infraestrutura.',
    icon: IconProject
  }
];

// Mapeia os IDs dos serviços para os IDs das seções de tecnologia
const getServiceLink = (serviceId) => {
  const linkMap = {
    1: '#tech-1',        // CFTV
    2: '#monitoramento', // Monitoramento
    3: '#tech-2'         // Controle de Acesso
  };
  return linkMap[serviceId] || '#tecnologia';
};

const scrollToSection = (sectionId) => {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.services-section {
  background-color: #050505;
  width: 100%;
  /* Força ocupar a altura da tela, mas permite crescer se necessário */
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem 2rem; /* Padding top maior para compensar Header fixo */
}

.content-container {
  max-width: 1280px; /* Largura contida para não espalhar demais */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* --- Header Section --- */
.section-header {
  text-align: center;
  margin-bottom: 2.5rem; /* Margem reduzida para caber tudo */
}

.eyebrow {
  color: #ba7928;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  display: block;
}

.section-header h2 {
  font-size: clamp(2rem, 3.5vw, 3rem);
  line-height: 1.1;
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

/* Gradiente estilo Home */
.text-gradient {
  background: linear-gradient(90deg, #f8dd73, #ba7928);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.header-desc {
  color: #888;
  font-size: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

/* --- Grid Section (3x2) --- */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem; /* Gap mais apertado */
  width: 100%;
  flex-grow: 1; /* Ocupa o espaço restante */
}

.service-card {
  background: linear-gradient(180deg, rgba(20,20,20,0.5) 0%, rgba(10,10,10,0.8) 100%);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 1.5rem; /* Padding interno reduzido (antes era 2.5rem) */
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.service-card:hover {
  background: rgba(20, 20, 20, 0.8);
  border-color: rgba(186, 121, 40, 0.4);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

/* Card Top: Icon & Number */
.card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.icon-wrapper {
  width: 40px;
  height: 40px;
  background: rgba(186, 121, 40, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f8dd73;
}

.icon-wrapper svg {
  width: 22px;
  height: 22px;
}

.card-number {
  font-size: 1.5rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.05);
  line-height: 1;
}

.service-card:hover .card-number {
  color: rgba(186, 121, 40, 0.15);
}

/* Content */
.card-content h3 {
  font-size: 1.1rem; /* Fonte menor para caber */
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.card-content p {
  color: #999;
  font-size: 0.85rem; /* Fonte descrição reduzida */
  line-height: 1.5;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limita a 3 linhas de texto */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Footer Link */
.card-footer {
  margin-top: auto;
  border-top: 1px solid rgba(255,255,255,0.05);
  padding-top: 0.75rem;
}

.action-link {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #ba7928;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: gap 0.2s;
}

.service-card:hover .action-link {
  gap: 0.8rem;
  color: #f8dd73;
}

/* --- Media Queries --- */
@media (max-width: 1024px) {
  .services-section {
    height: auto; /* Remove altura fixa em tablets */
    padding-top: 0;
    padding-bottom: 80px;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  
  .services-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas tablet */
  }
}

@media (max-width: 600px) {
  .services-grid {
    grid-template-columns: 1fr; /* 1 coluna mobile */
  }

  .section-header {
    margin-top: 2rem;
  }
  
  .section-header h2 {
    font-size: 1.8rem;
  }

  .text-gradient {
    font-size: 35px;
  }
}
</style>