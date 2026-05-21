<template>
  <div id="tech-2" class="tech-detail-block">
    <div class="tech-container">
      
      <div class="tech-main-content">
        <div class="tech-text-content">
          <div class="badge-eyebrow">
            <span class="pulse-dot"></span>
            <span class="badge-text">TECNOLOGIA TOUCHLESS HIKVISION</span>
          </div>
          
          <h2 class="tech-title gradient-text">
            Controle de Acesso <br />
            <span class="gradient-text">Biometria & IA</span>
          </h2>

          <p class="tech-description">
            Segurança sem fricção para operações que exigem controle contínuo. O sistema combina deep learning, biometria facial, QR Code dinâmico, senha e reconhecimento de íris para áreas críticas.
          </p>
          <p class="tech-description">
            A gestão em nuvem centraliza dashboards em tempo real, permissões por hierarquia e auditoria de conformidade, enquanto a integração operacional sincroniza bafômetros, bloqueios automáticos, portões e cancelas.
          </p>
        </div>

        <div class="tech-visual-content">
          <div class="image-glass-card">
            <div class="device-glow"></div>
            <img :src="biometriaFacilImg" alt="Terminal Hikvision MinMoe" class="device-img" />
          </div>
        </div>
      </div>

        <div class="integrations-cards-grid">
          <div class="integration-card">
            <div class="card-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="8" r="4" />
                <path d="M8 12h8M10 16h4" />
                <path d="M12 8v8M8 12l-2 2M16 12l2 2" />
                <path d="M6 20c0-2 2-4 6-4s6 2 6 4" />
              </svg>
            </div>
            <h4 class="card-title">Sync Bafômetro</h4>
            <p class="card-description">
              Integração nativa com bafômetros no controle facial para conformidade NR-12 e segurança operacional.
            </p>
          </div>

          <div class="integration-card">
            <div class="card-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <line x1="9" y1="12" x2="15" y2="12" stroke-width="3" />
              </svg>
            </div>
            <h4 class="card-title">Bloqueio Crítico</h4>
            <p class="card-description">
              Bloqueio automático e notificação imediata à central em caso de reprovação ou tentativa de fraude.
            </p>
          </div>

          <div class="integration-card">
            <div class="card-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 12h18M3 8h18M3 16h18" />
                <rect x="2" y="6" width="20" height="12" rx="1" />
                <path d="M8 10v4M16 10v4" />
                <circle cx="8" cy="12" r="1" fill="currentColor" />
                <circle cx="16" cy="12" r="1" fill="currentColor" />
              </svg>
            </div>
            <h4 class="card-title">Perímetros</h4>
            <p class="card-description">
              Controle unificado de portas, portões, cancelas e torniquetes com monitoramento em tempo real.
            </p>
          </div>

          <div class="integration-card">
            <div class="card-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h4 class="card-title">Gestão Hierárquica</h4>
            <p class="card-description">
              Controle granular de horários, níveis de acesso e permissões temporárias para visitantes e prestadores.
            </p>
          </div>
        </div>

    </div>
  </div>
</template>

<script setup>
import biometriaFacilImg from '@/assets/segments/biometriaFacil.png';
</script>

