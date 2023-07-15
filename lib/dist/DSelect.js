import "./DSelect.css";
import { defineComponent as g, openBlock as c, createElementBlock as r, normalizeClass as d, unref as o, Fragment as v, renderList as S, normalizeStyle as _, toDisplayString as f, createCommentVNode as V, createElementVNode as b, renderSlot as h, createTextVNode as D, createVNode as k } from "vue";
import K from "./DIcon.js";
import { _ as $ } from "./_plugin-vue_export-helper-dad06003.mjs";
function C(u) {
  const n = typeof u;
  return n === "string" || n === "number" || n === "symbol";
}
const N = ["value"], z = ["value", "selected"], E = /* @__PURE__ */ g({
  __name: "DSelect",
  props: {
    options: {},
    modelValue: {},
    labelKey: { default: "label" },
    valueKey: { default: "value" },
    styleKey: { default: "style" }
  },
  emits: ["update:modelValue"],
  setup(u, { emit: n }) {
    const s = u;
    function y({ target: e }) {
      if (e instanceof HTMLSelectElement) {
        const t = s.options.find((l) => l[s.valueKey] === e.value);
        t && n("update:modelValue", t);
      }
    }
    function i(e) {
      const t = e[this];
      if (C(t))
        return t;
    }
    const a = i.bind(s.valueKey), m = i.bind(s.labelKey), p = (e) => {
      const t = e[s.styleKey];
      if (typeof t == "object" && t || typeof t == "string")
        return t;
    };
    return (e, t) => (c(), r("div", {
      class: d(e.$style.DSelect)
    }, [
      e.options.length ? (c(), r("select", {
        key: 0,
        class: d(e.$style.nativeSelect),
        value: o(a)(e.modelValue),
        onChange: y
      }, [
        (c(!0), r(v, null, S(e.options, (l) => (c(), r("option", {
          key: o(a)(l),
          value: o(a)(l),
          selected: o(a)(l) === o(a)(e.modelValue),
          style: _(p(l))
        }, f(o(m)(l)), 13, z))), 128))
      ], 42, N)) : V("", !0),
      b("button", {
        class: d(e.$style.toggle)
      }, [
        h(e.$slots, "default", { selected: e.modelValue }, () => [
          D(f(o(m)(e.modelValue)), 1)
        ]),
        k(K, {
          name: "chevron-down",
          size: "var(--p-sm-100)"
        })
      ], 2)
    ], 2));
  }
}), L = "_DSelect_1kdhf_1", M = "_toggle_1kdhf_5", B = "_nativeSelect_1kdhf_22", I = {
  DSelect: L,
  toggle: M,
  nativeSelect: B
}, T = {
  $style: I
}, O = /* @__PURE__ */ $(E, [["__cssModules", T]]);
export {
  O as default
};
