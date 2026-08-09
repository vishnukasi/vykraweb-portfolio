(function () {
  emailjs.init({
    publicKey: "_92623ObgfDRz2wEd",
  });
})();

const progress = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {
  const totalHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const percent = (window.scrollY / totalHeight) * 100;

  progress.style.width = percent + "%";
});

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loader").classList.add("hide");
  }, 2000);
});

/* ========================================
   MOBILE MENU
======================================== */

const menu = document.querySelector(".menu-btn");
const mobile = document.querySelector(".mobile-menu");

menu.addEventListener("click", () => {
  mobile.classList.toggle("active");

  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    menu.innerHTML = "×";
  } else {
    menu.innerHTML = "☰";
  }
});
/* CLOSE MOBILE MENU AFTER CLICK */

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobile.classList.remove("active");

    menu.classList.remove("active");

    menu.innerHTML = "☰";
  });
});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

reveals.forEach((el) => {
  observer.observe(el);
});

const dot = document.querySelector(".cursor");

const ring = document.querySelector(".cursor-ring");

window.addEventListener("mousemove", (e) => {
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";

  ring.style.left = e.clientX + "px";
  ring.style.top = e.clientY + "px";
});

const services = document.querySelectorAll(".service-card");

services.forEach((card) => {
  const btn = card.querySelector(".toggle-service");

  btn.addEventListener("click", () => {
    services.forEach((item) => {
      if (item !== card) {
        item.classList.remove("active");
      }
    });

    card.classList.toggle("active");
  });
});

/*==========================================
PROJECT MODAL
==========================================*/

const projectData = [
  {
    category: "Business Website",

    title: "Corporate Business Website",

    description:
      "A premium business website designed to increase trust, generate leads and create a strong online presence.",

    image: "assets/images/projects-img/luxwear.png",

    tech: ["HTML", "CSS", "JavaScript"],

    features: [
      "Responsive Design",
      "SEO Optimized",
      "Contact Form",
      "Modern UI",
      "Fast Performance",
    ],

    live: "https://vishnukasi.github.io/FashionWear/",

    github: "https://github.com/vishnukasi",
  },

  {
    category: "Portfolio",

    title: "Personal Portfolio",

    description:
      "A modern portfolio website showcasing skills, projects and experience.",

    image: "assets/images/projects-img/portfolioimg.png",

    tech: ["HTML", "CSS", "JavaScript"],

    features: [
      "Animated Hero",
      "Project Gallery",
      "Responsive Layout",
      "Contact Form",
      "Smooth Animations",
    ],

    live: "www.vykraweb.in",

    github: "https://github.com/vishnukasi",
  },

  {
    category: "Beauty & Spa",

    title: "Luxury Salon Website",

    description:
      "Elegant salon website with premium branding and online booking.",

    image: "assets/images/projects-img/salon.png",

    tech: ["HTML", "CSS"],

    features: [
      "Luxury UI",
      "Appointment Booking",
      "Service Showcase",
      "Gallery",
      "Responsive Design",
    ],

    live: "https://vishnukasi.github.io/salon-spa/",

    github: "https://github.com/vishnukasi",
  },

  {
    category: "Restaurant",

    title: "Restaurant Landing Page",

    description:
      "Restaurant website with menu, reservation and contact sections.",

    image: "assets/images/projects-img/hotel.png",

    tech: ["HTML", "CSS"],

    features: [
      "Menu Section",
      "Reservation",
      "Location Map",
      "Responsive Layout",
      "Modern Design",
    ],

    live: "https://vishnukasi.github.io/Foodies-Restaurant/",

    github: "https://github.com/vishnukasi",
  },

  {
    category: "Dashboard",

    title: "AI Analytics Dashboard",

    description:
      "Responsive dashboard with charts, analytics and admin interface.",

    image: "assets/images/project-5.webp",

    tech: ["HTML", "CSS", "JavaScript"],

    features: [
      "Dashboard UI",
      "Charts",
      "Responsive Tables",
      "Analytics",
      "Dark Mode",
    ],

    live: "",

    github: "https://github.com/vishnukasi",
  },
];

/*==========================================
OPEN PROJECT MODAL
==========================================*/

const modal = document.getElementById("projectModal");

const modalImage = document.getElementById("modalImage");

