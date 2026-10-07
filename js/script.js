(function () {
  "use strict";

  var root = document.documentElement;
  var STORAGE_KEY = "gk-theme";

  // ---- Theme toggle: respects the OS preference until the visitor picks
  // one explicitly, then remembers that choice for next time. ----
  var themeToggle = document.getElementById("themeToggle");
  var stored = null;
  try {
    stored = localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    /* localStorage unavailable (private browsing, etc.) - fall back to OS preference only */
  }
  if (stored === "light" || stored === "dark") {
    root.setAttribute("data-theme", stored);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      var current = root.getAttribute("data-theme") || (prefersDark ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        /* nothing we can do without storage - the toggle still works for this visit */
      }
    });
  }

  // ---- Mobile nav ----
  var burger = document.getElementById("navBurger");
  var mobileNav = document.getElementById("navMobile");
  if (burger && mobileNav) {
    burger.addEventListener("click", function () {
      var isOpen = mobileNav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---- Animated counters for stats ----
  var animatedCounters = document.querySelectorAll(".counter");
  var counterObserverOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -60px 0px"
  };

  var counterAnimated = new Set();

  if ("IntersectionObserver" in window && animatedCounters.length) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !counterAnimated.has(entry.target)) {
          counterAnimated.add(entry.target);
          animateCounter(entry.target);
        }
      });
    }, counterObserverOptions);

    animatedCounters.forEach(function (el) {
      counterObserver.observe(el);
    });
  } else {
    animatedCounters.forEach(function (el) {
      animateCounter(el);
    });
  }

  function animateCounter(element) {
    var target = parseFloat(element.getAttribute("data-target"));
    var decimals = parseInt(element.getAttribute("data-decimals")) || 1;
    var duration = 2000; // 2 second animation
    var start = Date.now();
    var initial = 0;

    var animate = function () {
      var now = Date.now();
      var progress = Math.min((now - start) / duration, 1);
      var value = initial + (target - initial) * easeOutQuad(progress);
      element.textContent = value.toFixed(decimals).replace(/\.?0+$/, '');

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = target.toFixed(decimals).replace(/\.?0+$/, '');
      }
    };

    animate();
  }

  function easeOutQuad(t) {
    return t * (2 - t);
  }

  // ---- Scroll-reveal ----
  var revealTargets = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealTargets.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealTargets.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  // ---- Footer year ----
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
