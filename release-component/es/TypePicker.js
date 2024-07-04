import { defineComponent as r, openBlock as o, createElementBlock as i, normalizeClass as s, unref as n, Fragment as l, renderList as p, createBlock as d, withCtx as u, createElementVNode as a, pushScopeId as _, popScopeId as f } from "vue";
import { Y as m, f as y, aQ as k } from "./components.js";
const h = (e) => (_("data-v-394f7c8e"), e = e(), f(), e), v = ["onClick"], x = /* @__PURE__ */ h(() => /* @__PURE__ */ a("div", { class: "mix-sidebar" }, null, -1)), C = [
  x
], T = /* @__PURE__ */ r({
  name: "MenuTypePicker",
  __name: "TypePicker",
  props: {
    menuTypeList: {
      type: Array,
      default: () => []
    },
    handler: {
      type: Function,
      default: () => ({})
    },
    def: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const { prefixCls: c } = y("setting-menu-type-picker");
    return ($, g) => (o(), i("div", {
      class: s(n(c))
    }, [
      (o(!0), i(l, null, p(e.menuTypeList || [], (t) => (o(), d(n(m), {
        key: t.title,
        title: t.title,
        placement: "bottom"
      }, {
        default: u(() => [
          a("div", {
            onClick: (I) => e.handler(t),
            class: s([
              `${n(c)}__item`,
              `${n(c)}__item--${t.type}`,
              {
                [`${n(c)}__item--active`]: e.def === t.type
              }
            ])
          }, C, 10, v)
        ]),
        _: 2
      }, 1032, ["title"]))), 128))
    ], 2));
  }
}), L = /* @__PURE__ */ k(T, [["__scopeId", "data-v-394f7c8e"]]);
export {
  L as default
};
