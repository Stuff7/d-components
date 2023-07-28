import "../style.css";
import { defineComponent as n, openBlock as a, createElementBlock as c, normalizeClass as o, createElementVNode as l, mergeProps as m, renderSlot as p } from "vue";
import { _ as r } from "../_plugin-vue_export-helper-dad06003.js";
const i = ["checked"], u = /* @__PURE__ */ n({
  __name: "DSwitch",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(f) {
    return (e, t) => (a(), c("div", {
      class: o(e.$style.DSwitch)
    }, [
      l("input", m({
        class: e.$style.nativeInput,
        type: "checkbox",
        checked: e.modelValue
      }, e.$attrs, {
        onChange: t[0] || (t[0] = (s) => e.$emit("update:modelValue", s.target.checked))
      }), null, 16, i),
      l("label", {
        class: o(e.$style.toggle)
      }, null, 2),
      p(e.$slots, "default", { checked: e.modelValue })
    ], 2));
  }
}), d = "_DSwitch_4m3q8_1", _ = "_toggle_4m3q8_11", h = "_nativeInput_4m3q8_33", g = {
  DSwitch: d,
  toggle: _,
  nativeInput: h
}, $ = {
  $style: g
}, w = /* @__PURE__ */ r(u, [["__cssModules", $]]);
export {
  w as default
};
