# VYKRA Web Studio | Portfolio Website

Official portfolio website for **VYKRA Web Studio** ([www.vykraweb.in](https://www.vykraweb.in/)), founded by **K. Vishnu**.

Designed and engineered for high conversions, sub-second load times, mobile responsiveness, and a bold orange-and-charcoal visual theme.

---

## 🚀 Key Features & Interactive Elements

- **Modern Hero Experience**: Stable headline, floating status badges, live code mockup, and client rating social proof.
- **Infinite Marquee Ticker**: Continuous looping service tape with glowing typography.
- **Modern Bento Grid Showcase**: Highlighting founder bio, Google PageSpeed score (99+), verified stats counters, and interactive tech stack cloud.
- **Interactive Service Matrix**: 6 service offerings with categorized feature lists and direct "Select in Calculator" triggers.
- **Why Choose VYKRA Comparison**: Side-by-side comparison between custom high-performance code and generic agency page builders.
- **4-Step Work Roadmap**: Visual milestone breakdown from strategy to launch.
- **Filterable Projects Showcase**: Category filtering (`All`, `Business`, `Portfolio`, `Beauty & Spa`, `Restaurant`, `Interior Design`) with interactive macOS browser previews, including Sensoria and Serenity salon/spa websites.
- **Fixed & Enhanced Project Modal**: High-res screenshots, live demo links, GitHub repo access, tech badges, and key deliverables.
- **Interactive Real-Time Cost Estimator**:
  - Live animated total calculation
  - Dynamic delivery timeline
  - One-click branded PDF quotation generator powered by `jsPDF`
  - Direct WhatsApp booking button with pre-filled scope
- **Client Reviews & Testimonials**: Verified client social proof and ratings.
- **Interactive FAQ Accordion**: Expandable answers to common client questions.
- **Inquiry Form & EmailJS Integration**: Form validation, instant feedback, EmailJS dispatch, and direct WhatsApp continuation.
- **Accessibility & SEO**: Schema.org JSON-LD structured data, OpenGraph tags, canonical links, and fluid responsive design.
- **Micro-Interactions**: Circular SVG scroll progress ring with Back-to-Top button and restrained hover effects. The hero text and decorative background remain static to prevent idle page movement.

---

## 📁 Project Structure

```
vykraweb/
├── assets/
│   ├── icons/
│   │   └── vykra-icon.png
│   └── images/
│       ├── my pic.png
│       └── projects-img/
│           ├── corporate.png
│           ├── hotel.png
│           ├── luxwear.png
│           ├── portfolioimg.png
│           ├── restaurent.png
│           ├── salon&spa.png
│           ├── salon.png
│           ├── screenshot-1791268681107.png
│           ├── Screenshot_6-10-2026_12146_chennai-interiors.higgsfield.app.jpeg
│           └── www.vykraweb.in_ (1).png
├── css/
│   ├── reset.css          # Baseline cross-browser resets
│   ├── variables.css      # Design tokens (colors, gradients, typography, easing)
│   ├── global.css         # Typography, containers, utility classes
│   ├── animations.css     # Keyframe animations, canvas container, marquee, cursor
│   ├── components.css     # Buttons, cards, bento cells, browser mockups, toast
│   ├── sections.css       # Complete layout styles for all sections
│   └── responsive.css     # Fluid breakpoints (1200px, 992px, 768px, 480px)
├── js/
│   ├── animations.js      # Canvas constellation, typewriter, scroll reveals, counters
│   ├── calculator.js      # Instant price calculation, timeline & PDF quotation
│   └── main.js            # Loader, drawer, project filters, modal, FAQ, EmailJS form
├── resume/
│   └── K_Vishnu_Resume.docx
├── index.html             # Semantic accessible HTML5 structure
├── robots.txt
├── sitemap.xml
└── README.md
```

---

## 🛠️ Tech Stack

- **Markup**: HTML5, Semantic Web Elements, Microdata Schema
- **Styling**: Modern CSS3, CSS Grid, Flexbox, Fluid Clamps, CSS Custom Properties
- **Logic**: Vanilla JavaScript (ES6+), Canvas 2D Context, IntersectionObserver API
- **External Libraries (via CDN)**:
  - [jsPDF](https://github.com/parallax/jsPDF) for client-side quotation generation
  - [EmailJS](https://www.emailjs.com/) for serverless email dispatch

---

## 💻 Local Development

To run the website locally on your computer:

```bash
# Using Python
python -m http.server 3000

# Or with Node.js npx serve
npx serve .
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📬 Contact & Inquiries

- **Studio**: VYKRA Web Studio
- **Developer**: K. Vishnu
- **Email**: [contact@vykraweb.in](mailto:contact@vykraweb.in)
- **WhatsApp**: [+91 7904753462](https://wa.me/917904753462)
- **Location**: Chennai, Tamil Nadu, India
- **Website**: [www.vykraweb.in](https://www.vykraweb.in)
