/* ********** Menu ********** */
((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

/* ********** ContactForm ********** */
((d) => {
  const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/marino.velizv@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status}: ${message}`;
      })
      .finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);
((d) => {
  const $btnScroll = d.querySelector(".btn-scroll-top");
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
    if (e.target.matches(".btn-scroll-top")) {
      w.scrollTo({ behavior: "smooth", top: 0 });
    }
  });
})(document);
((d) => {
  //  declaramos el elementos al que queremos asiganarle el observador
  const $sections = d.querySelectorAll("section[data-scroll-spy]");

  const cb = (entries) => {
    //  por cada section
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        console.log(id);
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
          "scroll-spy-active"
        );
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
          "scroll-spy-active"
        );
      }
    });
  };

  const observer = new IntersectionObserver(cb, {
    threshold: [0.5, 0.75],
  });

  //por cada elemento (seccion se asigna un observador)
  $sections.forEach((el) => observer.observe(el));
})(document);
