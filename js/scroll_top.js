const d = document,
  w = window;

export function scrollTop(selector) {
  const $btnScroll = d.querySelector(selector);
  w.addEventListener("scroll", (e) => {
    // detectra a que distancia se ha separado la barra  scrool
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
    if (scrollTop > 700) {
      $btnScroll.classList.remove("hidden");
    } else {
      $btnScroll.classList.add("hidden");
    }
  });

  d.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.matches(selector)) {
      w.scrollTo({ behavior: "smooth", top: 0 });
    }
  });
}
