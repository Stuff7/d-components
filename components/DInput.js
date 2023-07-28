import "../style.css";
import { defineComponent as f, computed as y, ref as d, openBlock as u, createElementBlock as m, normalizeClass as r, createBlock as b, resolveDynamicComponent as z, mergeProps as $, createElementVNode as x, toDisplayString as c, createVNode as I, createTextVNode as V, createCommentVNode as D } from "vue";
import E from "./DIcon.js";
import { _ as T } from "../_plugin-vue_export-helper-dad06003.js";
import "../utils.js";
const g = ["data-error"], N = /* @__PURE__ */ f({
  __name: "DInput",
  props: {
    label: { default: "" },
    modelValue: {},
    type: { default: "text" },
    textarea: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(i, { emit: s }) {
    const p = i, v = /^-?(\d+\.?\d*|\d*\.?\d+)$/, a = y({
      get() {
        return p.modelValue;
      },
      set(e) {
        s("update:modelValue", e.toString());
      }
    }), l = d(null), o = d(!1);
    function _(e) {
      l.value = null;
      const n = a.value, { target: t } = e;
      (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) && (a.value = t.value, p.type === "text" || v.test(`${t.value}0`) ? s("update:modelValue", t.value) : (a.value = n, l.value = "Only numbers!", o.value = !0));
    }
    return (e, n) => (u(), m("div", {
      class: r({ [e.$style.DInput]: !0, [e.$style.buzz]: o.value }),
      "data-error": l.value,
      onAnimationend: n[0] || (n[0] = (t) => o.value = !1)
    }, [
      (u(), b(z(e.textarea ? "textarea" : "input"), $({
        class: e.$style.input,
        type: "text",
        value: a.value,
        inputmode: e.type === "number" ? "numeric" : "text",
        placeholder: " "
      }, e.$attrs, { onInput: _ }), null, 16, ["class", "value", "inputmode"])),
      x("label", {
        class: r(e.$style.label)
      }, c(e.label), 3),
      l.value ? (u(), m("p", {
        key: 0,
        class: r(e.$style.error)
      }, [
        I(E, { name: "exclamation-triangle" }),
        V(" " + c(l.value), 1)
      ], 2)) : D("", !0)
    ], 42, g));
  }
}), B = "_DInput_1d9vx_1", M = "_input_1d9vx_7", k = "_label_1d9vx_10", C = "_error_1d9vx_26", A = "_buzz_1d9vx_72", H = {
  DInput: B,
  input: M,
  label: k,
  error: C,
  buzz: A
}, L = {
  $style: H
}, U = /* @__PURE__ */ T(N, [["__cssModules", L]]);
export {
  U as default
};
