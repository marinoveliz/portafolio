const d = document;
export default function scrollSpy() {
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
}
