<template>
  <section id="monitoramento" class="monitoring-section">
    <!-- Hero Section with Dashboard Visual -->
    <div class="hero-section">
      <div class="section-container">
        <div class="hero-grid">

          <!-- Dashboard Representation -->
          <div class="dashboard-visual">
            <div class="glass-card dashboard-glow">
              <div class="card-header">
                <div class="window-controls">
                  <span class="dot red"></span>
                  <span class="dot yellow"></span>
                  <span class="dot green"></span>
                </div>
                <span class="feed-id">{{ currentCamera.feed }}</span>
              </div>
              
              <div class="video-mock">
                <video 
                  ref="videoPlayer"
                  autoplay 
                  loop 
                  muted 
                  playsinline
                  class="video-player"
                  :key="currentCamera.id"
                >
                  <source :src="currentCamera.video" type="video/mp4" />
                </video>
                
                <!-- Grid Overlay -->
                <div class="grid-overlay"></div>
              </div>

              <div class="dashboard-footer-grid">
                <button 
                  v-for="(camera, index) in cameras" 
                  :key="camera.id"
                  class="thumb"
                  :class="{ active: currentCamera.id === camera.id }"
                  @click="selectCamera(camera)"
                  :title="`Câmera ${index + 1}`"
                >
                  <span class="camera-label">CAMERA {{ index + 1 }}</span>
                </button>
                <div class="thumb active">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div class="text-content">
            <div class="status-badge">
              <span class="pulse-dot"></span>
              <span class="badge-text">SISTEMA ATIVO</span>
            </div>
            <h1 class="gold-gradient-text">
              Monitoramento Inteligente 24/7
            </h1>
            <p class="description">
              Segurança proativa potencializada por IA, garantindo proteção ininterrupta para seu patrimônio e tranquilidade para você.
            </p>
            <div class="actions">
              <button class="btn-primary" @click="scrollToSection('#contato')">
                Ver Planos
              </button>
            </div>
          </div>

          
        </div>
      </div>
    </div>

    <!-- O Que Faz Section -->
    <section class="capabilities-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-label">Capacidades</h2>
          <h3 class="section-title">O que faz o sistema inteligente?</h3>
        </div>
        <div class="capabilities-grid">
          <div class="cap-card" v-for="(cap, index) in capabilities" :key="index">
            <div class="cap-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path :d="cap.iconPath" />
              </svg>
            </div>
            <h4>{{ cap.title }}</h4>
            <p>{{ cap.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tecnologias e Recursos Section -->
    <section class="technologies-section">
      <div class="section-container">
        <div class="technologies-grid">
          <div class="technologies-visual">
            <div class="tech-grid">
              <div class="tech-card" v-for="(tech, index) in technologies" :key="index">
                <div class="tech-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path :d="tech.iconPath" />
                  </svg>
                </div>
                <h4>{{ tech.title }}</h4>
                <p>{{ tech.desc }}</p>
              </div>
            </div>
          </div>
          <div class="technologies-content">
            <h2 class="section-label">Tecnologia</h2>
            <h3 class="section-title">Equipamentos de última geração para sua proteção</h3>
            <p class="technologies-description">
              Nossos sistemas utilizam o que há de mais moderno em hardware e software de segurança. Integramos sensores térmicos, análise de som e detecção facial para criar uma barreira invisível e intransponível.
            </p>
            <ul class="features-list">
              <li v-for="(feature, index) in features" :key="index">
                <div class="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const videoPlayer = ref(null);

const cameras = [
  {
    id: 1,
    name: 'Câmera 1',
    video: '/video/camera1.mp4',
    feed: 'LIVE FEED: CANAL 01 - OBRA FLORESTAL'
  },
  {
    id: 2,
    name: 'Câmera 2',
    video: '/video/camera2.mp4',
    feed: 'LIVE FEED: CANAL 02 - RUA DOS CRAVOS'
  },
  {
    id: 3,
    name: 'Câmera 3',
    video: '/video/obraRota.mp4',
    feed: 'LIVE FEED: CANAL 03 - OBRA CENTRO'
  }
];

const selectedCameraId = ref(1);

const currentCamera = computed(() => {
  return cameras.find(cam => cam.id === selectedCameraId.value) || cameras[0];
});

const selectCamera = (camera) => {
  selectedCameraId.value = camera.id;
  // Força o reload do vídeo
  if (videoPlayer.value) {
    videoPlayer.value.load();
    videoPlayer.value.play();
  }
};

const capabilities = [
  {
    iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'Detecção de Intrusão',
    desc: 'IA avançada que identifica movimentos suspeitos e distingue humanos de animais ou objetos instantaneamente.'
  },
  {
    iconPath: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
    title: 'Alertas em Tempo Real',
    desc: 'Notificações imediatas direto no seu smartphone ou central de operações ao detectar qualquer anomalia.'
  },
  {
    iconPath: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12',
    title: 'Gravação em Nuvem',
    desc: 'Segurança total com armazenamento criptografado dos eventos, permitindo acesso de qualquer lugar do mundo.'
  }
];

const technologies = [
  {
    iconPath: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z',
    title: 'Áudio Bidirecional',
    desc: 'Fale e ouça através das câmeras, permitindo intervenção imediata sem estar no local.'
  },
  {
    iconPath: 'M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z',
    title: 'Sirene Remota',
    desc: 'Acione avisos sonoros de alta potência para inibir ações criminosas no ato.'
  },
  {
    iconPath: 'M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    title: 'Visão Noturna Color',
    desc: 'Identificação clara de cores e rostos mesmo em escuridão total com sensores avançados.'
  },
  {
    iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    title: 'Heatmaps & Fluxo',
    desc: 'Análise de tráfego e comportamento para otimização de segurança e operações.'
  }
];

const features = [
  'Uptime garantido de 99.9%',
  'Conectividade redundante (Wi-Fi + 4G)',
  'Criptografia de nível bancário (AES-256)'
];

const scrollToSection = (sectionId) => {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.monitoring-section {
  background: #000;
  color: #fff;
  min-height: calc(100vh - 80px);
  padding-top: 80px;
}

.section-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.hero-section {
  padding: 6rem 0 4rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.text-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Status Badge */
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(186, 121, 40, 0.1);
  border: 1px solid rgba(186, 121, 40, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  width: fit-content;
}

.pulse-dot {
  width: 6px;
  height: 6px;
  background-color: #ff1e00;
  border-radius: 50%;
  box-shadow: 0 0 5px #f80000;
  animation: pulse 2s infinite;
}

.badge-text {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #f8dd73;
  text-transform: uppercase;
}

/* Typography */
.gold-gradient-text {
  background: linear-gradient(90deg, #f8dd73, #ba7928);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.description {
  color: #9ca3af;
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 540px;
}

/* Buttons */
.actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.btn-primary {
  background: linear-gradient(
    135deg,
    #ba7928,
    #f8dd73
  );
  color: #111;
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

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 1.25rem 2.5rem;
  border-radius: 0.75rem;
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Dashboard Visual */
.dashboard-visual {
  position: relative;
}

.glass-card {
  background: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(186, 121, 40, 0.2);
  border-radius: 1.5rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.dashboard-glow {
  box-shadow: 0 0 40px -10px rgba(186, 121, 40, 0.3);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1rem;
}

.window-controls {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red {
  background: rgba(239, 68, 68, 0.5);
}

.dot.yellow {
  background: rgba(234, 179, 8, 0.5);
}

.dot.green {
  background: rgba(34, 197, 94, 0.5);
}

.feed-id {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.4);
  font-family: monospace;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.video-mock {
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: 0.75rem;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.video-player {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hud-overlay {
  position: absolute;
  inset: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  pointer-events: none;
  font-family: monospace;
}

.hud-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.ai-tag {
  padding: 0.5rem;
  border: 1px solid rgba(186, 121, 40, 0.4);
  background: rgba(0, 0, 0, 0.4);
  border-radius: 0.25rem;
}

.ai-tag .label {
  color: #ba7928;
  font-size: 10px;
  display: block;
}

.ai-tag .value {
  color: #fff;
  font-size: 10px;
  line-height: 1;
  margin-top: 0.25rem;
}

.rec-status {
  text-align: right;
}

.rec-status div {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
}

.hud-bottom {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.progress-bar {
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  width: 100%;
  border-radius: 9999px;
  overflow: hidden;
}

.progress-bar .fill {
  height: 100%;
  background: rgba(186, 121, 40, 0.5);
  width: 66.666%;
}

.stats {
  display: flex;
  justify-content: space-between;
  font-size: 8px;
  color: #f8dd73;
  text-transform: uppercase;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.1;
  pointer-events: none;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}

.dashboard-footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
}

.thumb {
  height: 3rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}

.thumb button {
  cursor: pointer;
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
}

.thumb button:hover {
  background: transparent;
}

.thumb:has(button):hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(186, 121, 40, 0.3);
  transform: scale(1.05);
}

.thumb:not(:has(button)) {
  cursor: default;
}

.thumb:not(:has(button)):hover {
  transform: none;
}

.camera-label {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.thumb.active {
  background: rgba(186, 121, 40, 0.2);
  border-color: rgba(186, 121, 40, 0.4);
  box-shadow: 0 0 10px rgba(186, 121, 40, 0.3);
}

.thumb.active .camera-label {
  color: #f8dd73;
}

.thumb.active svg {
  width: 20px;
  height: 20px;
  color: #f8dd73;
}

/* Capabilities Section */
.capabilities-section {
  padding: 5rem 0;
  background: #000;
}

.section-header {
  margin-bottom: 3rem;
}

.section-label {
  color: #ba7928;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.section-title {
  font-size: 1.875rem;
  font-weight: 700;
}

@media (max-width: 968px) {
  .section-header {
    text-align: left;
  }
  
  .section-label {
    text-align: left;
  }
  
  .section-title {
    text-align: left;
  }
}

.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.cap-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.3s ease;
}

.cap-card:hover {
  transform: translateX(10px);
  border-color: rgba(186, 121, 40, 0.4);
}

.cap-icon {
  width: 40px;
  height: 40px;
  background: rgba(186, 121, 40, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f8dd73;
  flex-shrink: 0;
}

.cap-icon svg {
  width: 22px;
  height: 22px;
}

.cap-card h4 {
  color: #fff;
  margin-bottom: 0.3rem;
  font-weight: 600;
  font-size: inherit;
}

.cap-card p {
  color: #888;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Technologies Section */
.technologies-section {
  padding: 5rem 0;
}

.technologies-grid {
  display: flex;
  flex-direction: row;
  gap: 3rem;
  align-items: center;
}

.technologies-visual {
  width: 50%;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.tech-card {
  padding: 1.5rem;
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.05), transparent);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.tech-icon {
  color: #f8dd73;
  margin-bottom: 0.5rem;
}

.tech-icon svg {
  width: 22px;
  height: 22px;
}

.tech-card h4 {
  font-weight: 700;
  color: #fff;
  font-size: inherit;
}

.tech-card p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.4);
}

.technologies-content {
  width: 50%;
}

.technologies-description {
  color: #9ca3af;
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

@media (max-width: 968px) {
  .technologies-content {
    text-align: left;
  }
  
  .technologies-content .section-label {
    text-align: left;
  }
  
  .technologies-content .section-title {
    text-align: left;
  }
  
  .technologies-description {
    text-align: left;
  }
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 0;
}

.features-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.features-list .feature-icon {
  width: 24px;
  height: 24px;
  color: #f8dd73;
  flex-shrink: 0;
}

.features-list .feature-icon svg {
  width: 100%;
  height: 100%;
}

.features-list span:last-child {
  font-size: 0.875rem;
  font-weight: 500;
  color: #fff;
}

/* Animations */
@keyframes pulse {
  0% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 0.5; transform: scale(1); }
}

/* Responsive */
@media (max-width: 968px) {
  .monitoring-section {
    padding-top: 20px;
  }

  .hero-section {
    padding: 6rem 0 80px;
  }

  .capabilities-section {
    padding-top: 0;
    padding-bottom: 80px;
  }

  .technologies-section {
    padding-top: 0;
    padding-bottom: 80px;
  }

  .hero-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .text-content {
    text-align: center;
  }
  
  .status-badge {
    margin-left: auto;
    margin-right: auto;
  }
  
  .gold-gradient-text {
    text-align: center;
  }
  
  .description {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
  }

  .actions {
    display: none;
  }

  .capabilities-grid {
    grid-template-columns: 1fr;
  }

  .technologies-grid {
    flex-direction: column;
  }

  .technologies-visual,
  .technologies-content {
    width: 100%;
  }

  .technologies-content {
    order: 1;
  }

  .technologies-visual {
    order: 2;
  }

  .dashboard-footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>