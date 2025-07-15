// === TYPEWRITER EFFECT FOR BANNER HEADING ===
window.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector(".banner-section h2");
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
});

// === HIGHLIGHT NAME ON LOAD ===
window.addEventListener("DOMContentLoaded", () => {
  const nameHeading = document.querySelector("header h1");
  nameHeading.style.color = "#FFD700";
});

// === SMOOTH SCROLL FOR NAV ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// === PROJECT CARD HOVER EFFECT ===
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.03)";
    card.style.transition = "0.3s ease";
  });

  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1)";
  });
});

// === CONDITIONAL AUTO SCROLL CAROUSEL ===
const carousel = document.querySelector('.projects-carousel');

if (carousel) {
  const card = carousel.querySelectorAll('.project-card');

  let scrollSpeed = 0.5;
  let direction = 1;

  function autoScroll() {
    carousel.scrollLeft += scrollSpeed * direction;

    if (carousel.scrollLeft >= (carousel.scrollWidth - carousel.clientWidth)) {
      carousel.scrollLeft = 0;
    }
    if (carousel.scrollLeft <= 0) {
      carousel.scrollLeft = carousel.scrollWidth - carousel.clientWidth;
    }

    updateActiveCard();
    requestAnimationFrame(autoScroll);
  }

  function updateActiveCard() {
    const center = carousel.scrollLeft + carousel.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;

    card.forEach((cardItem, i) => {
      const cardCenter = cardItem.offsetLeft + cardItem.offsetWidth / 2;
      const distance = Math.abs(center - cardCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });

    card.forEach((cardItem, i) => {
      cardItem.classList.toggle('active', i === closestIndex);
    });
  }

  requestAnimationFrame(autoScroll);

  carousel.addEventListener('mouseenter', () => {
    scrollSpeed = 0;
  });
  carousel.addEventListener('mouseleave', () => {
    scrollSpeed = 0.5;
  });
}

// === NAV LINK HIGHLIGHT ON SCROLL ===
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.menu li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });

  animateOverlay();
});

// === PROJECT OVERLAY POP-IN ON SCROLL ===
function animateOverlay() {
  document.querySelectorAll('.card-overlay').forEach(overlay => {
    const top = overlay.getBoundingClientRect().top;
    const isVisible = top < window.innerHeight - 80;
    if (isVisible) {
      overlay.style.opacity = '1';
      overlay.style.transform = 'translateY(0)';
    }
  });
}

// === SCROLL REVEAL WITH STAGGER FOR PROJECT CARDS ===
// === SCROLL REVEAL WITH STAGGER ===
function revealCardsOnScroll() {
  const cards = document.querySelectorAll(".project-card");
  let delay = 0;

  cards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100;

    if (isVisible && !card.classList.contains("reveal")) {
      setTimeout(() => {
        card.classList.add("reveal");
      }, delay);
      delay += 250; // ⏱ stagger gap between cards (in ms)
    }
  });
}


window.addEventListener("scroll", revealCardsOnScroll);
window.addEventListener("DOMContentLoaded", () => {
  revealCardsOnScroll();
  animateOverlay();
});

window.addEventListener("DOMContentLoaded", () => {
  const chatBubble = document.getElementById("chatBubble");
  const chatPopup = document.getElementById("chatPopup");
  const chatClose = document.getElementById("chatClose");
  const chatText = document.getElementById("chatText");

  const funFacts = [
    "Hi there! Did you know this site runs on midnight creativity? 🌙",
    "This portfolio is powered by coffee and Ctrl+Z ☕⌨️",
    "Udoba once styled an entire site without using 'px' — just vibes and rems ",
    "Every section on this site has been hand-tuned like a guitar ",
    "JavaScript wrote this popup. Udoba taught it how to party 🎉",
    "Tip: Hit 'Contact' and tell Udoba you made it this far 🚀",
    "The CSS is smoother than jazz on a rainy night 🎷"
  ];

  let lastIndex = -1;

  // 🎰 Pick random fact that isn't the same as last
  function getNewFact() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * funFacts.length);
    } while (newIndex === lastIndex);

    lastIndex = newIndex;
    return funFacts[newIndex];
  }

  // ✍️ Typewriter animation
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

  // 💬 On bubble click → show popup with new message
  chatBubble.addEventListener("click", () => {
    const message = getNewFact();
    typeWriterEffect(message);
    chatPopup.style.display = "block";
  });

  // ❌ Close the chat box
  chatClose.addEventListener("click", () => {
    chatPopup.style.display = "none";
  });

  // 📬 Auto-suggest if user hasn't scrolled much
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const suggestZone = scrollY < viewportHeight * 0.5;

    if (suggestZone && chatPopup.style.display === "none") {
      const hint = "Tip: Scroll down to explore Projects or meet Udoba 🎯";
      typeWriterEffect(hint);
      chatPopup.style.display = "block";
    }
  });
});
// === SCROLL-GLOW FOR SECTIONS ===
function glowSectionsOnScroll() {
  const sections = document.querySelectorAll(".glow-zone");

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100;

    section.classList.toggle("active-glow", isVisible);
  });
}

