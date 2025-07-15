window.addEventListener("DOMContentLoaded", () => {
  // === Typewriter Banner Heading ===
  const heading = document.querySelector(".banner-section h2");
  if (heading) {
    const text = "Build Smarter, Automate Faster.";
    heading.textContent = "";
    let index = 0;
    function typeWriter() {
      if (index < text.length) {
        heading.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
      }
    }
    typeWriter();
  }

  // === Highlight Name on Load ===
  const nameHeading = document.querySelector("header h1");
  if (nameHeading) nameHeading.style.color = "#FFD700";

  // === Project Card Hover Animation ===
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.03)";
      card.style.transition = "0.3s ease";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
    });
  });

  // === Smooth Scroll for Nav Links ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // === Scroll-to-Top Button ===
  document.querySelector(".scroll-to-top")?.addEventListener("click", e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // === Footer Social Icon Hover ===
  document.querySelectorAll(".footer-social a").forEach(icon => {
    icon.addEventListener("mouseenter", () => (icon.style.transform = "scale(1.2)"));
    icon.addEventListener("mouseleave", () => (icon.style.transform = "scale(1)"));
  });

  // === Contact Form Validation ===
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", e => {
      let valid = true;

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");
      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("emailError");
      const messageError = document.getElementById("messageError");

      nameError.style.display = "none";
      emailError.style.display = "none";
      messageError.style.display = "none";

      if (name.value.trim() === "") {
        nameError.style.display = "block";
        valid = false;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(email.value.trim())) {
        emailError.style.display = "block";
        valid = false;
      }

      if (message.value.trim() === "") {
        messageError.style.display = "block";
        valid = false;
      }

      if (!valid) {
        e.preventDefault();
      } else {
        document.getElementById("successMessage").style.display = "block";
      }
    });
  }

  // === Chat Popup Magic ===
  const chatBubble = document.getElementById("chatBubble");
  const chatPopup = document.getElementById("chatPopup");
  const chatClose = document.getElementById("chatClose");
  const chatText = document.getElementById("chatText");

  const funFacts = [
    "Hi there! Did you know this site runs on midnight creativity? 🌙",
    "This portfolio is powered by coffee and Ctrl+Z ☕⌨️",
    "Udoba once styled an entire site without using 'px' — just vibes and rems 💅",
    "Every section on this site has been hand-tuned like a guitar 🎸",
    "JavaScript wrote this popup. Udoba taught it how to party 🎉",
    "Tip: Hit 'Contact' and tell Udoba you made it this far 🚀",
    "The CSS is smoother than jazz on a rainy night 🎷"
  ];

  let lastIndex = -1;

  function getNewFact() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * funFacts.length);
    } while (newIndex === lastIndex);
    lastIndex = newIndex;
    return funFacts[newIndex];
  }

  function typeWriterEffect(text) {
    chatText.textContent = "";
    let i = 0;
    const speed = 50;
    function type() {
      if (i < text.length) {
        chatText.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }

  chatBubble?.addEventListener("click", () => {
    const message = getNewFact();
    typeWriterEffect(message);
    chatPopup.style.display = "block";
  });

  chatClose?.addEventListener("click", () => {
    chatPopup.style.display = "none";
  });

  // === Initial Reveal on Page Load ===
  revealOnScroll();
});

// === Scroll Reveal & Glow Effects ===
function revealOnScroll() {
  // Glow Skill Sections
  document.querySelectorAll(".glow-zone").forEach(section => {
    const rect = section.getBoundingClientRect();
    section.classList.toggle("active-glow", rect.top < window.innerHeight - 100);
  });

  // Glow Project Cards
  document.querySelectorAll(".project-card").forEach(card => {
    const rect = card.getBoundingClientRect();
    card.classList.toggle("active-glow", rect.top < window.innerHeight - 100);
  });

  // Fade-In Paragraphs
  document.querySelectorAll(".fade-in").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });

  // Animate Skill Bars
  document.querySelectorAll(".progress").forEach(bar => {
    const rect = bar.getBoundingClientRect();
    const inView = rect.top < window.innerHeight - 50;
    if (inView && !bar.classList.contains("filled")) {
      const targetWidth = bar.getAttribute("data-width");
      bar.style.width = targetWidth;
      bar.classList.add("filled");
    }
  });

  // Reveal Footer
  const footer = document.querySelector(".footer");
  if (footer) {
    const rect = footer.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      footer.classList.add("footer-visible");
    }
  }

  // Auto Chat Popup Suggestion
  const chatPopup = document.getElementById("chatPopup");
  if (window.scrollY < window.innerHeight * 0.5 && chatPopup?.style.display === "none") {
    const hint = "Tip: Scroll down to explore Projects or meet Udoba 🎯";
    const chatText = document.getElementById("chatText");
    chatText.textContent = "";
    let i = 0;
    function typeHint() {
      if (i < hint.length) {
        chatText.textContent += hint.charAt(i);
        i++;
        setTimeout(typeHint, 50);
      }
    }
    typeHint();
    chatPopup.style.display = "block";
  }
}

window.addEventListener("scroll", revealOnScroll);
