import "../style.css";
import { defineComponent as n, openBlock as a, createElementBlock as c, normalizeClass as o, createElementVNode as l, mergeProps as p, renderSlot as r } from "vue";
import { _ as i } from "../_plugin-vue_export-helper-dad06003.js";
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
      l("input", p({
        class: e.$style.nativeInput,
        type: "checkbox",
        checked: e.modelValue
      }, e.$attrs, {
        onChange: t[0] || (t[0] = (s) => e.$emit("update:modelValue", s.target.checked))
      }), null, 16, u),
      l("label", {
        class: o(e.$style.toggle)
      }, null, 2),
      r(e.$slots, "default", { checked: e.modelValue })
    ], 2));
  }
}), m = "_DSwitch_1f7tt_1", _ = "_toggle_1f7tt_9", h = "_nativeInput_1f7tt_31", g = {
  DSwitch: m,
  toggle: _,
  nativeInput: h
}, f = {
  $style: g
}, w = /* @__PURE__ */ i(d, [["__cssModules", f]]);
export {
  w as default
};
