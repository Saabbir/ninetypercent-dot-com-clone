document.body.addEventListener("click", handleBodyClicks);

function handleBodyClicks(clickEvent) {
  if (clickEvent.target.closest(".c-header__hamburger")) {
    const nav = document.querySelector(".c-header__nav");
    if (nav) {
      nav.classList.toggle("is-visible");
    }
    clickEvent.target
      .closest(".c-header__hamburger")
      .classList.toggle("is-open");
  }
}
