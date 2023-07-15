import "./DIcon.css";
import { defineComponent as n, openBlock as s, createElementBlock as c, normalizeClass as t, normalizeStyle as l } from "vue";
import { _ as r } from "./_plugin-vue_export-helper-dad06003.mjs";
const a = /* @__PURE__ */ n({
  __name: "DIcon",
  props: {
    name: {}
  },
  setup(p) {
    const e = {
      "exclamation-triangle": '""',
      plus: '"+"',
      trash: '""',
      "chevron-down": '""'
    };
    return (o, u) => (s(), c("i", {
      class: t(o.$style.DIcon),
      style: l({ "--icon-unicode": e[o.name] })
    }, null, 6));
  }
}), _ = "_DIcon_1xie4_6", m = {
  DIcon: _
}, i = {
  $style: m
}, D = /* @__PURE__ */ r(a, [["__cssModules", i]]);
export {
  D as default
};
