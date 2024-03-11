void (function () {
  document.body.addEventListener("click", handleBodyClicks);

  function handleBodyClicks(clickEvent) {
    /**
     * Handle header hamburger click
     */
    if (clickEvent.target.closest(".c-header__hamburger")) {
      const nav = document.querySelector(".c-header__nav");
      if (nav) {
        nav.classList.toggle("is-visible");
      }
      clickEvent.target
        .closest(".c-header__hamburger")
        .classList.toggle("is-open");
    }

    /**
     * Handle icon search
     */
    if (clickEvent.target.closest(".c-search-container")) {
      // clickEvent.preventDefault();
    }
    if (
      clickEvent.target.closest(".c-search-container") &&
      !clickEvent.target.closest(".c-search-form")
    ) {
      clickEvent.target
        .closest(".c-search-container")
        .classList.toggle("is-clicked");
    }
  }

  // Handle product page functionality
  if (location.pathname.includes("/products")) {
    const swiperEl = document.querySelector(".swiper");

    if (swiperEl) {
      void (function pollForSwiper() {
        if (window.Swiper) {
          const swiper = new Swiper(".swiper", {
            // Optional parameters
            direction: "horizontal",
            loop: false,

            // If we need pagination
            pagination: {
              el: ".swiper-pagination",
            },

            // Navigation arrows
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        } else {
          setTimeout(pollForSwiper, 100);
        }
      })();
    }
  }
})();
