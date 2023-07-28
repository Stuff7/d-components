import "../style.css";
import { defineComponent as t, openBlock as l, createElementBlock as n, normalizeClass as o, createElementVNode as s, renderSlot as d } from "vue";
import { _ as a } from "../_plugin-vue_export-helper-dad06003.js";
const c = /* @__PURE__ */ t({
  __name: "DFoldable",
  props: {
    folded: { type: Boolean }
  },
  setup(m) {
    return (e, y) => (l(), n("div", {
      class: o({ [e.$style.DFoldable]: !0, [e.$style.folded]: e.folded })
    }, [
      s("div", {
        class: o(e.$style.content)
      }, [
        d(e.$slots, "default", {
          contentClass: e.$style.defaultContent
        })
      ], 2)
    ], 2));
  }
}), r = "_DFoldable_ie61k_1", _ = "_defaultContent_ie61k_7", f = "_content_ie61k_12", p = "_folded_ie61k_18", i = {
  DFoldable: r,
  defaultContent: _,
  content: f,
  folded: p
}, u = {
  $style: i
}, k = /* @__PURE__ */ a(c, [["__cssModules", u]]);
export {
  k as default
};
