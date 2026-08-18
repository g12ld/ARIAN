(function () {
  var key = "alaryann-theme";
  var saved = null;
  try {
    saved = localStorage.getItem(key);
  } catch (e) {
    saved = null;
  }
  var theme = saved === "light" || saved === "dark" ? saved : "dark";
  document.documentElement.setAttribute("data-theme", theme);

  document.addEventListener("click", function (event) {
    var toggle = event.target.closest("[data-theme-toggle]");
    if (!toggle) return;
    var next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(key, next);
    } catch (e) {
      /* storage unavailable - keep in-memory theme */
    }
  });
})();
