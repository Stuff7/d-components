import "../style.css";
import { ref as v, watchEffect as f } from "vue";
function i(o, t = {}) {
  const e = v(null);
  return f((n) => {
    if (!e.value)
      return;
    const { root: s = document.body, threshold: u = 1 } = t, r = new IntersectionObserver(([c]) => {
      o(c);
    }, { root: s, threshold: u, ...t });
    r.observe(e.value), n(() => {
      r && e.value && (r.unobserve(e.value), r.disconnect());
    });
  }), e;
}
export {
  i as default
};
