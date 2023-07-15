import "./DInput.css";
import { defineComponent as _, ref as r, openBlock as s, createElementBlock as c, normalizeClass as u, createBlock as f, resolveDynamicComponent as b, mergeProps as z, createElementVNode as $, toDisplayString as i, createVNode as I, createTextVNode as g, createCommentVNode as D } from "vue";
import V from "./DIcon.js";
import { _ as E } from "./_plugin-vue_export-helper-dad06003.mjs";
const T = ["data-error"], N = /* @__PURE__ */ _({
  __name: "DInput",
  props: {
    label: { default: "" },
    modelValue: {},
    type: { default: "text" },
    textarea: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(m, { emit: d }) {
    const p = m, v = /^-?(\d+\.?\d*|\d*\.?\d+)$/, l = r(p.modelValue), a = r(null), o = r(!1);
    function y(e) {
      a.value = null;
      const n = l.value, { target: t } = e;
      (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) && (l.value = t.value, p.type === "text" || v.test(`${t.value}0`) ? d("update:modelValue", t.value) : (l.value = n, a.value = "Only numbers!", o.value = !0));
    }
    return (e, n) => (s(), c("div", {
      class: u({ [e.$style.DInput]: !0, [e.$style.buzz]: o.value }),
      "data-error": a.value,
      onAnimationend: n[0] || (n[0] = (t) => o.value = !1)
    }, [
      (s(), f(b(e.textarea ? "textarea" : "input"), z({
        class: e.$style.input,
        type: "text",
        value: l.value,
        placeholder: " "
      }, e.$attrs, { onInput: y }), null, 16, ["class", "value"])),
      $("label", {
        class: u(e.$style.label)
      }, i(e.label), 3),
      a.value ? (s(), c("p", {
        key: 0,
        class: u(e.$style.error)
      }, [
        I(V, { name: "exclamation-triangle" }),
        g(" " + i(a.value), 1)
      ], 2)) : D("", !0)
    ], 42, T));
  }
}), j = "_DInput_yaagj_1", x = "_input_yaagj_7", B = "_label_yaagj_10", M = "_error_yaagj_25", k = "_buzz_yaagj_62", C = {
  DInput: j,
  input: x,
  label: B,
  error: M,
  buzz: k
}, A = {
  $style: C
}, h = /* @__PURE__ */ E(N, [["__cssModules", A]]);
export {
  h as default
};
