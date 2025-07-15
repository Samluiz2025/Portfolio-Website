document.addEventListener("DOMContentLoaded", function () {
  // === Section Reveal Observer (ADDED)
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        if (entry.target.classList.contains("project-card")) {
          entry.target.classList.add("reveal");
        }

        if (entry.target.classList.contains("footer")) {
          entry.target.classList.add("footer-visible");
        }
      }
    });
  }, { threshold: 0.1 });

  const revealElements = document.querySelectorAll(".project-card, .fade-in, .footer");
  revealElements.forEach((el) => revealObserver.observe(el));

  // === Hamburger Menu
  const hamburger = document.getElementById("hamburger");
  const menu = document.querySelector(".menu");
  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }

  // === Chat Bubble Popup
  const chatBubble = document.getElementById("chatBubble");
  const chatPopup = document.getElementById("chatPopup");
  const chatClose = document.getElementById("chatClose");

  if (chatBubble && chatPopup && chatClose) {
    chatBubble.addEventListener("click", () => {
      chatPopup.style.display = "block";
    });

    chatClose.addEventListener("click", () => {
      chatPopup.style.display = "none";
    });

    document.addEventListener("click", (e) => {
      if (!chatPopup.contains(e.target) && e.target !== chatBubble) {
        chatPopup.style.display = "none";
      }
    });
  }

  // === Scroll to Top
  const scrollToTop = document.querySelector(".scroll-to-top");
  if (scrollToTop) {
    scrollToTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // === Skill Progress Bars
  const skillProgressBars = document.querySelectorAll(".progress");
  skillProgressBars.forEach((bar) => {
    const width = bar.getAttribute("data-width");
    if (width) {
      bar.style.width = width;
    }
  });

  // === Form Validation
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const successMessage = document.getElementById("successMessage");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  if (form) {
    form.addEventListener("submit", function (e) {
      let isValid = true;

      nameError.style.display = "none";
      emailError.style.display = "none";
      messageError.style.display = "none";

      if (nameInput.value.trim() === "") {
        nameError.style.display = "block";
        isValid = false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        emailError.style.display = "block";
        isValid = false;
      }

      if (messageInput.value.trim() === "") {
        messageError.style.display = "block";
        isValid = false;
      }

      if (!isValid) {
        e.preventDefault();
      } else {
        successMessage.style.display = "block";
      }
    });
  }

  // === Glow Zones
  const glowZones = document.querySelectorAll(".glow-zone");
  const glowObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active-glow");
      } else {
        entry.target.classList.remove("active-glow");
      }
    });
  }, { threshold: 0.25 });

  glowZones.forEach((zone) => glowObserver.observe(zone));

  // === Portrait Hover Glow
  const glowImages = document.querySelectorAll(".glow-image");
  glowImages.forEach((img) => {
    img.addEventListener("mouseover", () => {
      img.classList.add("hover-glow");
    });
    img.addEventListener("mouseout", () => {
      img.classList.remove("hover-glow");
    });
  });

  // === Animate Cards on Scroll
  const cards = document.querySelectorAll(".project-card");
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach((card) => cardObserver.observe(card));

  // === Animate Fade-in Paragraphs in About Section
  const fadeIns = document.querySelectorAll(".fade-in");
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  fadeIns.forEach((el) => fadeObserver.observe(el));

  // === Demo Button External Links
  const demoButtons = document.querySelectorAll(".demo-btn, .github-btn");
  demoButtons.forEach((btn) => {
    btn.setAttribute("target", "_blank");
  });

  // === Floating Bubble Keyboard Access
  if (chatBubble) {
    chatBubble.setAttribute("tabindex", "0");
    chatBubble.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        chatPopup.style.display = "block";
      }
    });
  }

  // === Skill Card Flip Animation (Optional Hover Tracking)
  const skillCards = document.querySelectorAll(".skill-card");
  skillCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const inner = card.querySelector(".card-inner");
      inner.style.transform = "rotateY(180deg)";
    });
    card.addEventListener("mouseleave", () => {
      const inner = card.querySelector(".card-inner");
      inner.style.transform = "rotateY(0)";
    });
  });

  // === Overlay Fade on Hover
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    const overlay = card.querySelector(".card-overlay");
    if (overlay) {
      card.addEventListener("mouseenter", () => {
        overlay.style.opacity = "1";
      });
      card.addEventListener("mouseleave", () => {
        overlay.style.opacity = "0";
      });
    }
  });
});