const modalCategory = document.getElementById("modalCategory");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const modalTech = document.getElementById("modalTech");

const modalFeatures = document.getElementById("modalFeatures");

const liveDemo = document.getElementById("liveDemo");

const githubRepo = document.getElementById("githubRepo");

const closeModal = document.querySelector(".close-modal");

const buttons = document.querySelectorAll(".view-project");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const project = projectData[index];

    modal.classList.add("active");

    modalImage.src = project.image;

    modalCategory.textContent = project.category;

    modalTitle.textContent = project.title;

    modalDescription.textContent = project.description;

    modalTech.innerHTML = "";

    project.tech.forEach((item) => {
      modalTech.innerHTML += `<span>${item}</span>`;
    });

    modalFeatures.innerHTML = "";

    project.features.forEach((item) => {
      modalFeatures.innerHTML += `<li>${item}</li>`;
    });

    liveDemo.href = project.live;

    githubRepo.href = project.github;
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("active");
  }
});

/*==========================================
MODERN PRICING CALCULATOR
==========================================*/

const websiteCards = document.querySelectorAll(".option-card");
const pageCards = document.querySelectorAll(".page-card");
const extras = document.querySelectorAll(".extras input");

const totalPrice = document.getElementById("totalPrice");
const timeline = document.getElementById("timeline");

let websitePrice = 3000;
let pagePrice = 0;

websiteCards.forEach((card) => {
  card.addEventListener("click", () => {
    websiteCards.forEach((c) => c.classList.remove("active"));

    card.classList.add("active");

    websitePrice = Number(card.dataset.price);

    calculatePrice();
  });
});

pageCards.forEach((card) => {
  card.addEventListener("click", () => {
    pageCards.forEach((c) => c.classList.remove("active"));

    card.classList.add("active");

    pagePrice = Number(card.dataset.pages);

    calculatePrice();
  });
});

extras.forEach((item) => {
  item.addEventListener("change", calculatePrice);
});

function calculatePrice() {
  let total = websitePrice + pagePrice;

  extras.forEach((item) => {
    if (item.checked) {
      total += Number(item.value);
    }
  });

  animatePrice(total);

  updateTimeline(total);

  const estimate = document.querySelector(".estimate");

  estimate.classList.add("active");

  setTimeout(() => {
    estimate.classList.remove("active");
  }, 700);
}

function animatePrice(target) {
  let current = Number(totalPrice.textContent.replace(/[₹,]/g, "")) || 0;

  const increment = (target - current) / 25;

  const timer = setInterval(() => {
    current += increment;

    if (
      (increment > 0 && current >= target) ||
      (increment < 0 && current <= target)
    ) {
      current = target;

      clearInterval(timer);
    }

    totalPrice.textContent =
      "₹" +
      Math.round(current)

        .toLocaleString("en-IN");
  }, 15);
}

function updateTimeline(price) {
  if (price <= 5000) {
    timeline.textContent = "Estimated Timeline : 1–2 Weeks";
  } else if (price <= 10000) {
    timeline.textContent = "Estimated Timeline : 2–4 Weeks";
  } else {
    timeline.textContent = "Estimated Timeline : 4–6 Weeks";
  }
}

/*==========================================*
 *QUOTE POPUP + PDF GENERATOR*
 *==========================================*/

const quotePopup = document.getElementById("quotePopup");

const quoteBtn = document.getElementById("quoteBtn");

const closeQuote = document.querySelector(".close-quote");

const downloadQuote = document.getElementById("downloadQuote");

let quoteData = {
  website: "",
  price: 0,
  pages: "",
  features: [],
  timeline: "",
  quoteID: "",
};

// Generate Quote ID

function generateQuoteID() {
  let date = new Date();

  return (
    "VYKRA-" +
    date.getFullYear() +
    (date.getMonth() + 1) +
    date.getDate() +
    "-" +
    Math.floor(Math.random() * 900 + 100)
  );
}

// OPEN QUOTE POPUP

