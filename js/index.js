import scrollSpy from "./scroll_spy.js";
import { scrollTop } from "/js/scroll_top.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  scrollTop(".btn-scroll-top");
  scrollSpy();
});
