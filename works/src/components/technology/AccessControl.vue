<template>
  <div id="tech-2" class="tech-detail-block">
    <div class="tech-container">
      
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
          Segurança sem fricção. Implementamos ecossistemas de acesso que combinam algoritmos de deep learning com a conveniência do fluxo contínuo.
        </p>

        <div class="tech-features-list">
          <div class="feature-item">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div class="feature-info">
              <h4>Integração Operacional</h4>
              <p>Sincronização com bafômetros de precisão, bloqueio automático instantâneo e controle de perímetros (portões e cancelas).</p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div class="feature-info">
              <h4>Gestão em Nuvem & Auditoria</h4>
              <p>Dashboards em tempo real, gestão de permissões por níveis hierárquicos e relatórios completos de conformidade.</p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <div class="feature-info">
              <h4>Versatilidade de Credenciais</h4>
              <p>Convergência total entre QR Code dinâmico, biometria, senha e reconhecimento de íris para áreas críticas.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="tech-visual-content">
        <div class="image-glass-card">
          <div class="device-glow"></div>
          <img :src="biometriaFacilImg" alt="Terminal Hikvision MinMoe" class="device-img" />
        </div>
      </div>

    </div>

    <!-- Seção Integrações e Recursos Avançados -->
    <div class="advanced-integrations-section">
      <div class="integrations-container">
        <h2 class="integrations-title">Integrações e Recursos Avançados</h2>
        <p class="integrations-description">
          Sistemas modulares projetados para se adaptar aos protocolos de segurança mais exigentes do mundo corporativo e industrial.
        </p>

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
  </div>
</template>

<script setup>
import biometriaFacilImg from '@/assets/segments/biometriaFacil.png';
</script>

<style scoped>
/* Estilos consistentes com Cftv.vue */
.tech-detail-block {
  padding: 0 0;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.tech-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  align-items: center;
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
  margin-bottom: 2rem;
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
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 1.5rem;
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
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 540px;
}

.tech-features-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.feature-item {
  display: flex;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  padding: 1.5rem;
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
  width: 48px;
  height: 48px;
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
  margin-bottom: 0.5rem;
  font-size: inherit;
  font-weight: 600;
}

.feature-info p {
  color: #9ca3af;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
}

.image-glass-card {
  position: relative;
  background: radial-gradient(circle at center, rgba(30, 30, 30, 0.4) 0%, transparent 70%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
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
  max-width: 500px;
  z-index: 2;
  position: relative;
  filter: drop-shadow(0 20px 50px rgba(0, 0, 0, 0.3));
  transition: transform 0.3s ease;
  margin-top: 3rem;
}

.device-img:hover {
  transform: scale(1.02);
}


@media (max-width: 1024px) {
  .tech-detail-block {
    padding-top: 0;
    padding-bottom: 80px;
  }

  .tech-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
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
  
  .tech-visual-content {
    order: -1;
  }
  
  .image-glass-card {
    min-height: 400px;
  }
}

/* Seção Integrações e Recursos Avançados */
.advanced-integrations-section {
  padding: 20px 0;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(0, 0, 0, 0.2);
  margin-top: 3rem;
}

.integrations-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.integrations-title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  line-height: 1.2;
  font-weight: 800;
  text-align: center;
  color: #fff;
  margin-bottom: 1.5rem;
}

.integrations-description {
  color: #9ca3af;
  font-size: 1.125rem;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 1024px) {
  .integrations-title {
    text-align: left;
  }
  
  .integrations-description {
    text-align: left;
    margin-left: 0;
    margin-right: 0;
  }
}

.integrations-cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.integration-card {
  padding: 1.5rem;
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.05), transparent);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: all 0.3s ease;
}

.integration-card:hover {
  transform: translateX(10px);
  border-color: rgba(186, 121, 40, 0.4);
}

.card-icon-wrapper {
  color: #f8dd73;
  margin-bottom: 0.5rem;
  flex-shrink: 0;
}

.card-icon-wrapper svg {
  width: 22px;
  height: 22px;
}

.card-title {
  color: #fff;
  font-size: inherit;
  font-weight: 700;
  margin: 0;
}

.card-description {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.9rem;
  line-height: 1.5;
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

@media (max-width: 1024px) {
  .advanced-integrations-section {
    padding-top: 0;
    padding-bottom: 20px;
  }
}

/* Animations */
@keyframes pulse {
  0% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 0.5; transform: scale(1); }
}
</style>
