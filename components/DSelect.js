import "../style.css";
import { defineComponent as g, ref as b, openBlock as n, createElementBlock as d, normalizeClass as r, unref as s, Fragment as S, renderList as V, normalizeStyle as D, toDisplayString as f, createCommentVNode as $, createElementVNode as K, renderSlot as _, createTextVNode as h, createVNode as C } from "vue";
import k from "./DIcon.js";
import { isIndexable as B } from "../utils.js";
import { _ as N } from "../_plugin-vue_export-helper-dad06003.js";
const z = ["value", "disabled"], E = ["value", "selected"], L = /* @__PURE__ */ g({
  __name: "DSelect",
  props: {
    options: {},
    modelValue: { default: void 0 },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: !1 },
    labelKey: { default: "label" },
    valueKey: { default: "value" },
    styleKey: { default: "style" }
  },
  emits: ["update:modelValue"],
  setup(m, { emit: v }) {
    const a = m, u = b(!1);
    function y({ target: e }) {
      if (e instanceof HTMLSelectElement) {
        const l = a.options.find((t) => t[a.valueKey] === e.value);
        l && v("update:modelValue", l);
      }
    }
    function c(e) {
      const l = e == null ? void 0 : e[this];
      if (B(l))
        return l;
    }
    const o = c.bind(a.valueKey), i = c.bind(a.labelKey), p = (e) => {
      const l = e == null ? void 0 : e[a.styleKey];
      if (typeof l == "object" && l || typeof l == "string")
        return l;
    };
    return (e, l) => (n(), d("div", {
      class: r(e.$style.DSelect)
    }, [
      e.options.length ? (n(), d("select", {
        key: 0,
        class: r(e.$style.nativeSelect),
        value: s(o)(e.modelValue),
        disabled: e.disabled,
        onChange: y,
        onFocus: l[0] || (l[0] = (t) => u.value = !0),
        onBlur: l[1] || (l[1] = (t) => u.value = !1)
      }, [
        (n(!0), d(S, null, V(e.options, (t) => (n(), d("option", {
          key: s(o)(t),
          value: s(o)(t),
          selected: s(o)(t) === s(o)(e.modelValue),
          style: D(p(t))
        }, f(s(i)(t)), 13, E))), 128))
      ], 42, z)) : $("", !0),
      K("button", {
        class: r(e.$style.toggle),
        tabindex: "-1"
      }, [
        _(e.$slots, "default", {
          selected: e.modelValue,
          focused: u.value
        }, () => [
          h(f(e.modelValue ? s(i)(e.modelValue) : e.placeholder), 1)
        ]),
        C(k, {
          name: "chevron-down",
          size: "var(--p-sm-100)"
        })
      ], 2)
    ], 2));
  }
}), M = "_DSelect_1gpvp_1", F = "_toggle_1gpvp_5", I = "_nativeSelect_1gpvp_22", T = {
  DSelect: M,
  toggle: F,
  nativeSelect: I
}, j = {
  $style: T
}, A = /* @__PURE__ */ N(L, [["__cssModules", j]]);
export {
  A as default
};
