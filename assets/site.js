(function () {
  document.body.classList.add("js-ready");

  var menuButton = document.querySelector("[data-menu-button]");
  var mobilePanel = document.querySelector("[data-mobile-panel]");
  var dialog = document.querySelector("[data-dialog]");
  var dialogScope = document.querySelector("[data-dialog-scope]");
  var progress = document.querySelector("[data-progress]");
  var contactForm = document.querySelector("[data-contact-form]");
  var formStatus = document.querySelector("[data-form-status]");

  function closeMenu() {
    if (!menuButton || !mobilePanel) return;
    mobilePanel.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }

  if (menuButton && mobilePanel) {
    menuButton.addEventListener("click", function () {
      var isOpen = mobilePanel.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    document.querySelectorAll("[data-mobile-panel] a, [data-mobile-panel] button").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  function setActivePage() {
    var current = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("[data-nav] a").forEach(function (link) {
      var target = link.getAttribute("href");
      if (target === current) link.setAttribute("aria-current", "page");
    });
  }
  setActivePage();

  function openDialog(service) {
    closeMenu();
    if (dialogScope && service) dialogScope.value = service;
    if (dialog && typeof dialog.showModal === "function" && !dialog.open) {
      dialog.showModal();
    } else if (dialog && !dialog.open) {
      dialog.setAttribute("open", "");
    }
  }

  document.querySelectorAll("[data-open-dialog]").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      openDialog(trigger.getAttribute("data-service"));
    });
  });

  document.querySelectorAll("[data-close-dialog]").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      if (dialog) dialog.close();
    });
  });

  if (dialog) {
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });
  }

  function validateField(field) {
    var valid = field.checkValidity();
    field.setAttribute("aria-invalid", String(!valid));
    return valid;
  }

  if (contactForm) {
    contactForm.querySelectorAll("input, textarea, select").forEach(function (field) {
      field.addEventListener("blur", function () {
        if (field.required || field.value) validateField(field);
      });
      field.addEventListener("input", function () {
        if (field.getAttribute("aria-invalid") === "true") validateField(field);
      });
    });

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var fields = Array.prototype.slice.call(contactForm.querySelectorAll("[required], input[type='email']"));
      var isValid = fields.every(validateField);
      if (!isValid) {
        if (formStatus) formStatus.textContent = "Please complete the highlighted fields.";
        return;
      }

      var button = contactForm.querySelector("button[type='submit']");
      var original = button.getAttribute("data-submit-label") || button.textContent;
      button.textContent = "Preparing...";
      button.setAttribute("aria-busy", "true");
      button.disabled = true;

      window.setTimeout(function () {
        if (formStatus) formStatus.textContent = "Inquiry ready. Use WhatsApp or email to send it to AL ARYAN.";
        button.textContent = original;
        button.removeAttribute("aria-busy");
        button.disabled = false;
      }, 700);
    });
  }

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });

    document.querySelectorAll(".reveal:not(.is-visible)").forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  function updateProgress() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    if (progress) progress.style.width = pct + "%";
    document.documentElement.style.setProperty("--scroll-shift", (window.scrollY * -0.035) + "px");
  }

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);

  document.querySelectorAll(".media-frame img, .project-media img, .image-card img, .client-logo-card img").forEach(function (img) {
    var frame = img.closest(".media-frame, .project-media, .image-card, .client-logo-card");
    function markLoaded() {
      if (frame) frame.classList.remove("is-loading");
    }
    if (img.complete) markLoaded();
    else img.addEventListener("load", markLoaded, { once: true });
  });
})();
