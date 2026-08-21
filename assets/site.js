(function () {
  document.body.classList.add("js-ready");

  var menuButton = document.querySelector("[data-menu-button]");
  var mobilePanel = document.querySelector("[data-mobile-panel]");
  var dialog = document.querySelector("[data-dialog]");
  var dialogScope = document.querySelector("[data-dialog-scope]");
  var progress = document.querySelector("[data-progress]");
  var contactForm = document.querySelector("[data-contact-form]");
  var formStatus = document.querySelector("[data-form-status]");
  var companyEmail = "info@alaryann.com";

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

  function getFormValue(form, name) {
    var field = form.elements[name];
    return field ? String(field.value || "").trim() : "";
  }

  function buildMailtoLink(form) {
    var name = getFormValue(form, "name");
    var phone = getFormValue(form, "phone");
    var email = getFormValue(form, "email");
    var scope = getFormValue(form, "scope");
    var message = getFormValue(form, "message");
    var subject = "AL ARYAN inquiry - " + (scope || "Project requirement");
    var body = [
      "Hello AL ARYAN team,",
      "",
      "Please review this project inquiry:",
      "",
      "Name: " + name,
      "Phone: " + phone,
      "Email: " + (email || "Not provided"),
      "Scope: " + scope,
      "",
      "Project notes:",
      message,
      "",
      "Thank you."
    ].join("\n");

    return "mailto:" + companyEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
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
      var original = button ? button.getAttribute("data-submit-label") || button.textContent : "";
      if (button) {
        button.textContent = "Opening email...";
        button.setAttribute("aria-busy", "true");
        button.disabled = true;
      }
      if (formStatus) formStatus.textContent = "Opening a ready email message to info@alaryann.com.";
      window.location.href = buildMailtoLink(contactForm);

      window.setTimeout(function () {
        if (button) {
          button.textContent = original;
          button.removeAttribute("aria-busy");
          button.disabled = false;
        }
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

  document.querySelectorAll("[data-faq-toggle]").forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      var item = toggle.closest(".faq-item");
      if (!item) return;
      var isOpen = item.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      var panel = item.querySelector("[data-faq-panel]");
      if (panel) panel.inert = !isOpen;
    });
  });
})();

(function () {
  var loader = document.getElementById("page-loader");
  if (!loader) return;

  var boot = Date.now();
  var done = false;

  function finish() {
    if (done) return;
    done = true;
    var elapsed = Date.now() - boot;
    setTimeout(function () {
      loader.classList.add("is-hidden");
    }, Math.max(0, 450 - elapsed));
  }

  if (document.readyState === "complete") {
    finish();
  } else {
    window.addEventListener("load", finish);
  }

  setTimeout(finish, 2500);
})();

(function () {
  var search = document.getElementById("prodSearch");
  var chips = document.getElementById("prodChips");
  var noResults = document.getElementById("noResults");
  if (!search || !chips) return;

  var rows = document.querySelectorAll(".product-row[data-cat]");
  var activeCat = "all";

  function filterProducts() {
    var q = search.value.toLowerCase().trim();
    var visible = 0;
    rows.forEach(function (row) {
      var cat = row.getAttribute("data-cat") || "";
      var name = (row.getAttribute("data-name") || "").toLowerCase();
      var text = row.textContent.toLowerCase();
      var catMatch = activeCat === "all" || cat === activeCat;
      var textMatch = !q || name.indexOf(q) !== -1 || text.indexOf(q) !== -1;
      var show = catMatch && textMatch;
      row.style.display = show ? "" : "none";
      if (show) visible++;
    });
    if (noResults) noResults.style.display = visible === 0 ? "" : "none";
  }

  search.addEventListener("input", filterProducts);

  chips.addEventListener("click", function (e) {
    var btn = e.target.closest(".chip");
    if (!btn) return;
    chips.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("active"); });
    btn.classList.add("active");
    activeCat = btn.getAttribute("data-cat") || "all";
    filterProducts();
  });
})();