<style scoped>
/* Estilos consistentes com Cftv.vue */
.tech-detail-block {
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  padding: clamp(28px, 3.5vh, 48px) 0 clamp(52px, 6.5vh, 80px);
  width: 100%;
  display: flex;
  align-items: stretch;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background:
    radial-gradient(circle at 15% 15%, rgba(248, 221, 115, 0.045), transparent 24rem),
    linear-gradient(180deg, #030303 0%, #000 100%);
}

.tech-detail-block::before {
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

.tech-container {
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  padding: 0 2rem;
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  gap: clamp(0.8rem, 1.9vh, 1.45rem);
}

.tech-main-content {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: clamp(2rem, 4vw, 4rem);
  align-items: center;
  min-height: 0;
}

.badge-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(186, 121, 40, 0.1);
  border: 1px solid rgba(186, 121, 40, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  width: fit-content;
  margin-bottom: clamp(1rem, 2vh, 1.5rem);
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

.tech-title {
  font-size: clamp(2.15rem, 3.6vw, 3.25rem);
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: clamp(0.75rem, 1.5vh, 1rem);
  color: #fff;
}

.gradient-text {
  background: linear-gradient(90deg, #f8dd73, #ba7928);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tech-description {
  color: #9ca3af;
  font-size: clamp(1rem, 1.3vw, 1.1rem);
  line-height: 1.7;
  margin: 0;
  max-width: 620px;
}

.tech-text-content {
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 2vh, 1.4rem);
  justify-content: center;
  max-width: 680px;
}

.tech-features-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 620px;
  padding: 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.025);
}

.feature-item {
  display: flex;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.03);
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.feature-item:hover {
  transform: translateX(10px);
  border-color: rgba(186, 121, 40, 0.4);
  background: rgba(255, 255, 255, 0.05);
}

.feature-icon {
  width: 42px;
  height: 42px;
  background: rgba(186, 121, 40, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f8dd73;
  flex-shrink: 0;
}

.feature-icon svg {
  width: 22px;
  height: 22px;
}

.feature-info h4 {
  color: #fff;
  margin-bottom: 0.35rem;
  font-size: inherit;
  font-weight: 600;
}

.feature-info p {
  color: #9ca3af;
  font-size: 0.85rem;
  line-height: 1.45;
  margin: 0;
}

.tech-visual-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 0;
}

.image-glass-card {
  position: relative;
  background: radial-gradient(circle at center, rgba(30, 30, 30, 0.4) 0%, transparent 70%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: clamp(260px, 42vh, 420px);
  max-height: 46vh;
}

.device-glow {
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  filter: blur(40px);
  z-index: 1;
}

.device-img {
  width: 100%;
  max-width: min(390px, 100%);
  z-index: 2;
  position: relative;
  filter: drop-shadow(0 20px 50px rgba(0, 0, 0, 0.3));
  transition: transform 0.3s ease;
  margin-top: clamp(0.5rem, 1.5vh, 1rem);
}

.device-img:hover {
  transform: scale(1.02);
}


@media (max-width: 1024px) {
  .tech-detail-block {
    min-height: auto;
    padding: 80px 0;
  }

  .tech-container {
    height: auto;
    grid-template-rows: auto;
    text-align: center;
    gap: 2rem;
  }

  .tech-main-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .tech-title {
    text-align: center;
  }
  
  .tech-description {
    text-align: center;
    max-width: 100%;
  }
  
  .feature-item {
    text-align: left;
  }
  
  .image-glass-card {
    min-height: 400px;
    max-height: none;
  }
}

.integrations-cards-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(0.65rem, 1.2vh, 0.95rem);
  padding: clamp(0.65rem, 1.2vh, 0.95rem);
  margin-bottom: clamp(1rem, 3vh, 2rem);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 1rem;
  background: rgba(0, 0, 0, 0.26);
  align-self: stretch;
  min-height: 0;
}

.integration-card {
  padding: clamp(0.4rem, 0.8vh, 0.6rem) clamp(0.75rem, 1.4vh, 1rem) clamp(1rem, 1.9vh, 1.25rem);
  border-radius: 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.05), transparent);
  display: flex;
  flex-direction: column;
  gap: clamp(0.25rem, 0.8vh, 0.45rem);
  transition: all 0.3s ease;
}

.integration-card:hover {
  transform: translateX(10px);
  border-color: rgba(186, 121, 40, 0.4);
}

.card-icon-wrapper {
  color: #f8dd73;
  margin-bottom: 0;
  flex-shrink: 0;
}

.card-icon-wrapper svg {
  width: clamp(18px, 2vh, 22px);
  height: clamp(18px, 2vh, 22px);
}

.card-title {
  color: #fff;
  font-size: 0.92rem;
  font-weight: 700;
  margin: 0;
}

.card-description {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.78rem;
  line-height: 1.35;
  margin: 0;
}

@media (max-width: 1024px) {
  .integrations-cards-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 640px) {
  .integrations-cards-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

/* Animations */
@keyframes pulse {
  0% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 0.5; transform: scale(1); }
}
</style>
