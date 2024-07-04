import { getCurrentInstance as k, ref as f, unref as n, createVNode as a, defineComponent as h, openBlock as s, createBlock as w, mergeProps as C, withCtx as i, watch as R, nextTick as T, resolveComponent as L, createElementBlock as p, Fragment as M, renderList as P, withDirectives as S, vShow as B, createTextVNode as b, createCommentVNode as V } from "vue";
import { bo as N, bp as m, bq as $, br as A, bs as O, bt as U, bu as j, bv as q, bw as F, bx as J, by as X } from "./components.js";
function z(e) {
  if (!k())
    throw new Error("useDescription() can only be used inside setup() or functional components!");
  const t = f(null), o = f(!1);
  function l(r) {
    n(o) && N() || (t.value = r, e && r.setDescProps(e), o.value = !0);
  }
  return [l, {
    setDescProps: (r) => {
      var c;
      (c = n(t)) == null || c.setDescProps(r);
    }
  }];
}
function y() {
  return [{
    dataIndex: "type",
    title: "类型",
    width: 80,
    customRender: ({
      text: e
    }) => {
      const t = e === m.VUE ? "green" : e === m.RESOURCE ? "cyan" : e === m.PROMISE ? "blue" : m.AJAX ? "red" : "purple";
      return a($, {
        color: t
      }, {
        default: () => e
      });
    }
  }, {
    dataIndex: "url",
    title: "URL",
    width: 200
  }, {
    dataIndex: "time",
    title: "时间",
    width: 160
  }, {
    dataIndex: "file",
    title: "文件",
    width: 200
  }, {
    dataIndex: "name",
    title: "Name",
    width: 200
  }, {
    dataIndex: "message",
    title: "错误信息",
    width: 300
  }, {
    dataIndex: "stack",
    title: "stack信息"
  }];
}
function G() {
  return y().map((e) => ({
    field: e.dataIndex,
    label: e.title
  }));
}
const H = /* @__PURE__ */ h({
  __name: "DetailModal",
  props: {
    info: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const [t] = z({
      column: 2,
      schema: G()
    });
    return (o, l) => (s(), w(n(A), C({
      width: 800,
      title: "详情"
    }, o.$attrs), {
      default: i(() => [
        a(n(O), {
          data: e.info,
          onRegister: n(t)
        }, null, 8, ["data", "onRegister"])
      ]),
      _: 1
    }, 16));
  }
}), K = { class: "p-4" }, Q = ["src"], ee = /* @__PURE__ */ h({
  __name: "index",
  setup(e) {
    const t = f(), o = f([]), l = U(), [g, { setTableData: r }] = j({
      title: "错误日志列表",
      columns: y(),
      actionColumn: {
        width: 80,
        title: "Action",
        dataIndex: "action"
        // slots: { customRender: 'action' },
      }
    }), [c, { openModal: v }] = q();
    R(
      () => l.getErrorLogInfoList,
      (u) => {
        T(() => {
          r(F(u));
        });
      },
      {
        immediate: !0
      }
    );
    function x(u) {
      t.value = u, v(!0);
    }
    function D() {
      throw new Error("fire vue error!");
    }
    function E() {
      o.value.push(`${(/* @__PURE__ */ new Date()).getTime()}.png`);
    }
    return (u, W) => {
      const _ = L("a-button");
      return s(), p("div", K, [
        (s(!0), p(M, null, P(o.value, (d) => S((s(), p("img", {
          key: d,
          src: d,
          alt: ""
        }, null, 8, Q)), [
          [B, !1]
        ])), 128)),
        a(H, {
          info: t.value,
          onRegister: n(c)
        }, null, 8, ["info", "onRegister"]),
        a(n(J), {
          onRegister: n(g),
          class: "error-handle-table"
        }, {
          toolbar: i(() => [
            a(_, {
              onClick: D,
              type: "primary"
            }, {
              default: i(() => [
                b(" 点击触发vue错误 ")
              ]),
              _: 1
            }),
            a(_, {
              onClick: E,
              type: "primary"
            }, {
              default: i(() => [
                b(" 点击触发资源加载错误 ")
              ]),
              _: 1
            })
          ]),
          bodyCell: i(({ column: d, record: I }) => [
            d.key === "action" ? (s(), w(n(X), {
              key: 0,
              actions: [
                {
                  label: "详情",
                  onClick: x.bind(null, I)
                }
              ]
            }, null, 8, ["actions"])) : V("", !0)
          ]),
          _: 1
        }, 8, ["onRegister"])
      ]);
    };
  }
});
export {
  ee as default
};
