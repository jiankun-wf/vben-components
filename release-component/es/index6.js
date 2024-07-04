import { defineComponent as i, openBlock as s, createElementBlock as a, unref as e, createVNode as t } from "vue";
import { S as m } from "./index2.js";
import { b9 as p, an as u } from "./components.js";
const k = /* @__PURE__ */ i({
  name: "SettingButton",
  __name: "index",
  setup(c) {
    const [r, { openDrawer: o }] = p();
    return (f, n) => (s(), a("div", {
      onClick: n[0] || (n[0] = (l) => e(o)(!0))
    }, [
      t(u, { icon: "ion:settings-outline" }),
      t(e(m), { onRegister: e(r) }, null, 8, ["onRegister"])
    ]));
  }
});
export {
  k as default
};
