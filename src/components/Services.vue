<template>
  <section id="services" class="services-section py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="section-header text-center mb-12">
        <h2 class="section-title text-4xl md:text-5xl font-bold mb-6">
          What We Do
        </h2>
        <p class="section-subtitle text-lg text-gray-400 max-w-2xl mx-auto">
          We combine AI expertise with automation to transform how your business operates.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="services-grid">
        <!-- Service 1: AI Workflow Optimization -->
        <div class="service-card">
          <div class="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>
          <h3 class="service-title">AI Workflow Optimization</h3>
          <p class="service-description">
            We analyze your existing processes and deploy custom AI agents to eliminate bottlenecks,
            reduce manual work, and accelerate your operations.
          </p>
        </div>

        <!-- Service 2: Prompt Engineering -->
        <div class="service-card">
          <div class="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
          </div>
          <h3 class="service-title">Prompt Engineering</h3>
          <p class="service-description">
            We craft precision prompts that turn AI models into reliable business tools.
            Get consistent, high-quality outputs every time.
          </p>
        </div>

        <!-- Service 3: Audience Growth Systems -->
        <div class="service-card">
          <div class="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
            </svg>
          </div>
          <h3 class="service-title">Audience Growth Systems</h3>
          <p class="service-description">
            Automated content pipelines and distribution systems that build your audience
            while you focus on running your business.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Services component logic
</script>

<style scoped>
/* Section Header - centered */
.section-header {
  text-align: center;
}

.section-title {
  background: linear-gradient(135deg, #ff006e 0%, #8338ec 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  margin-left: auto;
  margin-right: auto;
}

/* Services Grid - 3 columns on desktop */
.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
}

/* Service Card */
.service-card {
  padding: 2.5rem 2rem;
  background: rgba(20, 20, 25, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 0, 110, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
              0 0 30px rgba(255, 0, 110, 0.1);
}

/* Service Icon */
.service-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 1.5rem;
  padding: 1rem;
  background: linear-gradient(135deg, rgba(255, 0, 110, 0.1), rgba(131, 56, 236, 0.1));
  border-radius: 12px;
  color: #ff006e;
}

.service-icon svg {
  width: 100%;
  height: 100%;
}

/* Service Title */
.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 1rem;
}

/* Service Description */
.service-description {
  font-size: 1rem;
  line-height: 1.7;
  color: #9ca3af;
}
</style>
