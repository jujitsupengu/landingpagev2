<template>
  <section class="hero-section w-full min-h-screen flex flex-col items-center justify-center px-6 py-24">
    <div class="max-w-5xl mx-auto">
      <!-- Hero Content Container - constrained width, centered -->
      <div class="hero-content">
        <!-- Main Headline -->
        <h1 class="hero-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
          AI Workflow Optimization
          <span class="block mt-2">Built for Results</span>
        </h1>

        <!-- Subheadline -->
        <p class="hero-subtext text-lg md:text-xl text-gray-400 mb-12 leading-relaxed font-light">
          We reduce operational inefficiencies through custom AI agents, prompt engineering,
          and n8n automation. Cut onboarding time, automate content production, and scale your business.
        </p>

        <!-- CTA Button -->
        <button class="cta-button">
          See How It Works
        </button>
      </div>

      <!-- Quick Stats -->
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
// Hero component logic
</script>

<style scoped>
/* Hero Content Container - centered with constrained width */
.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.hero-headline {
  background: linear-gradient(135deg, #ff006e 0%, #8338ec 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtext {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* CTA Button - Clean SaaS style */
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

/* Stats Container - Horizontal 3-column layout */
.stats-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 6rem;
  padding-top: 4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

@media (min-width: 768px) {
  .stats-container {
    flex-direction: row;
    justify-content: center;
    gap: 5rem;
  }
}

/* Stat Items - Clean and minimal */
.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.75rem;
  background: linear-gradient(135deg, #ff006e 0%, #8338ec 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (min-width: 768px) {
  .stat-number {
    font-size: 5rem;
  }
}

.stat-label {
  font-size: 0.875rem;
  color: #9ca3af;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
</style>
