/* ================= MAIN APPLICATION SCRIPT ================= */

// Initialize EmailJS
(function () {
  if (window.emailjs) {
    emailjs.init({
      publicKey: "_92623ObgfDRz2wEd",
    });
  }
})();

// Project Showcase Dataset
const projectData = [
  {
    id: "my-love-fashion",
    category: "business",
    categoryName: "Business & Fashion",
    title: "My Love Fashion (MLF)",
    description: "A boutique website for Korean-inspired western apparel, featuring styles such as dresses, corsets, crop tops, and denim at its Anna Nagar, Chennai location.",
    image: "assets/images/projects-img/my-love-fashion-preview.png",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "SEO"],
    features: [
      "Korean-inspired western apparel",
      "Dresses, corsets, crop tops, and denim",
      "Boutique located in Anna Nagar, Chennai"
    ],
    live: "https://hilarious-lamington-d35e36.netlify.app/",
    github: "https://github.com/vishnukasi/FashionWear"
  },
  {
    id: "vykraweb",
    category: "portfolio",
    categoryName: "Portfolio & Studio",
    title: "VYKRA Web Studio Portfolio",
    description: "A modern agency portfolio featuring a dynamic pricing calculator, interactive bento showcase, quotation PDF generation, and automated inquiry workflow.",
    image: "assets/images/projects-img/www.vykraweb.in_ (1).png",
    tech: ["HTML5", "Modern CSS", "JavaScript ES6+", "EmailJS", "jsPDF"],
    features: [
      "Interactive Instant Website Cost Estimator",
      "Automated PDF Quotation Generator",
      "Direct WhatsApp Business API Integration",
      "Responsive, accessible layouts",
      "Animated project filtering and detail modals"
    ],
    live: "https://www.vykraweb.in/",
    github: "https://github.com/vishnukasi"
  },
  {
    id: "salon",
    category: "beauty",
    categoryName: "Luxury & Wellness",
    title: "Luxury Salon & Spa Website",
    description: "An elegant, visually rich web experience for a premium beauty salon and wellness center, featuring service catalogues, treatment menus, and online reservation capture.",
    image: "assets/images/projects-img/salon&spa.png",
    tech: ["HTML5", "CSS Grid & Flexbox", "JavaScript", "UX Design"],
    features: [
      "Luxury Aesthetic with Soft Glassmorphism",
      "Interactive Services & Treatment Pricing List",
      "Direct Appointment Booking Call-to-Action",
      "Customer Review & Testimonial Sliders",
      "Mobile-First Touch Interactions"
    ],
    live: "https://vishnukasi.github.io/salon-spa/",
    github: "https://github.com/vishnukasi/salon-spa"
  },
  {
    id: "restaurant",
    category: "landing",
    categoryName: "Food & Hospitality",
    title: "Foodies Restaurant Landing Page",
    description: "A vibrant, mouth-watering restaurant landing page with interactive food menu tabs, table reservation form, location maps, and chef specials presentation.",
    image: "assets/images/projects-img/restaurent.png",
    tech: ["HTML5", "CSS3", "JavaScript", "Animation"],
    features: [
      "Interactive Categorized Dining Menu",
      "Online Table Reservation System",
      "Chef Specials Highlight Cards",
      "Google Maps Location Integration",
      "Fast Visual Asset Optimization"
    ],
    live: "https://vishnukasi.github.io/Foodies-Restaurant/",
    github: "https://github.com/vishnukasi/Foodies-Restaurant"
  },
  {
    id: "interiors",
    category: "interior",
    categoryName: "Architecture & Design",
    title: "Chennai Interiors Studio",
    description: "A sleek, minimalist digital portfolio for an interior design and architecture firm, highlighting completed residential and commercial projects with modern aesthetics.",
    image: "assets/images/projects-img/Screenshot_6-10-2026_12146_chennai-interiors.higgsfield.app.jpeg",
    tech: ["HTML5", "CSS3", "JavaScript", "Node.js"],
    features: [
      "Full-Width High-Resolution Project Gallery",
      "Before & After Renovation Highlights",
      "Consultation Booking & Estimate Calculator",
      "Minimalist Dark Architectural Typography",
      "SEO Structured Data for Local Chennai Business"
    ],
    live: "https://chennai-interiors.higgsfield.app/",
    github: "https://github.com/vishnukasi"
  },
  {
    id: "sensoria-spa",
    category: "beauty",
    categoryName: "Beauty & Wellness",
    title: "Sensoria Spa & Salon",
    description: "A polished digital experience for a women-only spa and beauty studio in Arumbakkam, Chennai, with clear service discovery and a direct appointment journey.",
    image: "assets/images/projects-img/sensoria-preview.jpg",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Booking"],
    features: [
      "Women-only luxury spa and salon showcase",
      "Service discovery for beauty and wellness treatments",
      "Appointment booking calls to action",
      "Responsive experience for mobile visitors"
    ],
    live: "https://cerulean-paprenjak-44f2a8.netlify.app/",
    github: "https://github.com/vishnukasi"
  },
  {
    id: "serenity-spa",
    category: "beauty",
    categoryName: "Beauty & Wellness",
    title: "Serenity — Luxury Salon & Spa",
    description: "An editorial, boutique-inspired salon and spa website featuring signature treatments, immersive imagery, and a streamlined appointment experience.",
    image: "assets/images/projects-img/serenity-preview.png",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Booking"],
    features: [
      "Luxury salon and spa brand presentation",
      "Signature treatments and experiences",
      "Immersive editorial imagery",
      "Mobile-friendly appointment journey"
    ],
    live: "https://inquisitive-florentine-452604.netlify.app/",
    github: "https://github.com/vishnukasi"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initHeaderScroll();
  initMobileDrawer();
  initProjectFilters();
  initProjectModal();
  initFaqAccordion();
  initContactForm();
  updateFooterYear();
});

