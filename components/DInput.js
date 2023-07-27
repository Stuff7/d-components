import "../style.css";
import { defineComponent as f, computed as y, ref as c, openBlock as r, createElementBlock as i, normalizeClass as u, createBlock as b, resolveDynamicComponent as z, mergeProps as $, createElementVNode as x, toDisplayString as m, createVNode as I, createTextVNode as V, createCommentVNode as D } from "vue";
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
  setup(d, { emit: s }) {
    const p = d, v = /^-?(\d+\.?\d*|\d*\.?\d+)$/, a = y({
      get() {
        return p.modelValue;
      },
      set(e) {
        s("update:modelValue", e.toString());
      }
    }), l = c(null), o = c(!1);
    function _(e) {
      l.value = null;
      const n = a.value, { target: t } = e;
      (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) && (a.value = t.value, p.type === "text" || v.test(`${t.value}0`) ? s("update:modelValue", t.value) : (a.value = n, l.value = "Only numbers!", o.value = !0));
    }
    return (e, n) => (r(), i("div", {
      class: u({ [e.$style.DInput]: !0, [e.$style.buzz]: o.value }),
      "data-error": l.value,
      onAnimationend: n[0] || (n[0] = (t) => o.value = !1)
    }, [
      (r(), b(z(e.textarea ? "textarea" : "input"), $({
        class: e.$style.input,
        type: "text",
        value: a.value,
        placeholder: " "
      }, e.$attrs, { onInput: _ }), null, 16, ["class", "value"])),
      x("label", {
        class: u(e.$style.label)
      }, m(e.label), 3),
      l.value ? (r(), i("p", {
        key: 0,
        class: u(e.$style.error)
      }, [
        I(E, { name: "exclamation-triangle" }),
        V(" " + m(l.value), 1)
      ], 2)) : D("", !0)
    ], 42, g));
  }
}), j = "_DInput_1vxjl_1", B = "_input_1vxjl_7", M = "_label_1vxjl_10", k = "_error_1vxjl_26", C = "_buzz_1vxjl_71", A = {
  DInput: j,
  input: B,
  label: M,
  error: k,
  buzz: C
}, H = {
  $style: A
}, O = /* @__PURE__ */ T(N, [["__cssModules", H]]);
export {
  O as default
};
