import "../style.css";
import { defineComponent as n, openBlock as s, createElementBlock as c, normalizeClass as t, normalizeStyle as l } from "vue";
import { keysOf as r } from "../utils.js";
import { _ as a } from "../_plugin-vue_export-helper-dad06003.js";
const e = {
  "exclamation-triangle": '""',
  plus: '"+"',
  trash: '""',
  "chevron-down": '""',
  check: '""',
  "angle-double-right": '""'
}, h = r(e), i = /* @__PURE__ */ n({
  __name: "DIcon",
  props: {
    name: {}
  },
  setup(u) {
    return (o, f) => (s(), c("i", {
      class: t(o.$style.DIcon),
      style: l({ "--icon-unicode": e[o.name] })
    }, null, 6));
  }
}), m = "_DIcon_1xie4_6", p = {
  DIcon: m
}, _ = {
  $style: p
}, k = /* @__PURE__ */ a(i, [["__cssModules", _]]);
export {
  k as default,
  h as iconKeys,
  e as iconMap
};
