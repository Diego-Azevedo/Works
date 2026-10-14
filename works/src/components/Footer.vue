<template>
  <footer class="site-footer">
    <div class="footer-content">
      <span>&copy; {{ currentYear }} Works Sistemas Inteligentes</span>

      <span class="site-credit">
        <a
          href="https://cosmotools.online/pt/"
          target="_blank"
          rel="noopener"
          aria-label="Site desenvolvido com CosmoTools (abre em uma nova aba)"
        >Site desenvolvido</a>
        por
        <a
          href="https://www.linkedin.com/in/diego-azv/"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn de Diego Azevedo (abre em uma nova aba)"
        >Diego Azevedo</a>
      </span>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.site-footer {
  padding: 1.25rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: #030303;
  color: rgba(255, 255, 255, 0.42);
}

.footer-content {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.72rem;
  letter-spacing: 0.03em;
}

.footer-content a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-content a:hover,
.footer-content a:focus-visible {
  color: rgba(255, 255, 255, 0.68);
}

.site-credit {
  display: inline-flex;
  gap: 0.25em;
}

@media (max-width: 600px) {
  .site-footer {
    padding: 1.25rem 1.5rem;
  }

  .footer-content {
    flex-direction: column;
    gap: 0.4rem;
    text-align: center;
  }
}
</style>
