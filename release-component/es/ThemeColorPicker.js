import { defineComponent as m, openBlock as i, createElementBlock as s, normalizeClass as c, unref as t, Fragment as u, renderList as d, normalizeStyle as f, createVNode as p } from "vue";
import { ca as k, f as C } from "./components.js";
import { b as _ } from "./index2.js";
const h = ["onClick"], L = /* @__PURE__ */ m({
  name: "ThemeColorPicker",
  __name: "ThemeColorPicker",
  props: {
    colorList: {
      type: Array,
      default: () => []
    },
    event: {
      type: Number
    },
    def: {
      type: String
    }
  },
  setup(n) {
    const a = n, { prefixCls: r } = C("setting-theme-picker");
    function l(o) {
      a.event && _(a.event, o);
    }
    return (o, y) => (i(), s("div", {
      class: c(t(r))
    }, [
      (i(!0), s(u, null, d(n.colorList || [], (e) => (i(), s("span", {
        key: e,
        onClick: (v) => l(e),
        class: c([
          `${t(r)}__item`,
          {
            [`${t(r)}__item--active`]: n.def === e
          }
        ]),
        style: f({ background: e })
      }, [
        p(t(k))
      ], 14, h))), 128))
    ], 2));
  }
});
export {
  L as default
};
