import { defineComponent as c, unref as s, openBlock as _, createElementBlock as i } from "vue";
import { au as m } from "./components.js";
const y = /* @__PURE__ */ c({
  __name: "Redirect",
  setup(u) {
    const { currentRoute: p, replace: a } = m(), { params: e, query: o } = s(p), { path: r, _redirect_type: n = "path" } = e;
    Reflect.deleteProperty(e, "_redirect_type"), Reflect.deleteProperty(e, "path");
    const t = Array.isArray(r) ? r.join("/") : r;
    return a(n === "name" ? {
      name: t,
      query: o,
      params: JSON.parse(e._origin_params ?? "{}")
    } : {
      path: t.startsWith("/") ? t : "/" + t,
      query: o
    }), (l, f) => (_(), i("div"));
  }
});
export {
  y as default
};
