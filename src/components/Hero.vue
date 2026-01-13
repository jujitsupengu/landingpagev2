<template>
  <section class="hero-section">
    <!-- Main Content Region - vertically centered -->
    <div class="hero-main">
      <div class="hero-content">
        <!-- Company Name - Primary brand element -->
        <h1 class="company-name">Posterity Labs</h1>

        <!-- Tagline -->
        <p class="hero-tagline">
          AI Workflow Optimization
          <span class="block">Built for Results</span>
        </p>

        <!-- Subheadline -->
        <p class="hero-subtext">
          We reduce operational inefficiencies through custom AI agents, prompt engineering,
          and n8n automation. Cut onboarding time, automate content production, and scale your business.
        </p>

        <!-- CTA Button -->
        <button class="cta-button" @click="scrollToServices">
          See How It Works
        </button>
      </div>
    </div>

    <!-- Stats Region - anchored to bottom -->
    <div class="hero-stats">
      <div class="stats-container">
        <div class="stat-item">
          <div class="stat-number">80%</div>
          <div class="stat-label">Time Saved on Onboarding</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">24/7</div>
          <div class="stat-label">Automated Content Production</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">10x</div>
          <div class="stat-label">Audience Growth Velocity</div>
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
/* Hero Section - CSS Grid with two regions */
.hero-section {
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
  width: 100%;
  padding: 2rem 1.5rem;
}

/* Main Content Region - centers its content */
.hero-main {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  max-width: 900px;
  text-align: center;
}

/* Company Name - Dominant brand element */
.company-name {
  font-size: clamp(3.5rem, 10vw, 7rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #ff006e 0%, #8338ec 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Tagline - Secondary to company name */
.hero-tagline {
  font-size: clamp(1.25rem, 3vw, 2rem);
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.3;
}

.hero-tagline span {
  display: block;
}

/* Subtext */
.hero-subtext {
  font-size: 1.125rem;
  color: #9ca3af;
  max-width: 600px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
  font-weight: 400;
}

/* CTA Button */
.cta-button {
  display: inline-block;
  padding: 16px 40px;
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #ff006e 0%, #8338ec 100%);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(255, 0, 110, 0.3);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(255, 0, 110, 0.5),
              0 4px 20px rgba(131, 56, 236, 0.3);
}

/* Stats Region */
.hero-stats {
  padding: 3rem 0 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.stats-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

@media (min-width: 768px) {
  .stats-container {
    flex-direction: row;
    justify-content: center;
    gap: 5rem;
  }
}

/* Stat Items */
.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #ff006e 0%, #8338ec 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (min-width: 768px) {
  .stat-number {
    font-size: 4rem;
  }
}

.stat-label {
  font-size: 0.75rem;
  color: #9ca3af;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
</style>
