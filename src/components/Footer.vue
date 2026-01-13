<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <!-- Brand -->
        <div class="footer-brand">
          <span class="brand-name">Posterity Labs</span>
          <p class="brand-tagline">AI Workflow Optimization</p>
        </div>

        <!-- Links -->
        <div class="footer-links">
          <a href="mailto:hello@posteritylabs.com" class="footer-link">Contact</a>
          <a href="https://twitter.com" target="_blank" rel="noopener" class="footer-link">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" class="footer-link">LinkedIn</a>
        </div>
      </div>

      <!-- Copyright -->
      <div class="footer-bottom">
        <p class="copyright">&copy; {{ currentYear }} Posterity Labs. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  padding: 3rem 1.5rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

@media (min-width: 640px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

/* Brand */
.footer-brand {
  text-align: center;
}

@media (min-width: 640px) {
  .footer-brand {
    text-align: left;
  }
}

.brand-name {
  font-size: 1.25rem;
  font-weight: 600;
  background: linear-gradient(135deg, #ff006e 0%, #8338ec 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-tagline {
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.25rem;
}

/* Links */
.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-link {
  font-size: 0.875rem;
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #ff006e;
}

/* Bottom */
.footer-bottom {
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;
}

.copyright {
  font-size: 0.75rem;
  color: #6b7280;
}
</style>
