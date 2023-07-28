import "../style.css";
import { ref as o, onMounted as s, onUnmounted as u } from "vue";
function c() {
  const n = o(0), t = o(0);
  function e(i) {
    const { clientX: r, clientY: d } = v(i);
    n.value = r, t.value = d;
  }
  return s(() => {
    window.addEventListener("mouseenter", e), window.addEventListener("touchstart", e), window.addEventListener("mousemove", e), window.addEventListener("touchmove", e), window.addEventListener("mouseleave", e), window.addEventListener("touchend", e);
  }), u(() => {
    window.removeEventListener("mouseenter", e), window.removeEventListener("touchstart", e), window.removeEventListener("mousemove", e), window.removeEventListener("touchmove", e), window.removeEventListener("mouseleave", e), window.removeEventListener("touchend", e);
  }), { x: n, y: t };
}
function v(n) {
  return window.TouchEvent && n instanceof TouchEvent ? n.touches[0] : n;
}
export {
  c as default
};
