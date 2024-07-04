import { defineComponent as x, openBlock as h, createElementBlock as k, normalizeClass as v, unref as t, createVNode as a, withCtx as d, createTextVNode as u } from "vue";
import { cd as n, aA as A, ba as M, ae as P, B as m, a_ as f, f as w, a$ as g, bQ as B, aQ as j } from "./components.js";
import { b as R } from "./usePage.js";
import { d as T, e as F } from "./index2.js";
import { b as N } from "./AppDarkModeToggle.js";
import { C as O } from "./CopyOutlined.js";
function E(c, o = "已成功复制到剪切板!") {
  return navigator.clipboard ? navigator.clipboard.writeText(c).then(() => {
    o && n.success(o);
  }).catch((r) => (n.error("复制失败!" + r.message), r)) : Reflect.has(document, "execCommand") ? new Promise((r, i) => {
    try {
      const e = document.createElement("textarea");
      e.value = c, e.style.width = "0", e.style.position = "fixed", e.style.left = "-999px", e.style.top = "10px", e.setAttribute("readonly", "readonly"), document.body.appendChild(e), e.select(), document.execCommand("copy"), document.body.removeChild(e), o && n.success(o), r();
    } catch (e) {
      n.error("复制失败!" + e.message), i(e);
    }
  }) : Promise.reject('"navigator.clipboard" 或 "document.execCommand" 中存在API错误, 拷贝失败!');
}
const I = /* @__PURE__ */ x({
  name: "SettingFooter",
  __name: "SettingFooter",
  setup(c) {
    const o = A(), { prefixCls: r } = w("setting-footer"), { createSuccessModal: i, createMessage: e } = B(), S = R(), y = M(), l = P();
    function C() {
      E(
        JSON.stringify(t(l.getProjectConfig), null, 2),
        null
      ).then(() => {
        i({
          title: "操作成功",
          content: "复制成功,请到 src/settings/projectSetting.ts 中修改配置！"
        });
      });
    }
    function b() {
      try {
        l.setProjectConfig(g);
        const { colorWeak: s, grayMode: p } = g;
        N(), T(s), F(p), e.success("重置成功！");
      } catch (s) {
        e.error(s);
      }
    }
    function _() {
      localStorage.clear(), l.resetAllState(), o.resetState(), S.resetState(), y.resetState(), location.reload();
    }
    return (s, p) => (h(), k("div", {
      class: v(t(r))
    }, [
      a(t(m), {
        type: "primary",
        block: "",
        onClick: C
      }, {
        default: d(() => [
          a(t(O), { class: "mr-2" }),
          u(" 拷贝 ")
        ]),
        _: 1
      }),
      a(t(m), {
        color: "warning",
        block: "",
        onClick: b,
        class: "my-3"
      }, {
        default: d(() => [
          a(t(f), { class: "mr-2" }),
          u(" 重置 ")
        ]),
        _: 1
      }),
      a(t(m), {
        color: "error",
        block: "",
        onClick: _
      }, {
        default: d(() => [
          a(t(f), { class: "mr-2" }),
          u(" 清除 ")
        ]),
        _: 1
      })
    ], 2));
  }
}), J = /* @__PURE__ */ j(I, [["__scopeId", "data-v-2932af64"]]);
export {
  J as default
};
