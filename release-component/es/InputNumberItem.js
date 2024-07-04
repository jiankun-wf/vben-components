import { defineComponent as m, openBlock as o, createElementBlock as p, normalizeClass as l, unref as t, createElementVNode as u, toDisplayString as c, createVNode as i, mergeProps as f } from "vue";
import { cg as b, f as d, aQ as g } from "./components.js";
import { b as I } from "./index2.js";
const N = /* @__PURE__ */ m({
  name: "InputNumberItem",
  __name: "InputNumberItem",
  props: {
    event: {
      type: Number
    },
    title: {
      type: String
    }
  },
  setup(n) {
    const s = n, { prefixCls: r } = d("setting-input-number-item");
    function a(e) {
      s.event && I(s.event, e);
    }
    return (e, _) => (o(), p("div", {
      class: l(t(r))
    }, [
      u("span", null, c(n.title), 1),
      i(t(b), f(e.$attrs, {
        size: "small",
        class: `${t(r)}-input-number`,
        onChange: a
      }), null, 16, ["class"])
    ], 2));
  }
}), x = /* @__PURE__ */ g(N, [["__scopeId", "data-v-c179222e"]]);
export {
  x as default
};
