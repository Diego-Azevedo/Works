<template>
  <div id="tech-1" class="tech-detail-block">
    <div class="tech-container">
      
      <div class="tech-text-content">
        <div class="badge-ia">
          <span class="dot"></span>
          INTELIGÊNCIA ARTIFICIAL ATIVA
        </div>
        
        <h2 class="tech-title gradient-text">
          CFTV Inteligente <br />
          <span class="gradient-text">com IA Hikvision</span>
        </h2>

        <p class="tech-description">
          Segurança proativa com detecção precisa de humanos e veículos. 
          Monitore seu patrimônio com a visão computacional mais avançada do mercado.
        </p>

        <div class="tech-features-list">
          <div class="feature-item">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div class="feature-info">
              <h4>Prevenção de alarmes falsos</h4>
              <p>Algoritmos que distinguem humanos e veículos de animais ou sombras, reduzindo ruídos em 95%.</p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div class="feature-info">
              <h4>Monitoramento Inteligente 24/7</h4>
              <p>Vigilância constante sem fadiga humana, identificando comportamentos suspeitos instantaneamente.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="tech-visual-content">
        <div class="image-glass-card">
          <div class="camera-glow"></div>
          <div class="side-overlay-left"></div>
          <div class="side-overlay-right"></div>
          <img src="/src/assets/360cam.png" alt="Câmera Hikvision IA" class="camera-img" />
          
          <!-- <div class="floating-badge">
            <div class="badge-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"/></svg>
            </div>
          </div> -->
          
          <div class="recording-indicator">
            <div class="recording-dot"></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Estilos extraídos do design original para manter a consistência visual */
.tech-detail-block {
  padding: 80px 0;
  width: 100%;
}

.tech-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  align-items: stretch;
}

.badge-ia {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.5rem 1rem;
  background: rgba(186, 121, 40, 0.1);
  border: 1px solid rgba(186, 121, 40, 0.3);
  border-radius: 50px;
  color: #f8dd73;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 2rem;
}

.dot {
  width: 6px;
  height: 6px;
  background-color: #ff1e00;
  border-radius: 50%;
  box-shadow: 0 0 5px #f80000;
  animation: pulse 2s infinite;
}

.tech-title {
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #f8dd73;
}

.gradient-text {
  background: linear-gradient(90deg, #f8dd73, #ba7928);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tech-description {
  color: #9ca3af;
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 540px;
}

.feature-item {
  display: flex;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.feature-item:hover {
  transform: translateX(10px);
  border-color: rgba(186, 121, 40, 0.4);
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
  margin-bottom: 0.3rem; 
  font-size: inherit;
  font-weight: 600;
}
.feature-info p { 
  color: #888; 
  font-size: 0.9rem; 
}

.tech-visual-content {
  display: flex;
  align-items: stretch;
  height: 100%;
}

.image-glass-card {
  position: relative;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
}

.camera-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  min-width: 150%;
  min-height: 120%;
  background: 
    /* Gradiente elíptico extremamente largo horizontalmente */
    radial-gradient(
      ellipse 500% 100% at center,
      transparent 0%,
      transparent 20%,
      rgba(0, 0, 0, 0.05) 25%,
      rgba(0, 0, 0, 0.2) 30%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.8) 40%,
      rgba(0, 0, 0, 0.95) 45%,
      #000 50%,
      #000 100%
    ),
    /* Gradientes lineares muito mais agressivos nas laterais */
    linear-gradient(to right, 
      #000 0%,
      #000 10%,
      rgba(0, 0, 0, 0.98) 15%,
      rgba(0, 0, 0, 0.9) 20%,
      rgba(0, 0, 0, 0.7) 25%,
      rgba(0, 0, 0, 0.4) 30%,
      rgba(0, 0, 0, 0.1) 35%,
      transparent 40%,
      transparent 60%,
      rgba(0, 0, 0, 0.1) 65%,
      rgba(0, 0, 0, 0.4) 70%,
      rgba(0, 0, 0, 0.7) 75%,
      rgba(0, 0, 0, 0.9) 80%,
      rgba(0, 0, 0, 0.98) 85%,
      #000 90%,
      #000 100%
    );
  z-index: 1;
  pointer-events: none;
}

.side-overlay-left,
.side-overlay-right {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 30%;
  z-index: 1;
  pointer-events: none;
}

.side-overlay-left {
  left: 0;
  background: linear-gradient(to right, 
    #000 0%,
    rgba(0, 0, 0, 0.95) 20%,
    rgba(0, 0, 0, 0.7) 40%,
    rgba(0, 0, 0, 0.3) 60%,
    transparent 100%
  );
}

.side-overlay-right {
  right: 0;
  background: linear-gradient(to left, 
    #000 0%,
    rgba(0, 0, 0, 0.95) 20%,
    rgba(0, 0, 0, 0.7) 40%,
    rgba(0, 0, 0, 0.3) 60%,
    transparent 100%
  );
}

.camera-img {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 900px;
  object-fit: contain;
  transform: scale(1.0);
  z-index: 2;
  filter: drop-shadow(0 20px 50px rgba(0,0,0,0.9));
}

.floating-badge {
  position: absolute;
  bottom: 10%;
  right: 0;
  background: rgba(15, 15, 15, 0.85);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 3;
}

.recording-indicator {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% + 25px), calc(-50% + 80px));
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
}

.recording-dot {
  width: 8px;
  height: 8px;
  background-color: #ff0000;
  border-radius: 50%;
  opacity: 0.6;
  box-shadow: 0 0 8px rgba(255, 0, 0, 0.5), 0 0 15px rgba(255, 0, 0, 0.3);
  animation: recording-pulse 1.5s infinite;
}

@keyframes recording-pulse {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
    box-shadow: 0 0 8px rgba(255, 0, 0, 0.5), 0 0 15px rgba(255, 0, 0, 0.3);
  }
  50% {
    opacity: 0.2;
    transform: scale(0.9);
    box-shadow: 0 0 4px rgba(255, 0, 0, 0.3), 0 0 8px rgba(255, 0, 0, 0.2);
  }
}

@keyframes pulse {
  0% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 0.5; transform: scale(1); }
}

@media (max-width: 1024px) {
  .tech-detail-block {
    padding-top: 0;
    padding-bottom: 0px;
  }

  .tech-container { 
    grid-template-columns: 1fr; 
    text-align: center; 
  }
  
  .tech-title {
    text-align: center;
  }
  
  .tech-description {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  
  .feature-item { 
    text-align: left; 
  }
  
  .tech-visual-content { 
    order: -1; 
  }
  
  .recording-indicator {
    transform: translate(calc(-50% + 18px), calc(-50% + 50px));
  }
}
</style>