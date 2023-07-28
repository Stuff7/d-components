import "../style.css";
import { defineComponent as n, openBlock as c, createElementBlock as s, normalizeClass as t, normalizeStyle as r } from "vue";
import { keysOf as l } from "../utils.js";
import { _ as i } from "../_plugin-vue_export-helper-dad06003.js";
const o = {
  "exclamation-triangle": '""',
  plus: '"+"',
  trash: '""',
  "chevron-down": '""',
  "angle-double-right": '""',
  check: '""',
  "check-circle": '""',
  times: '""',
  "times-circle": '""',
  spinner: '""',
  refresh: '""'
}, I = l(o), a = /* @__PURE__ */ n({
  __name: "DIcon",
  props: {
    name: {}
  },
  setup(u) {
    return (e, f) => (c(), s("i", {
      class: t(e.$style.DIcon),
      style: r({ "--icon-unicode": o[e.name] })
    }, null, 6));
  }
}), m = "_DIcon_1xie4_6", p = {
  DIcon: m
}, _ = {
  $style: p
}, k = /* @__PURE__ */ i(a, [["__cssModules", _]]);
export {
  k as default,
  I as iconKeys,
  o as iconMap
};
