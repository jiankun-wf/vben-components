import { defineComponent as s, computed as c, openBlock as i, createBlock as l, unref as t, withCtx as e, createVNode as r } from "vue";
import { au as m, bt as _, Y as f, Z as p, an as E, e as g } from "./components.js";
const b = /* @__PURE__ */ s({
  name: "ErrorAction",
  __name: "ErrorAction",
  setup(d) {
    const { push: n } = m(), o = _(), a = c(() => o.getErrorLogListCount);
    function u() {
      n(g.ERROR_LOG_PAGE).then(() => {
        o.setErrorLogListCount(0);
      });
    }
    return (L, C) => (i(), l(t(f), {
      title: "错误日志",
      placement: "bottom",
      mouseEnterDelay: 0.5,
      onClick: u
    }, {
      default: e(() => [
        r(t(p), {
          count: a.value,
          offset: [0, 10],
          overflowCount: 99
        }, {
          default: e(() => [
            r(E, { icon: "ion:bug-outline" })
          ]),
          _: 1
        }, 8, ["count"])
      ]),
      _: 1
    }));
  }
});
export {
  b as default
};
