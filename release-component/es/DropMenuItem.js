import { defineComponent as c, getCurrentInstance as m, computed as p, openBlock as i, createBlock as l, unref as u, withCtx as d, createElementVNode as r, createVNode as f, toDisplayString as _ } from "vue";
import { aj as s, M as x, an as y } from "./components.js";
const g = { class: "flex items-center" }, M = /* @__PURE__ */ c({
  name: "DropdownMenuItem",
  __name: "DropMenuItem",
  props: {
    text: s.string,
    icon: s.string
  },
  setup(o) {
    const e = m(), a = p(() => {
      var t, n;
      return (n = (t = e == null ? void 0 : e.vnode) == null ? void 0 : t.props) == null ? void 0 : n.key;
    });
    return (t, n) => (i(), l(u(x).Item, { key: a.value }, {
      default: d(() => [
        r("span", g, [
          f(y, {
            icon: o.icon,
            class: "mr-1"
          }, null, 8, ["icon"]),
          r("span", null, _(o.text), 1)
        ])
      ]),
      _: 1
    }));
  }
});
export {
  M as default
};