/* ================= 1. PAGE LOADER ================= */
function initLoader() {
  const loader = document.querySelector(".loader");
  if (!loader) return;

  function hideLoader() {
    loader.classList.add("hide");
    setTimeout(() => {
      loader.remove();
    }, 600);
  }

  // Hide on window load, or after 1.5s fallback
  window.addEventListener("load", () => {
    setTimeout(hideLoader, 600);
  });

  setTimeout(hideLoader, 1800);
}

/* ================= 2. HEADER SCROLL EFFECT ================= */
function initHeaderScroll() {
  const header = document.querySelector(".header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 30);
  });
}

/* ================= 3. MOBILE MENU DRAWER ================= */
function initMobileDrawer() {
  const toggleBtn = document.querySelector(".menu-toggle");
  const drawer = document.querySelector(".mobile-drawer");
  const drawerLinks = document.querySelectorAll(".mobile-drawer-link, .mobile-drawer-cta");

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = drawer.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", isOpen);
    toggleBtn.innerHTML = isOpen
      ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`;
  });

  // Close when clicking any nav link
  drawerLinks.forEach((link) => {
    link.addEventListener("click", () => {
      drawer.classList.remove("open");
      toggleBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`;
    });
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (drawer.classList.contains("open") && !drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      drawer.classList.remove("open");
      toggleBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`;
    }
  });
}

/* ================= 4. PROJECT FILTER TABS ================= */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-item-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.classList.remove("hidden");
          card.style.opacity = "0";
          card.style.transform = "translateY(20px)";
          setTimeout(() => {
            card.style.transition = "opacity 0.4s ease, transform 0.4s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 50);
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
}

/* ================= 5. PROJECT DETAILS MODAL ================= */
function initProjectModal() {
  const modal = document.getElementById("projectModal");
  if (!modal) return;

  const closeBtn = modal.querySelector(".modal-close-btn");
  const modalImg = document.getElementById("modalImage");
  const modalCategory = document.getElementById("modalCategory");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDescription");
  const modalTech = document.getElementById("modalTech");
  const modalFeatures = document.getElementById("modalFeatures");
  const liveBtn = document.getElementById("modalLiveBtn");
  const githubBtn = document.getElementById("modalGithubBtn");

  // Open buttons
  document.querySelectorAll("[data-project-index]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const index = parseInt(btn.getAttribute("data-project-index"), 10);
      const project = projectData[index];
      if (!project) return;

      modalImg.src = project.image;
      modalImg.alt = project.title;
      modalCategory.textContent = project.categoryName;
      modalTitle.textContent = project.title;
      modalDesc.textContent = project.description;

      // Tech Badges
      modalTech.innerHTML = project.tech
        .map((t) => `<span class="tech-badge">${t}</span>`)
        .join("");

      // Key Deliverables
      modalFeatures.innerHTML = project.features
        .map((f) => `<li>${f}</li>`)
        .join("");

      // Buttons
      liveBtn.href = project.live;
      githubBtn.href = project.github;

      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

/* ================= 6. FAQ ACCORDION ================= */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question-btn");
    questionBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all others
      faqItems.forEach((other) => other.classList.remove("active"));

      // Toggle clicked
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

/* ================= 7. CONTACT FORM & EMAILJS ================= */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const directWhatsAppBtn = document.getElementById("directWhatsAppBtn");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Sending inquiry...</span>`;

    const clientData = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      company: document.getElementById("company") ? document.getElementById("company").value.trim() : "",
      website_type: document.getElementById("summaryType") ? document.getElementById("summaryType").textContent : "Website",
      pages: document.getElementById("summaryPages") ? document.getElementById("summaryPages").textContent : "Standard",
      features: document.getElementById("summaryFeatures") ? document.getElementById("summaryFeatures").innerText.replace(/\n/g, ", ") : "",
      price: document.getElementById("summaryPrice") ? document.getElementById("summaryPrice").textContent : "₹3,000",
      timeline: document.getElementById("summaryTimeline") ? document.getElementById("summaryTimeline").textContent : "1–2 Weeks",
      message: document.getElementById("message").value.trim()
    };

    window.latestClientInquiry = clientData;

    // Send via EmailJS if available
    if (window.emailjs) {
      emailjs
        .send("service_n88arid", "template_je9l4lj", clientData)
        .then(() => {
          showToast("Inquiry sent successfully! Vishnu will reply within 24 hours 🚀");
          showSuccessModal(clientData);
          form.reset();
        })
        .catch((err) => {
          console.warn("EmailJS note:", err);
          showToast("Inquiry received! Click below to send a copy to WhatsApp directly.");
          showSuccessModal(clientData);
        })
        .finally(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        });
    } else {
      showSuccessModal(clientData);
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });

  // Direct WhatsApp from contact form
  if (directWhatsAppBtn) {
    directWhatsAppBtn.addEventListener("click", () => {
      const name = document.getElementById("name").value.trim() || "Client";
      const message = document.getElementById("message").value.trim() || "I would like to discuss a new website project.";
      const waMsg = `Hi Vishnu! My name is ${name}. ${message}`;
      window.open(`https://wa.me/917904753462?text=${encodeURIComponent(waMsg)}`, "_blank");
    });
  }
}