quoteBtn.addEventListener("click", () => {
  // Website name

  let website = document.querySelector(".option-card.active h4").textContent;

  // Website price

  let price = Number(
    document.querySelector(".option-card.active").dataset.price,
  );

  // Pages

  let pages = document.querySelector(".page-card.active").textContent;

  // Features

  let selectedFeatures = [];

  document.querySelectorAll(".extras input:checked").forEach((item) => {
    selectedFeatures.push(item.parentElement.textContent.trim());
  });

  // Timeline

  let time = timeline.textContent.replace("Estimated Timeline : ", "");

  quoteData = {
    website: website,

    price: Number(totalPrice.textContent.replace(/[₹,]/g, "")),

    pages: pages,

    features: selectedFeatures,

    timeline: time,

    quoteID: generateQuoteID(),
  };

  quotePopup.classList.add("active");
});

// CLOSE POPUP

closeQuote.addEventListener("click", () => {
  quotePopup.classList.remove("active");
});

quotePopup.addEventListener("click", (e) => {
  if (e.target === quotePopup) {
    quotePopup.classList.remove("active");
  }
});

/*==========================================
DOWNLOAD QUOTATION PDF
==========================================*/

const downloadBtn = document.getElementById("downloadQuote");

downloadBtn.addEventListener("click", generateQuotation);

function generateQuotation() {
  const { jsPDF } = window.jspdf;

  const doc = new jsPDF();

  const today = new Date();

  const date = today.toLocaleDateString("en-IN");

  const quoteNo =
    "VYKRA-" +
    today.getFullYear() +
    (today.getMonth() + 1).toString().padStart(2, "0") +
    today.getDate().toString().padStart(2, "0") +
    "-" +
    Math.floor(Math.random() * 900 + 100);

  const website = document.querySelector(".option-card.active h4").textContent;

  const pages = document.querySelector(".page-card.active").textContent;

  const rawPrice = Number(totalPrice.textContent.replace(/[₹,]/g, ""));

  const price = "Rs. " + rawPrice.toLocaleString("en-IN");

  const time = timeline.textContent;

  const features = [];

  document.querySelectorAll(".extras input:checked").forEach((item) => {
    features.push(item.parentElement.textContent.trim());
  });

  /* ---------- HEADER ---------- */

  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, 210, 38, "F");

  doc.setTextColor(255);

  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text("VYKRA WEB STUDIO", 20, 18);

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("Website Development Quotation", 20, 28);

  doc.setTextColor(0);

  /* ---------- Quote Info ---------- */

  doc.setFillColor(245, 245, 245);
  doc.roundedRect(15, 45, 180, 25, 4, 4, "F");

  doc.setFontSize(11);

  doc.text("Quote ID : " + quoteNo, 22, 56);

  doc.text("Date : " + date, 22, 64);

  /* ---------- Project ---------- */

  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);

  doc.text("PROJECT DETAILS", 20, 84);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  doc.text("Website Type : " + website, 20, 96);

  doc.text("Pages : " + pages, 20, 106);

  doc.text(time, 20, 116);

  /* ---------- Features ---------- */

  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);

  doc.text("FEATURES", 20, 138);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  let y = 148;

  if (features.length === 0) {
    doc.text("No extra features selected.", 25, y);

    y += 10;
  } else {
    features.forEach((feature) => {
      doc.text(". " + feature, 25, y);

      y += 8;
    });
  }

  /* ---------- Price Box ---------- */

  y += 10;

  doc.setFillColor(0, 224, 255);

  doc.roundedRect(20, y, 170, 28, 5, 5, "F");

  doc.setFont("helvetica", "bold");

  doc.setFontSize(14);

  doc.setTextColor(0);

  doc.text("Estimated Investment", 30, y + 10);

  doc.setFontSize(22);

  doc.text(price, 30, y + 22);

  /* ---------- Terms ---------- */

  y += 45;

  doc.setTextColor(0);

  doc.setFontSize(15);

  doc.setFont("helvetica", "bold");

  doc.text("Terms & Conditions", 20, y);

  y += 10;

  doc.setFont("helvetica", "normal");

  doc.setFontSize(11);

  doc.text("• 50% advance payment to begin development.", 25, y);

  y += 7;

  doc.text("• Hosting & domain charges are separate.", 25, y);

  y += 7;

  doc.text("• Final pricing depends on project scope.", 25, y);

  y += 7;

  doc.text("• Free support after project delivery.", 25, y);

  /* ---------- Footer ---------- */

  doc.setFillColor(15, 23, 42);

  doc.rect(0, 280, 210, 17, "F");

  doc.setTextColor(255);

  doc.setFontSize(10);

  doc.text("www.vykraweb.in", 20, 289);

  doc.text("contact@vykraweb.in", 150, 289);

  doc.save("VYKRA-Quotation.pdf");
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const clientData = {
    name: document.getElementById("name").value.trim(),

    email: document.getElementById("email").value.trim(),

    phone: document.getElementById("phone").value.trim(),

    company: document.getElementById("company").value.trim(),

    website: document.getElementById("summaryType").innerText,

    pages: document.getElementById("summaryPages").innerText,

    features: "SEO, WhatsApp Integration, Contact Form",

    price: document.getElementById("summaryPrice").innerText,

    timeline: "2 - 4 Weeks",

    message: document.getElementById("message").value.trim(),
  };

  /* Store details temporarily */

  window.latestClientData = clientData;

  const params = {
    name: clientData.name,

    email: clientData.email,

    phone: clientData.phone,

    company: clientData.company,

    website_type: clientData.website,

    pages: clientData.pages,

    features: clientData.features,

    price: clientData.price,

    timeline: clientData.timeline,

    message: clientData.message,
  };

  emailjs
    .send(
      "service_n88arid",

      "template_je9l4lj",

      params,
    )

    .then(() => {
      showSuccessPopup();

      showToast("Your inquiry has been sent successfully 🚀");

      document.getElementById("contactForm").reset();
    })

    .catch((error) => {
      console.error("EmailJS Error:", error);

      showToast("Unable to send inquiry. Please try again.");
    });
});

