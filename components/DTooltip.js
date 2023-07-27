import "../style.css";
import { defineComponent as R, onMounted as $, ref as f, openBlock as c, createElementBlock as d, Fragment as g, unref as i, createBlock as b, Teleport as A, createElementVNode as C, normalizeClass as y, normalizeStyle as E, renderSlot as M, createCommentVNode as _ } from "vue";
import S from "../composables/hover.js";
import B from "../composables/intersection.js";
import q from "../composables/mouse-position.js";
import { _ as z } from "../_plugin-vue_export-helper-dad06003.js";
const p = "#tooltip-layer";
let t = document.querySelector(p);
t || (t = document.createElement("div"), t.setAttribute("id", p.slice(1)), document.body.appendChild(t));
const D = /* @__PURE__ */ R({
  __name: "DTooltip",
  props: {
    for: {}
  },
  setup(v) {
    const a = v;
    $(() => {
      var o;
      m.value = a.for ? document.querySelector(a.for) : ((o = u.value) == null ? void 0 : o.parentElement) || null;
    });
    const { x: T, y: h } = q(), l = f({ x: "1rem", y: "1rem" }), [k, m] = S(), u = f(null), x = B((o) => {
      if (o.intersectionRatio < 1) {
        const { boundingClientRect: e, intersectionRect: r } = o;
        let { x: n, y: s } = l.value;
        e.right !== r.right ? n = "-100% - 1rem" : e.left !== r.left && (n = "1rem"), e.top !== r.top ? s = "1rem" : e.bottom !== r.bottom && (s = "-100% - 1rem"), l.value = { x: n, y: s };
      }
    }, { root: t });
    return (o, e) => (c(), d(g, null, [
      i(k) ? (c(), b(A, {
        key: 0,
        to: p
      }, [
        C("div", {
          ref_key: "tooltipRef",
          ref: x,
          role: "tooltip",
          class: y(o.$style.Tooltip),
          style: E({
            "--tooltip-x": `${i(T)}px`,
            "--tooltip-y": `${i(h)}px`,
            "--tooltip-position-x": `calc(${l.value.x})`,
            "--tooltip-position-y": `calc(${l.value.y})`
          })
        }, [
          M(o.$slots, "default")
        ], 6)
      ])) : _("", !0),
      i(m) ? _("", !0) : (c(), d("span", {
        key: 1,
        ref_key: "anchorRef",
        ref: u,
        class: y(o.$style.TooltipAnchor)
      }, null, 2))
    ], 64));
  }
}), H = "_Tooltip_12gk4_1", I = "_TooltipAnchor_12gk4_17", L = {
  Tooltip: H,
  TooltipAnchor: I
}, N = {
  $style: L
}, j = /* @__PURE__ */ z(D, [["__cssModules", N]]);
export {
  j as default
};