function showSuccessModal(data) {
  const successModal = document.getElementById("successModal");
  if (!successModal) return;

  const clientNameDisplay = document.getElementById("successClientName");
  if (clientNameDisplay && data.name) {
    clientNameDisplay.textContent = `Thank you, ${data.name}!`;
  }

  successModal.classList.add("active");

  const closeBtn = successModal.querySelector(".modal-close-btn");
  const dismissBtn = document.getElementById("dismissSuccessBtn");
  const waBtn = document.getElementById("successWhatsAppBtn");

  function close() {
    successModal.classList.remove("active");
  }

  if (closeBtn) closeBtn.onclick = close;
  if (dismissBtn) dismissBtn.onclick = close;

  if (waBtn) {
    waBtn.onclick = () => {
      const waText = `🚀 *New Project Inquiry - VYKRA Web Studio*
*Client Name:* ${data.name}
*Email:* ${data.email}
*Phone:* ${data.phone}
*Company:* ${data.company || "N/A"}
*Package:* ${data.website_type} (${data.pages})
*Estimated Price:* ${data.price}
*Requirements:* ${data.message || "Consultation requested."}`;

      window.open(`https://wa.me/917904753462?text=${encodeURIComponent(waText)}`, "_blank");
      close();
    };
  }
}

/* ================= 8. TOAST NOTIFICATION SYSTEM ================= */
function showToast(message) {
  // Remove existing toast if present
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
    <span>${message}</span>
  `;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

window.showToast = showToast;

/* ================= 9. DYNAMIC FOOTER YEAR ================= */
function updateFooterYear() {
  const yearEl = document.getElementById("footerYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