/* ==========================================
   SUCCESS POPUP
========================================== */

const successPopup = document.getElementById("successPopup");

const successClose = document.getElementById("successClose");

const successDismiss = document.getElementById("successDismiss");

const whatsappClientBtn = document.getElementById("whatsappClientBtn");

function showSuccessPopup() {
  successPopup.classList.add("active");
}

function closeSuccessPopup() {
  successPopup.classList.remove("active");
}

successClose.addEventListener("click", closeSuccessPopup);

successDismiss.addEventListener("click", closeSuccessPopup);

successPopup.addEventListener("click", (e) => {
  if (e.target === successPopup) {
    closeSuccessPopup();
  }
});

function showToast(message) {
  let toast = document.createElement("div");

  toast.className = "toast";

  toast.innerHTML = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

whatsappClientBtn.addEventListener("click", function () {
  if (!window.latestClientData) {
    return;
  }

  const data = window.latestClientData;

  const whatsappMessage = `

🚀 *New Website Inquiry - VYKRA Web Studio*

 *Client Name*
${data.name}

 *Email*
${data.email}

 *Phone*
${data.phone}

 *Company*
${data.company || "Not Provided"}

 *Website Type*
${data.website}

 *Pages*
${data.pages}

 *Features*
${data.features}

 *Estimated Price*
${data.price}

 *Timeline*
${data.timeline}

 *Additional Requirements*
${data.message || "Not Provided"}

━━━━━━━━━━━━━━━━━━

Generated from VYKRA Web Studio

`;

  const yourWhatsAppNumber = "917904753462";

  const whatsappURL =
    "https://wa.me/" +
    yourWhatsAppNumber +
    "?text=" +
    encodeURIComponent(whatsappMessage);

  window.open(whatsappURL, "_blank");
});

function continueToContact() {
  document.getElementById("quotePopup").classList.remove("active");

  // Fill contact section

  document.getElementById("summaryType").innerText = quoteData.website;

  document.getElementById("summaryPages").innerText =
    quoteData.pages + " Pages";

  document.getElementById("summaryPrice").innerText =
    "₹" + Number(quoteData.price).toLocaleString("en-IN");

  document.getElementById("message").value = `
Website Type: ${quoteData.website}

Pages: ${quoteData.pages}

Features:
${quoteData.features.join(", ")}

Estimated Price:
₹${quoteData.price}

Timeline:
${quoteData.timeline}
`;

  // Scroll to contact

  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
  });
}

document.querySelectorAll(".input-box input").forEach((input) => {
  if (input.value != "") {
    input.classList.add("filled");
  }
});

/* ========================================
   FOOTER YEAR
========================================= */

const footerYear = document.getElementById("footerYear");

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}
