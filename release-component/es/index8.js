import { defineComponent as R, ref as p, openBlock as r, createBlock as u, unref as t, mergeProps as S, withCtx as a, createVNode as d, createElementBlock as k, Fragment as b, renderList as C, normalizeStyle as P, createTextVNode as V, toDisplayString as m } from "vue";
import { ae as G, ch as f, ci as I, cj as M, br as D, ck as N } from "./components.js";
const E = /* @__PURE__ */ R({
  __name: "index",
  setup(U) {
    const n = G(), h = f.Group, [v, { closeModal: g }] = I(async () => {
      F();
    }), l = p({
      development: "http://www.a.com",
      test: "http://www.b.com",
      prod: "http://www.c.com"
    }), w = p({
      display: "flex",
      height: "30px",
      lineHeight: "30px"
    }), [_, { validateFields: y, setFieldsValue: A }] = M({
      showActionButtonGroup: !1,
      schemas: [
        {
          field: "api",
          label: "切换API",
          colProps: {
            span: 24
          },
          defaultValue: "production",
          // 当前环境
          required: !0,
          // component: 'Input',
          slot: "api"
        }
      ]
    }), x = async () => {
      const e = await y();
      n.setApiAddress({
        key: e.api,
        val: l.value[e.api]
      }), location.reload();
    }, B = () => {
      g();
    }, F = () => {
      const { key: e = "" } = n.getApiAddress;
      e && A({
        api: e
      });
    };
    return (e, j) => (r(), u(t(D), S({ title: "切换API" }, e.$attrs, {
      onRegister: t(v),
      onOk: x,
      onCancel: B
    }), {
      default: a(() => [
        d(t(N), { onRegister: t(_) }, {
          api: a(({ model: i, field: c }) => [
            d(t(h), {
              value: i[c],
              "onUpdate:value": (o) => i[c] = o
            }, {
              default: a(() => [
                (r(!0), k(b, null, C(l.value, (o, s) => (r(), u(t(f), {
                  style: P(w.value),
                  value: s,
                  key: s
                }, {
                  default: a(() => [
                    V(m(s) + ": " + m(o), 1)
                  ]),
                  _: 2
                }, 1032, ["style", "value"]))), 128))
              ]),
              _: 2
            }, 1032, ["value", "onUpdate:value"])
          ]),
          _: 1
        }, 8, ["onRegister"])
      ]),
      _: 1
    }, 16, ["onRegister"]));
  }
});
export {
  E as default
};
