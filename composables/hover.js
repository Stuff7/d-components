import "../style.css";
import { ref as s, onMounted as a, onUnmounted as i } from "vue";
function l() {
  const n = s(null), v = s(!1);
  function u() {
    v.value = !0;
  }
  function r(e) {
    if (window.TouchEvent && e instanceof TouchEvent) {
      const t = e.changedTouches[0];
      if (this === document.elementFromPoint(t.clientX, t.clientY))
        return;
    }
    v.value = !1;
  }
  return a(() => {
    var e, t, o;
    (e = n.value) == null || e.addEventListener("mouseenter", u), (t = n.value) == null || t.addEventListener("touchstart", u), (o = n.value) == null || o.addEventListener("mouseleave", r), document.addEventListener("touchend", r);
  }), i(() => {
    var e, t, o;
    (e = n.value) == null || e.removeEventListener("mouseenter", u), (t = n.value) == null || t.removeEventListener("touchstart", u), (o = n.value) == null || o.removeEventListener("mouseleave", r), document.removeEventListener("touchend", r);
  }), [v, n];
}
export {
  l as default
};
