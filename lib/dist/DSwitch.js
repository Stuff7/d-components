import "./DSwitch.css";
import { defineComponent as n, openBlock as a, createElementBlock as c, normalizeClass as o, createElementVNode as l, mergeProps as i, renderSlot as p } from "vue";
import { _ as r } from "./_plugin-vue_export-helper-dad06003.mjs";
const u = ["checked"], d = /* @__PURE__ */ n({
  __name: "DSwitch",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup($) {
    return (e, t) => (a(), c("div", {
      class: o(e.$style.DSwitch)
    }, [
      l("input", i({
        class: e.$style.nativeInput,
        type: "checkbox",
        checked: e.modelValue
      }, e.$attrs, {
        onChange: t[0] || (t[0] = (s) => e.$emit("update:modelValue", s.target.checked))
      }), null, 16, u),
      l("label", {
        class: o(e.$style.toggle)
      }, null, 2),
      p(e.$slots, "default", { checked: e.modelValue })
    ], 2));
  }
}), m = "_DSwitch_1wbih_1", h = "_toggle_1wbih_8", _ = "_nativeInput_1wbih_32", g = {
  DSwitch: m,
  toggle: h,
  nativeInput: _
}, w = {
  $style: g
}, S = /* @__PURE__ */ r(d, [["__cssModules", w]]);
export {
  S as default
};
