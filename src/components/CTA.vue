<template>
  <section id="cta" class="cta-section">
    <div class="cta-container">
      <div class="cta-content reveal">
        <h2 class="cta-title">Ready to Automate Your Growth?</h2>
        <p class="cta-text">
          Stop losing time to manual processes. Let's build the systems that scale your business.
        </p>
        <div class="cta-buttons">
          <a href="mailto:hello@posteritylabs.com" class="cta-button-primary">
            Get in Touch
          </a>
          <button class="cta-button-secondary" @click="scrollToServices">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollToServices = () => {
  const servicesSection = document.getElementById('services')
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.cta-section {
  padding: 4rem 1rem;
  background: linear-gradient(180deg, transparent 0%, rgba(131, 56, 236, 0.05) 50%, transparent 100%);
}

@media (min-width: 480px) {
  .cta-section {
    padding: 6rem 1.5rem;
  }
}

.cta-container {
  max-width: 800px;
  margin: 0 auto;
}

.cta-content {
  text-align: center;
}

.cta-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ff006e 0%, #8338ec 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cta-text {
  font-size: 1.125rem;
  color: #9ca3af;
  margin-bottom: 2.5rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: stretch;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
}

@media (min-width: 480px) {
  .cta-buttons {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: none;
    width: auto;
  }
}

.cta-button-primary {
  display: inline-block;
  padding: 16px 40px;
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #ff006e 0%, #8338ec 100%);
  border: none;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(255, 0, 110, 0.3);
}

.cta-button-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(255, 0, 110, 0.5),
              0 4px 20px rgba(131, 56, 236, 0.3);
}

.cta-button-secondary {
  display: inline-block;
  padding: 16px 40px;
  font-size: 1.125rem;
  font-weight: 600;
  color: #e0e0e0;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button-secondary:hover {
  border-color: rgba(255, 0, 110, 0.5);
  color: #fff;
}
</style>
