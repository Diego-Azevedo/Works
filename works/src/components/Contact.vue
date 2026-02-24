<template>
  <section id="contato" class="contact-section">
    <div class="content-container">
      
      <div class="contact-grid">
        <!-- Left Section: Information -->
        <div class="info-section">
          <h2 class="section-title">
            Entre em contato
          </h2>
          
          <p class="section-description">
            Transforme a segurança do seu patrimônio com tecnologia de ponta. Nossa equipe de especialistas está pronta para projetar sua solução inteligente e personalizada.
          </p>

          <!-- Social Cards -->
          <div class="social-cards">
            <div class="social-card" @click="openWhatsApp">
              <div class="social-icon">
                <component :is="IconWhatsApp" />
              </div>
              <div class="social-info">
                <span class="social-title">WhatsApp</span>
                <span class="social-desc">Atendimento imediato via chat</span>
              </div>
            </div>

            <!-- <div class="social-card">
              <div class="social-icon">
                <component :is="IconInstagram" />
              </div>
              <div class="social-info">
                <span class="social-title">Instagram</span>
                <span class="social-desc">Acompanhe nossas inovações</span>
              </div>
            </div> -->
          </div>

          <!-- Contact Details -->
          <div class="contact-details">
            <div class="contact-item">
              <div class="contact-icon">
                <component :is="IconEmail" />
              </div>
              <span>workssistemasinteligentes@gmail.com</span>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <component :is="IconPhone" />
              </div>
              <span>+55 (51) 99867-5316</span>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <component :is="IconLocation" />
              </div>
              <span>Rua dois norte, 251 Apt 201 - Teutônia, RS</span>
            </div>
          </div>
        </div>

        <!-- Right Section: Contact Form -->
        <div class="form-section">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label for="name">NOME COMPLETO</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  placeholder="Ex: João Silva"
                  required
                />
              </div>

              <div class="form-group">
                <label for="company">EMPRESA</label>
                <input
                  id="company"
                  v-model="form.company"
                  type="text"
                  placeholder="Nome da sua empresa"
                  required
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="email">E-MAIL CORPORATIVO</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="joao@empresa.com"
                  required
                />
              </div>

              <div class="form-group">
                <label for="phone">TELEFONE</label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <label for="message">SUA MENSAGEM</label>
              <textarea
                id="message"
                v-model="form.message"
                placeholder="Como podemos ajudar no seu projeto?"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" class="submit-button">
              SOLICITAR ORÇAMENTO
              <span class="arrow-icon">→</span>
            </button>

            <p class="privacy-text">
              GARANTIMOS A PRIVACIDADE DOS SEUS DADOS CONFORME A LGPD.
            </p>
          </form>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { h } from 'vue';

// Icons
const IconWhatsApp = () => h('svg', { 
  viewBox: '0 0 24 24', 
  fill: 'currentColor',
  width: '24',
  height: '24'
}, [
  h('path', { 
    d: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' 
  })
]);

const IconInstagram = () => h('svg', { 
  viewBox: '0 0 24 24', 
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  width: '24',
  height: '24'
}, [
  h('rect', { x: 2, y: 2, width: 20, height: 20, rx: 5, ry: 5 }),
  h('path', { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' }),
  h('line', { x1: 17.5, y1: 6.5, x2: 17.51, y2: 6.5 })
]);

const IconEmail = () => h('svg', { 
  viewBox: '0 0 24 24', 
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  width: '20',
  height: '20'
}, [
  h('path', { d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' }),
  h('polyline', { points: '22,6 12,13 2,6' })
]);

const IconPhone = () => h('svg', { 
  viewBox: '0 0 24 24', 
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  width: '20',
  height: '20'
}, [
  h('path', { d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' })
]);

const IconLocation = () => h('svg', { 
  viewBox: '0 0 24 24', 
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  width: '20',
  height: '20'
}, [
  h('path', { d: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' }),
  h('circle', { cx: 12, cy: 10, r: 3 })
]);

// Form data
const form = ref({
  name: '',
  company: '',
  email: '',
  phone: '',
  message: ''
});

const handleSubmit = () => {
  console.log('Form submitted:', form.value);
  // Add your form submission logic here
};

const openWhatsApp = () => {
  // Número do WhatsApp (removendo espaços, parênteses e hífens)
  const phoneNumber = '5551998675316';
  
  // Mensagem pré-formatada
  const message = encodeURIComponent(
    'Olá! Gostaria de solicitar um orçamento para soluções de segurança.'
  );
  
  // URL do WhatsApp Web/App
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  
  // Abre em nova aba
  window.open(whatsappUrl, '_blank');
};
</script>

<style scoped>
.contact-section {
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 60px 2rem;
  width: 100%;
}

.content-container {
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

/* =====================
   LEFT SECTION: INFO
   ===================== */
.info-section {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.1;
  font-weight: 800;
  background: linear-gradient(90deg, #f8dd73, #ba7928);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.25rem;
}

.section-description {
  color: #9ca3af; /* Mesma cor cinza usada em subtítulos de outras seções */
  font-size: 1.05rem;
  line-height: 1.8;
  max-width: 500px;
  margin-bottom: 1rem;
}

/* Social Cards */
.social-cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.social-card {
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.social-card:hover {
  border-color: rgba(186, 121, 40, 0.4);
  background: rgba(20, 20, 20, 0.95);
}

.social-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f8dd73;
  flex-shrink: 0;
}

.social-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.social-title {
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
}

.social-desc {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
}

/* Contact Details */
.contact-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #fff;
  font-size: 0.95rem;
  white-space: nowrap; /* ícone e texto permanecem na mesma linha */
}

.contact-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f8dd73;
  flex-shrink: 0;
}

/* =====================
   RIGHT SECTION: FORM
   ===================== */
.form-section {
  width: 100%;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 2.25rem;
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.06),
    rgba(0, 0, 0, 0.85)
  );
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(18px);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #fff;
  text-transform: uppercase;
}

.form-group input,
.form-group textarea {
  background: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.875rem 1rem;
  font-size: 0.95rem;
  color: #000;
  font-family: inherit;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(186, 121, 40, 0.3);
}

.form-group textarea {
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: #fff;
  resize: vertical;
  min-height: 120px;
}

.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.submit-button {
  background: linear-gradient(
    135deg,
    #ba7928,
    #f8dd73
  );
  color: #111;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  padding: 0.8rem 2.5rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-transform: uppercase;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin-top: 0.5rem;
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(186, 121, 40, 0.45);
}

.arrow-icon {
  font-size: 1.25rem;
  color: #111;
}

.privacy-text {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-top: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* =====================
   RESPONSIVE
   ===================== */
@media (max-width: 1024px) {
  .contact-section {
    padding: 50px 2rem 80px;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .info-section {
    align-items: center;
    text-align: center;
  }

  .section-title {
    text-align: center;
  }

  .section-description {
    text-align: center;
    max-width: 100%;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 600px) {
  .contact-section {
    padding: 40px 1.5rem 60px;
  }

  .info-section {
    align-items: center;
    text-align: center;
  }

  .section-title {
    font-size: 2rem;
    text-align: center;
  }

  .section-description {
    text-align: center;
    max-width: 100%;
  }

  .social-card {
    padding: 1.25rem;
  }

  .contact-form {
    gap: 1.25rem;
    padding: 1.5rem 1.25rem;
  }

  .contact-details {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>
