import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  let observer = null

  const initScrollReveal = () => {
    const elements = document.querySelectorAll('.reveal')

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            // Optional: stop observing after reveal
            // observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    elements.forEach((el) => observer.observe(el))
  }

  onMounted(() => {
    initScrollReveal()
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
}
