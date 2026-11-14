/* ================= ANIMATIONS & INTERACTIVE ENGINE ================= */

document.addEventListener("DOMContentLoaded", () => {
  initScrollReveal();
  initScrollProgressAndBackToTop();
  initNavScrollSpy();
  initNumberCounters();
});

/* ================= SCROLL REVEAL OBSERVER ================= */
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal, .reveal-scale, .reveal-left, .reveal-right");
  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  reveals.forEach((el) => observer.observe(el));
}

/* ================= NUMBER COUNTER ANIMATION ================= */
function initNumberCounters() {
  const counters = document.querySelectorAll("[data-counter-target]");
  if (!counters.length) return;

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.getAttribute("data-counter-target"));
          const prefix = el.getAttribute("data-counter-prefix") || "";
          const suffix = el.getAttribute("data-counter-suffix") || "";
          const duration = 1800;
          const startTime = performance.now();

          function updateCount(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeProgress * target);

            el.textContent = `${prefix}${currentVal}${suffix}`;

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              el.textContent = `${prefix}${target}${suffix}`;
            }
          }

          requestAnimationFrame(updateCount);
          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.3 }
  );

  counters.forEach((el) => counterObserver.observe(el));
}

/* ================= SCROLL PROGRESS & BACK TO TOP ================= */
function initScrollProgressAndBackToTop() {
  const progressBar = document.querySelector(".scroll-progress-bar");
  const backToTopBtn = document.querySelector(".back-to-top");
  const progressCircle = document.querySelector(".back-to-top circle");
  const totalLength = 157; // 2 * PI * r (r=25)

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(scrollTop / docHeight, 1);

    // Update horizontal top progress bar
    if (progressBar) {
      progressBar.style.width = `${progress * 100}%`;
    }

    // Update circular ring on back to top button
    if (progressCircle) {
      const offset = totalLength - progress * totalLength;
      progressCircle.style.strokeDashoffset = offset;
    }

    // Toggle button visibility
    if (backToTopBtn) {
      if (scrollTop > 350) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

/* ================= NAVIGATION SCROLL SPY ================= */
function initNavScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-drawer-link");

  if (!sections.length || !navLinks.length) return;

  window.addEventListener("scroll", () => {
    let currentId = "";
    const scrollPos = window.scrollY + 140;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  });
}
