// ================================
// EMAIL.JS
// ================================

// Initialize EmailJS
emailjs.init({
    publicKey: "_92623ObgfDRz2wEd"
});

// Elements
const form = document.getElementById("contactForm");
const submitBtn = form.querySelector(".contact-btn");
const successModal = document.getElementById("successModal");
const whatsappBtn = document.getElementById("whatsappBtn");

// Store latest submitted data
let latestLead = {};

// Form Submit
form.addEventListener("submit", async function (e) {

    e.preventDefault();

    // Disable button
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
        Sending...
        <i class="ri-loader-4-line ri-spin"></i>
    `;

    // Collect Form Data
    latestLead = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        project: form.project.value,
        budget: form.budget.value,
        timeline: form.timeline.value,
        message: form.message.value
    };

    try {

        // Send Email
        await emailjs.sendForm(
            "service_iyjr20i",
            "template_ppluonv",
            form
        );

        // Show Success Modal
        successModal.classList.add("active");

        // Reset Form
        form.reset();

    } catch (error) {

        console.error("EmailJS Error:", error);

        alert("❌ Failed to send project request.\nPlease try again.");

    } finally {

        // Restore Button
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
            Launch My Project
            <i class="ri-rocket-line"></i>
        `;

    }

});

// Continue on WhatsApp
whatsappBtn.addEventListener("click", () => {

    openWhatsApp(latestLead);

});