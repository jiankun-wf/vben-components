import { defineComponent as i, computed as r, openBlock as c, createElementBlock as d, normalizeClass as m, unref as a, createElementVNode as p, toDisplayString as u, createVNode as f, mergeProps as b } from "vue";
import { cf as g, f as y, aQ as S } from "./components.js";
import { b as v } from "./index2.js";
const V = /* @__PURE__ */ i({
  name: "SelectItem",
  __name: "SelectItem",
  props: {
    event: {
      type: Number
    },
    disabled: {
      type: Boolean
    },
    title: {
      type: String
    },
    def: {
      type: [String, Number]
    },
    initValue: {
      type: [String, Number]
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  setup(t) {
    const e = t, { prefixCls: n } = y("setting-select-item"), l = r(() => e.def ? { value: e.def, defaultValue: e.initValue || e.def } : {}), o = (s) => {
      e.event && v(e.event, s);
    };
    return (s, C) => (c(), d("div", {
      class: m(a(n))
    }, [
      p("span", null, u(t.title), 1),
      f(a(g), b(l.value, {
        class: `${a(n)}-select`,
        onChange: o,
        disabled: t.disabled,
        size: "small",
        options: t.options
      }), null, 16, ["class", "disabled", "options"])
    ], 2));
  }
}), B = /* @__PURE__ */ S(V, [["__scopeId", "data-v-53c4ebaa"]]);
export {
  B as default
};
