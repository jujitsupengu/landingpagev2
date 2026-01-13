<template>
  <section id="case-study" class="case-study-section">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="section-header reveal">
        <p class="section-label">Case Study</p>
        <h2 class="section-title">From Manual Chaos to Automated Growth</h2>
        <p class="section-subtitle">
          How we transformed a marketing agency's content operations
        </p>
      </div>

      <!-- Case Study Timeline -->
      <div class="case-study-timeline reveal">
        <!-- Before -->
        <div class="timeline-card before-card">
          <div class="card-label">Before</div>
          <h3 class="card-title">The Problem</h3>
          <p class="card-text">
            A growing marketing agency was drowning in manual tasks. Client onboarding took
            <strong>8+ hours per client</strong>. Content production required constant oversight.
            The team was burning out, and growth had stalled.
          </p>
          <ul class="pain-points">
            <li>8+ hours spent on each client onboarding</li>
            <li>Manual content scheduling across 12 platforms</li>
            <li>No standardized workflows or SOPs</li>
            <li>Team working nights and weekends</li>
          </ul>
        </div>

        <!-- Solution -->
        <div class="timeline-card solution-card">
          <div class="card-label">Solution</div>
          <h3 class="card-title">What We Built</h3>
          <p class="card-text">
            We designed and deployed a complete automation ecosystem using custom AI agents
            and n8n workflows. Every repetitive task was identified, optimized, and automated.
          </p>
          <ul class="solution-points">
            <li>AI-powered client intake system with smart questionnaires</li>
            <li>Automated content pipeline from ideation to publishing</li>
            <li>Custom agents for research, writing, and scheduling</li>
            <li>Real-time dashboards for client visibility</li>
          </ul>
        </div>

        <!-- After -->
        <div class="timeline-card after-card">
          <div class="card-label">After</div>
          <h3 class="card-title">The Results</h3>
          <p class="card-text">
            Within 30 days, the agency transformed their operations. The team got their
            weekends back, and the business was finally ready to scale.
          </p>
          <div class="results-grid">
            <div class="result-item">
              <span class="result-number">20 min</span>
              <span class="result-label">Client onboarding (was 8hrs)</span>
            </div>
            <div class="result-item">
              <span class="result-number">4x</span>
              <span class="result-label">Content output</span>
            </div>
            <div class="result-item">
              <span class="result-number">0</span>
              <span class="result-label">Weekend hours worked</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Case Study component logic
</script>

<style scoped>
.case-study-section {
  padding: 4rem 1rem;
  background: linear-gradient(180deg, transparent 0%, rgba(255, 0, 110, 0.02) 50%, transparent 100%);
}

@media (min-width: 480px) {
  .case-study-section {
    padding: 6rem 1.5rem;
  }
}

/* Section Label (component-specific) */
.section-label {
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #ff006e;
  margin-bottom: 1rem;
}

/* Timeline Layout - equal height cards */
.case-study-timeline {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: stretch;
}

@media (min-width: 1024px) {
  .case-study-timeline {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

/* Timeline Cards - equal heights via grid stretch */
.timeline-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: rgba(20, 20, 25, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
}

@media (min-width: 768px) {
  .timeline-card {
    padding: 2rem;
  }
  transition: all 0.3s ease;
}

.timeline-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 0, 110, 0.2);
}

.card-label {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.375rem 0.75rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.before-card .card-label {
  background: rgba(239, 68, 68, 0.15);
  color: #ef4444;
}

.solution-card .card-label {
  background: rgba(131, 56, 236, 0.15);
  color: #8338ec;
}

.after-card .card-label {
  background: rgba(34, 197, 94, 0.15);
  color: #22c55e;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 1rem;
}

.card-text {
  font-size: 1rem;
  line-height: 1.7;
  color: #9ca3af;
  margin-bottom: 1.5rem;
}

.card-text strong {
  color: #fff;
}

/* Pain Points & Solution Points */
.pain-points,
.solution-points {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pain-points li,
.solution-points li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  font-size: 0.9375rem;
  color: #9ca3af;
  line-height: 1.5;
}

.pain-points li::before {
  content: '×';
  position: absolute;
  left: 0;
  color: #ef4444;
  font-weight: 700;
}

.solution-points li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #8338ec;
  font-weight: 700;
}

/* Results Grid - compact horizontal layout */
.results-grid {
  display: flex;
  gap: 0.75rem;
  margin-top: auto;
}

.result-item {
  flex: 1;
  text-align: center;
  padding: 0.75rem 0.5rem;
  background: rgba(34, 197, 94, 0.05);
  border-radius: 6px;
}

.result-number {
  display: block;
  font-size: 1.25rem;
  font-weight: 700;
  color: #22c55e;
  line-height: 1;
  margin-bottom: 0.25rem;
}

.result-label {
  font-size: 0.625rem;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  line-height: 1.3;
}
</style>
