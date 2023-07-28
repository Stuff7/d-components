import "../style.css";
import { defineComponent as x, onMounted as R, ref as y, openBlock as r, createElementBlock as c, Fragment as I, createBlock as b, Teleport as C, createVNode as O, Transition as g, withCtx as A, unref as n, normalizeClass as d, normalizeStyle as M, renderSlot as S, createCommentVNode as v } from "vue";
import B from "../composables/hover.js";
import E from "../composables/intersection.js";
import q from "../composables/mouse-position.js";
import { _ as z } from "../_plugin-vue_export-helper-dad06003.js";
const a = "#tooltip-layer";
let t = document.querySelector(a);
t || (t = document.createElement("div"), t.setAttribute("id", a.slice(1)), document.body.appendChild(t));
const D = /* @__PURE__ */ x({
  __name: "DTooltip",
  props: {
    for: {}
  },
  setup(_) {
    const u = _;
    R(() => {
      var o;
      m.value = u.for ? document.querySelector(u.for) : ((o = f.value) == null ? void 0 : o.parentElement) || null;
    });
    const { x: T, y: $ } = q(), l = y({ x: "1rem", y: "1rem" }), [h, m] = B(), f = y(null), k = E((o) => {
      if (o.intersectionRatio < 1) {
        const { boundingClientRect: e, intersectionRect: s } = o;
        let { x: i, y: p } = l.value;
        e.right !== s.right ? i = "-100% - 1rem" : e.left !== s.left && (i = "1rem"), e.top !== s.top ? p = "1rem" : e.bottom !== s.bottom && (p = "-100% - 1rem"), l.value = { x: i, y: p };
      }
    }, { root: t });
    return (o, e) => (r(), c(I, null, [
      (r(), b(C, { to: a }, [
        O(g, {
          "enter-active-class": o.$style.popIn,
          "leave-active-class": o.$style.popIn,
          "enter-from-class": o.$style.popOut,
          "leave-to-class": o.$style.popOut
        }, {
          default: A(() => [
            n(h) ? (r(), c("div", {
              key: 0,
              ref_key: "tooltipRef",
              ref: k,
              role: "tooltip",
              class: d(o.$style.Tooltip),
              style: M({
                "--tooltip-x": `${n(T)}px`,
                "--tooltip-y": `${n($)}px`,
                "--tooltip-position-x": `calc(${l.value.x})`,
                "--tooltip-position-y": `calc(${l.value.y})`
              })
            }, [
              S(o.$slots, "default")
            ], 6)) : v("", !0)
          ]),
          _: 3
        }, 8, ["enter-active-class", "leave-active-class", "enter-from-class", "leave-to-class"])
      ])),
      n(m) ? v("", !0) : (r(), c("span", {
        key: 0,
        ref_key: "anchorRef",
        ref: f,
        class: d(o.$style.TooltipAnchor)
      }, null, 2))
    ], 64));
  }
}), H = "_Tooltip_ixc4k_1", L = "_popIn_ixc4k_17", N = "_popOut_ixc4k_20", P = "_TooltipAnchor_ixc4k_24", V = {
  Tooltip: H,
  popIn: L,
  popOut: N,
  TooltipAnchor: P
}, w = {
  $style: V
}, K = /* @__PURE__ */ z(D, [["__cssModules", w]]);
export {
  K as default
};
