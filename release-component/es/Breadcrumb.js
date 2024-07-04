import { defineComponent as N, createVNode as f, cloneVNode as K, ref as q, watchEffect as J, resolveComponent as Q, openBlock as y, createElementBlock as M, normalizeClass as Y, unref as O, withCtx as x, Fragment as L, renderList as k, createBlock as $, createSlots as Z, createCommentVNode as H, toDisplayString as j, createTextVNode as I } from "vue";
import { u as X, bS as T, _ as C, P as w, o as ee, bT as re, bR as ae, bU as te, g as ne, m as oe, h as D, s as le, x as se, z as V, $ as ce, M as W, aj as ie, au as ue, aw as de, aE as me, as as pe, bV as fe, an as F, l as be, f as he, bW as ge } from "./components.js";
import { u as ye } from "./AppDarkModeToggle.js";
import { u as ve } from "./usePage.js";
var Se = function(e, s) {
  var n = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && s.indexOf(t) < 0 && (n[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, t = Object.getOwnPropertySymbols(e); c < t.length; c++)
      s.indexOf(t[c]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[c]) && (n[t[c]] = e[t[c]]);
  return n;
};
const Ce = () => ({
  prefixCls: String,
  href: String,
  separator: w.any,
  dropdownProps: ee(),
  overlay: w.any,
  onClick: re()
}), E = N({
  compatConfig: {
    MODE: 3
  },
  name: "ABreadcrumbItem",
  inheritAttrs: !1,
  __ANT_BREADCRUMB_ITEM: !0,
  props: Ce(),
  // emits: ['click'],
  slots: Object,
  setup(e, s) {
    let {
      slots: n,
      attrs: t,
      emit: c
    } = s;
    const {
      prefixCls: d
    } = X("breadcrumb", e), v = (p, h) => {
      const b = T(n, e, "overlay");
      return b ? f(ae, C(C({}, e.dropdownProps), {}, {
        overlay: b,
        placement: "bottom"
      }), {
        default: () => [f("span", {
          class: `${h}-overlay-link`
        }, [p, f(te, null, null)])]
      }) : p;
    }, _ = (p) => {
      c("click", p);
    };
    return () => {
      var p;
      const h = (p = T(n, e, "separator")) !== null && p !== void 0 ? p : "/", b = T(n, e), {
        class: l,
        style: o
      } = t, a = Se(t, ["class", "style"]);
      let r;
      return e.href !== void 0 ? r = f("a", C({
        class: `${d.value}-link`,
        onClick: _
      }, a), [b]) : r = f("span", C({
        class: `${d.value}-link`,
        onClick: _
      }, a), [b]), r = v(r, d.value), b != null ? f("li", {
        class: l,
        style: o
      }, [r, h && f("span", {
        class: `${d.value}-separator`
      }, [h])]) : null;
    };
  }
}), _e = (e) => {
  const {
    componentCls: s,
    iconCls: n
  } = e;
  return {
    [s]: D(D({}, le(e)), {
      color: e.breadcrumbBaseColor,
      fontSize: e.breadcrumbFontSize,
      [n]: {
        fontSize: e.breadcrumbIconFontSize
      },
      ol: {
        display: "flex",
        flexWrap: "wrap",
        margin: 0,
        padding: 0,
        listStyle: "none"
      },
      a: D({
        color: e.breadcrumbLinkColor,
        transition: `color ${e.motionDurationMid}`,
        padding: `0 ${e.paddingXXS}px`,
        borderRadius: e.borderRadiusSM,
        height: e.lineHeight * e.fontSize,
        display: "inline-block",
        marginInline: -e.marginXXS,
        "&:hover": {
          color: e.breadcrumbLinkColorHover,
          backgroundColor: e.colorBgTextHover
        }
      }, se(e)),
      "li:last-child": {
        color: e.breadcrumbLastItemColor,
        [`& > ${s}-separator`]: {
          display: "none"
        }
      },
      [`${s}-separator`]: {
        marginInline: e.breadcrumbSeparatorMargin,
        color: e.breadcrumbSeparatorColor
      },
      [`${s}-link`]: {
        [`
          > ${n} + span,
          > ${n} + a
        `]: {
          marginInlineStart: e.marginXXS
        }
      },
      [`${s}-overlay-link`]: {
        borderRadius: e.borderRadiusSM,
        height: e.lineHeight * e.fontSize,
        display: "inline-block",
        padding: `0 ${e.paddingXXS}px`,
        marginInline: -e.marginXXS,
        [`> ${n}`]: {
          marginInlineStart: e.marginXXS,
          fontSize: e.fontSizeIcon
        },
        "&:hover": {
          color: e.breadcrumbLinkColorHover,
          backgroundColor: e.colorBgTextHover,
          a: {
            color: e.breadcrumbLinkColorHover
          }
        },
        a: {
          "&:hover": {
            backgroundColor: "transparent"
          }
        }
      },
      // rtl style
      [`&${e.componentCls}-rtl`]: {
        direction: "rtl"
      }
    })
  };
}, Be = ne("Breadcrumb", (e) => {
  const s = oe(e, {
    breadcrumbBaseColor: e.colorTextDescription,
    breadcrumbFontSize: e.fontSize,
    breadcrumbIconFontSize: e.fontSize,
    breadcrumbLinkColor: e.colorTextDescription,
    breadcrumbLinkColorHover: e.colorText,
    breadcrumbLastItemColor: e.colorText,
    breadcrumbSeparatorMargin: e.marginXS,
    breadcrumbSeparatorColor: e.colorTextDescription
  });
  return [_e(s)];
}), Oe = () => ({
  prefixCls: String,
  routes: {
    type: Array
  },
  params: w.any,
  separator: w.any,
  itemRender: {
    type: Function
  }
});
function Re(e, s) {
  if (!e.breadcrumbName)
    return null;
  const n = Object.keys(s).join("|");
  return e.breadcrumbName.replace(new RegExp(`:(${n})`, "g"), (c, d) => s[d] || c);
}
function U(e) {
  const {
    route: s,
    params: n,
    routes: t,
    paths: c
  } = e, d = t.indexOf(s) === t.length - 1, v = Re(s, n);
  return d ? f("span", null, [v]) : f("a", {
    href: `#/${c.join("/")}`
  }, [v]);
}
const P = N({
  compatConfig: {
    MODE: 3
  },
  name: "ABreadcrumb",
  inheritAttrs: !1,
  props: Oe(),
  slots: Object,
  setup(e, s) {
    let {
      slots: n,
      attrs: t
    } = s;
    const {
      prefixCls: c,
      direction: d
    } = X("breadcrumb", e), [v, _] = Be(c), p = (l, o) => (l = (l || "").replace(/^\//, ""), Object.keys(o).forEach((a) => {
      l = l.replace(`:${a}`, o[a]);
    }), l), h = (l, o, a) => {
      const r = [...l], i = p(o || "", a);
      return i && r.push(i), r;
    }, b = (l) => {
      let {
        routes: o = [],
        params: a = {},
        separator: r,
        itemRender: i = U
      } = l;
      const u = [];
      return o.map((m) => {
        const g = p(m.path, a);
        g && u.push(g);
        const S = [...u];
        let B = null;
        m.children && m.children.length && (B = f(W, {
          items: m.children.map((R) => ({
            key: R.path || R.breadcrumbName,
            label: i({
              route: R,
              params: a,
              routes: o,
              paths: h(S, R.path, a)
            })
          }))
        }, null));
        const A = {
          separator: r
        };
        return B && (A.overlay = B), f(E, C(C({}, A), {}, {
          key: g || m.breadcrumbName
        }), {
          default: () => [i({
            route: m,
            params: a,
            routes: o,
            paths: S
          })]
        });
      });
    };
    return () => {
      var l;
      let o;
      const {
        routes: a,
        params: r = {}
      } = e, i = V(T(n, e)), u = (l = T(n, e, "separator")) !== null && l !== void 0 ? l : "/", m = e.itemRender || n.itemRender || U;
      a && a.length > 0 ? o = b({
        routes: a,
        params: r,
        separator: u,
        itemRender: m
      }) : i.length && (o = i.map((S, B) => (ce(typeof S.type == "object" && (S.type.__ANT_BREADCRUMB_ITEM || S.type.__ANT_BREADCRUMB_SEPARATOR), "Breadcrumb", "Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"), K(S, {
        separator: u,
        key: B
      }))));
      const g = {
        [c.value]: !0,
        [`${c.value}-rtl`]: d.value === "rtl",
        [`${t.class}`]: !!t.class,
        [_.value]: !0
      };
      return v(f("nav", C(C({}, t), {}, {
        class: g
      }), [f("ol", null, [o])]));
    };
  }
});
var xe = function(e, s) {
  var n = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && s.indexOf(t) < 0 && (n[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, t = Object.getOwnPropertySymbols(e); c < t.length; c++)
      s.indexOf(t[c]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[c]) && (n[t[c]] = e[t[c]]);
  return n;
};
const $e = () => ({
  prefixCls: String
}), z = N({
  compatConfig: {
    MODE: 3
  },
  name: "ABreadcrumbSeparator",
  __ANT_BREADCRUMB_SEPARATOR: !0,
  inheritAttrs: !1,
  props: $e(),
  setup(e, s) {
    let {
      slots: n,
      attrs: t
    } = s;
    const {
      prefixCls: c
    } = X("breadcrumb", e);
    return () => {
      var d;
      const {
        separator: v,
        class: _
      } = t, p = xe(t, ["separator", "class"]), h = V((d = n.default) === null || d === void 0 ? void 0 : d.call(n));
      return f("span", C({
        class: [`${c.value}-separator`, _]
      }, p), [h.length > 0 ? h : "/"]);
    };
  }
});
P.Item = E;
P.Separator = z;
P.install = function(e) {
  return e.component(P.name, P), e.component(E.name, E), e.component(z.name, z), e;
};
const Pe = { key: 1 }, Ae = { key: 1 }, we = /* @__PURE__ */ N({
  name: "LayoutBreadcrumb",
  __name: "Breadcrumb",
  props: {
    theme: ie.oneOf(["dark", "light"])
  },
  setup(e) {
    const s = q([]), { currentRoute: n } = ue(), { prefixCls: t } = he("layout-breadcrumb"), { getShowBreadCrumbIcon: c } = ye(), d = ve();
    J(async () => {
      var S, B, A, R;
      if (n.value.name === de)
        return;
      const l = await me(), o = n.value.matched, a = o == null ? void 0 : o[o.length - 1];
      let r = n.value.path;
      a && ((S = a == null ? void 0 : a.meta) != null && S.currentActiveMenu) && (r = a.meta.currentActiveMenu);
      const i = pe(l, r), u = l.filter((G) => G.path === i[0]), m = v(u, i);
      if (!m || m.length === 0) {
        s.value = [];
        return;
      }
      const g = _(m);
      (B = n.value.meta) != null && B.currentActiveMenu && !((A = n.value.meta) != null && A.hideBreadcrumb) && g.push({
        ...n.value,
        name: ((R = n.value.meta) == null ? void 0 : R.title) || n.value.name
      }), s.value = g;
    });
    function v(l, o) {
      const a = [];
      return l.forEach((r) => {
        var i, u;
        o.includes(r.path) && a.push({
          ...r,
          name: ((i = r.meta) == null ? void 0 : i.title) || r.name
        }), (u = r.children) != null && u.length && a.push(...v(r.children, o));
      }), a;
    }
    function _(l) {
      return fe(l, (o) => {
        const { meta: a, name: r } = o;
        if (!a)
          return !!r;
        const { title: i, hideBreadcrumb: u, hideMenu: m } = a;
        return !(!i || u || m);
      }).filter((o) => {
        var a;
        return !((a = o.meta) != null && a.hideBreadcrumb);
      });
    }
    function p(l) {
      const { children: o, redirect: a, meta: r } = l;
      if (!(o != null && o.length && !a) && !(r != null && r.carryParam))
        if (a && ge(a))
          d(a);
        else {
          let i = "";
          l.path ? i = l.path : i = "", i = /^\//.test(i) ? i : `/${i}`, d(i);
        }
    }
    function h(l, o) {
      return l.indexOf(o) !== l.length - 1;
    }
    function b(l) {
      var o;
      return l.icon || ((o = l.meta) == null ? void 0 : o.icon);
    }
    return (l, o) => {
      const a = Q("router-link");
      return y(), M("div", {
        class: Y([O(t), `${O(t)}--${e.theme}`])
      }, [
        f(O(P), null, {
          default: x(() => [
            (y(!0), M(L, null, k(s.value, (r) => {
              var i;
              return y(), $(O(E), {
                key: r.name
              }, Z({
                default: x(() => [
                  O(c) && b(r) ? (y(), $(F, {
                    key: 0,
                    icon: b(r)
                  }, null, 8, ["icon"])) : H("", !0),
                  h(s.value, r) ? (y(), $(a, {
                    key: 2,
                    to: "",
                    onClick: (u) => p(r)
                  }, {
                    default: x(() => [
                      I(j(r.meta.title || r.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"])) : (y(), M("span", Pe, j(r.meta.title || r.name), 1))
                ]),
                _: 2
              }, [
                r.children && !((i = r.meta) != null && i.hideChildrenInMenu) ? {
                  name: "overlay",
                  fn: x(() => [
                    f(O(W), null, {
                      default: x(() => [
                        (y(!0), M(L, null, k(r.children, (u) => (y(), $(O(be), {
                          key: u.name
                        }, {
                          default: x(() => {
                            var m;
                            return [
                              O(c) && b(u) ? (y(), $(F, {
                                key: 0,
                                icon: b(u)
                              }, null, 8, ["icon"])) : H("", !0),
                              h(s.value, u) ? (y(), $(a, {
                                key: 2,
                                to: "",
                                onClick: (g) => p(u)
                              }, {
                                default: x(() => {
                                  var g;
                                  return [
                                    I(j(((g = u.meta) == null ? void 0 : g.title) || u.name), 1)
                                  ];
                                }),
                                _: 2
                              }, 1032, ["onClick"])) : (y(), M("span", Ae, j(((m = u.meta) == null ? void 0 : m.title) || u.name), 1))
                            ];
                          }),
                          _: 2
                        }, 1024))), 128))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  key: "0"
                } : void 0
              ]), 1024);
            }), 128))
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
export {
  we as default
};
