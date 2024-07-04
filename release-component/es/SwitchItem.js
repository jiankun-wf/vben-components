import { defineComponent as i, computed as l, openBlock as r, createElementBlock as d, normalizeClass as m, unref as a, createElementVNode as p, toDisplayString as h, createVNode as u, mergeProps as f } from "vue";
import { ce as b, f as g, aQ as C } from "./components.js";
import { b as v } from "./index2.js";
const S = /* @__PURE__ */ i({
  name: "SwitchItem",
  __name: "SwitchItem",
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
      type: Boolean
    }
  },
  setup(t) {
    const e = t, { prefixCls: s } = g("setting-switch-item"), c = l(() => e.def ? { checked: e.def } : {}), o = (n) => {
      e.event && v(e.event, n);
    };
    return (n, _) => (r(), d("div", {
      class: m(a(s))
    }, [
      p("span", null, h(t.title), 1),
      u(a(b), f(c.value, {
        onChange: o,
        disabled: t.disabled,
        checkedChildren: "开",
        unCheckedChildren: "关"
      }), null, 16, ["disabled"])
    ], 2));
  }
}), B = /* @__PURE__ */ C(S, [["__scopeId", "data-v-51b1acb1"]]);
export {
  B as default
};
