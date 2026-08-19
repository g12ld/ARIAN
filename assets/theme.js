(function () {
  var key = "alaryann-theme";
  var root = document.documentElement;
  var saved = null;
  try {
    saved = localStorage.getItem(key);
  } catch (e) {
    saved = null;
  }
  var systemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  var theme = saved === "light" || saved === "dark" ? saved : (systemDark ? "dark" : "light");
  root.setAttribute("data-theme", theme);

  var themeColor = document.querySelector('meta[name="theme-color"]');
  function syncChrome(next) {
    if (themeColor) themeColor.setAttribute("content", next === "light" ? "#FFFFFF" : "#2F3130");
  }
  syncChrome(theme);

  function apply(next) {
    root.setAttribute("data-theme", next);
    syncChrome(next);
    try {
      localStorage.setItem(key, next);
    } catch (e) {
      /* storage unavailable - keep in-memory theme */
    }
  }

  document.addEventListener("click", function (event) {
    var toggle = event.target.closest("[data-theme-toggle]");
    if (!toggle) return;
    apply(root.getAttribute("data-theme") === "light" ? "dark" : "light");
  });

  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    var followSystem = function (event) {
      var current = null;
      try {
        current = localStorage.getItem(key);
      } catch (e) {
        current = null;
      }
      if (current !== "light" && current !== "dark") {
        var next = event.matches ? "dark" : "light";
        root.setAttribute("data-theme", next);
        syncChrome(next);
      }
    };
    if (mq.addEventListener) mq.addEventListener("change", followSystem);
    else if (mq.addListener) mq.addListener(followSystem);
  }
})();
