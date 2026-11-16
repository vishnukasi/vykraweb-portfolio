/* ================= PRICING CALCULATOR & QUOTE SYSTEM ================= */

let currentQuote = {
  websiteType: "Portfolio",
  basePrice: 3000,
  pageTier: "1–3 Pages",
  pagePrice: 0,
  addons: [],
  addonsTotal: 0,
  totalPrice: 3000,
  timeline: "1–2 Weeks",
  quoteId: ""
};

document.addEventListener("DOMContentLoaded", () => {
  initPricingCalculator();
});

function initPricingCalculator() {
  const typeCards = document.querySelectorAll(".type-option-card");
  const pageBtns = document.querySelectorAll(".page-tier-btn");
  const addonCheckboxes = document.querySelectorAll(".addon-checkbox-label input");
  const quotePdfBtn = document.getElementById("downloadQuoteBtn");
  const whatsappQuoteBtn = document.getElementById("whatsappQuoteBtn");
  const continueContactBtn = document.getElementById("continueToContactBtn");

  // Website Type Selection
  typeCards.forEach((card) => {
    card.addEventListener("click", () => {
      typeCards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");

      currentQuote.websiteType = card.getAttribute("data-type") || card.querySelector("h4").textContent.trim();
      currentQuote.basePrice = parseInt(card.getAttribute("data-price"), 10) || 3000;

      calculateTotal();
    });
  });

  // Page Tier Selection
  pageBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      pageBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      currentQuote.pageTier = btn.querySelector("strong").textContent.trim();
      currentQuote.pagePrice = parseInt(btn.getAttribute("data-price"), 10) || 0;

      calculateTotal();
    });
  });

  // Add-ons Selection
  addonCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      const parentLabel = checkbox.closest(".addon-checkbox-label");
      if (checkbox.checked) {
        parentLabel.classList.add("checked");
      } else {
        parentLabel.classList.remove("checked");
      }
      calculateTotal();
    });
  });

  // PDF Quote Generation
  if (quotePdfBtn) {
    quotePdfBtn.addEventListener("click", generateQuotationPdf);
  }

  // WhatsApp Quote
  if (whatsappQuoteBtn) {
    whatsappQuoteBtn.addEventListener("click", sendQuoteViaWhatsApp);
  }

  // Continue to Contact
  if (continueContactBtn) {
    continueContactBtn.addEventListener("click", () => {
      syncWithContactForm();
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  calculateTotal();
}

function calculateTotal() {
  let addonsSum = 0;
  const selectedAddons = [];

  document.querySelectorAll(".addon-checkbox-label input:checked").forEach((cb) => {
    const price = parseInt(cb.value, 10) || 0;
    const name = cb.closest(".addon-checkbox-label").querySelector(".addon-name").textContent.trim();
    addonsSum += price;
    selectedAddons.push({ name, price });
  });

  currentQuote.addons = selectedAddons;
  currentQuote.addonsTotal = addonsSum;
  currentQuote.totalPrice = currentQuote.basePrice + currentQuote.pagePrice + addonsSum;

  // Determine timeline
  if (currentQuote.totalPrice <= 5000) {
    currentQuote.timeline = "1–2 Weeks";
  } else if (currentQuote.totalPrice <= 12000) {
    currentQuote.timeline = "2–3 Weeks";
  } else {
    currentQuote.timeline = "3–5 Weeks";
  }

  // Animate Price Output
  const totalDisplay = document.getElementById("totalPrice");
  if (totalDisplay) {
    animatePriceDisplay(totalDisplay, currentQuote.totalPrice);
  }

  const timelineDisplay = document.getElementById("timelineDisplay");
  if (timelineDisplay) {
    timelineDisplay.textContent = `Estimated Timeline: ${currentQuote.timeline}`;
  }

  syncWithContactForm();
}

function animatePriceDisplay(el, targetVal) {
  const currentStr = el.textContent.replace(/[₹,]/g, "") || "0";
  const currentVal = parseInt(currentStr, 10) || 0;
  const duration = 500;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const val = Math.round(currentVal + (targetVal - currentVal) * ease);

    el.textContent = `₹${val.toLocaleString("en-IN")}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = `₹${targetVal.toLocaleString("en-IN")}`;
    }
  }

  requestAnimationFrame(update);
}

function syncWithContactForm() {
  const summaryType = document.getElementById("summaryType");
  const summaryPages = document.getElementById("summaryPages");
  const summaryFeatures = document.getElementById("summaryFeatures");
  const summaryPrice = document.getElementById("summaryPrice");
  const summaryTimeline = document.getElementById("summaryTimeline");
  const messageInput = document.getElementById("message");

  if (summaryType) summaryType.textContent = currentQuote.websiteType;
  if (summaryPages) summaryPages.textContent = currentQuote.pageTier;
  if (summaryPrice) summaryPrice.textContent = `₹${currentQuote.totalPrice.toLocaleString("en-IN")}`;
  if (summaryTimeline) summaryTimeline.textContent = currentQuote.timeline;

  if (summaryFeatures) {
    if (currentQuote.addons.length > 0) {
      summaryFeatures.innerHTML = currentQuote.addons.map((a) => `✓ ${a.name}`).join("<br>");
    } else {
      summaryFeatures.textContent = "Standard Included Features";
    }
  }

  // Pre-fill message if empty
  if (messageInput && (!messageInput.value || messageInput.value.includes("Estimated Price:"))) {
    messageInput.value = `Selected Package: ${currentQuote.websiteType} (${currentQuote.pageTier})
Add-ons: ${currentQuote.addons.length ? currentQuote.addons.map(a => a.name).join(", ") : "Standard Features"}
Estimated Investment: ₹${currentQuote.totalPrice.toLocaleString("en-IN")}
Estimated Delivery: ${currentQuote.timeline}`;
  }
}

// Global hook to trigger calculator from services section
window.selectServiceInCalculator = function (serviceType) {
  const targetType = serviceType.toLowerCase();
  const typeCards = document.querySelectorAll(".type-option-card");

  typeCards.forEach((card) => {
    const name = card.querySelector("h4").textContent.toLowerCase();
    if (name.includes(targetType) || targetType.includes(name)) {
      card.click();
    }
  });

  const pricingSection = document.getElementById("pricing");
  if (pricingSection) {
    pricingSection.scrollIntoView({ behavior: "smooth" });
  }
};

/* ================= GENERATE PDF QUOTATION ================= */
function generateQuotationPdf() {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    showToast("PDF generator loading, please try again in a moment.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const dateStr = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });

  const quoteId = `VYKRA-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, "0")}${String(new Date().getDate()).padStart(2, "0")}-${Math.floor(100 + Math.random() * 900)}`;
  currentQuote.quoteId = quoteId;

  // Header Banner
  doc.setFillColor(6, 8, 15);
  doc.rect(0, 0, 210, 42, "F");

  doc.setTextColor(0, 224, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("VYKRA WEB STUDIO", 20, 20);

  doc.setTextColor(200, 210, 230);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text("Premium Web Design & Development Quotation", 20, 30);
  doc.text("www.vykraweb.in | contact@vykraweb.in", 20, 36);

  // Meta Box
  doc.setFillColor(245, 248, 252);
  doc.roundedRect(15, 50, 180, 24, 3, 3, "F");

  doc.setTextColor(40, 50, 70);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text(`QUOTATION NO: ${quoteId}`, 22, 60);
  doc.setFont("helvetica", "normal");
  doc.text(`DATE: ${dateStr}`, 22, 67);
  doc.text("VALIDITY: 15 Days from generation", 110, 67);

  // Project Specs Table
  doc.setTextColor(15, 23, 42);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text("1. PROJECT SCOPE & SPECIFICATIONS", 20, 90);

  doc.setDrawColor(220, 225, 235);
  doc.line(20, 93, 190, 93);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text(`Website Type: ${currentQuote.websiteType}`, 22, 103);
  doc.text(`Page Count: ${currentQuote.pageTier}`, 22, 111);
  doc.text(`Estimated Timeline: ${currentQuote.timeline}`, 22, 119);

  // Selected Add-ons
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text("2. SELECTED FEATURES & ADD-ONS", 20, 137);
  doc.line(20, 140, 190, 140);

  let yPos = 150;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);

  if (currentQuote.addons.length === 0) {
    doc.text("• Standard Responsive Design, Semantic Markup, SEO Structure, and Fast Loading.", 22, yPos);
    yPos += 10;
  } else {
    currentQuote.addons.forEach((addon) => {
      doc.text(`• ${addon.name}`, 22, yPos);
      doc.text(`Rs. ${addon.price.toLocaleString("en-IN")}`, 160, yPos);
      yPos += 8;
    });
  }

  // Price Total Box
  yPos += 12;
  doc.setFillColor(0, 224, 255);
  doc.roundedRect(20, yPos, 170, 30, 4, 4, "F");

  doc.setTextColor(4, 8, 20);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("TOTAL ESTIMATED INVESTMENT", 28, yPos + 11);

  doc.setFontSize(22);
  doc.text(`Rs. ${currentQuote.totalPrice.toLocaleString("en-IN")}`, 28, yPos + 23);

  // Terms and Conditions
  yPos += 45;
  doc.setTextColor(50, 60, 80);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("3. TERMS & WORK PROCESS", 20, yPos);
  doc.line(20, yPos + 3, 190, yPos + 3);

  yPos += 12;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.text("• 50% milestone advance payment to begin design & development.", 22, yPos);
  yPos += 7;
  doc.text("• Domain & hosting subscriptions are separate unless provided by client.", 22, yPos);
  yPos += 7;
  doc.text("• Includes 100% mobile responsiveness, speed optimization, and SEO readiness.", 22, yPos);
  yPos += 7;
  doc.text("• Free 30-day post-launch support and bug fixes included with every project.", 22, yPos);

  // Footer Bar
  doc.setFillColor(6, 8, 15);
  doc.rect(0, 280, 210, 17, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(9);
  doc.text("VYKRA Web Studio • Chennai, Tamil Nadu • WhatsApp: +91 7904753462", 20, 290);

  doc.save(`VYKRA-Quotation-${quoteId}.pdf`);
  showToast("Quotation PDF downloaded successfully 📄");
}

/* ================= SEND QUOTE VIA WHATSAPP ================= */
function sendQuoteViaWhatsApp() {
  const addonsText = currentQuote.addons.length
    ? currentQuote.addons.map((a) => `• ${a.name} (+₹${a.price})`).join("\n")
    : "Standard Included Features";

  const message = `🚀 *New Project Inquiry - VYKRA Web Studio*

Hello Vishnu! I used the website cost estimator on vykraweb.in and would like to discuss my project:

📋 *Project Configuration*
• *Website Type:* ${currentQuote.websiteType}
• *Pages:* ${currentQuote.pageTier}
• *Estimated Timeline:* ${currentQuote.timeline}

✨ *Selected Features:*
${addonsText}

💰 *Estimated Cost:* ₹${currentQuote.totalPrice.toLocaleString("en-IN")}

I'd love to schedule a quick consultation to get started!`;

  const waUrl = `https://wa.me/917904753462?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
}
