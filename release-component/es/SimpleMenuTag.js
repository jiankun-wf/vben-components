import { defineComponent as g, computed as c, openBlock as d, createElementBlock as C, normalizeClass as _, toDisplayString as y, createCommentVNode as T } from "vue";
import { aj as p, f as $ } from "./components.js";
const b = /* @__PURE__ */ g({
  name: "SimpleMenuTag",
  __name: "SimpleMenuTag",
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    dot: p.bool,
    collapseParent: p.bool
  },
  setup(u) {
    const s = u, { prefixCls: m } = $("simple-menu"), l = c(() => {
      const { item: t } = s;
      if (!t)
        return !1;
      const { tag: e } = t;
      if (!e)
        return !1;
      const { dot: o, content: n } = e;
      return !(!o && !n);
    }), i = c(() => {
      if (!l.value)
        return "";
      const { item: t, collapseParent: e } = s, { tag: o } = t, { dot: n, content: r } = o;
      return n || e ? "" : r;
    }), f = c(() => {
      const { item: t, collapseParent: e } = s, { tag: o = {} } = t || {}, { dot: n, type: r = "error" } = o, a = `${m}-tag`;
      return [
        a,
        [`${a}--${r}`],
        {
          [`${a}--collapse`]: e,
          [`${a}--dot`]: n || s.dot
        }
      ];
    });
    return (t, e) => l.value ? (d(), C("span", {
      key: 0,
      class: _(f.value)
    }, y(i.value), 3)) : T("", !0);
  }
});
export {
  b as default
};
