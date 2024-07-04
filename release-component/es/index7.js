import { defineComponent as f, ref as x, onMounted as M, onBeforeUnmount as h, openBlock as n, createBlock as l, Transition as k, withCtx as v, createElementBlock as _, normalizeClass as S, unref as e, createVNode as w, computed as g, Fragment as U, createCommentVNode as p } from "vue";
import { u as A } from "./AppDarkModeToggle.js";
import { c as P, u as b, a as y } from "./index2.js";
import { ba as F, aA as D, ae as E, f as B, bz as L, aQ as O, bA as z, aO as d } from "./components.js";
import { _ as H } from "./Login.vue_vue_type_style_index_0_lang.js";
const N = /* @__PURE__ */ f({
  __name: "SessionTimeoutLogin",
  setup(C) {
    const { prefixCls: i } = B("st-login"), t = F(), a = D(), r = E(), o = x(0), u = () => r.getProjectConfig.permissionMode === L.BACK;
    return M(() => {
      var s;
      o.value = (s = t.getUserInfo) == null ? void 0 : s.userId, console.log("Mounted", t.getUserInfo);
    }), h(() => {
      (o.value && o.value !== t.getUserInfo.userId || u() && a.getLastBuildMenuTime === 0) && document.location.reload();
    }), (s, m) => (n(), l(k, null, {
      default: v(() => [
        (n(), _("div", {
          key: 0,
          class: S(e(i))
        }, [
          w(H, { sessionTimeout: "" })
        ], 2))
      ]),
      _: 1
    }));
  }
}), V = /* @__PURE__ */ O(N, [["__scopeId", "data-v-965688de"]]), X = /* @__PURE__ */ f({
  name: "LayoutFeatures",
  __name: "index",
  setup(C) {
    const i = P(
      () => import("./index6.js")
    ), { getShowSettingButton: t, getSettingButtonPosition: a, getFullContent: r } = A(), o = z(), { prefixCls: u } = B("setting-drawer-feature"), { getShowHeader: s } = b(), m = g(() => o.getSessionTimeout), I = g(() => {
      if (!e(t))
        return !1;
      const c = e(a);
      return c === d.AUTO ? !e(s) || e(r) : c === d.FIXED;
    }), { getShowMultipleTab: T } = y();
    return (c, $) => (n(), _(U, null, [
      I.value && (!e(T) || e(r)) ? (n(), l(e(i), {
        key: 0,
        class: S(e(u))
      }, null, 8, ["class"])) : p("", !0),
      m.value ? (n(), l(V, { key: 1 })) : p("", !0)
    ], 64));
  }
});
export {
  X as default
};