window.addEventListener("scroll", glowSectionsOnScroll);
window.addEventListener("DOMContentLoaded", glowSectionsOnScroll);

function glowCardsOnScroll() {
  document.querySelectorAll(".project-card").forEach(card => {
    const rect = card.getBoundingClientRect();
    const visible = rect.top < window.innerHeight - 100;
    card.classList.toggle("active-glow", visible);
  });
}

window.addEventListener("scroll", glowCardsOnScroll);
window.addEventListener("DOMContentLoaded", glowCardsOnScroll);


// === SCROLL-ACTIVATED SKILL BAR ANIMATION ===
function animateSkillBars() {
  document.querySelectorAll(".progress").forEach(bar => {
    const rect = bar.getBoundingClientRect();
    const inView = rect.top < window.innerHeight - 50;

    if (inView && !bar.classList.contains("filled")) {
      const targetWidth = bar.getAttribute("data-width");
      bar.style.width = targetWidth;
      bar.classList.add("filled");
    }
  });
}

window.addEventListener("scroll", animateSkillBars);
window.addEventListener("DOMContentLoaded", animateSkillBars);

// === SKILL BAR ANIMATION ===
function animateSkillBars() {
  document.querySelectorAll(".progress").forEach(bar => {
    const rect = bar.getBoundingClientRect();
    const inView = rect.top < window.innerHeight - 50;

    if (inView && !bar.classList.contains("filled")) {
      const targetWidth = bar.getAttribute("data-width");
      bar.style.width = targetWidth;
      bar.classList.add("filled");
    }
  });
}
window.addEventListener("scroll", animateSkillBars);
window.addEventListener("DOMContentLoaded", animateSkillBars);

// === SCROLL GRADIENT ===
window.addEventListener("scroll", () => {
  const section = document.getElementById("skills");
  const rect = section.getBoundingClientRect();

  if (rect.top < window.innerHeight && rect.bottom > 0) {
    const scrollDepth = 1 - rect.top / window.innerHeight;
    const tone = Math.floor(230 + scrollDepth * 10);
    section.style.background = `linear-gradient(to bottom, rgb(${tone},${tone},${tone}) 0%, #DCE3ED 100%)`;
  }
});

// === Fade-In on Scroll for About Paragraphs ===
function fadeInOnScroll() {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('DOMContentLoaded', fadeInOnScroll);


document.getElementById("contactForm").addEventListener("submit", function (e) {
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
    return;
  }

  // Show success message (optional if formspree handles redirection)
  document.getElementById("successMessage").style.display = "block";
});

// === Scroll to Top Button Behavior ===
document.querySelector(".scroll-to-top").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// === Animate Footer Social Icons on Hover ===
document.querySelectorAll(".footer-social a").forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    icon.style.transform = "scale(1.2)";
  });

  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "scale(1)";
  });
});

// === Optional: Reveal Footer on Scroll ===
function revealFooter() {
  const footer = document.querySelector(".footer");
  const rect = footer.getBoundingClientRect();
  if (rect.top < window.innerHeight - 50) {
    footer.classList.add("footer-visible");
  }
}

window.addEventListener("scroll", revealFooter);
window.addEventListener("DOMContentLoaded", revealFooter);
