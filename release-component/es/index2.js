import { shallowRef as fe, onBeforeUnmount as ct, defineComponent as N, ref as B, computed as h, createVNode as p, watchEffect as ut, onMounted as Ne, watch as re, provide as dt, inject as Rt, toRefs as ao, onBeforeUpdate as Ko, Fragment as le, Transition as en, withDirectives as Me, vShow as ke, reactive as $t, nextTick as Xe, onActivated as Vo, onDeactivated as qo, defineAsyncComponent as Yo, unref as n, getCurrentInstance as tn, openBlock as C, createElementBlock as W, normalizeClass as I, renderSlot as He, useSlots as Qo, withModifiers as nn, normalizeStyle as Re, createBlock as A, withCtx as V, createElementVNode as oe, onBeforeMount as Zo, normalizeProps as Jo, guardReactiveProps as ea, mergeProps as Pe, createCommentVNode as j, resolveComponent as io, toDisplayString as qe, renderList as Ct, toRaw as on, useAttrs as ta, toRef as na, onUnmounted as oa, KeepAlive as aa, resolveDynamicComponent as wn, resolveDirective as ia, h as ra, createSlots as ro, createTextVNode as it } from "vue";
import { w as Qe, c as Ce, K as Le, h as H, i as me, j as la, k as sa, D as ua, M as ca, l as da, P as be, n as ge, t as St, R as Mn, _ as te, p as lo, o as lt, q as pa, I as pt, r as Rn, g as an, m as rn, s as It, v as fa, x as so, y as ft, z as ga, A as va, F as Ge, G as ma, H as uo, J as ha, L as ba, N as Sa, O as kt, u as et, Q as _a, S as Xt, T as co, U as ya, V as $a, W as Ca, X as In, Y as ln, Z as Ta, $ as xa, a0 as Ea, a1 as po, a2 as Oa, a3 as wa, a4 as Ma, a5 as fo, a6 as Ra, a7 as An, a8 as Bn, a9 as Ln, aa as Ia, ab as go, ac as Aa, ad as vo, ae as tt, af as ue, ag as je, ah as mo, ai as ho, aj as X, ak as bo, f as ae, al as Ba, am as La, an as Fe, ao as Na, ap as Pa, aq as So, ar as Da, as as Ha, at as ka, au as nt, av as sn, aw as _o, ax as yo, ay as $o, az as Fa, aA as Co, aB as Wa, aC as we, aD as Kt, aE as za, aF as Vt, aG as Et, aH as qt, aI as Ua, aJ as Ga, aK as ja, aL as Xa, aM as Ka, aN as Va, aO as Nn, aP as To, aQ as At, aR as qa, aS as Ze, aT as Ya, aU as Qa, aV as Za, aW as Ja, aX as ei, aY as ti, aZ as ni, a_ as oi, a$ as xo, b0 as Pn, b1 as Dn, b2 as Ft, b3 as rt, b4 as Ye, b5 as Hn, b6 as ai, b7 as Ve, b8 as ii, b9 as ri, ba as li, bb as si, bc as ui } from "./components.js";
import { u as ot, A as un, t as Eo, a as Oo, b as wo, c as ci, d as di } from "./AppDarkModeToggle.js";
import { u as cn, b as Ke } from "./usePage.js";
function pi(e) {
  let t;
  const o = (i) => () => {
    t = null, e(...i);
  }, a = function() {
    if (t == null) {
      for (var i = arguments.length, l = new Array(i), r = 0; r < i; r++)
        l[r] = arguments[r];
      t = Qe(o(l));
    }
  };
  return a.cancel = () => {
    Qe.cancel(t), t = null;
  }, a;
}
function fi(e) {
  const t = fe(), o = fe(!1);
  function a() {
    for (var i = arguments.length, l = new Array(i), r = 0; r < i; r++)
      l[r] = arguments[r];
    o.value || (Qe.cancel(t.value), t.value = Qe(() => {
      e(...l);
    }));
  }
  return ct(() => {
    o.value = !0, Qe.cancel(t.value);
  }), a;
}
function gi(e) {
  const t = fe([]), o = fe(typeof e == "function" ? e() : e), a = fi(() => {
    let l = o.value;
    t.value.forEach((r) => {
      l = r(l);
    }), t.value = [], o.value = l;
  });
  function i(l) {
    t.value.push(l), a();
  }
  return [o, i];
}
const vi = N({
  compatConfig: {
    MODE: 3
  },
  name: "TabNode",
  props: {
    id: {
      type: String
    },
    prefixCls: {
      type: String
    },
    tab: {
      type: Object
    },
    active: {
      type: Boolean
    },
    closable: {
      type: Boolean
    },
    editable: {
      type: Object
    },
    onClick: {
      type: Function
    },
    onResize: {
      type: Function
    },
    renderWrapper: {
      type: Function
    },
    removeAriaLabel: {
      type: String
    },
    // onRemove: { type: Function as PropType<() => void> },
    onFocus: {
      type: Function
    }
  },
  emits: ["click", "resize", "remove", "focus"],
  setup(e, t) {
    let {
      expose: o,
      attrs: a
    } = t;
    const i = B();
    function l(d) {
      var s;
      !((s = e.tab) === null || s === void 0) && s.disabled || e.onClick(d);
    }
    o({
      domRef: i
    });
    function r(d) {
      var s;
      d.preventDefault(), d.stopPropagation(), e.editable.onEdit("remove", {
        key: (s = e.tab) === null || s === void 0 ? void 0 : s.key,
        event: d
      });
    }
    const c = h(() => {
      var d;
      return e.editable && e.closable !== !1 && !(!((d = e.tab) === null || d === void 0) && d.disabled);
    });
    return () => {
      var d;
      const {
        prefixCls: s,
        id: u,
        active: f,
        tab: {
          key: g,
          tab: v,
          disabled: _,
          closeIcon: S
        },
        renderWrapper: m,
        removeAriaLabel: b,
        editable: y,
        onFocus: E
      } = e, x = `${s}-tab`, T = p("div", {
        key: g,
        ref: i,
        class: Ce(x, {
          [`${x}-with-remove`]: c.value,
          [`${x}-active`]: f,
          [`${x}-disabled`]: _
        }),
        style: a.style,
        onClick: l
      }, [p("div", {
        role: "tab",
        "aria-selected": f,
        id: u && `${u}-tab-${g}`,
        class: `${x}-btn`,
        "aria-controls": u && `${u}-panel-${g}`,
        "aria-disabled": _,
        tabindex: _ ? null : 0,
        onClick: (w) => {
          w.stopPropagation(), l(w);
        },
        onKeydown: (w) => {
          [Le.SPACE, Le.ENTER].includes(w.which) && (w.preventDefault(), l(w));
        },
        onFocus: E
      }, [typeof v == "function" ? v() : v]), c.value && p("button", {
        type: "button",
        "aria-label": b || "remove",
        tabindex: 0,
        class: `${x}-remove`,
        onClick: (w) => {
          w.stopPropagation(), r(w);
        }
      }, [(S == null ? void 0 : S()) || ((d = y.removeIcon) === null || d === void 0 ? void 0 : d.call(y)) || "×"])]);
      return m ? m(T) : T;
    };
  }
}), kn = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function mi(e, t) {
  const o = B(/* @__PURE__ */ new Map());
  return ut(() => {
    var a, i;
    const l = /* @__PURE__ */ new Map(), r = e.value, c = t.value.get((a = r[0]) === null || a === void 0 ? void 0 : a.key) || kn, d = c.left + c.width;
    for (let s = 0; s < r.length; s += 1) {
      const {
        key: u
      } = r[s];
      let f = t.value.get(u);
      f || (f = t.value.get((i = r[s - 1]) === null || i === void 0 ? void 0 : i.key) || kn);
      const g = l.get(u) || H({}, f);
      g.right = d - g.left - g.width, l.set(u, g);
    }
    o.value = new Map(l);
  }), o;
}
const Mo = N({
  compatConfig: {
    MODE: 3
  },
  name: "AddButton",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    editable: {
      type: Object
    },
    locale: {
      type: Object,
      default: void 0
    }
  },
  setup(e, t) {
    let {
      expose: o,
      attrs: a
    } = t;
    const i = B();
    return o({
      domRef: i
    }), () => {
      const {
        prefixCls: l,
        editable: r,
        locale: c
      } = e;
      return !r || r.showAdd === !1 ? null : p("button", {
        ref: i,
        type: "button",
        class: `${l}-nav-add`,
        style: a.style,
        "aria-label": (c == null ? void 0 : c.addAriaLabel) || "Add tab",
        onClick: (d) => {
          r.onEdit("add", {
            event: d
          });
        }
      }, [r.addIcon ? r.addIcon() : "+"]);
    };
  }
}), hi = {
  prefixCls: {
    type: String
  },
  id: {
    type: String
  },
  tabs: {
    type: Object
  },
  rtl: {
    type: Boolean
  },
  tabBarGutter: {
    type: Number
  },
  activeKey: {
    type: [String, Number]
  },
  mobile: {
    type: Boolean
  },
  moreIcon: be.any,
  moreTransitionName: {
    type: String
  },
  editable: {
    type: Object
  },
  locale: {
    type: Object,
    default: void 0
  },
  removeAriaLabel: String,
  onTabClick: {
    type: Function
  },
  popupClassName: String,
  getPopupContainer: ge()
}, bi = N({
  compatConfig: {
    MODE: 3
  },
  name: "OperationNode",
  inheritAttrs: !1,
  props: hi,
  emits: ["tabClick"],
  slots: Object,
  setup(e, t) {
    let {
      attrs: o,
      slots: a
    } = t;
    const [i, l] = me(!1), [r, c] = me(null), d = (v) => {
      const _ = e.tabs.filter((b) => !b.disabled);
      let S = _.findIndex((b) => b.key === r.value) || 0;
      const m = _.length;
      for (let b = 0; b < m; b += 1) {
        S = (S + v + m) % m;
        const y = _[S];
        if (!y.disabled) {
          c(y.key);
          return;
        }
      }
    }, s = (v) => {
      const {
        which: _
      } = v;
      if (!i.value) {
        [Le.DOWN, Le.SPACE, Le.ENTER].includes(_) && (l(!0), v.preventDefault());
        return;
      }
      switch (_) {
        case Le.UP:
          d(-1), v.preventDefault();
          break;
        case Le.DOWN:
          d(1), v.preventDefault();
          break;
        case Le.ESC:
          l(!1);
          break;
        case Le.SPACE:
        case Le.ENTER:
          r.value !== null && e.onTabClick(r.value, v);
          break;
      }
    }, u = h(() => `${e.id}-more-popup`), f = h(() => r.value !== null ? `${u.value}-${r.value}` : null), g = (v, _) => {
      v.preventDefault(), v.stopPropagation(), e.editable.onEdit("remove", {
        key: _,
        event: v
      });
    };
    return Ne(() => {
      re(r, () => {
        const v = document.getElementById(f.value);
        v && v.scrollIntoView && v.scrollIntoView(!1);
      }, {
        flush: "post",
        immediate: !0
      });
    }), re(i, () => {
      i.value || c(null);
    }), la({}), () => {
      var v;
      const {
        prefixCls: _,
        id: S,
        tabs: m,
        locale: b,
        mobile: y,
        moreIcon: E = ((v = a.moreIcon) === null || v === void 0 ? void 0 : v.call(a)) || p(sa, null, null),
        moreTransitionName: x,
        editable: T,
        tabBarGutter: w,
        rtl: $,
        onTabClick: R,
        popupClassName: L
      } = e;
      if (!m.length)
        return null;
      const M = `${_}-dropdown`, k = b == null ? void 0 : b.dropdownAriaLabel, U = {
        [$ ? "marginRight" : "marginLeft"]: w
      };
      m.length || (U.visibility = "hidden", U.order = 1);
      const ce = Ce({
        [`${M}-rtl`]: $,
        [`${L}`]: !0
      }), he = y ? null : p(ua, {
        prefixCls: M,
        trigger: ["hover"],
        visible: i.value,
        transitionName: x,
        onVisibleChange: l,
        overlayClassName: ce,
        mouseEnterDelay: 0.1,
        mouseLeaveDelay: 0.1,
        getPopupContainer: e.getPopupContainer
      }, {
        overlay: () => p(ca, {
          onClick: (G) => {
            let {
              key: ee,
              domEvent: q
            } = G;
            R(ee, q), l(!1);
          },
          id: u.value,
          tabindex: -1,
          role: "listbox",
          "aria-activedescendant": f.value,
          selectedKeys: [r.value],
          "aria-label": k !== void 0 ? k : "expanded dropdown"
        }, {
          default: () => [m.map((G) => {
            var ee, q;
            const P = T && G.closable !== !1 && !G.disabled;
            return p(da, {
              key: G.key,
              id: `${u.value}-${G.key}`,
              role: "option",
              "aria-controls": S && `${S}-panel-${G.key}`,
              disabled: G.disabled
            }, {
              default: () => [p("span", null, [typeof G.tab == "function" ? G.tab() : G.tab]), P && p("button", {
                type: "button",
                "aria-label": e.removeAriaLabel || "remove",
                tabindex: 0,
                class: `${M}-menu-item-remove`,
                onClick: (K) => {
                  K.stopPropagation(), g(K, G.key);
                }
              }, [((ee = G.closeIcon) === null || ee === void 0 ? void 0 : ee.call(G)) || ((q = T.removeIcon) === null || q === void 0 ? void 0 : q.call(T)) || "×"])]
            });
          })]
        }),
        default: () => p("button", {
          type: "button",
          class: `${_}-nav-more`,
          style: U,
          tabindex: -1,
          "aria-hidden": "true",
          "aria-haspopup": "listbox",
          "aria-controls": u.value,
          id: `${S}-more`,
          "aria-expanded": i.value,
          onKeydown: s
        }, [E])
      });
      return p("div", {
        class: Ce(`${_}-nav-operations`, o.class),
        style: o.style
      }, [he, p(Mo, {
        prefixCls: _,
        locale: b,
        editable: T
      }, null)]);
    };
  }
}), Ro = Symbol("tabsContextKey"), Io = (e) => {
  dt(Ro, e);
}, Ao = () => Rt(Ro, {
  tabs: B([]),
  prefixCls: B()
});
N({
  compatConfig: {
    MODE: 3
  },
  name: "TabsContextProvider",
  inheritAttrs: !1,
  props: {
    tabs: {
      type: Object,
      default: void 0
    },
    prefixCls: {
      type: String,
      default: void 0
    }
  },
  setup(e, t) {
    let {
      slots: o
    } = t;
    return Io(ao(e)), () => {
      var a;
      return (a = o.default) === null || a === void 0 ? void 0 : a.call(o);
    };
  }
});
const Si = 0.1, Fn = 0.01, Ot = 20, Wn = Math.pow(0.995, Ot);
function _i(e, t) {
  const [o, a] = me(), [i, l] = me(0), [r, c] = me(0), [d, s] = me(), u = B();
  function f(T) {
    const {
      screenX: w,
      screenY: $
    } = T.touches[0];
    a({
      x: w,
      y: $
    }), clearInterval(u.value);
  }
  function g(T) {
    if (!o.value)
      return;
    T.preventDefault();
    const {
      screenX: w,
      screenY: $
    } = T.touches[0], R = w - o.value.x, L = $ - o.value.y;
    t(R, L), a({
      x: w,
      y: $
    });
    const M = Date.now();
    c(M - i.value), l(M), s({
      x: R,
      y: L
    });
  }
  function v() {
    if (!o.value)
      return;
    const T = d.value;
    if (a(null), s(null), T) {
      const w = T.x / r.value, $ = T.y / r.value, R = Math.abs(w), L = Math.abs($);
      if (Math.max(R, L) < Si)
        return;
      let M = w, k = $;
      u.value = setInterval(() => {
        if (Math.abs(M) < Fn && Math.abs(k) < Fn) {
          clearInterval(u.value);
          return;
        }
        M *= Wn, k *= Wn, t(M * Ot, k * Ot);
      }, Ot);
    }
  }
  const _ = B();
  function S(T) {
    const {
      deltaX: w,
      deltaY: $
    } = T;
    let R = 0;
    const L = Math.abs(w), M = Math.abs($);
    L === M ? R = _.value === "x" ? w : $ : L > M ? (R = w, _.value = "x") : (R = $, _.value = "y"), t(-R, -R) && T.preventDefault();
  }
  const m = B({
    onTouchStart: f,
    onTouchMove: g,
    onTouchEnd: v,
    onWheel: S
  });
  function b(T) {
    m.value.onTouchStart(T);
  }
  function y(T) {
    m.value.onTouchMove(T);
  }
  function E(T) {
    m.value.onTouchEnd(T);
  }
  function x(T) {
    m.value.onWheel(T);
  }
  Ne(() => {
    var T, w;
    document.addEventListener("touchmove", y, {
      passive: !1
    }), document.addEventListener("touchend", E, {
      passive: !1
    }), (T = e.value) === null || T === void 0 || T.addEventListener("touchstart", b, {
      passive: !1
    }), (w = e.value) === null || w === void 0 || w.addEventListener("wheel", x, {
      passive: !1
    });
  }), ct(() => {
    document.removeEventListener("touchmove", y), document.removeEventListener("touchend", E);
  });
}
function zn(e, t) {
  const o = B(e);
  function a(i) {
    const l = typeof i == "function" ? i(o.value) : i;
    l !== o.value && t(l, o.value), o.value = l;
  }
  return [o, a];
}
const yi = () => {
  const e = B(/* @__PURE__ */ new Map()), t = (o) => (a) => {
    e.value.set(o, a);
  };
  return Ko(() => {
    e.value = /* @__PURE__ */ new Map();
  }), [t, e];
}, Un = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
}, $i = () => ({
  id: {
    type: String
  },
  tabPosition: {
    type: String
  },
  activeKey: {
    type: [String, Number]
  },
  rtl: {
    type: Boolean
  },
  animated: lt(),
  editable: lt(),
  moreIcon: be.any,
  moreTransitionName: {
    type: String
  },
  mobile: {
    type: Boolean
  },
  tabBarGutter: {
    type: Number
  },
  renderTabBar: {
    type: Function
  },
  locale: lt(),
  popupClassName: String,
  getPopupContainer: ge(),
  onTabClick: {
    type: Function
  },
  onTabScroll: {
    type: Function
  }
}), Ci = (e, t) => {
  const {
    offsetWidth: o,
    offsetHeight: a,
    offsetTop: i,
    offsetLeft: l
  } = e, {
    width: r,
    height: c,
    x: d,
    y: s
  } = e.getBoundingClientRect();
  return Math.abs(r - o) < 1 ? [r, c, d - t.x, s - t.y] : [o, a, l, i];
}, Gn = N({
  compatConfig: {
    MODE: 3
  },
  name: "TabNavList",
  inheritAttrs: !1,
  props: $i(),
  slots: Object,
  emits: ["tabClick", "tabScroll"],
  setup(e, t) {
    let {
      attrs: o,
      slots: a
    } = t;
    const {
      tabs: i,
      prefixCls: l
    } = Ao(), r = fe(), c = fe(), d = fe(), s = fe(), [u, f] = yi(), g = h(() => e.tabPosition === "top" || e.tabPosition === "bottom"), [v, _] = zn(0, (F, D) => {
      g.value && e.onTabScroll && e.onTabScroll({
        direction: F > D ? "left" : "right"
      });
    }), [S, m] = zn(0, (F, D) => {
      !g.value && e.onTabScroll && e.onTabScroll({
        direction: F > D ? "top" : "bottom"
      });
    }), [b, y] = me(0), [E, x] = me(0), [T, w] = me(null), [$, R] = me(null), [L, M] = me(0), [k, U] = me(0), [ce, he] = gi(/* @__PURE__ */ new Map()), G = mi(i, ce), ee = h(() => `${l.value}-nav-operations-hidden`), q = fe(0), P = fe(0);
    ut(() => {
      g.value ? e.rtl ? (q.value = 0, P.value = Math.max(0, b.value - T.value)) : (q.value = Math.min(0, T.value - b.value), P.value = 0) : (q.value = Math.min(0, $.value - E.value), P.value = 0);
    });
    const K = (F) => F < q.value ? q.value : F > P.value ? P.value : F, de = fe(), [ie, ye] = me(), z = () => {
      ye(Date.now());
    }, Y = () => {
      clearTimeout(de.value);
    }, J = (F, D) => {
      F((Q) => K(Q + D));
    };
    _i(r, (F, D) => {
      if (g.value) {
        if (T.value >= b.value)
          return !1;
        J(_, F);
      } else {
        if ($.value >= E.value)
          return !1;
        J(m, D);
      }
      return Y(), z(), !0;
    }), re(ie, () => {
      Y(), ie.value && (de.value = setTimeout(() => {
        ye(0);
      }, 100));
    });
    const Te = function() {
      let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activeKey;
      const D = G.value.get(F) || {
        width: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0
      };
      if (g.value) {
        let Q = v.value;
        e.rtl ? D.right < v.value ? Q = D.right : D.right + D.width > v.value + T.value && (Q = D.right + D.width - T.value) : D.left < -v.value ? Q = -D.left : D.left + D.width > -v.value + T.value && (Q = -(D.left + D.width - T.value)), m(0), _(K(Q));
      } else {
        let Q = S.value;
        D.top < -S.value ? Q = -D.top : D.top + D.height > -S.value + $.value && (Q = -(D.top + D.height - $.value)), _(0), m(K(Q));
      }
    }, We = fe(0), Ee = fe(0);
    ut(() => {
      let F, D, Q, ne, pe, se;
      const Ae = G.value;
      ["top", "bottom"].includes(e.tabPosition) ? (F = "width", ne = T.value, pe = b.value, se = L.value, D = e.rtl ? "right" : "left", Q = Math.abs(v.value)) : (F = "height", ne = $.value, pe = b.value, se = k.value, D = "top", Q = -S.value);
      let Se = ne;
      pe + se > ne && pe < ne && (Se = ne - se);
      const Oe = i.value;
      if (!Oe.length)
        return [We.value, Ee.value] = [0, 0];
      const Be = Oe.length;
      let Ue = Be;
      for (let xe = 0; xe < Be; xe += 1) {
        const De = Ae.get(Oe[xe].key) || Un;
        if (De[D] + De[F] > Q + Se) {
          Ue = xe - 1;
          break;
        }
      }
      let ve = 0;
      for (let xe = Be - 1; xe >= 0; xe -= 1)
        if ((Ae.get(Oe[xe].key) || Un)[D] < Q) {
          ve = xe + 1;
          break;
        }
      return [We.value, Ee.value] = [ve, Ue];
    });
    const Tt = () => {
      he(() => {
        var F;
        const D = /* @__PURE__ */ new Map(), Q = (F = c.value) === null || F === void 0 ? void 0 : F.getBoundingClientRect();
        return i.value.forEach((ne) => {
          let {
            key: pe
          } = ne;
          const se = f.value.get(pe), Ae = (se == null ? void 0 : se.$el) || se;
          if (Ae) {
            const [Se, Oe, Be, Ue] = Ci(Ae, Q);
            D.set(pe, {
              width: Se,
              height: Oe,
              left: Be,
              top: Ue
            });
          }
        }), D;
      });
    };
    re(() => i.value.map((F) => F.key).join("%%"), () => {
      Tt();
    }, {
      flush: "post"
    });
    const Ie = () => {
      var F, D, Q, ne, pe;
      const se = ((F = r.value) === null || F === void 0 ? void 0 : F.offsetWidth) || 0, Ae = ((D = r.value) === null || D === void 0 ? void 0 : D.offsetHeight) || 0, Se = ((Q = s.value) === null || Q === void 0 ? void 0 : Q.$el) || {}, Oe = Se.offsetWidth || 0, Be = Se.offsetHeight || 0;
      w(se), R(Ae), M(Oe), U(Be);
      const Ue = (((ne = c.value) === null || ne === void 0 ? void 0 : ne.offsetWidth) || 0) - Oe, ve = (((pe = c.value) === null || pe === void 0 ? void 0 : pe.offsetHeight) || 0) - Be;
      y(Ue), x(ve), Tt();
    }, mt = h(() => [...i.value.slice(0, We.value), ...i.value.slice(Ee.value + 1)]), [$n, ht] = me(), ze = h(() => G.value.get(e.activeKey)), Cn = fe(), Tn = () => {
      Qe.cancel(Cn.value);
    };
    re([ze, g, () => e.rtl], () => {
      const F = {};
      ze.value && (g.value ? (e.rtl ? F.right = St(ze.value.right) : F.left = St(ze.value.left), F.width = St(ze.value.width)) : (F.top = St(ze.value.top), F.height = St(ze.value.height))), Tn(), Cn.value = Qe(() => {
        ht(F);
      });
    }), re([() => e.activeKey, ze, G, g], () => {
      Te();
    }, {
      flush: "post"
    }), re([() => e.rtl, () => e.tabBarGutter, () => e.activeKey, () => i.value], () => {
      Ie();
    }, {
      flush: "post"
    });
    const Nt = (F) => {
      let {
        position: D,
        prefixCls: Q,
        extra: ne
      } = F;
      if (!ne)
        return null;
      const pe = ne == null ? void 0 : ne({
        position: D
      });
      return pe ? p("div", {
        class: `${Q}-extra-content`
      }, [pe]) : null;
    };
    return ct(() => {
      Y(), Tn();
    }), () => {
      const {
        id: F,
        animated: D,
        activeKey: Q,
        rtl: ne,
        editable: pe,
        locale: se,
        tabPosition: Ae,
        tabBarGutter: Se,
        onTabClick: Oe
      } = e, {
        class: Be,
        style: Ue
      } = o, ve = l.value, xe = !!mt.value.length, De = `${ve}-nav-wrap`;
      let Pt, Dt, xn, En;
      g.value ? ne ? (Dt = v.value > 0, Pt = v.value + T.value < b.value) : (Pt = v.value < 0, Dt = -v.value + T.value < b.value) : (xn = S.value < 0, En = -S.value + $.value < E.value);
      const xt = {};
      Ae === "top" || Ae === "bottom" ? xt[ne ? "marginRight" : "marginLeft"] = typeof Se == "number" ? `${Se}px` : Se : xt.marginTop = typeof Se == "number" ? `${Se}px` : Se;
      const On = i.value.map((Ht, jo) => {
        const {
          key: bt
        } = Ht;
        return p(vi, {
          id: F,
          prefixCls: ve,
          key: bt,
          tab: Ht,
          style: jo === 0 ? void 0 : xt,
          closable: Ht.closable,
          editable: pe,
          active: bt === Q,
          removeAriaLabel: se == null ? void 0 : se.removeAriaLabel,
          ref: u(bt),
          onClick: (Xo) => {
            Oe(bt, Xo);
          },
          onFocus: () => {
            Te(bt), z(), r.value && (ne || (r.value.scrollLeft = 0), r.value.scrollTop = 0);
          }
        }, a);
      });
      return p("div", {
        role: "tablist",
        class: Ce(`${ve}-nav`, Be),
        style: Ue,
        onKeydown: () => {
          z();
        }
      }, [p(Nt, {
        position: "left",
        prefixCls: ve,
        extra: a.leftExtra
      }, null), p(Mn, {
        onResize: Ie
      }, {
        default: () => [p("div", {
          class: Ce(De, {
            [`${De}-ping-left`]: Pt,
            [`${De}-ping-right`]: Dt,
            [`${De}-ping-top`]: xn,
            [`${De}-ping-bottom`]: En
          }),
          ref: r
        }, [p(Mn, {
          onResize: Ie
        }, {
          default: () => [p("div", {
            ref: c,
            class: `${ve}-nav-list`,
            style: {
              transform: `translate(${v.value}px, ${S.value}px)`,
              transition: ie.value ? "none" : void 0
            }
          }, [On, p(Mo, {
            ref: s,
            prefixCls: ve,
            locale: se,
            editable: pe,
            style: H(H({}, On.length === 0 ? void 0 : xt), {
              visibility: xe ? "hidden" : null
            })
          }, null), p("div", {
            class: Ce(`${ve}-ink-bar`, {
              [`${ve}-ink-bar-animated`]: D.inkBar
            }),
            style: $n.value
          }, null)])]
        })])]
      }), p(bi, te(te({}, e), {}, {
        removeAriaLabel: se == null ? void 0 : se.removeAriaLabel,
        ref: d,
        prefixCls: ve,
        tabs: mt.value,
        class: !xe && ee.value
      }), lo(a, ["moreIcon"])), p(Nt, {
        position: "right",
        prefixCls: ve,
        extra: a.rightExtra
      }, null), p(Nt, {
        position: "right",
        prefixCls: ve,
        extra: a.tabBarExtraContent
      }, null)]);
    };
  }
}), Ti = N({
  compatConfig: {
    MODE: 3
  },
  name: "TabPanelList",
  inheritAttrs: !1,
  props: {
    activeKey: {
      type: [String, Number]
    },
    id: {
      type: String
    },
    rtl: {
      type: Boolean
    },
    animated: {
      type: Object,
      default: void 0
    },
    tabPosition: {
      type: String
    },
    destroyInactiveTabPane: {
      type: Boolean
    }
  },
  setup(e) {
    const {
      tabs: t,
      prefixCls: o
    } = Ao();
    return () => {
      const {
        id: a,
        activeKey: i,
        animated: l,
        tabPosition: r,
        rtl: c,
        destroyInactiveTabPane: d
      } = e, s = l.tabPane, u = o.value, f = t.value.findIndex((g) => g.key === i);
      return p("div", {
        class: `${u}-content-holder`
      }, [p("div", {
        class: [`${u}-content`, `${u}-content-${r}`, {
          [`${u}-content-animated`]: s
        }],
        style: f && s ? {
          [c ? "marginRight" : "marginLeft"]: `-${f}00%`
        } : null
      }, [t.value.map((g) => pa(g.node, {
        key: g.key,
        prefixCls: u,
        tabKey: g.key,
        id: a,
        animated: s,
        active: g.key === i,
        destroyInactiveTabPane: d
      }))])]);
    };
  }
});
var xi = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { tag: "path", attrs: { d: "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z" } }] }, name: "plus", theme: "outlined" };
function jn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? Object(arguments[t]) : {}, a = Object.keys(o);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(o).filter(function(i) {
      return Object.getOwnPropertyDescriptor(o, i).enumerable;
    }))), a.forEach(function(i) {
      Ei(e, i, o[i]);
    });
  }
  return e;
}
function Ei(e, t, o) {
  return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
}
var dn = function(t, o) {
  var a = jn({}, t, o.attrs);
  return p(pt, jn({}, a, {
    icon: xi
  }), null);
};
dn.displayName = "PlusOutlined";
dn.inheritAttrs = !1;
const Oi = (e) => {
  const {
    componentCls: t,
    motionDurationSlow: o
  } = e;
  return [
    {
      [t]: {
        [`${t}-switch`]: {
          "&-appear, &-enter": {
            transition: "none",
            "&-start": {
              opacity: 0
            },
            "&-active": {
              opacity: 1,
              transition: `opacity ${o}`
            }
          },
          "&-leave": {
            position: "absolute",
            transition: "none",
            inset: 0,
            "&-start": {
              opacity: 1
            },
            "&-active": {
              opacity: 0,
              transition: `opacity ${o}`
            }
          }
        }
      }
    },
    // Follow code may reuse in other components
    [Rn(e, "slide-up"), Rn(e, "slide-down")]
  ];
}, wi = (e) => {
  const {
    componentCls: t,
    tabsCardHorizontalPadding: o,
    tabsCardHeadBackground: a,
    tabsCardGutter: i,
    colorSplit: l
  } = e;
  return {
    [`${t}-card`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        [`${t}-tab`]: {
          margin: 0,
          padding: o,
          background: a,
          border: `${e.lineWidth}px ${e.lineType} ${l}`,
          transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`
        },
        [`${t}-tab-active`]: {
          color: e.colorPrimary,
          background: e.colorBgContainer
        },
        [`${t}-ink-bar`]: {
          visibility: "hidden"
        }
      },
      // ========================== Top & Bottom ==========================
      [`&${t}-top, &${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab + ${t}-tab`]: {
            marginLeft: {
              _skip_check_: !0,
              value: `${i}px`
            }
          }
        }
      },
      [`&${t}-top`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`
          },
          [`${t}-tab-active`]: {
            borderBottomColor: e.colorBgContainer
          }
        }
      },
      [`&${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`
          },
          [`${t}-tab-active`]: {
            borderTopColor: e.colorBgContainer
          }
        }
      },
      // ========================== Left & Right ==========================
      [`&${t}-left, &${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab + ${t}-tab`]: {
            marginTop: `${i}px`
          }
        }
      },
      [`&${t}-left`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `${e.borderRadiusLG}px 0 0 ${e.borderRadiusLG}px`
            }
          },
          [`${t}-tab-active`]: {
            borderRightColor: {
              _skip_check_: !0,
              value: e.colorBgContainer
            }
          }
        }
      },
      [`&${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px 0`
            }
          },
          [`${t}-tab-active`]: {
            borderLeftColor: {
              _skip_check_: !0,
              value: e.colorBgContainer
            }
          }
        }
      }
    }
  };
}, Mi = (e) => {
  const {
    componentCls: t,
    tabsHoverColor: o,
    dropdownEdgeChildVerticalPadding: a
  } = e;
  return {
    [`${t}-dropdown`]: H(H({}, It(e)), {
      position: "absolute",
      top: -9999,
      left: {
        _skip_check_: !0,
        value: -9999
      },
      zIndex: e.zIndexPopup,
      display: "block",
      "&-hidden": {
        display: "none"
      },
      [`${t}-dropdown-menu`]: {
        maxHeight: e.tabsDropdownHeight,
        margin: 0,
        padding: `${a}px 0`,
        overflowX: "hidden",
        overflowY: "auto",
        textAlign: {
          _skip_check_: !0,
          value: "left"
        },
        listStyleType: "none",
        backgroundColor: e.colorBgContainer,
        backgroundClip: "padding-box",
        borderRadius: e.borderRadiusLG,
        outline: "none",
        boxShadow: e.boxShadowSecondary,
        "&-item": H(H({}, fa), {
          display: "flex",
          alignItems: "center",
          minWidth: e.tabsDropdownWidth,
          margin: 0,
          padding: `${e.paddingXXS}px ${e.paddingSM}px`,
          color: e.colorText,
          fontWeight: "normal",
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          cursor: "pointer",
          transition: `all ${e.motionDurationSlow}`,
          "> span": {
            flex: 1,
            whiteSpace: "nowrap"
          },
          "&-remove": {
            flex: "none",
            marginLeft: {
              _skip_check_: !0,
              value: e.marginSM
            },
            color: e.colorTextDescription,
            fontSize: e.fontSizeSM,
            background: "transparent",
            border: 0,
            cursor: "pointer",
            "&:hover": {
              color: o
            }
          },
          "&:hover": {
            background: e.controlItemBgHover
          },
          "&-disabled": {
            "&, &:hover": {
              color: e.colorTextDisabled,
              background: "transparent",
              cursor: "not-allowed"
            }
          }
        })
      }
    })
  };
}, Ri = (e) => {
  const {
    componentCls: t,
    margin: o,
    colorSplit: a
  } = e;
  return {
    // ========================== Top & Bottom ==========================
    [`${t}-top, ${t}-bottom`]: {
      flexDirection: "column",
      [`> ${t}-nav, > div > ${t}-nav`]: {
        margin: `0 0 ${o}px 0`,
        "&::before": {
          position: "absolute",
          right: {
            _skip_check_: !0,
            value: 0
          },
          left: {
            _skip_check_: !0,
            value: 0
          },
          borderBottom: `${e.lineWidth}px ${e.lineType} ${a}`,
          content: "''"
        },
        [`${t}-ink-bar`]: {
          height: e.lineWidthBold,
          "&-animated": {
            transition: `width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`
          }
        },
        [`${t}-nav-wrap`]: {
          "&::before, &::after": {
            top: 0,
            bottom: 0,
            width: e.controlHeight
          },
          "&::before": {
            left: {
              _skip_check_: !0,
              value: 0
            },
            boxShadow: e.boxShadowTabsOverflowLeft
          },
          "&::after": {
            right: {
              _skip_check_: !0,
              value: 0
            },
            boxShadow: e.boxShadowTabsOverflowRight
          },
          [`&${t}-nav-wrap-ping-left::before`]: {
            opacity: 1
          },
          [`&${t}-nav-wrap-ping-right::after`]: {
            opacity: 1
          }
        }
      }
    },
    [`${t}-top`]: {
      [`> ${t}-nav,
        > div > ${t}-nav`]: {
        "&::before": {
          bottom: 0
        },
        [`${t}-ink-bar`]: {
          bottom: 0
        }
      }
    },
    [`${t}-bottom`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        order: 1,
        marginTop: `${o}px`,
        marginBottom: 0,
        "&::before": {
          top: 0
        },
        [`${t}-ink-bar`]: {
          top: 0
        }
      },
      [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
        order: 0
      }
    },
    // ========================== Left & Right ==========================
    [`${t}-left, ${t}-right`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        flexDirection: "column",
        minWidth: e.controlHeight * 1.25,
        // >>>>>>>>>>> Tab
        [`${t}-tab`]: {
          padding: `${e.paddingXS}px ${e.paddingLG}px`,
          textAlign: "center"
        },
        [`${t}-tab + ${t}-tab`]: {
          margin: `${e.margin}px 0 0 0`
        },
        // >>>>>>>>>>> Nav
        [`${t}-nav-wrap`]: {
          flexDirection: "column",
          "&::before, &::after": {
            right: {
              _skip_check_: !0,
              value: 0
            },
            left: {
              _skip_check_: !0,
              value: 0
            },
            height: e.controlHeight
          },
          "&::before": {
            top: 0,
            boxShadow: e.boxShadowTabsOverflowTop
          },
          "&::after": {
            bottom: 0,
            boxShadow: e.boxShadowTabsOverflowBottom
          },
          [`&${t}-nav-wrap-ping-top::before`]: {
            opacity: 1
          },
          [`&${t}-nav-wrap-ping-bottom::after`]: {
            opacity: 1
          }
        },
        // >>>>>>>>>>> Ink Bar
        [`${t}-ink-bar`]: {
          width: e.lineWidthBold,
          "&-animated": {
            transition: `height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`
          }
        },
        [`${t}-nav-list, ${t}-nav-operations`]: {
          flex: "1 0 auto",
          flexDirection: "column"
        }
      }
    },
    [`${t}-left`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        [`${t}-ink-bar`]: {
          right: {
            _skip_check_: !0,
            value: 0
          }
        }
      },
      [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
        marginLeft: {
          _skip_check_: !0,
          value: `-${e.lineWidth}px`
        },
        borderLeft: {
          _skip_check_: !0,
          value: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`
        },
        [`> ${t}-content > ${t}-tabpane`]: {
          paddingLeft: {
            _skip_check_: !0,
            value: e.paddingLG
          }
        }
      }
    },
    [`${t}-right`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        order: 1,
        [`${t}-ink-bar`]: {
          left: {
            _skip_check_: !0,
            value: 0
          }
        }
      },
      [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
        order: 0,
        marginRight: {
          _skip_check_: !0,
          value: -e.lineWidth
        },
        borderRight: {
          _skip_check_: !0,
          value: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`
        },
        [`> ${t}-content > ${t}-tabpane`]: {
          paddingRight: {
            _skip_check_: !0,
            value: e.paddingLG
          }
        }
      }
    }
  };
}, Ii = (e) => {
  const {
    componentCls: t,
    padding: o
  } = e;
  return {
    [t]: {
      "&-small": {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: `${e.paddingXS}px 0`,
            fontSize: e.fontSize
          }
        }
      },
      "&-large": {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: `${o}px 0`,
            fontSize: e.fontSizeLG
          }
        }
      }
    },
    [`${t}-card`]: {
      [`&${t}-small`]: {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: `${e.paddingXXS * 1.5}px ${o}px`
          }
        },
        [`&${t}-bottom`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: `0 0 ${e.borderRadius}px ${e.borderRadius}px`
          }
        },
        [`&${t}-top`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: `${e.borderRadius}px ${e.borderRadius}px 0 0`
          }
        },
        [`&${t}-right`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `0 ${e.borderRadius}px ${e.borderRadius}px 0`
            }
          }
        },
        [`&${t}-left`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `${e.borderRadius}px 0 0 ${e.borderRadius}px`
            }
          }
        }
      },
      [`&${t}-large`]: {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: `${e.paddingXS}px ${o}px ${e.paddingXXS * 1.5}px`
          }
        }
      }
    }
  };
}, Ai = (e) => {
  const {
    componentCls: t,
    tabsActiveColor: o,
    tabsHoverColor: a,
    iconCls: i,
    tabsHorizontalGutter: l
  } = e, r = `${t}-tab`;
  return {
    [r]: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      padding: `${e.paddingSM}px 0`,
      fontSize: `${e.fontSize}px`,
      background: "transparent",
      border: 0,
      outline: "none",
      cursor: "pointer",
      "&-btn, &-remove": H({
        "&:focus:not(:focus-visible), &:active": {
          color: o
        }
      }, so(e)),
      "&-btn": {
        outline: "none",
        transition: "all 0.3s"
      },
      "&-remove": {
        flex: "none",
        marginRight: {
          _skip_check_: !0,
          value: -e.marginXXS
        },
        marginLeft: {
          _skip_check_: !0,
          value: e.marginXS
        },
        color: e.colorTextDescription,
        fontSize: e.fontSizeSM,
        background: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        transition: `all ${e.motionDurationSlow}`,
        "&:hover": {
          color: e.colorTextHeading
        }
      },
      "&:hover": {
        color: a
      },
      [`&${r}-active ${r}-btn`]: {
        color: e.colorPrimary,
        textShadow: e.tabsActiveTextShadow
      },
      [`&${r}-disabled`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed"
      },
      [`&${r}-disabled ${r}-btn, &${r}-disabled ${t}-remove`]: {
        "&:focus, &:active": {
          color: e.colorTextDisabled
        }
      },
      [`& ${r}-remove ${i}`]: {
        margin: 0
      },
      [i]: {
        marginRight: {
          _skip_check_: !0,
          value: e.marginSM
        }
      }
    },
    [`${r} + ${r}`]: {
      margin: {
        _skip_check_: !0,
        value: `0 0 0 ${l}px`
      }
    }
  };
}, Bi = (e) => {
  const {
    componentCls: t,
    tabsHorizontalGutter: o,
    iconCls: a,
    tabsCardGutter: i
  } = e;
  return {
    [`${t}-rtl`]: {
      direction: "rtl",
      [`${t}-nav`]: {
        [`${t}-tab`]: {
          margin: {
            _skip_check_: !0,
            value: `0 0 0 ${o}px`
          },
          [`${t}-tab:last-of-type`]: {
            marginLeft: {
              _skip_check_: !0,
              value: 0
            }
          },
          [a]: {
            marginRight: {
              _skip_check_: !0,
              value: 0
            },
            marginLeft: {
              _skip_check_: !0,
              value: `${e.marginSM}px`
            }
          },
          [`${t}-tab-remove`]: {
            marginRight: {
              _skip_check_: !0,
              value: `${e.marginXS}px`
            },
            marginLeft: {
              _skip_check_: !0,
              value: `-${e.marginXXS}px`
            },
            [a]: {
              margin: 0
            }
          }
        }
      },
      [`&${t}-left`]: {
        [`> ${t}-nav`]: {
          order: 1
        },
        [`> ${t}-content-holder`]: {
          order: 0
        }
      },
      [`&${t}-right`]: {
        [`> ${t}-nav`]: {
          order: 0
        },
        [`> ${t}-content-holder`]: {
          order: 1
        }
      },
      // ====================== Card ======================
      [`&${t}-card${t}-top, &${t}-card${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab + ${t}-tab`]: {
            marginRight: {
              _skip_check_: !0,
              value: `${i}px`
            },
            marginLeft: {
              _skip_check_: !0,
              value: 0
            }
          }
        }
      }
    },
    [`${t}-dropdown-rtl`]: {
      direction: "rtl"
    },
    [`${t}-menu-item`]: {
      [`${t}-dropdown-rtl`]: {
        textAlign: {
          _skip_check_: !0,
          value: "right"
        }
      }
    }
  };
}, Li = (e) => {
  const {
    componentCls: t,
    tabsCardHorizontalPadding: o,
    tabsCardHeight: a,
    tabsCardGutter: i,
    tabsHoverColor: l,
    tabsActiveColor: r,
    colorSplit: c
  } = e;
  return {
    [t]: H(H(H(H({}, It(e)), {
      display: "flex",
      // ========================== Navigation ==========================
      [`> ${t}-nav, > div > ${t}-nav`]: {
        position: "relative",
        display: "flex",
        flex: "none",
        alignItems: "center",
        [`${t}-nav-wrap`]: {
          position: "relative",
          display: "flex",
          flex: "auto",
          alignSelf: "stretch",
          overflow: "hidden",
          whiteSpace: "nowrap",
          transform: "translate(0)",
          // >>>>> Ping shadow
          "&::before, &::after": {
            position: "absolute",
            zIndex: 1,
            opacity: 0,
            transition: `opacity ${e.motionDurationSlow}`,
            content: "''",
            pointerEvents: "none"
          }
        },
        [`${t}-nav-list`]: {
          position: "relative",
          display: "flex",
          transition: `opacity ${e.motionDurationSlow}`
        },
        // >>>>>>>> Operations
        [`${t}-nav-operations`]: {
          display: "flex",
          alignSelf: "stretch"
        },
        [`${t}-nav-operations-hidden`]: {
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none"
        },
        [`${t}-nav-more`]: {
          position: "relative",
          padding: o,
          background: "transparent",
          border: 0,
          "&::after": {
            position: "absolute",
            right: {
              _skip_check_: !0,
              value: 0
            },
            bottom: 0,
            left: {
              _skip_check_: !0,
              value: 0
            },
            height: e.controlHeightLG / 8,
            transform: "translateY(100%)",
            content: "''"
          }
        },
        [`${t}-nav-add`]: H({
          minWidth: `${a}px`,
          marginLeft: {
            _skip_check_: !0,
            value: `${i}px`
          },
          padding: `0 ${e.paddingXS}px`,
          background: "transparent",
          border: `${e.lineWidth}px ${e.lineType} ${c}`,
          borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
          outline: "none",
          cursor: "pointer",
          color: e.colorText,
          transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
          "&:hover": {
            color: l
          },
          "&:active, &:focus:not(:focus-visible)": {
            color: r
          }
        }, so(e))
      },
      [`${t}-extra-content`]: {
        flex: "none"
      },
      // ============================ InkBar ============================
      [`${t}-ink-bar`]: {
        position: "absolute",
        background: e.colorPrimary,
        pointerEvents: "none"
      }
    }), Ai(e)), {
      // =========================== TabPanes ===========================
      [`${t}-content`]: {
        position: "relative",
        display: "flex",
        width: "100%",
        "&-animated": {
          transition: "margin 0.3s"
        }
      },
      [`${t}-content-holder`]: {
        flex: "auto",
        minWidth: 0,
        minHeight: 0
      },
      [`${t}-tabpane`]: {
        outline: "none",
        flex: "none",
        width: "100%"
      }
    }),
    [`${t}-centered`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        [`${t}-nav-wrap`]: {
          [`&:not([class*='${t}-nav-wrap-ping'])`]: {
            justifyContent: "center"
          }
        }
      }
    }
  };
}, Ni = an("Tabs", (e) => {
  const t = e.controlHeightLG, o = rn(e, {
    tabsHoverColor: e.colorPrimaryHover,
    tabsActiveColor: e.colorPrimaryActive,
    tabsCardHorizontalPadding: `${(t - Math.round(e.fontSize * e.lineHeight)) / 2 - e.lineWidth}px ${e.padding}px`,
    tabsCardHeight: t,
    tabsCardGutter: e.marginXXS / 2,
    tabsHorizontalGutter: 32,
    tabsCardHeadBackground: e.colorFillAlter,
    dropdownEdgeChildVerticalPadding: e.paddingXXS,
    tabsActiveTextShadow: "0 0 0.25px currentcolor",
    tabsDropdownHeight: 200,
    tabsDropdownWidth: 120
  });
  return [Ii(o), Bi(o), Ri(o), Mi(o), wi(o), Li(o), Oi(o)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 50
}));
let Xn = 0;
const Bo = () => ({
  prefixCls: {
    type: String
  },
  id: {
    type: String
  },
  popupClassName: String,
  getPopupContainer: ge(),
  activeKey: {
    type: [String, Number]
  },
  defaultActiveKey: {
    type: [String, Number]
  },
  direction: Ge(),
  animated: ma([Boolean, Object]),
  renderTabBar: ge(),
  tabBarGutter: {
    type: Number
  },
  tabBarStyle: lt(),
  tabPosition: Ge(),
  destroyInactiveTabPane: uo(),
  hideAdd: Boolean,
  type: Ge(),
  size: Ge(),
  centered: Boolean,
  onEdit: ge(),
  onChange: ge(),
  onTabClick: ge(),
  onTabScroll: ge(),
  "onUpdate:activeKey": ge(),
  // Accessibility
  locale: lt(),
  onPrevClick: ge(),
  onNextClick: ge(),
  tabBarExtraContent: be.any
});
function Pi(e) {
  return e.map((t) => {
    if (ha(t)) {
      const o = H({}, t.props || {});
      for (const [g, v] of Object.entries(o))
        delete o[g], o[ba(g)] = v;
      const a = t.children || {}, i = t.key !== void 0 ? t.key : void 0, {
        tab: l = a.tab,
        disabled: r,
        forceRender: c,
        closable: d,
        animated: s,
        active: u,
        destroyInactiveTabPane: f
      } = o;
      return H(H({
        key: i
      }, o), {
        node: t,
        closeIcon: a.closeIcon,
        tab: l,
        disabled: r === "" || r,
        forceRender: c === "" || c,
        closable: d === "" || d,
        animated: s === "" || s,
        active: u === "" || u,
        destroyInactiveTabPane: f === "" || f
      });
    }
    return null;
  }).filter((t) => t);
}
const Di = N({
  compatConfig: {
    MODE: 3
  },
  name: "InternalTabs",
  inheritAttrs: !1,
  props: H(H({}, ft(Bo(), {
    tabPosition: "top",
    animated: {
      inkBar: !0,
      tabPane: !1
    }
  })), {
    tabs: Sa()
  }),
  slots: Object,
  // emits: ['tabClick', 'tabScroll', 'change', 'update:activeKey'],
  setup(e, t) {
    let {
      attrs: o,
      slots: a
    } = t;
    kt(e.onPrevClick === void 0 && e.onNextClick === void 0, "Tabs", "`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."), kt(e.tabBarExtraContent === void 0, "Tabs", "`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."), kt(a.tabBarExtraContent === void 0, "Tabs", "`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");
    const {
      prefixCls: i,
      direction: l,
      size: r,
      rootPrefixCls: c,
      getPopupContainer: d
    } = et("tabs", e), [s, u] = Ni(i), f = h(() => l.value === "rtl"), g = h(() => {
      const {
        animated: $,
        tabPosition: R
      } = e;
      return $ === !1 || ["left", "right"].includes(R) ? {
        inkBar: !1,
        tabPane: !1
      } : $ === !0 ? {
        inkBar: !0,
        tabPane: !0
      } : H({
        inkBar: !0,
        tabPane: !1
      }, typeof $ == "object" ? $ : {});
    }), [v, _] = me(!1);
    Ne(() => {
      _(_a());
    });
    const [S, m] = Xt(() => {
      var $;
      return ($ = e.tabs[0]) === null || $ === void 0 ? void 0 : $.key;
    }, {
      value: h(() => e.activeKey),
      defaultValue: e.defaultActiveKey
    }), [b, y] = me(() => e.tabs.findIndex(($) => $.key === S.value));
    ut(() => {
      var $;
      let R = e.tabs.findIndex((L) => L.key === S.value);
      R === -1 && (R = Math.max(0, Math.min(b.value, e.tabs.length - 1)), m(($ = e.tabs[R]) === null || $ === void 0 ? void 0 : $.key)), y(R);
    });
    const [E, x] = Xt(null, {
      value: h(() => e.id)
    }), T = h(() => v.value && !["left", "right"].includes(e.tabPosition) ? "top" : e.tabPosition);
    Ne(() => {
      e.id || (x(`rc-tabs-${process.env.NODE_ENV === "test" ? "test" : Xn}`), Xn += 1);
    });
    const w = ($, R) => {
      var L, M;
      (L = e.onTabClick) === null || L === void 0 || L.call(e, $, R);
      const k = $ !== S.value;
      m($), k && ((M = e.onChange) === null || M === void 0 || M.call(e, $));
    };
    return Io({
      tabs: h(() => e.tabs),
      prefixCls: i
    }), () => {
      const {
        id: $,
        type: R,
        tabBarGutter: L,
        tabBarStyle: M,
        locale: k,
        destroyInactiveTabPane: U,
        renderTabBar: ce = a.renderTabBar,
        onTabScroll: he,
        hideAdd: G,
        centered: ee
      } = e, q = {
        id: E.value,
        activeKey: S.value,
        animated: g.value,
        tabPosition: T.value,
        rtl: f.value,
        mobile: v.value
      };
      let P;
      R === "editable-card" && (P = {
        onEdit: (ye, z) => {
          let {
            key: Y,
            event: J
          } = z;
          var Te;
          (Te = e.onEdit) === null || Te === void 0 || Te.call(e, ye === "add" ? J : Y, ye);
        },
        removeIcon: () => p(co, null, null),
        addIcon: a.addIcon ? a.addIcon : () => p(dn, null, null),
        showAdd: G !== !0
      });
      let K;
      const de = H(H({}, q), {
        moreTransitionName: `${c.value}-slide-up`,
        editable: P,
        locale: k,
        tabBarGutter: L,
        onTabClick: w,
        onTabScroll: he,
        style: M,
        getPopupContainer: d.value,
        popupClassName: Ce(e.popupClassName, u.value)
      });
      ce ? K = ce(H(H({}, de), {
        DefaultTabBar: Gn
      })) : K = p(Gn, de, lo(a, ["moreIcon", "leftExtra", "rightExtra", "tabBarExtraContent"]));
      const ie = i.value;
      return s(p("div", te(te({}, o), {}, {
        id: $,
        class: Ce(ie, `${ie}-${T.value}`, {
          [u.value]: !0,
          [`${ie}-${r.value}`]: r.value,
          [`${ie}-card`]: ["card", "editable-card"].includes(R),
          [`${ie}-editable-card`]: R === "editable-card",
          [`${ie}-centered`]: ee,
          [`${ie}-mobile`]: v.value,
          [`${ie}-editable`]: R === "editable-card",
          [`${ie}-rtl`]: f.value
        }, o.class)
      }), [K, p(Ti, te(te({
        destroyInactiveTabPane: U
      }, q), {}, {
        animated: g.value
      }), null)]));
    };
  }
}), st = N({
  compatConfig: {
    MODE: 3
  },
  name: "ATabs",
  inheritAttrs: !1,
  props: ft(Bo(), {
    tabPosition: "top",
    animated: {
      inkBar: !0,
      tabPane: !1
    }
  }),
  slots: Object,
  // emits: ['tabClick', 'tabScroll', 'change', 'update:activeKey'],
  setup(e, t) {
    let {
      attrs: o,
      slots: a,
      emit: i
    } = t;
    const l = (r) => {
      i("update:activeKey", r), i("change", r);
    };
    return () => {
      var r;
      const c = Pi(ga((r = a.default) === null || r === void 0 ? void 0 : r.call(a)));
      return p(Di, te(te(te({}, va(e, ["onUpdate:activeKey"])), o), {}, {
        onChange: l,
        tabs: c
      }), a);
    };
  }
}), Hi = () => ({
  tab: be.any,
  disabled: {
    type: Boolean
  },
  forceRender: {
    type: Boolean
  },
  closable: {
    type: Boolean
  },
  animated: {
    type: Boolean
  },
  active: {
    type: Boolean
  },
  destroyInactiveTabPane: {
    type: Boolean
  },
  // Pass by TabPaneList
  prefixCls: {
    type: String
  },
  tabKey: {
    type: [String, Number]
  },
  id: {
    type: String
  }
  // closeIcon: PropTypes.any,
}), Yt = N({
  compatConfig: {
    MODE: 3
  },
  name: "ATabPane",
  inheritAttrs: !1,
  __ANT_TAB_PANE: !0,
  props: Hi(),
  slots: Object,
  setup(e, t) {
    let {
      attrs: o,
      slots: a
    } = t;
    const i = B(e.forceRender);
    re([() => e.active, () => e.destroyInactiveTabPane], () => {
      e.active ? i.value = !0 : e.destroyInactiveTabPane && (i.value = !1);
    }, {
      immediate: !0
    });
    const l = h(() => e.active ? {} : e.animated ? {
      visibility: "hidden",
      height: 0,
      overflowY: "hidden"
    } : {
      display: "none"
    });
    return () => {
      var r;
      const {
        prefixCls: c,
        forceRender: d,
        id: s,
        active: u,
        tabKey: f
      } = e;
      return p("div", {
        id: s && `${s}-panel-${f}`,
        role: "tabpanel",
        tabindex: u ? 0 : -1,
        "aria-labelledby": s && `${s}-tab-${f}`,
        "aria-hidden": !u,
        style: [l.value, o.style],
        class: [`${c}-tabpane`, u && `${c}-tabpane-active`, o.class]
      }, [(u || i.value || d) && ((r = a.default) === null || r === void 0 ? void 0 : r.call(a))]);
    };
  }
});
st.TabPane = Yt;
st.install = function(e) {
  return e.component(st.name, st), e.component(Yt.name, Yt), e;
};
var ki = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z" } }] }, name: "file-text", theme: "outlined" };
function Kn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? Object(arguments[t]) : {}, a = Object.keys(o);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(o).filter(function(i) {
      return Object.getOwnPropertyDescriptor(o, i).enumerable;
    }))), a.forEach(function(i) {
      Fi(e, i, o[i]);
    });
  }
  return e;
}
function Fi(e, t, o) {
  return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
}
var Bt = function(t, o) {
  var a = Kn({}, t, o.attrs);
  return p(pt, Kn({}, a, {
    icon: ki
  }), null);
};
Bt.displayName = "FileTextOutlined";
Bt.inheritAttrs = !1;
const pn = () => ({
  prefixCls: String,
  description: be.any,
  type: Ge("default"),
  shape: Ge("circle"),
  tooltip: be.any,
  href: String,
  target: ge(),
  badge: lt(),
  onClick: ge()
}), Wi = () => ({
  prefixCls: Ge()
}), zi = () => H(H({}, pn()), {
  // 包含的 Float Button
  // 触发方式 (有触发方式为菜单模式）
  trigger: Ge(),
  // 受控展开
  open: uo(),
  // 展开收起的回调
  onOpenChange: ge(),
  "onUpdate:open": ge()
}), Ui = () => H(H({}, pn()), {
  prefixCls: String,
  duration: Number,
  target: ge(),
  visibilityHeight: Number,
  onClick: ge()
}), Gi = N({
  compatConfig: {
    MODE: 3
  },
  name: "AFloatButtonContent",
  inheritAttrs: !1,
  props: Wi(),
  setup(e, t) {
    let {
      attrs: o,
      slots: a
    } = t;
    return () => {
      var i;
      const {
        prefixCls: l
      } = e, r = ya((i = a.description) === null || i === void 0 ? void 0 : i.call(a));
      return p("div", te(te({}, o), {}, {
        class: [o.class, `${l}-content`]
      }), [a.icon || r.length ? p(le, null, [a.icon && p("div", {
        class: `${l}-icon`
      }, [a.icon()]), r.length ? p("div", {
        class: `${l}-description`
      }, [r]) : null]) : p("div", {
        class: `${l}-icon`
      }, [p(Bt, null, null)])]);
    };
  }
}), Lo = Symbol("floatButtonGroupContext"), ji = (e) => (dt(Lo, e), e), No = () => Rt(Lo, {
  shape: B()
}), Vn = (e) => e === 0 ? 0 : e - Math.sqrt(Math.pow(e, 2) / 2), Xi = (e) => {
  const {
    componentCls: t,
    floatButtonSize: o,
    motionDurationSlow: a,
    motionEaseInOutCirc: i
  } = e, l = `${t}-group`, r = new In("antFloatButtonMoveDownIn", {
    "0%": {
      transform: `translate3d(0, ${o}px, 0)`,
      transformOrigin: "0 0",
      opacity: 0
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1
    }
  }), c = new In("antFloatButtonMoveDownOut", {
    "0%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1
    },
    "100%": {
      transform: `translate3d(0, ${o}px, 0)`,
      transformOrigin: "0 0",
      opacity: 0
    }
  });
  return [{
    [`${l}-wrap`]: H({}, Ca(`${l}-wrap`, r, c, a, !0))
  }, {
    [`${l}-wrap`]: {
      [`
          &${l}-wrap-enter,
          &${l}-wrap-appear
        `]: {
        opacity: 0,
        animationTimingFunction: i
      },
      [`&${l}-wrap-leave`]: {
        animationTimingFunction: i
      }
    }
  }];
}, Ki = (e) => {
  const {
    antCls: t,
    componentCls: o,
    floatButtonSize: a,
    margin: i,
    borderRadiusLG: l,
    borderRadiusSM: r,
    badgeOffset: c,
    floatButtonBodyPadding: d
  } = e, s = `${o}-group`;
  return {
    [s]: H(H({}, It(e)), {
      zIndex: 99,
      display: "block",
      border: "none",
      position: "fixed",
      width: a,
      height: "auto",
      boxShadow: "none",
      minHeight: a,
      insetInlineEnd: e.floatButtonInsetInlineEnd,
      insetBlockEnd: e.floatButtonInsetBlockEnd,
      borderRadius: l,
      [`${s}-wrap`]: {
        zIndex: -1,
        display: "block",
        position: "relative",
        marginBottom: i
      },
      [`&${s}-rtl`]: {
        direction: "rtl"
      },
      [o]: {
        position: "static"
      }
    }),
    [`${s}-circle`]: {
      [`${o}-circle:not(:last-child)`]: {
        marginBottom: e.margin,
        [`${o}-body`]: {
          width: a,
          height: a,
          borderRadius: "50%"
        }
      }
    },
    [`${s}-square`]: {
      [`${o}-square`]: {
        borderRadius: 0,
        padding: 0,
        "&:first-child": {
          borderStartStartRadius: l,
          borderStartEndRadius: l
        },
        "&:last-child": {
          borderEndStartRadius: l,
          borderEndEndRadius: l
        },
        "&:not(:last-child)": {
          borderBottom: `${e.lineWidth}px ${e.lineType} ${e.colorSplit}`
        },
        [`${t}-badge`]: {
          [`${t}-badge-count`]: {
            top: -(d + c),
            insetInlineEnd: -(d + c)
          }
        }
      },
      [`${s}-wrap`]: {
        display: "block",
        borderRadius: l,
        boxShadow: e.boxShadowSecondary,
        [`${o}-square`]: {
          boxShadow: "none",
          marginTop: 0,
          borderRadius: 0,
          padding: d,
          "&:first-child": {
            borderStartStartRadius: l,
            borderStartEndRadius: l
          },
          "&:last-child": {
            borderEndStartRadius: l,
            borderEndEndRadius: l
          },
          "&:not(:last-child)": {
            borderBottom: `${e.lineWidth}px ${e.lineType} ${e.colorSplit}`
          },
          [`${o}-body`]: {
            width: e.floatButtonBodySize,
            height: e.floatButtonBodySize
          }
        }
      }
    },
    [`${s}-circle-shadow`]: {
      boxShadow: "none"
    },
    [`${s}-square-shadow`]: {
      boxShadow: e.boxShadowSecondary,
      [`${o}-square`]: {
        boxShadow: "none",
        padding: d,
        [`${o}-body`]: {
          width: e.floatButtonBodySize,
          height: e.floatButtonBodySize,
          borderRadius: r
        }
      }
    }
  };
}, Vi = (e) => {
  const {
    antCls: t,
    componentCls: o,
    floatButtonBodyPadding: a,
    floatButtonIconSize: i,
    floatButtonSize: l,
    borderRadiusLG: r,
    badgeOffset: c,
    dotOffsetInSquare: d,
    dotOffsetInCircle: s
  } = e;
  return {
    [o]: H(H({}, It(e)), {
      border: "none",
      position: "fixed",
      cursor: "pointer",
      zIndex: 99,
      display: "block",
      justifyContent: "center",
      alignItems: "center",
      width: l,
      height: l,
      insetInlineEnd: e.floatButtonInsetInlineEnd,
      insetBlockEnd: e.floatButtonInsetBlockEnd,
      boxShadow: e.boxShadowSecondary,
      // Pure Panel
      "&-pure": {
        position: "relative",
        inset: "auto"
      },
      "&:empty": {
        display: "none"
      },
      [`${t}-badge`]: {
        width: "100%",
        height: "100%",
        [`${t}-badge-count`]: {
          transform: "translate(0, 0)",
          transformOrigin: "center",
          top: -c,
          insetInlineEnd: -c
        }
      },
      [`${o}-body`]: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: `all ${e.motionDurationMid}`,
        [`${o}-content`]: {
          overflow: "hidden",
          textAlign: "center",
          minHeight: l,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: `${a / 2}px ${a}px`,
          [`${o}-icon`]: {
            textAlign: "center",
            margin: "auto",
            width: i,
            fontSize: i,
            lineHeight: 1
          }
        }
      }
    }),
    [`${o}-rtl`]: {
      direction: "rtl"
    },
    [`${o}-circle`]: {
      height: l,
      borderRadius: "50%",
      [`${t}-badge`]: {
        [`${t}-badge-dot`]: {
          top: s,
          insetInlineEnd: s
        }
      },
      [`${o}-body`]: {
        borderRadius: "50%"
      }
    },
    [`${o}-square`]: {
      height: "auto",
      minHeight: l,
      borderRadius: r,
      [`${t}-badge`]: {
        [`${t}-badge-dot`]: {
          top: d,
          insetInlineEnd: d
        }
      },
      [`${o}-body`]: {
        height: "auto",
        borderRadius: r
      }
    },
    [`${o}-default`]: {
      backgroundColor: e.floatButtonBackgroundColor,
      transition: `background-color ${e.motionDurationMid}`,
      [`${o}-body`]: {
        backgroundColor: e.floatButtonBackgroundColor,
        transition: `background-color ${e.motionDurationMid}`,
        "&:hover": {
          backgroundColor: e.colorFillContent
        },
        [`${o}-content`]: {
          [`${o}-icon`]: {
            color: e.colorText
          },
          [`${o}-description`]: {
            display: "flex",
            alignItems: "center",
            lineHeight: `${e.fontSizeLG}px`,
            color: e.colorText,
            fontSize: e.fontSizeSM
          }
        }
      }
    },
    [`${o}-primary`]: {
      backgroundColor: e.colorPrimary,
      [`${o}-body`]: {
        backgroundColor: e.colorPrimary,
        transition: `background-color ${e.motionDurationMid}`,
        "&:hover": {
          backgroundColor: e.colorPrimaryHover
        },
        [`${o}-content`]: {
          [`${o}-icon`]: {
            color: e.colorTextLightSolid
          },
          [`${o}-description`]: {
            display: "flex",
            alignItems: "center",
            lineHeight: `${e.fontSizeLG}px`,
            color: e.colorTextLightSolid,
            fontSize: e.fontSizeSM
          }
        }
      }
    }
  };
}, fn = an("FloatButton", (e) => {
  const {
    colorTextLightSolid: t,
    colorBgElevated: o,
    controlHeightLG: a,
    marginXXL: i,
    marginLG: l,
    fontSize: r,
    fontSizeIcon: c,
    controlItemBgHover: d,
    paddingXXS: s,
    borderRadiusLG: u
  } = e, f = rn(e, {
    floatButtonBackgroundColor: o,
    floatButtonColor: t,
    floatButtonHoverBackgroundColor: d,
    floatButtonFontSize: r,
    floatButtonIconSize: c * 1.5,
    floatButtonSize: a,
    floatButtonInsetBlockEnd: i,
    floatButtonInsetInlineEnd: l,
    floatButtonBodySize: a - s * 2,
    // 这里的 paddingXXS 是简写，完整逻辑是 (controlHeightLG - (controlHeightLG - paddingXXS * 2)) / 2,
    floatButtonBodyPadding: s,
    badgeOffset: s * 1.5,
    dotOffsetInCircle: Vn(a / 2),
    dotOffsetInSquare: Vn(u)
  });
  return [Ki(f), Vi(f), $a(e), Xi(f)];
});
var qi = function(e, t) {
  var o = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (o[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, a = Object.getOwnPropertySymbols(e); i < a.length; i++)
      t.indexOf(a[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[i]) && (o[a[i]] = e[a[i]]);
  return o;
};
const gn = "float-btn", Yi = N({
  compatConfig: {
    MODE: 3
  },
  name: "AFloatButton",
  inheritAttrs: !1,
  props: ft(pn(), {
    type: "default",
    shape: "circle"
  }),
  setup(e, t) {
    let {
      attrs: o,
      slots: a
    } = t;
    const {
      prefixCls: i,
      direction: l
    } = et(gn, e), [r, c] = fn(i), {
      shape: d
    } = No(), s = B(null), u = h(() => (d == null ? void 0 : d.value) || e.shape);
    return () => {
      var f;
      const {
        prefixCls: g,
        type: v = "default",
        shape: _ = "circle",
        description: S = (f = a.description) === null || f === void 0 ? void 0 : f.call(a),
        tooltip: m,
        badge: b = {}
      } = e, y = qi(e, ["prefixCls", "type", "shape", "description", "tooltip", "badge"]), E = Ce(i.value, `${i.value}-${v}`, `${i.value}-${u.value}`, {
        [`${i.value}-rtl`]: l.value === "rtl"
      }, o.class, c.value), x = p(ln, {
        placement: "left"
      }, {
        title: a.tooltip || m ? () => a.tooltip && a.tooltip() || m : void 0,
        default: () => p(Ta, b, {
          default: () => [p("div", {
            class: `${i.value}-body`
          }, [p(Gi, {
            prefixCls: i.value
          }, {
            icon: a.icon,
            description: () => S
          })])]
        })
      });
      return process.env.NODE_ENV !== "production" && xa(!(_ === "circle" && S), "FloatButton", "supported only when `shape` is `square`. Due to narrow space for text, short sentence is recommended."), r(e.href ? p("a", te(te(te({
        ref: s
      }, o), y), {}, {
        class: E
      }), [x]) : p("button", te(te(te({
        ref: s
      }, o), y), {}, {
        class: E,
        type: "button"
      }), [x]));
    };
  }
}), Je = Yi, Qt = N({
  compatConfig: {
    MODE: 3
  },
  name: "AFloatButtonGroup",
  inheritAttrs: !1,
  props: ft(zi(), {
    type: "default",
    shape: "circle"
  }),
  setup(e, t) {
    let {
      attrs: o,
      slots: a,
      emit: i
    } = t;
    const {
      prefixCls: l,
      direction: r
    } = et(gn, e), [c, d] = fn(l), [s, u] = Xt(!1, {
      value: h(() => e.open)
    }), f = B(null), g = B(null);
    ji({
      shape: h(() => e.shape)
    });
    const v = {
      onMouseenter() {
        var b;
        u(!0), i("update:open", !0), (b = e.onOpenChange) === null || b === void 0 || b.call(e, !0);
      },
      onMouseleave() {
        var b;
        u(!1), i("update:open", !1), (b = e.onOpenChange) === null || b === void 0 || b.call(e, !1);
      }
    }, _ = h(() => e.trigger === "hover" ? v : {}), S = () => {
      var b;
      const y = !s.value;
      i("update:open", y), (b = e.onOpenChange) === null || b === void 0 || b.call(e, y), u(y);
    }, m = (b) => {
      var y, E, x;
      if (!((y = f.value) === null || y === void 0) && y.contains(b.target)) {
        !((E = Oa(g.value)) === null || E === void 0) && E.contains(b.target) && S();
        return;
      }
      u(!1), i("update:open", !1), (x = e.onOpenChange) === null || x === void 0 || x.call(e, !1);
    };
    return re(h(() => e.trigger), (b) => {
      Ea() && (document.removeEventListener("click", m), b === "click" && document.addEventListener("click", m));
    }, {
      immediate: !0
    }), ct(() => {
      document.removeEventListener("click", m);
    }), () => {
      var b;
      const {
        shape: y = "circle",
        type: E = "default",
        tooltip: x,
        description: T,
        trigger: w
      } = e, $ = `${l.value}-group`, R = Ce($, d.value, o.class, {
        [`${$}-rtl`]: r.value === "rtl",
        [`${$}-${y}`]: y,
        [`${$}-${y}-shadow`]: !w
      }), L = Ce(d.value, `${$}-wrap`), M = po(`${$}-wrap`);
      return c(p("div", te(te({
        ref: f
      }, o), {}, {
        class: R
      }, _.value), [w && ["click", "hover"].includes(w) ? p(le, null, [p(en, M, {
        default: () => [Me(p("div", {
          class: L
        }, [a.default && a.default()]), [[ke, s.value]])]
      }), p(Je, {
        ref: g,
        type: E,
        shape: y,
        tooltip: x,
        description: T
      }, {
        icon: () => {
          var k, U;
          return s.value ? ((k = a.closeIcon) === null || k === void 0 ? void 0 : k.call(a)) || p(co, null, null) : ((U = a.icon) === null || U === void 0 ? void 0 : U.call(a)) || p(Bt, null, null);
        },
        tooltip: a.tooltip,
        description: a.description
      })]) : (b = a.default) === null || b === void 0 ? void 0 : b.call(a)]));
    };
  }
});
var Qi = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z" } }] }, name: "vertical-align-top", theme: "outlined" };
function qn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? Object(arguments[t]) : {}, a = Object.keys(o);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(o).filter(function(i) {
      return Object.getOwnPropertyDescriptor(o, i).enumerable;
    }))), a.forEach(function(i) {
      Zi(e, i, o[i]);
    });
  }
  return e;
}
function Zi(e, t, o) {
  return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
}
var vn = function(t, o) {
  var a = qn({}, t, o.attrs);
  return p(pt, qn({}, a, {
    icon: Qi
  }), null);
};
vn.displayName = "VerticalAlignTopOutlined";
vn.inheritAttrs = !1;
const wt = N({
  compatConfig: {
    MODE: 3
  },
  name: "ABackTop",
  inheritAttrs: !1,
  props: ft(Ui(), {
    visibilityHeight: 400,
    target: () => window,
    duration: 450,
    type: "default",
    shape: "circle"
  }),
  // emits: ['click'],
  setup(e, t) {
    let {
      slots: o,
      attrs: a,
      emit: i
    } = t;
    const {
      prefixCls: l,
      direction: r
    } = et(gn, e), [c] = fn(l), d = B(), s = $t({
      visible: e.visibilityHeight === 0,
      scrollEvent: null
    }), u = () => d.value && d.value.ownerDocument ? d.value.ownerDocument : window, f = (m) => {
      const {
        target: b = u,
        duration: y
      } = e;
      wa(0, {
        getContainer: b,
        duration: y
      }), i("click", m);
    }, g = pi((m) => {
      const {
        visibilityHeight: b
      } = e, y = Ma(m.target);
      s.visible = y >= b;
    }), v = () => {
      const {
        target: m
      } = e, y = (m || u)();
      g({
        target: y
      }), y == null || y.addEventListener("scroll", g);
    }, _ = () => {
      const {
        target: m
      } = e, y = (m || u)();
      g.cancel(), y == null || y.removeEventListener("scroll", g);
    };
    re(() => e.target, () => {
      _(), Xe(() => {
        v();
      });
    }), Ne(() => {
      Xe(() => {
        v();
      });
    }), Vo(() => {
      Xe(() => {
        v();
      });
    }), qo(() => {
      _();
    }), ct(() => {
      _();
    });
    const S = No();
    return () => {
      const {
        description: m,
        type: b,
        shape: y,
        tooltip: E,
        badge: x
      } = e, T = H(H({}, a), {
        shape: (S == null ? void 0 : S.shape.value) || y,
        onClick: f,
        class: {
          [`${l.value}`]: !0,
          [`${a.class}`]: a.class,
          [`${l.value}-rtl`]: r.value === "rtl"
        },
        description: m,
        type: b,
        tooltip: E,
        badge: x
      }), w = po("fade");
      return c(p(en, w, {
        default: () => [Me(p(Je, te(te({}, T), {}, {
          ref: d
        }), {
          icon: () => {
            var $;
            return (($ = o.icon) === null || $ === void 0 ? void 0 : $.call(o)) || p(vn, null, null);
          }
        }), [[ke, s.visible]])]
      }));
    };
  }
});
Je.Group = Qt;
Je.BackTop = wt;
Je.install = function(e) {
  return e.component(Je.name, Je), e.component(Qt.name, Qt), e.component(wt.name, wt), e;
};
const Ji = (e) => {
  const {
    componentCls: t,
    colorBgContainer: o,
    colorBgBody: a,
    colorText: i
  } = e;
  return {
    [`${t}-sider-light`]: {
      background: o,
      [`${t}-sider-trigger`]: {
        color: i,
        background: o
      },
      [`${t}-sider-zero-width-trigger`]: {
        color: i,
        background: o,
        border: `1px solid ${a}`,
        borderInlineStart: 0
      }
    }
  };
}, er = (e) => {
  const {
    antCls: t,
    // .ant
    componentCls: o,
    // .ant-layout
    colorText: a,
    colorTextLightSolid: i,
    colorBgHeader: l,
    colorBgBody: r,
    colorBgTrigger: c,
    layoutHeaderHeight: d,
    layoutHeaderPaddingInline: s,
    layoutHeaderColor: u,
    layoutFooterPadding: f,
    layoutTriggerHeight: g,
    layoutZeroTriggerSize: v,
    motionDurationMid: _,
    motionDurationSlow: S,
    fontSize: m,
    borderRadius: b
  } = e;
  return {
    [o]: H(H({
      display: "flex",
      flex: "auto",
      flexDirection: "column",
      color: a,
      /* fix firefox can't set height smaller than content on flex item */
      minHeight: 0,
      background: r,
      "&, *": {
        boxSizing: "border-box"
      },
      [`&${o}-has-sider`]: {
        flexDirection: "row",
        [`> ${o}, > ${o}-content`]: {
          // https://segmentfault.com/a/1190000019498300
          width: 0
        }
      },
      [`${o}-header, &${o}-footer`]: {
        flex: "0 0 auto"
      },
      [`${o}-header`]: {
        height: d,
        paddingInline: s,
        color: u,
        lineHeight: `${d}px`,
        background: l,
        // Other components/menu/style/index.less line:686
        // Integration with header element so menu items have the same height
        [`${t}-menu`]: {
          lineHeight: "inherit"
        }
      },
      [`${o}-footer`]: {
        padding: f,
        color: a,
        fontSize: m,
        background: r
      },
      [`${o}-content`]: {
        flex: "auto",
        // fix firefox can't set height smaller than content on flex item
        minHeight: 0
      },
      [`${o}-sider`]: {
        position: "relative",
        // fix firefox can't set width smaller than content on flex item
        minWidth: 0,
        background: l,
        transition: `all ${_}, background 0s`,
        "&-children": {
          height: "100%",
          // Hack for fixing margin collapse bug
          // https://github.com/ant-design/ant-design/issues/7967
          // solution from https://stackoverflow.com/a/33132624/3040605
          marginTop: -0.1,
          paddingTop: 0.1,
          [`${t}-menu${t}-menu-inline-collapsed`]: {
            width: "auto"
          }
        },
        "&-has-trigger": {
          paddingBottom: g
        },
        "&-right": {
          order: 1
        },
        "&-trigger": {
          position: "fixed",
          bottom: 0,
          zIndex: 1,
          height: g,
          color: i,
          lineHeight: `${g}px`,
          textAlign: "center",
          background: c,
          cursor: "pointer",
          transition: `all ${_}`
        },
        "&-zero-width": {
          "> *": {
            overflow: "hidden"
          },
          "&-trigger": {
            position: "absolute",
            top: d,
            insetInlineEnd: -v,
            zIndex: 1,
            width: v,
            height: v,
            color: i,
            fontSize: e.fontSizeXL,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: l,
            borderStartStartRadius: 0,
            borderStartEndRadius: b,
            borderEndEndRadius: b,
            borderEndStartRadius: 0,
            cursor: "pointer",
            transition: `background ${S} ease`,
            "&::after": {
              position: "absolute",
              inset: 0,
              background: "transparent",
              transition: `all ${S}`,
              content: '""'
            },
            "&:hover::after": {
              // FIXME: Hardcode, but seems no need to create a token for this
              background: "rgba(255, 255, 255, 0.2)"
            },
            "&-right": {
              insetInlineStart: -v,
              borderStartStartRadius: b,
              borderStartEndRadius: 0,
              borderEndEndRadius: 0,
              borderEndStartRadius: b
            }
          }
        }
      }
    }, Ji(e)), {
      // RTL
      "&-rtl": {
        direction: "rtl"
      }
    })
  };
}, tr = an("Layout", (e) => {
  const {
    colorText: t,
    controlHeightSM: o,
    controlHeight: a,
    controlHeightLG: i,
    marginXXS: l
  } = e, r = i * 1.25, c = rn(e, {
    // Layout
    layoutHeaderHeight: a * 2,
    layoutHeaderPaddingInline: r,
    layoutHeaderColor: t,
    layoutFooterPadding: `${o}px ${r}px`,
    layoutTriggerHeight: i + l * 2,
    layoutZeroTriggerSize: i
  });
  return [er(c)];
}, (e) => {
  const {
    colorBgLayout: t
  } = e;
  return {
    colorBgHeader: "#001529",
    colorBgBody: t,
    colorBgTrigger: "#002140"
  };
}), mn = () => ({
  prefixCls: String,
  hasSider: {
    type: Boolean,
    default: void 0
  },
  tagName: String
});
function Lt(e) {
  let {
    suffixCls: t,
    tagName: o,
    name: a
  } = e;
  return (i) => N({
    compatConfig: {
      MODE: 3
    },
    name: a,
    props: mn(),
    setup(r, c) {
      let {
        slots: d
      } = c;
      const {
        prefixCls: s
      } = et(t, r);
      return () => {
        const u = H(H({}, r), {
          prefixCls: s.value,
          tagName: o
        });
        return p(i, u, d);
      };
    }
  });
}
const hn = N({
  compatConfig: {
    MODE: 3
  },
  props: mn(),
  setup(e, t) {
    let {
      slots: o
    } = t;
    return () => p(e.tagName, {
      class: e.prefixCls
    }, o);
  }
}), nr = N({
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  props: mn(),
  setup(e, t) {
    let {
      slots: o,
      attrs: a
    } = t;
    const {
      prefixCls: i,
      direction: l
    } = et("", e), [r, c] = tr(i), d = B([]);
    dt(fo, {
      addSider: (f) => {
        d.value = [...d.value, f];
      },
      removeSider: (f) => {
        d.value = d.value.filter((g) => g !== f);
      }
    });
    const u = h(() => {
      const {
        prefixCls: f,
        hasSider: g
      } = e;
      return {
        [c.value]: !0,
        [`${f}`]: !0,
        [`${f}-has-sider`]: typeof g == "boolean" ? g : d.value.length > 0,
        [`${f}-rtl`]: l.value === "rtl"
      };
    });
    return () => {
      const {
        tagName: f
      } = e;
      return r(p(f, H(H({}, a), {
        class: [u.value, a.class]
      }), o));
    };
  }
}), Wt = Lt({
  suffixCls: "layout",
  tagName: "section",
  name: "ALayout"
})(nr), zt = Lt({
  suffixCls: "layout-header",
  tagName: "header",
  name: "ALayoutHeader"
})(hn), Ut = Lt({
  suffixCls: "layout-footer",
  tagName: "footer",
  name: "ALayoutFooter"
})(hn), Gt = Lt({
  suffixCls: "layout-content",
  tagName: "main",
  name: "ALayoutContent"
})(hn);
var or = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "bars", theme: "outlined" };
function Yn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? Object(arguments[t]) : {}, a = Object.keys(o);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(o).filter(function(i) {
      return Object.getOwnPropertyDescriptor(o, i).enumerable;
    }))), a.forEach(function(i) {
      ar(e, i, o[i]);
    });
  }
  return e;
}
function ar(e, t, o) {
  return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
}
var bn = function(t, o) {
  var a = Yn({}, t, o.attrs);
  return p(pt, Yn({}, a, {
    icon: or
  }), null);
};
bn.displayName = "BarsOutlined";
bn.inheritAttrs = !1;
const Qn = {
  xs: "479.98px",
  sm: "575.98px",
  md: "767.98px",
  lg: "991.98px",
  xl: "1199.98px",
  xxl: "1599.98px",
  xxxl: "1999.98px"
}, ir = () => ({
  prefixCls: String,
  collapsible: {
    type: Boolean,
    default: void 0
  },
  collapsed: {
    type: Boolean,
    default: void 0
  },
  defaultCollapsed: {
    type: Boolean,
    default: void 0
  },
  reverseArrow: {
    type: Boolean,
    default: void 0
  },
  zeroWidthTriggerStyle: {
    type: Object,
    default: void 0
  },
  trigger: be.any,
  width: be.oneOfType([be.number, be.string]),
  collapsedWidth: be.oneOfType([be.number, be.string]),
  breakpoint: be.oneOf(Ln("xs", "sm", "md", "lg", "xl", "xxl", "xxxl")),
  theme: be.oneOf(Ln("light", "dark")).def("dark"),
  onBreakpoint: Function,
  onCollapse: Function
}), rr = /* @__PURE__ */ (() => {
  let e = 0;
  return function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return e += 1, `${t}${e}`;
  };
})(), jt = N({
  compatConfig: {
    MODE: 3
  },
  name: "ALayoutSider",
  inheritAttrs: !1,
  props: ft(ir(), {
    collapsible: !1,
    defaultCollapsed: !1,
    reverseArrow: !1,
    width: 200,
    collapsedWidth: 80
  }),
  emits: ["breakpoint", "update:collapsed", "collapse"],
  setup(e, t) {
    let {
      emit: o,
      attrs: a,
      slots: i
    } = t;
    const {
      prefixCls: l
    } = et("layout-sider", e), r = Rt(fo, void 0), c = fe(!!(e.collapsed !== void 0 ? e.collapsed : e.defaultCollapsed)), d = fe(!1);
    re(() => e.collapsed, () => {
      c.value = !!e.collapsed;
    }), dt(Ra, c);
    const s = (S, m) => {
      e.collapsed === void 0 && (c.value = S), o("update:collapsed", S), o("collapse", S, m);
    }, u = fe((S) => {
      d.value = S.matches, o("breakpoint", S.matches), c.value !== S.matches && s(S.matches, "responsive");
    });
    let f;
    function g(S) {
      return u.value(S);
    }
    const v = rr("ant-sider-");
    r && r.addSider(v), Ne(() => {
      re(() => e.breakpoint, () => {
        try {
          f == null || f.removeEventListener("change", g);
        } catch {
          f == null || f.removeListener(g);
        }
        if (typeof window < "u") {
          const {
            matchMedia: S
          } = window;
          if (S && e.breakpoint && e.breakpoint in Qn) {
            f = S(`(max-width: ${Qn[e.breakpoint]})`);
            try {
              f.addEventListener("change", g);
            } catch {
              f.addListener(g);
            }
            g(f);
          }
        }
      }, {
        immediate: !0
      });
    }), ct(() => {
      try {
        f == null || f.removeEventListener("change", g);
      } catch {
        f == null || f.removeListener(g);
      }
      r && r.removeSider(v);
    });
    const _ = () => {
      s(!c.value, "clickTrigger");
    };
    return () => {
      var S, m;
      const b = l.value, {
        collapsedWidth: y,
        width: E,
        reverseArrow: x,
        zeroWidthTriggerStyle: T,
        trigger: w = (S = i.trigger) === null || S === void 0 ? void 0 : S.call(i),
        collapsible: $,
        theme: R
      } = e, L = c.value ? y : E, M = Ia(L) ? `${L}px` : String(L), k = parseFloat(String(y || 0)) === 0 ? p("span", {
        onClick: _,
        class: Ce(`${b}-zero-width-trigger`, `${b}-zero-width-trigger-${x ? "right" : "left"}`),
        style: T
      }, [w || p(bn, null, null)]) : null, U = {
        expanded: x ? p(An, null, null) : p(Bn, null, null),
        collapsed: x ? p(Bn, null, null) : p(An, null, null)
      }, ce = c.value ? "collapsed" : "expanded", he = U[ce], G = w !== null ? k || p("div", {
        class: `${b}-trigger`,
        onClick: _,
        style: {
          width: M
        }
      }, [w || he]) : null, ee = [a.style, {
        flex: `0 0 ${M}`,
        maxWidth: M,
        minWidth: M,
        width: M
      }], q = Ce(b, `${b}-${R}`, {
        [`${b}-collapsed`]: !!c.value,
        [`${b}-has-trigger`]: $ && w !== null && !k,
        [`${b}-below`]: !!d.value,
        [`${b}-zero-width`]: parseFloat(M) === 0
      }, a.class);
      return p("aside", te(te({}, a), {}, {
        class: q,
        style: ee
      }), [p("div", {
        class: `${b}-children`
      }, [(m = i.default) === null || m === void 0 ? void 0 : m.call(i)]), $ || d.value && k ? G : null]);
    };
  }
}), yt = H(Wt, {
  Header: zt,
  Footer: Ut,
  Content: Gt,
  Sider: jt,
  install: (e) => (e.component(Wt.name, Wt), e.component(zt.name, zt), e.component(Ut.name, Ut), e.component(jt.name, jt), e.component(Gt.name, Gt), e)
});
var lr = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z" } }] }, name: "menu-fold", theme: "outlined" };
function Zn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? Object(arguments[t]) : {}, a = Object.keys(o);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(o).filter(function(i) {
      return Object.getOwnPropertyDescriptor(o, i).enumerable;
    }))), a.forEach(function(i) {
      sr(e, i, o[i]);
    });
  }
  return e;
}
function sr(e, t, o) {
  return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
}
var Sn = function(t, o) {
  var a = Zn({}, t, o.attrs);
  return p(pt, Zn({}, a, {
    icon: lr
  }), null);
};
Sn.displayName = "MenuFoldOutlined";
Sn.inheritAttrs = !1;
var ur = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z" } }] }, name: "menu-unfold", theme: "outlined" };
function Jn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? Object(arguments[t]) : {}, a = Object.keys(o);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(o).filter(function(i) {
      return Object.getOwnPropertyDescriptor(o, i).enumerable;
    }))), a.forEach(function(i) {
      cr(e, i, o[i]);
    });
  }
  return e;
}
function cr(e, t, o) {
  return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
}
var _n = function(t, o) {
  var a = Jn({}, t, o.attrs);
  return p(pt, Jn({}, a, {
    icon: ur
  }), null);
};
_n.displayName = "MenuUnfoldOutlined";
_n.inheritAttrs = !1;
function _e(e, t = {}) {
  const {
    size: o = "small",
    delay: a = 100,
    timeout: i = 3e4,
    loading: l = !1,
    retry: r = !0
  } = t;
  return Yo({
    loader: e,
    loadingComponent: l ? p(go, {
      spinning: !0,
      size: o
    }, null) : void 0,
    // The error component will be displayed if a timeout is
    // provided and exceeded. Default: Infinity.
    // TODO
    timeout: i,
    // errorComponent
    // Defining if component is suspensible. Default: true.
    // suspensible: false,
    delay: a,
    /**
     *
     * @param {*} error Error message object
     * @param {*} retry A function that indicating whether the async component should retry when the loader promise rejects
     * @param {*} fail  End of failure
     * @param {*} attempts Maximum allowed retries number
     */
    onError: r ? (c, d, s, u) => {
      c.message.match(/fetch/) && u <= 3 ? d() : s();
    } : Aa
  });
}
function gt() {
  const { getFullContent: e } = vo(), t = tt(), o = h(() => !n(e) && n(v) && n(b) && !n(u) && !n(s)), a = h(() => !n(y) && !n(o)), i = h(() => {
    const U = !n(e) && n(b);
    return U && !n(v) || U && n(u) || U && n(s);
  }), {
    getMenuMode: l,
    getSplit: r,
    getShowHeaderTrigger: c,
    getIsSidebarType: d,
    getIsMixSidebar: s,
    getIsTopMenu: u
  } = ue(), { getShowBreadCrumb: f, getShowLogo: g } = ot(), v = h(() => !n(d) && n(b)), _ = h(() => t.getHeaderSetting.showDoc), S = h(() => t.getHeaderSetting.showApi), m = h(() => t.getHeaderSetting.theme), b = h(() => t.getHeaderSetting.show), y = h(() => t.getHeaderSetting.fixed), E = h(() => t.getHeaderSetting.bgColor), x = h(() => t.getHeaderSetting.showSearch), T = h(() => t.getHeaderSetting.useLockPage), w = h(() => t.getHeaderSetting.showFullScreen), $ = h(() => t.getHeaderSetting.showNotice), R = h(() => n(l) !== je.HORIZONTAL && n(f) && !n(r)), L = h(() => n(g) && !n(d) && !n(s)), M = h(() => n(R) || n(c));
  function k(U) {
    t.setProjectConfig({ headerSetting: U });
  }
  return {
    setHeaderSetting: k,
    getShowDoc: _,
    getShowApi: S,
    getShowSearch: x,
    getHeaderTheme: m,
    getUseLockPage: T,
    getShowFullScreen: w,
    getShowNotice: $,
    getShowBread: R,
    getShowContent: M,
    getShowHeaderLogo: L,
    getShowHeader: b,
    getFixed: y,
    getShowMixHeaderRef: v,
    getShowFullHeaderRef: o,
    getShowInsetHeaderRef: i,
    getUnFixedAndFull: a,
    getHeaderBgColor: E
  };
}
const dr = Symbol();
function pr() {
  return mo(dr);
}
function at() {
  const e = pr();
  return {
    getIsMobile: h(() => n(e.isMobile))
  };
}
const Po = Symbol();
function fr(e) {
  return ho(e, Po, { readonly: !1, native: !0 });
}
function Do() {
  return mo(Po);
}
const gr = /* @__PURE__ */ N({
  name: "Menu",
  __name: "Menu",
  props: {
    theme: X.oneOf(["light", "dark"]).def("light"),
    activeName: X.oneOfType([X.string, X.number]),
    openNames: {
      type: Array,
      default: () => []
    },
    accordion: X.bool.def(!0),
    width: X.string.def("100%"),
    collapsedWidth: X.string.def("48px"),
    indentSize: X.number.def(16),
    collapse: X.bool.def(!0),
    activeSubMenuNames: {
      type: Array,
      default: () => []
    }
  },
  emits: ["select", "open-change"],
  setup(e, { emit: t }) {
    const o = e, a = t, i = bo(), l = tn(), r = B(""), c = B([]), { prefixCls: d } = ae("menu"), s = B(!1);
    fr({
      rootMenuEmitter: i,
      activeName: r
    });
    const u = h(() => {
      const { theme: m } = o;
      return [
        d,
        `${d}-${m}`,
        `${d}-vertical`,
        {
          [`${d}-collapse`]: o.collapse
        }
      ];
    });
    ut(() => {
      c.value = o.openNames;
    }), ut(() => {
      o.activeName && (r.value = o.activeName);
    }), re(
      () => o.openNames,
      () => {
        Xe(() => {
          f();
        });
      }
    );
    function f() {
      i.emit("on-update-opened", c.value);
    }
    function g(m) {
      c.value.includes(m) || (c.value.push(m), f());
    }
    function v(m) {
      c.value = c.value.filter((b) => b !== m), f();
    }
    function _() {
      c.value = [], f();
    }
    function S(m) {
      m !== -1 && (c.value = c.value.slice(0, m + 1), f());
    }
    return dt(`subMenu:${l == null ? void 0 : l.uid}`, {
      addSubMenu: g,
      removeSubMenu: v,
      getOpenNames: () => c.value,
      removeAll: _,
      isRemoveAllPopup: s,
      sliceIndex: S,
      level: 0,
      props: o
    }), Ne(() => {
      c.value = o.collapse ? [] : [...o.openNames], f(), i.on("on-menu-item-select", (m) => {
        r.value = m, Xe(() => {
          o.collapse && _();
        }), a("select", m);
      }), i.on("open-name-change", ({ name: m, opened: b }) => {
        if (b && !c.value.includes(m))
          c.value.push(m);
        else if (!b) {
          const y = c.value.findIndex((E) => E === m);
          y !== -1 && c.value.splice(y, 1);
        }
      });
    }), (m, b) => (C(), W("ul", {
      class: I(u.value)
    }, [
      He(m.$slots, "default")
    ], 2));
  }
});
function Ho(e) {
  const t = h(() => l(["Menu", "SubMenu"])), o = h(() => l(["Menu"])), a = h(() => l(["SubMenu"])), i = h(() => {
    var f, g;
    let d = e == null ? void 0 : e.parent;
    if (!d)
      return {};
    const s = ((f = n(o)) == null ? void 0 : f.props.indentSize) ?? 20;
    let u = s;
    if ((g = n(o)) != null && g.props.collapse)
      u = s;
    else
      for (; d && d.type.name !== "Menu"; )
        d.type.name === "SubMenu" && (u += s), d = d.parent;
    return { paddingLeft: u + "px" };
  });
  function l(d) {
    let s = e == null ? void 0 : e.parent;
    if (!s)
      return null;
    for (; s && d.indexOf(s.type.name) === -1; )
      s = s.parent;
    return s;
  }
  function r() {
    let d = e;
    if (!d)
      return {
        uidList: [],
        list: []
      };
    const s = [];
    for (; d && d.type.name !== "Menu"; )
      d.type.name === "SubMenu" && s.push(d), d = d.parent;
    return {
      uidList: s.map((u) => u.uid),
      list: s
    };
  }
  function c(d, s = "SubMenu") {
    let u = d.parent;
    for (; u; ) {
      if (u.type.name !== s)
        return u;
      u = u.parent;
    }
    return u;
  }
  return {
    getParentMenu: t,
    getParentInstance: c,
    getParentRootMenu: o,
    getParentList: r,
    getParentSubMenu: a,
    getItemStyle: i
  };
}
const vr = /* @__PURE__ */ N({
  name: "MenuItem",
  __name: "MenuItem",
  props: {
    name: {
      type: [String, Number],
      required: !0
    },
    disabled: X.bool
  },
  setup(e) {
    const t = e, o = Qo(), a = tn(), i = B(!1), { getItemStyle: l, getParentList: r, getParentMenu: c, getParentRootMenu: d } = Ho(a), { prefixCls: s } = ae("menu"), { rootMenuEmitter: u, activeName: f } = Do(), g = h(() => [
      `${s}-item`,
      {
        [`${s}-item-active`]: n(i),
        [`${s}-item-selected`]: n(i),
        [`${s}-item-disabled`]: !!t.disabled
      }
    ]), v = h(() => {
      var m;
      return (m = n(d)) == null ? void 0 : m.props.collapse;
    }), _ = h(() => {
      var m;
      return ((m = n(c)) == null ? void 0 : m.type.name) === "Menu" && n(v) && o.title;
    });
    function S() {
      const { disabled: m } = t;
      if (m || (u.emit("on-menu-item-select", t.name), n(v)))
        return;
      const { uidList: b } = r();
      u.emit("on-update-opened", {
        opend: !1,
        parent: a == null ? void 0 : a.parent,
        uidList: b
      });
    }
    return re(
      () => f.value,
      (m) => {
        if (m === t.name) {
          const { list: b, uidList: y } = r();
          i.value = !0, b.forEach((E) => {
            E.proxy && (E.proxy.active = !0);
          }), u.emit("on-update-active-name:submenu", y);
        } else
          i.value = !1;
      },
      { immediate: !0 }
    ), (m, b) => (C(), W("li", {
      class: I(g.value),
      onClick: nn(S, ["stop"]),
      style: Re(v.value ? {} : n(l))
    }, [
      _.value ? (C(), A(n(ln), {
        key: 0,
        placement: "right"
      }, {
        title: V(() => [
          He(m.$slots, "title")
        ]),
        default: V(() => [
          oe("div", {
            class: I(`${n(s)}-tooltip`)
          }, [
            He(m.$slots, "default")
          ], 2)
        ]),
        _: 3
      })) : (C(), W(le, { key: 1 }, [
        He(m.$slots, "default"),
        He(m.$slots, "title")
      ], 64))
    ], 6));
  }
}), eo = 200, mr = /* @__PURE__ */ N({
  name: "SubMenu",
  __name: "SubMenuItem",
  props: {
    name: {
      type: [String, Number],
      required: !0
    },
    disabled: X.bool,
    collapsedShowTitle: X.bool
  },
  setup(e) {
    var q;
    const t = e, o = tn(), a = $t({
      active: !1,
      opened: !1
    }), i = $t({
      timeout: null,
      mouseInChild: !1,
      isChild: !1
    }), { getParentSubMenu: l, getItemStyle: r, getParentMenu: c, getParentList: d } = Ho(o), { prefixCls: s } = ae("menu"), u = bo(), { rootMenuEmitter: f } = Do(), {
      addSubMenu: g,
      removeSubMenu: v,
      removeAll: _,
      getOpenNames: S,
      isRemoveAllPopup: m,
      sliceIndex: b,
      level: y,
      props: E,
      handleMouseleave: x
    } = Rt(`subMenu:${(q = c.value) == null ? void 0 : q.uid}`), T = h(() => [
      `${s}-submenu`,
      {
        [`${s}-opened`]: a.opened,
        [`${s}-submenu-disabled`]: t.disabled,
        [`${s}-submenu-has-parent-submenu`]: n(l),
        [`${s}-child-item-active`]: a.active
      }
    ]), w = h(() => E.accordion), $ = h(() => E.collapse), R = h(() => E.theme), L = h(() => ({
      minWidth: "200px"
    })), M = h(() => {
      const P = t.name;
      return n($) ? S().includes(P) : a.opened;
    }), k = h(() => {
      const P = E.activeSubMenuNames.includes(t.name);
      return [
        `${s}-submenu-title`,
        {
          [`${s}-submenu-active`]: P,
          [`${s}-submenu-active-border`]: P && y === 0,
          [`${s}-submenu-collapse`]: n($) && y === 0
        }
      ];
    });
    function U(P) {
      return n($) ? {
        onMouseenter: he,
        onMouseleave: () => G(P)
      } : {};
    }
    function ce() {
      const { disabled: P } = t;
      if (P || n($))
        return;
      const K = a.opened;
      if (n(w)) {
        const { uidList: de } = d();
        f.emit("on-update-opened", {
          opend: !1,
          parent: o == null ? void 0 : o.parent,
          uidList: de
        });
      } else
        f.emit("open-name-change", {
          name: t.name,
          opened: !K
        });
      a.opened = !K;
    }
    function he() {
      if (t.disabled)
        return;
      u.emit("submenu:mouse-enter-child");
      const K = S().findIndex((ie) => ie === t.name);
      b(K), y === 0 && S().length === 2 && _(), i.isChild = S().includes(t.name), clearTimeout(i.timeout), i.timeout = setTimeout(() => {
        g(t.name);
      }, eo);
    }
    function G(P = !1) {
      var de;
      ((de = c.value) == null ? void 0 : de.props.name) || (m.value = !0), S().slice(-1)[0] === t.name && (i.isChild = !1), u.emit("submenu:mouse-leave-child"), i.timeout && (clearTimeout(i.timeout), i.timeout = setTimeout(() => {
        m.value ? _() : i.mouseInChild || v(t.name);
      }, eo)), P && l.value && (x == null || x(!0));
    }
    Zo(() => {
      u.on("submenu:mouse-enter-child", () => {
        i.mouseInChild = !0, m.value = !1, clearTimeout(i.timeout);
      }), u.on("submenu:mouse-leave-child", () => {
        i.isChild || (i.mouseInChild = !1, clearTimeout(i.timeout));
      }), f.on(
        "on-update-opened",
        (P) => {
          if (!n($)) {
            if (Ba(P)) {
              a.opened = P;
              return;
            }
            if (La(P) && E.accordion) {
              const { opend: K, parent: de, uidList: ie } = P;
              de === (o == null ? void 0 : o.parent) ? a.opened = K : ie.includes(o == null ? void 0 : o.uid) || (a.opened = !1);
              return;
            }
            t.name && Array.isArray(P) && (a.opened = P.includes(t.name));
          }
        }
      ), f.on("on-update-active-name:submenu", (P) => {
        o != null && o.uid && (a.active = P.includes(o == null ? void 0 : o.uid));
      });
    });
    function ee(P) {
      a.opened = P;
    }
    return dt(`subMenu:${o == null ? void 0 : o.uid}`, {
      addSubMenu: g,
      removeSubMenu: v,
      getOpenNames: S,
      removeAll: _,
      isRemoveAllPopup: m,
      sliceIndex: b,
      level: y + 1,
      handleMouseleave: G,
      props: E
    }), (P, K) => (C(), W("li", {
      class: I(T.value)
    }, [
      $.value ? (C(), A(n(Pa), {
        key: 1,
        placement: "right",
        overlayClassName: `${n(s)}-menu-popover`,
        open: M.value,
        onOnOpenChange: ee,
        overlayStyle: L.value,
        overlayInnerStyle: { padding: 0 },
        align: { offset: [0, 0] }
      }, {
        content: V(() => [
          oe("div", Jo(ea(U(!0))), [
            oe("ul", {
              class: I([
                n(s),
                `${n(s)}-${R.value}`,
                `${n(s)}-popup`
              ])
            }, [
              He(P.$slots, "default")
            ], 2)
          ], 16)
        ]),
        default: V(() => [
          oe("div", Pe({ class: k.value }, U(!1)), [
            oe("div", {
              class: I([
                {
                  [`${n(s)}-submenu-popup`]: !n(l),
                  [`${n(s)}-submenu-collapsed-show-tit`]: e.collapsedShowTitle
                }
              ])
            }, [
              He(P.$slots, "title")
            ], 2),
            n(l) ? (C(), A(Fe, {
              key: 0,
              icon: "eva:arrow-ios-downward-outline",
              size: 14,
              class: I(`${n(s)}-submenu-title-icon`)
            }, null, 8, ["class"])) : j("", !0)
          ], 16)
        ]),
        _: 3
      }, 8, ["overlayClassName", "open", "overlayStyle"])) : (C(), W(le, { key: 0 }, [
        oe("div", {
          class: I(`${n(s)}-submenu-title`),
          onClick: nn(ce, ["stop"]),
          style: Re(n(r))
        }, [
          He(P.$slots, "title"),
          p(Fe, {
            icon: "eva:arrow-ios-downward-outline",
            size: 14,
            class: I(`${n(s)}-submenu-title-icon`)
          }, null, 8, ["class"])
        ], 6),
        p(n(Na), null, {
          default: V(() => [
            Me(oe("ul", {
              class: I(n(s))
            }, [
              He(P.$slots, "default")
            ], 2), [
              [ke, a.opened]
            ])
          ]),
          _: 3
        })
      ], 64))
    ], 2));
  }
}), hr = ["src"], br = {
  key: 2,
  class: "mt-1 collapse-title"
}, Sr = ["src"], _r = {
  key: 2,
  class: "mt-2 collapse-title"
}, yr = /* @__PURE__ */ N({
  name: "SimpleSubMenu",
  __name: "SimpleSubMenu",
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    parent: X.bool,
    collapsedShowTitle: X.bool,
    collapse: X.bool,
    theme: X.oneOf(["dark", "light"])
  },
  setup(e) {
    const t = _e(() => import("./SimpleMenuTag.js")), o = e, { prefixCls: a } = ae("simple-menu"), i = h(() => {
      var g, v;
      return !((v = (g = o.item) == null ? void 0 : g.meta) != null && v.hideMenu);
    }), l = h(
      () => {
        var g, v;
        return (g = o.item) != null && g.img || (v = o.item) == null ? void 0 : v.icon;
      }
    ), r = h(() => {
      var g;
      return (g = o.item) == null ? void 0 : g.img;
    }), c = h(() => {
      var g, v, _;
      return ((v = (g = o.item) == null ? void 0 : g.meta) == null ? void 0 : v.title) || ((_ = o.item) == null ? void 0 : _.name);
    }), d = h(() => !o.collapse || !o.parent), s = h(() => !!o.collapse && !!o.parent), u = h(() => [
      {
        [`${a}__parent`]: o.parent,
        [`${a}__children`]: !o.parent
      }
    ]);
    function f(g) {
      var v;
      return !((v = g.meta) != null && v.hideChildrenInMenu) && Reflect.has(g, "children") && !!g.children && g.children.length > 0;
    }
    return (g, v) => {
      const _ = io("SimpleSubMenu", !0);
      return C(), W(le, null, [
        !f(e.item) && i.value ? (C(), A(vr, Pe({
          key: 0,
          name: e.item.path
        }, g.$props, { class: u.value }), {
          title: V(() => [
            oe("span", {
              class: I(["ml-2", `${n(a)}-sub-title`])
            }, qe(c.value), 3),
            p(n(t), {
              item: e.item,
              collapseParent: s.value
            }, null, 8, ["item", "collapseParent"])
          ]),
          default: V(() => [
            r.value ? (C(), W("img", {
              key: 0,
              src: r.value,
              class: "w-16px h-16px align-top"
            }, null, 8, hr)) : j("", !0),
            l.value ? (C(), A(Fe, {
              key: 1,
              icon: l.value,
              size: 16
            }, null, 8, ["icon"])) : j("", !0),
            e.collapsedShowTitle && s.value ? (C(), W("div", br, qe(c.value), 1)) : j("", !0)
          ]),
          _: 1
        }, 16, ["name", "class"])) : j("", !0),
        f(e.item) && i.value ? (C(), A(mr, {
          key: 1,
          name: e.item.path,
          class: I([u.value, e.theme]),
          collapsedShowTitle: e.collapsedShowTitle
        }, {
          title: V(() => [
            r.value ? (C(), W("img", {
              key: 0,
              src: r.value,
              class: "w-16px h-16px align-top"
            }, null, 8, Sr)) : j("", !0),
            l.value ? (C(), A(Fe, {
              key: 1,
              icon: l.value,
              size: 16
            }, null, 8, ["icon"])) : j("", !0),
            e.collapsedShowTitle && s.value ? (C(), W("div", _r, qe(c.value), 1)) : j("", !0),
            Me(oe("span", {
              class: I(["ml-2", `${n(a)}-sub-title`])
            }, qe(c.value), 3), [
              [ke, d.value]
            ]),
            p(n(t), {
              item: e.item,
              collapseParent: !!e.collapse && !!e.parent
            }, null, 8, ["item", "collapseParent"])
          ]),
          default: V(() => [
            (C(!0), W(le, null, Ct(e.item.children || [], (S) => (C(), A(_, Pe({
              key: S.paramPath || S.path,
              ref_for: !0
            }, g.$props, {
              item: S,
              parent: !1
            }), null, 16, ["item"]))), 128))
          ]),
          _: 1
        }, 8, ["name", "class", "collapsedShowTitle"])) : j("", !0)
      ], 64);
    };
  }
});
function $r(e, t, o, a, i) {
  const l = So(r, 50);
  async function r(d) {
    const s = !a.value, u = on(t.value), f = () => {
      if ((u == null ? void 0 : u.length) === 0) {
        e.activeSubMenuNames = [], e.openNames = [];
        return;
      }
      const g = Ha(u, d);
      n(o) ? e.openNames = g : e.openNames = ka([...e.openNames, ...g]), e.activeSubMenuNames = e.openNames;
    };
    s ? f() : Da(f, 30);
  }
  const c = h(() => n(i) ? [] : e.openNames);
  return { setOpenKeys: l, getOpenKeys: c };
}
const ko = /* @__PURE__ */ N({
  name: "SimpleMenu",
  inheritAttrs: !1,
  __name: "SimpleMenu",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    collapse: X.bool,
    mixSider: X.bool,
    theme: X.string,
    accordion: X.bool.def(!0),
    collapsedShowTitle: X.bool,
    beforeClickFn: {
      type: Function
    },
    isSplitMenu: X.bool
  },
  emits: ["menuClick"],
  setup(e, { emit: t }) {
    const o = e, a = t, i = ta(), l = B(""), r = B(!1), c = $t({
      activeName: "",
      openNames: [],
      activeSubMenuNames: []
    }), { currentRoute: d } = nt(), { prefixCls: s } = ae("simple-menu"), { items: u, accordion: f, mixSider: g, collapse: v } = ao(o), { setOpenKeys: _, getOpenKeys: S } = $r(
      c,
      u,
      f,
      g,
      v
    ), m = h(() => ({ ...i, ...o }));
    re(
      () => o.collapse,
      (E) => {
        E ? c.openNames = [] : _(d.value.path);
      },
      { immediate: !0 }
    ), re(
      () => o.items,
      () => {
        o.isSplitMenu && _(d.value.path);
      },
      { flush: "post" }
    ), sn((E) => {
      var x;
      E.name !== _o && (l.value = (x = E.meta) == null ? void 0 : x.currentActiveMenu, b(E), n(l) && (c.activeName = n(l), _(n(l))));
    });
    async function b(E) {
      if (n(r)) {
        r.value = !1;
        return;
      }
      const x = (E || n(d)).path;
      c.activeName = x, _(x);
    }
    async function y(E) {
      if (yo(E)) {
        $o(E);
        return;
      }
      const { beforeClickFn: x } = o;
      x && Fa(x) && !await x(E) || (a("menuClick", E), r.value = !0, _(E), c.activeName = E);
    }
    return (E, x) => (C(), A(gr, Pe(m.value, {
      activeName: c.activeName,
      openNames: n(S),
      class: n(s),
      activeSubMenuNames: c.activeSubMenuNames,
      onSelect: y
    }), {
      default: V(() => [
        (C(!0), W(le, null, Ct(n(u), (T) => (C(), A(yr, {
          key: T.path,
          item: T,
          parent: !0,
          collapsedShowTitle: e.collapsedShowTitle,
          collapse: n(v)
        }, null, 8, ["item", "collapsedShowTitle", "collapse"]))), 128))
      ]),
      _: 1
    }, 16, ["activeName", "openNames", "class", "activeSubMenuNames"]));
  }
});
function Cr(e) {
  const t = B([]), { currentRoute: o } = nt(), { getIsMobile: a } = at(), i = Co(), { setMenuSetting: l, getIsHorizontal: r, getSplit: c } = ue(), d = Wa(v, 50), s = h(
    () => n(e) !== we.LEFT && !n(r)
  ), u = h(
    () => !n(c) || n(e) !== we.LEFT
  ), f = h(() => n(e) === we.TOP), g = h(() => n(e) === we.NONE || !n(c));
  re(
    [() => n(o).path, () => n(e)],
    async ([S]) => {
      if (n(s) || n(a))
        return;
      const { meta: m } = n(o), b = m.currentActiveMenu;
      let y = await Kt(S);
      y || (y = await Kt(b)), y && d(y);
    },
    {
      immediate: !0
    }
  ), re(
    [() => i.getLastBuildMenuTime, () => i.getBackMenuList],
    () => {
      _();
    },
    {
      immediate: !0
    }
  ), re(
    () => c.value,
    () => {
      n(s) || _();
    }
  );
  async function v(S) {
    if (n(u) || n(a))
      return;
    const m = await Et(S);
    if (!m || !m.length) {
      l({ hidden: !0 }), t.value = [];
      return;
    }
    l({ hidden: !1 }), t.value = m;
  }
  async function _() {
    if (n(g) || n(a)) {
      t.value = await za();
      return;
    }
    if (n(f)) {
      const S = await Vt();
      t.value = S;
      return;
    }
  }
  return { menusRef: t };
}
const Fo = /* @__PURE__ */ N({
  name: "LayoutMenu",
  props: {
    theme: X.oneOf(["light", "dark"]),
    splitType: {
      type: Number,
      default: we.NONE
    },
    isHorizontal: X.bool,
    // menu Mode
    menuMode: {
      type: [String],
      default: ""
    }
  },
  setup(e) {
    const t = cn(), {
      getMenuMode: o,
      getMenuType: a,
      getMenuTheme: i,
      getCollapsed: l,
      getCollapsedShowTitle: r,
      getAccordion: c,
      getIsHorizontal: d,
      getIsSidebarType: s,
      getSplit: u
    } = ue(), {
      getShowLogo: f
    } = ot(), {
      prefixCls: g
    } = ae("layout-menu"), {
      menusRef: v
    } = Cr(na(e, "splitType")), {
      getIsMobile: _
    } = at(), S = h(() => n(_) ? je.INLINE : e.menuMode || n(o)), m = h(() => e.theme || n(i)), b = h(() => n(f) && n(s)), y = h(() => !n(d) && (n(s) || e.splitType === we.LEFT || e.splitType === we.NONE)), E = h(() => ({
      height: `calc(100% - ${n(b) ? "48px" : "0px"})`
    })), x = h(() => [`${g}-logo`, n(m), {
      [`${g}--mobile`]: n(_)
    }]), T = h(() => {
      const M = n(v);
      return {
        menus: M,
        beforeClickFn: $,
        items: M,
        theme: n(m),
        accordion: n(c),
        collapse: n(l),
        collapsedShowTitle: n(r),
        onMenuClick: w
      };
    });
    function w(M) {
      t(M);
    }
    async function $(M) {
      return yo(M) ? ($o(M), !1) : !0;
    }
    function R() {
      return !n(b) && !n(_) ? null : p(un, {
        showTitle: !n(l),
        class: n(x),
        theme: n(m)
      }, null);
    }
    function L() {
      const {
        menus: M,
        ...k
      } = n(T);
      return !M || !M.length ? null : e.isHorizontal ? p(Ua, Pe(k, {
        isHorizontal: e.isHorizontal,
        type: n(a),
        showLogo: n(b),
        mode: n(S),
        items: M
      }), null) : p(ko, Pe(k, {
        isSplitMenu: n(u),
        items: M
      }), null);
    }
    return () => p(le, null, [R(), n(y) ? p(qt, {
      style: n(E)
    }, {
      default: () => L()
    }) : L()]);
  }
}), Tr = /* @__PURE__ */ N({
  __name: "HeaderTrigger",
  props: {
    theme: X.oneOf(["light", "dark"])
  },
  setup(e) {
    const { getCollapsed: t, toggleCollapsed: o } = ue(), { prefixCls: a } = ae("layout-header-trigger");
    return (i, l) => (C(), W("span", {
      class: I([n(a), e.theme]),
      onClick: l[0] || (l[0] = //@ts-ignore
      (...r) => n(o) && n(o)(...r))
    }, [
      n(t) ? (C(), A(n(_n), { key: 0 })) : (C(), A(n(Sn), { key: 1 }))
    ], 2));
  }
}), xr = /* @__PURE__ */ N({
  __name: "SiderTrigger",
  setup(e) {
    const { getCollapsed: t, toggleCollapsed: o } = ue();
    return (a, i) => (C(), W("div", {
      onClick: i[0] || (i[0] = nn(
        //@ts-ignore
        (...l) => n(o) && n(o)(...l),
        ["stop"]
      ))
    }, [
      n(t) ? (C(), A(n(Ga), { key: 0 })) : (C(), A(n(ja), { key: 1 }))
    ]));
  }
}), Mt = /* @__PURE__ */ N({
  __name: "index",
  props: {
    sider: X.bool.def(!0),
    theme: X.oneOf(["light", "dark"])
  },
  setup(e) {
    return (t, o) => e.sider ? (C(), A(xr, { key: 0 })) : (C(), A(Tr, {
      key: 1,
      theme: e.theme
    }, null, 8, ["theme"]));
  }
}), Er = /* @__PURE__ */ N({
  name: "FullScreen",
  __name: "FullScreen",
  setup(e) {
    const { toggle: t, isFullscreen: o } = Xa();
    o.value = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
    const a = h(() => n(o) ? "退出全屏" : "全屏模式");
    return (i, l) => (C(), A(n(ln), {
      title: a.value,
      placement: "bottom",
      mouseEnterDelay: 0.5
    }, {
      default: V(() => [
        oe("span", {
          onClick: l[0] || (l[0] = //@ts-ignore
          (...r) => n(t) && n(t)(...r))
        }, [
          n(o) ? (C(), A(n(Va), { key: 1 })) : (C(), A(n(Ka), { key: 0 }))
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Or = _e(() => import("./index4.js"), {
  loading: !0
}), wr = _e(() => import("./Breadcrumb.js")), Mr = _e(() => import("./index5.js")), Rr = _e(() => import("./ErrorAction.js")), Wo = /* @__PURE__ */ N({
  name: "LayoutHeader",
  __name: "index",
  props: {
    fixed: X.bool
  },
  setup(e) {
    const t = _e(
      () => import("./index6.js"),
      {
        loading: !0
      }
    ), o = e, { prefixCls: a } = ae("layout-header"), {
      getShowTopMenu: i,
      getShowHeaderTrigger: l,
      getSplit: r,
      getIsMixMode: c,
      getMenuWidth: d,
      getIsMixSidebar: s
    } = ue(), { getUseErrorHandle: u, getShowSettingButton: f, getSettingButtonPosition: g } = ot(), {
      getHeaderTheme: v,
      getShowFullScreen: _,
      getShowNotice: S,
      getShowContent: m,
      getShowBread: b,
      getShowHeaderLogo: y,
      getShowHeader: E
    } = gt(), { getIsMobile: x } = at(), T = h(() => {
      const M = n(v);
      return [
        a,
        {
          [`${a}--fixed`]: o.fixed,
          [`${a}--mobile`]: n(x),
          [`${a}--${M}`]: M
        }
      ];
    }), w = h(() => {
      if (!n(f))
        return !1;
      const M = n(g);
      return M === Nn.AUTO ? n(E) : M === Nn.HEADER;
    }), $ = h(() => !n(c) || n(x) ? {} : { width: `${n(d) < 180 ? 180 : n(d)}px` }), R = h(() => n(r) ? we.TOP : we.NONE), L = h(() => n(r) ? je.HORIZONTAL : null);
    return (M, k) => (C(), A(n(yt).Header, {
      class: I(T.value)
    }, {
      default: V(() => [
        oe("div", {
          class: I(`${n(a)}-left`)
        }, [
          n(y) || n(x) ? (C(), A(un, {
            key: 0,
            class: I(`${n(a)}-logo`),
            theme: n(v),
            style: Re($.value)
          }, null, 8, ["class", "theme", "style"])) : j("", !0),
          n(m) && n(l) && !n(r) && !n(s) || n(x) ? (C(), A(Mt, {
            key: 1,
            theme: n(v),
            sider: !1
          }, null, 8, ["theme"])) : j("", !0),
          n(m) && n(b) ? (C(), A(n(wr), {
            key: 2,
            theme: n(v)
          }, null, 8, ["theme"])) : j("", !0)
        ], 2),
        n(i) && !n(x) ? (C(), W("div", {
          key: 0,
          class: I(`${n(a)}-menu`)
        }, [
          p(Fo, {
            isHorizontal: !0,
            theme: n(v),
            splitType: R.value,
            menuMode: L.value
          }, null, 8, ["theme", "splitType", "menuMode"])
        ], 2)) : j("", !0),
        oe("div", {
          class: I(`${n(a)}-action`)
        }, [
          n(u) ? (C(), A(n(Rr), {
            key: 0,
            class: I(`${n(a)}-action__item error-action`)
          }, null, 8, ["class"])) : j("", !0),
          n(S) ? (C(), A(n(Mr), {
            key: 1,
            class: I(`${n(a)}-action__item notify-item`)
          }, null, 8, ["class"])) : j("", !0),
          n(_) ? (C(), A(n(Er), {
            key: 2,
            class: I(`${n(a)}-action__item fullscreen-item`)
          }, null, 8, ["class"])) : j("", !0),
          p(n(Or), { theme: n(v) }, null, 8, ["theme"]),
          w.value ? (C(), A(n(t), {
            key: 3,
            class: I(`${n(a)}-action__item`)
          }, null, 8, ["class"])) : j("", !0)
        ], 2)
      ]),
      _: 1
    }, 8, ["class"]));
  }
}), Ir = Symbol();
function Ar(e) {
  return ho(e, Ir, { native: !0 });
}
const Zt = B(0), Jt = B(0);
function zo() {
  function e(o) {
    Zt.value = o;
  }
  function t(o) {
    Jt.value = o;
  }
  return { headerHeightRef: Zt, footerHeightRef: Jt, setHeaderHeight: e, setFooterHeight: t };
}
function Br() {
  const e = B(window.innerHeight), t = B(window.innerHeight), o = h(() => n(e) - n(Zt) - n(Jt) || 0);
  To(
    () => {
      e.value = window.innerHeight;
    },
    { wait: 100, immediate: !0 }
  );
  async function a(i) {
    t.value = i;
  }
  Ar({
    contentHeight: o,
    setPageHeight: a,
    pageHeight: t
  });
}
const Lr = ["src"], Nr = /* @__PURE__ */ N({
  __name: "iframe",
  props: {
    frameSrc: X.string.def("")
  },
  emits: ["message"],
  setup(e, { expose: t, emit: o }) {
    const a = o, i = B(!0), l = B(50), r = B(window.innerHeight), c = B(), { headerHeightRef: d } = zo(), { prefixCls: s } = ae("iframe-page");
    To(f, { wait: 150, immediate: !0 });
    const u = h(() => ({
      height: `${n(r)}px`
    }));
    function f() {
      const m = n(c);
      if (!m)
        return;
      const b = d.value;
      l.value = b, r.value = window.innerHeight - b;
      const y = document.documentElement.clientHeight - b;
      m.style.height = `${y}px`;
    }
    function g() {
      i.value = !1, f();
    }
    const v = (m) => {
      a("message", m.data);
    }, _ = (m, b, y) => {
      var x;
      const E = n(c);
      E && ((x = E.contentWindow) == null || x.postMessage(m, b, y));
    }, S = () => {
      var b;
      i.value = !0;
      const m = c.value;
      m && ((b = m.contentWindow) == null || b.location.reload(), i.value = !1);
    };
    return Ne(() => {
      window.addEventListener("message", v);
    }), oa(() => {
      window.removeEventListener("message", v);
    }), t({ postMessage: _, reload: S }), (m, b) => (C(), W("div", {
      class: I(n(s)),
      style: Re(u.value)
    }, [
      p(n(go), {
        spinning: i.value,
        size: "large",
        style: Re(u.value)
      }, {
        default: V(() => [
          oe("iframe", {
            src: e.frameSrc,
            class: I(`${n(s)}__main`),
            ref_key: "frameRef",
            ref: c,
            onLoad: g
          }, null, 42, Lr)
        ]),
        _: 1
      }, 8, ["spinning", "style"])
    ], 6));
  }
}), Pr = /* @__PURE__ */ At(Nr, [["__scopeId", "data-v-97beb9c3"]]);
function vt() {
  const e = tt(), t = h(() => e.getMultiTabsSetting.show), o = h(() => e.getMultiTabsSetting.showQuick), a = h(() => e.getMultiTabsSetting.showRedo), i = h(() => e.getMultiTabsSetting.showFold), l = h(() => e.getMultiTabsSetting.autoCollapse);
  function r(c) {
    e.setProjectConfig({ multiTabsSetting: c });
  }
  return {
    setMultipleTabSetting: r,
    getShowMultipleTab: t,
    getShowQuick: o,
    getShowRedo: a,
    getShowFold: i,
    getAutoCollapse: l
  };
}
function Dr() {
  const e = nt(), { currentRoute: t } = e, { getShowMultipleTab: o } = vt(), a = Ke(), i = h(() => r(on(e.getRoutes())) || []), l = h(() => a.getTabList.reduce((s, u) => (u.meta && Reflect.has(u.meta, "frameSrc") && s.push(u.name), s), []));
  function r(s) {
    let u = [];
    for (const f of s) {
      const { meta: { frameSrc: g } = {}, children: v } = f;
      g && u.push(f), v && v.length && u.push(...r(v));
    }
    return u = qa(u, "name"), u;
  }
  function c(s) {
    return s.name === n(t).name;
  }
  function d(s) {
    return n(o) ? n(l).includes(s) : e.currentRoute.value.name === s;
  }
  return { hasRenderFrame: d, getFramePages: i, showIframe: c, getAllFramePages: r };
}
const Hr = { key: 0 }, kr = /* @__PURE__ */ N({
  name: "FrameLayout",
  __name: "index",
  setup(e) {
    const { getFramePages: t, hasRenderFrame: o, showIframe: a } = Dr(), i = h(() => n(t).length > 0);
    return (l, r) => i.value ? (C(), W("div", Hr, [
      (C(!0), W(le, null, Ct(n(t), (c) => (C(), W(le, {
        key: c.path
      }, [
        c.meta.frameSrc && n(o)(c.name) ? Me((C(), A(Pr, {
          key: 0,
          frameSrc: c.meta.frameSrc
        }, null, 8, ["frameSrc"])), [
          [ke, n(a)(c)]
        ]) : j("", !0)
      ], 64))), 128))
    ])) : j("", !0);
  }
});
function yn() {
  const e = tt(), t = h(() => {
    var r;
    return (r = e.getTransitionSetting) == null ? void 0 : r.enable;
  }), o = h(() => {
    var r;
    return (r = e.getTransitionSetting) == null ? void 0 : r.openNProgress;
  }), a = h(() => {
    var r;
    return !!((r = e.getTransitionSetting) != null && r.openPageLoading);
  }), i = h(() => {
    var r;
    return (r = e.getTransitionSetting) == null ? void 0 : r.basicTransition;
  });
  function l(r) {
    e.setProjectConfig({ transitionSetting: r });
  }
  return {
    setTransitionSetting: l,
    getEnableTransition: t,
    getOpenNProgress: o,
    getOpenPageLoading: a,
    getBasicTransition: i
  };
}
function Fr({
  route: e,
  openCache: t,
  cacheTabs: o,
  enableTransition: a,
  def: i
}) {
  if (!a)
    return;
  const l = o.includes(e.name), r = "fade-slide";
  let c = r;
  return t && (c = l && e.meta.loaded ? r : void 0), c || e.meta.transitionName || i;
}
const Wr = /* @__PURE__ */ N({
  name: "PageLayout",
  __name: "index",
  setup(e) {
    const { getShowMultipleTab: t } = vt(), o = Ke(), { getOpenKeepAlive: a, getCanEmbedIFramePage: i } = ot(), { getBasicTransition: l, getEnableTransition: r } = yn(), c = h(() => n(a) && n(t)), d = h(() => n(a) ? o.getCachedTabList : []);
    return (s, u) => {
      const f = io("RouterView");
      return C(), W(le, null, [
        p(f, null, {
          default: V(({ Component: g, route: v }) => [
            p(en, {
              name: n(Fr)({
                route: v,
                openCache: c.value,
                enableTransition: n(r),
                cacheTabs: d.value,
                def: n(l)
              }),
              mode: "out-in",
              appear: ""
            }, {
              default: V(() => [
                c.value ? (C(), A(aa, {
                  key: 0,
                  include: d.value
                }, [
                  (C(), A(wn(g), {
                    key: v.fullPath
                  }))
                ], 1032, ["include"])) : (C(), A(wn(g), {
                  key: v.fullPath
                }))
              ]),
              _: 2
            }, 1032, ["name"])
          ]),
          _: 1
        }),
        n(i) ? (C(), A(kr, { key: 0 })) : j("", !0)
      ], 64);
    };
  }
}), zr = /* @__PURE__ */ N({
  name: "LayoutContent",
  __name: "index",
  setup(e) {
    const { prefixCls: t } = ae("layout-content"), { getOpenPageLoading: o } = yn(), { getLayoutContentMode: a, getPageLoading: i, getUseOpenBackTop: l } = ot();
    Br();
    const r = B();
    return (c, d) => {
      const s = ia("loading");
      return Me((C(), W("div", {
        class: I([n(t), n(a)]),
        ref_key: "content",
        ref: r
      }, [
        p(Wr),
        n(l) ? (C(), A(n(wt), {
          key: 0,
          target: () => r.value,
          visibilityHeight: 100
        }, null, 8, ["target"])) : j("", !0)
      ], 2)), [
        [s, n(o) && n(i)]
      ]);
    };
  }
}), Ur = /* @__PURE__ */ N({
  name: "DargBar",
  __name: "DragBar",
  props: {
    mobile: Boolean
  },
  setup(e) {
    const t = e, { getMiniWidthNumber: o, getCollapsed: a, getCanDrag: i } = ue(), { prefixCls: l } = ae("darg-bar"), r = h(() => n(a) ? { left: `${n(o)}px` } : {}), c = h(() => [
      l,
      {
        [`${l}--hide`]: !n(i) || t.mobile
      }
    ]);
    return (d, s) => (C(), W("div", {
      class: I(c.value),
      style: Re(r.value)
    }, null, 6));
  }
}), Gr = /* @__PURE__ */ At(Ur, [["__scopeId", "data-v-62b80233"]]);
function jr() {
  const e = tt(), { getMiniWidthNumber: t } = ue(), o = h(() => n(t));
  function a(i) {
    e.setProjectConfig({
      menuSetting: {
        siderHidden: i
      }
    });
  }
  return { getCollapsedWidth: o, onBreakpointChange: a };
}
function Xr(e) {
  const { getTrigger: t, getSplit: o } = ue(), a = h(() => {
    const l = n(t);
    return l !== Ze.NONE && !n(e) && (l === Ze.FOOTER || n(o));
  });
  return { getTriggerAttr: h(() => n(a) ? {} : {
    trigger: null
  }), getShowTrigger: a };
}
function Uo(e, t, o = !1) {
  const { getMiniWidthNumber: a, getCollapsed: i, setMenuSetting: l } = ue();
  Ne(() => {
    Xe(() => {
      So(s, 80)();
    });
  });
  function r(u) {
    var g;
    const f = n(u);
    return f ? Reflect.has(f, "$el") ? (g = n(u)) == null ? void 0 : g.$el : n(u) : null;
  }
  function c(u, f, g) {
    document.onmousemove = function(v) {
      let _ = u.left + (v.clientX - g);
      const S = 800, m = n(a);
      return _ < 0 && (_ = 0), _ > S && (_ = S), _ < m && (_ = m), u.style.left = f.style.width = _ + "px", !1;
    };
  }
  function d(u) {
    const f = r(e);
    document.onmouseup = function() {
      var v;
      document.onmousemove = null, document.onmouseup = null, f.style.transition = "width 0.2s";
      const g = parseInt(f.style.width);
      if (o)
        l({ menuWidth: g });
      else {
        const _ = n(a);
        n(i) ? g > _ && l({ collapsed: !1, menuWidth: g }) : g > _ + 20 ? l({ menuWidth: g }) : l({ collapsed: !0 });
      }
      (v = u.releaseCapture) == null || v.call(u);
    };
  }
  function s() {
    const u = r(t);
    if (!u)
      return;
    const f = r(e);
    f && (u.onmousedown = (g) => {
      var _;
      f.style.transition = "unset";
      const v = g == null ? void 0 : g.clientX;
      return u.left = u.offsetLeft, c(u, f, v), d(u), (_ = u.setCapture) == null || _.call(u), !1;
    });
  }
  return {};
}
const to = /* @__PURE__ */ N({
  name: "LayoutSideBar",
  __name: "LayoutSider",
  setup(e) {
    const t = B(null), o = B(null), {
      getCollapsed: a,
      getMenuWidth: i,
      getSplit: l,
      getMenuTheme: r,
      getRealWidth: c,
      getMenuHidden: d,
      getMenuFixed: s,
      getIsMixMode: u,
      getTrigger: f
    } = ue(), { prefixCls: g } = ae("layout-sideBar"), { getIsMobile: v } = at(), { getTriggerAttr: _, getShowTrigger: S } = Xr(v);
    Uo(o, t);
    const { getCollapsedWidth: m, onBreakpointChange: b } = jr(), y = h(() => n(l) ? je.INLINE : null), E = h(() => n(l) ? we.LEFT : we.NONE), x = h(() => n(l) ? !n(d) : !0), T = h(() => [
      g,
      {
        [`${g}--fixed`]: n(s),
        [`${g}--mix`]: n(u) && !n(v)
      }
    ]), w = h(() => {
      const R = `${n(c)}px`;
      return {
        width: R,
        overflow: "hidden",
        flex: `0 0 ${R}`,
        maxWidth: R,
        minWidth: R,
        transition: "all 0.2s"
      };
    }), $ = ra(Mt);
    return (R, L) => (C(), W(le, null, [
      n(s) && !n(v) ? Me((C(), W("div", {
        key: 0,
        style: Re(w.value)
      }, null, 4)), [
        [ke, x.value]
      ]) : j("", !0),
      Me(p(n(yt).Sider, Pe({
        ref_key: "sideRef",
        ref: o,
        breakpoint: n(f) === n(Ze).FOOTER ? "md" : "lg",
        collapsible: "",
        class: T.value,
        width: n(i),
        collapsed: n(a),
        collapsedWidth: n(m),
        theme: n(r),
        trigger: n($)
      }, n(_), { onBreakpoint: n(b) }), ro({
        default: V(() => [
          p(Fo, {
            theme: n(r),
            menuMode: y.value,
            splitType: E.value
          }, null, 8, ["theme", "menuMode", "splitType"]),
          p(Gr, {
            ref_key: "dragBarRef",
            ref: t
          }, null, 512)
        ]),
        _: 2
      }, [
        n(S) ? {
          name: "trigger",
          fn: V(() => [
            p(Mt)
          ]),
          key: "0"
        } : void 0
      ]), 1040, ["breakpoint", "class", "width", "collapsed", "collapsedWidth", "theme", "trigger", "onBreakpoint"]), [
        [ke, x.value]
      ])
    ], 64));
  }
}), Kr = ["src"], Vr = { class: "text" }, qr = /* @__PURE__ */ N({
  name: "LayoutMixSider",
  __name: "MixSider",
  setup(e) {
    const t = _e(
      () => import("./SimpleMenuTag.js")
    );
    let o = B([]);
    const a = B(""), i = B([]), l = B(!1), r = B(null), c = B(null), d = B(null), { prefixCls: s } = ae("layout-mix-sider"), u = cn(), {
      getMenuWidth: f,
      getCanDrag: g,
      getCloseMixSidebarOnChange: v,
      getMenuTheme: _,
      getMixSideTrigger: S,
      getRealWidth: m,
      getMixSideFixed: b,
      mixSideHasChildren: y,
      setMenuSetting: E,
      getIsMixSidebar: x,
      getCollapsed: T
    } = ue(), { title: w } = Ja(), $ = Co();
    Uo(c, r, !0);
    const R = h(() => ({
      width: n(l) ? `${n(f)}px` : 0,
      left: `${n(M)}px`
    })), L = h(() => {
      y.value = n(i).length > 0;
      const z = n(b) && n(y);
      return z && (l.value = !0), z;
    }), M = h(() => n(T) ? Ya : Qa), k = h(() => {
      const z = n(L) ? n(m) : 0, Y = `${n(M) + z}px`;
      return G(Y);
    }), U = h(() => {
      const z = `${n(M)}px`;
      return G(z);
    }), ce = h(() => n(b) ? {} : {
      onMouseleave: () => {
        q(!0), ye();
      }
    }), he = h(() => n(g));
    Ne(async () => {
      o.value = await Vt();
    }), re(
      [
        () => $.getLastBuildMenuTime,
        () => $.getBackMenuList
      ],
      async () => {
        o.value = await Vt();
      },
      {
        immediate: !0
      }
    ), sn((z) => {
      d.value = z, q(!0), n(v) && ye();
    });
    function G(z) {
      return {
        width: z,
        maxWidth: z,
        minWidth: z,
        flex: `0 0 ${z}`
      };
    }
    async function ee(z, Y = !1) {
      const J = await Et(z);
      if (n(a) === z ? (Y ? n(l) || (l.value = !0) : n(l) ? ye() : l.value = !0, n(l) || q()) : (l.value = !0, a.value = z), !J || J.length === 0) {
        Y || u(z), i.value = [], ye();
        return;
      }
      i.value = J;
    }
    async function q(z = !1) {
      var J;
      const Y = (J = d.value) == null ? void 0 : J.path;
      if (Y && (a.value = await Kt(Y), n(x))) {
        const Te = n(o).find(
          (Ee) => Ee.path === n(a)
        ), We = Te == null ? void 0 : Te.path;
        if (We) {
          const Ee = await Et(We);
          z && (i.value = Ee, n(b) && (l.value = Ee.length > 0)), Ee.length === 0 && (i.value = []);
        }
      }
    }
    function P(z) {
      u(z);
    }
    function K() {
      q(!0), ye();
    }
    function de(z) {
      return n(S) === "hover" ? {
        onMouseenter: () => ee(z.path, !0),
        onClick: async () => {
          const Y = await Et(z.path);
          z.path && (!Y || Y.length === 0) && u(z.path);
        }
      } : {
        onClick: () => ee(z.path)
      };
    }
    function ie() {
      E({
        mixSideFixed: !n(L)
      });
    }
    function ye() {
      n(L) || (l.value = !1);
    }
    return (z, Y) => (C(), W(le, null, [
      oe("div", {
        class: I(`${n(s)}-dom`),
        style: Re(k.value)
      }, null, 6),
      Me((C(), W("div", Pe({
        style: U.value,
        class: [
          n(s),
          n(_),
          {
            open: l.value,
            mini: n(T)
          }
        ]
      }, ce.value), [
        p(un, {
          showTitle: !1,
          class: I(`${n(s)}-logo`)
        }, null, 8, ["class"]),
        p(Mt, {
          class: I(`${n(s)}-trigger`)
        }, null, 8, ["class"]),
        p(n(qt), null, {
          default: V(() => [
            oe("ul", {
              class: I(`${n(s)}-module`)
            }, [
              (C(!0), W(le, null, Ct(n(o), (J) => (C(), W("li", Pe({
                class: [
                  `${n(s)}-module__item `,
                  {
                    [`${n(s)}-module__item--active`]: J.path === a.value
                  }
                ],
                ref_for: !0
              }, de(J), {
                key: J.path
              }), [
                p(n(t), {
                  item: J,
                  collapseParent: "",
                  dot: ""
                }, null, 8, ["item"]),
                J.img ? (C(), W("img", {
                  key: 0,
                  src: J.img,
                  class: I([
                    `${n(s)}-module__icon`,
                    n(T) ? "w-16px h-16px" : "w-20px h-20px"
                  ])
                }, null, 10, Kr)) : (C(), A(Fe, {
                  key: 1,
                  class: I(`${n(s)}-module__icon`),
                  size: n(T) ? 16 : 20,
                  icon: J.icon || J.meta && J.meta.icon
                }, null, 8, ["class", "size", "icon"])),
                oe("p", {
                  class: I(`${n(s)}-module__name`)
                }, qe(J.meta.title ?? "menu_name"), 3)
              ], 16))), 128))
            ], 2)
          ]),
          _: 1
        }),
        oe("div", {
          class: I(`${n(s)}-menu-list`),
          ref_key: "sideRef",
          ref: c,
          style: Re(R.value)
        }, [
          Me(oe("div", {
            class: I([
              `${n(s)}-menu-list__title`,
              {
                show: l.value
              }
            ])
          }, [
            oe("span", Vr, qe(n(w)), 1),
            p(Fe, {
              size: 16,
              icon: n(b) ? "ri:pushpin-2-fill" : "ri:pushpin-2-line",
              class: "pushpin",
              onClick: ie
            }, null, 8, ["icon"])
          ], 2), [
            [ke, l.value]
          ]),
          p(n(qt), {
            class: I(`${n(s)}-menu-list__content`)
          }, {
            default: V(() => [
              p(n(ko), {
                items: i.value,
                theme: n(_),
                mixSider: "",
                onMenuClick: P
              }, null, 8, ["items", "theme"])
            ]),
            _: 1
          }, 8, ["class"]),
          Me(oe("div", {
            class: I(`${n(s)}-drag-bar`),
            ref_key: "dragBarRef",
            ref: r
          }, null, 2), [
            [ke, he.value && l.value]
          ])
        ], 6)
      ], 16)), [
        [n(Za), K]
      ])
    ], 64));
  }
}), Yr = /* @__PURE__ */ N({
  name: "SiderWrapper",
  __name: "index",
  setup(e) {
    const { prefixCls: t } = ae("layout-sider-wrapper"), { getIsMobile: o } = at(), { setMenuSetting: a, getCollapsed: i, getMenuWidth: l, getIsMixSidebar: r } = ue();
    function c() {
      a({
        collapsed: !0
      });
    }
    return (d, s) => n(o) ? (C(), A(n(ei), {
      key: 0,
      placement: "left",
      class: I(n(t)),
      width: n(l),
      getContainer: !1,
      open: !n(i),
      onClose: c
    }, {
      default: V(() => [
        p(to)
      ]),
      _: 1
    }, 8, ["class", "width", "open"])) : n(r) ? (C(), A(qr, { key: 1 })) : (C(), A(to, { key: 2 }));
  }
});
var $e = /* @__PURE__ */ ((e) => (e[e.REFRESH_PAGE = 0] = "REFRESH_PAGE", e[e.CLOSE_CURRENT = 1] = "CLOSE_CURRENT", e[e.CLOSE_LEFT = 2] = "CLOSE_LEFT", e[e.CLOSE_RIGHT = 3] = "CLOSE_RIGHT", e[e.CLOSE_OTHER = 4] = "CLOSE_OTHER", e[e.CLOSE_ALL = 5] = "CLOSE_ALL", e[e.SCALE = 6] = "SCALE", e))($e || {});
function Go(e) {
  const t = tt();
  function o() {
    const { show: u } = t.getMultiTabsSetting;
    if (!u)
      throw new Error("The multi-tab page is currently not open, please open it in the settings！");
    return !!u;
  }
  const a = Ke(), i = nt(), { currentRoute: l } = i;
  function r() {
    const u = n(l);
    return a.getTabList.find((f) => f.fullPath === u.fullPath);
  }
  async function c(u, f) {
    if (!o)
      return;
    const v = f || r();
    await a.setTabTitle(u, v);
  }
  async function d(u, f) {
    if (!o)
      return;
    const v = f || r();
    await a.updateTabPath(u, v);
  }
  async function s(u, f) {
    if (!o)
      return;
    const v = r();
    switch (u) {
      case 0:
        await a.refreshPage(i);
        break;
      case 1:
        await a.closeAllTab(i);
        break;
      case 2:
        await a.closeLeftTabs(v, i);
        break;
      case 3:
        await a.closeRightTabs(v, i);
        break;
      case 4:
        await a.closeOtherTabs(v, i);
        break;
      case 5:
      case 6:
        await a.closeTab(f || v, i);
        break;
    }
  }
  return {
    refreshPage: () => s(
      0
      /* REFRESH */
    ),
    closeAll: () => s(
      1
      /* CLOSE_ALL */
    ),
    closeLeft: () => s(
      2
      /* CLOSE_LEFT */
    ),
    closeRight: () => s(
      3
      /* CLOSE_RIGHT */
    ),
    closeOther: () => s(
      4
      /* CLOSE_OTHER */
    ),
    closeCurrent: () => s(
      5
      /* CLOSE_CURRENT */
    ),
    close: (u) => s(6, u),
    setTitle: (u, f) => c(u, f),
    updatePath: (u, f) => d(u, f)
  };
}
function Qr(e, t) {
  const o = $t({
    current: null,
    currentIndex: 0
  }), a = Ke(), { currentRoute: i } = nt(), { refreshPage: l, closeAll: r, close: c, closeLeft: d, closeOther: s, closeRight: u } = Go(), f = h(() => n(t) ? e.tabItem : n(i)), g = h(() => {
    if (!n(f))
      return;
    const { meta: S } = n(f), { path: m } = n(i), b = o.current, y = b ? b.path === m : !1, E = o.currentIndex, x = !y, T = E === 0 || !y, w = a.getTabList.length === 1, $ = !y || E === a.getTabList.length - 1 && a.getLastDragEndIndex >= 0;
    return [
      {
        icon: "ion:reload-sharp",
        event: $e.REFRESH_PAGE,
        text: "重新加载",
        disabled: x
      },
      {
        icon: "clarity:close-line",
        event: $e.CLOSE_CURRENT,
        text: "关闭标签页",
        disabled: !!(S != null && S.affix) || w,
        divider: !0
      },
      {
        icon: "line-md:arrow-close-left",
        event: $e.CLOSE_LEFT,
        text: "关闭左侧标签页",
        disabled: T,
        divider: !1
      },
      {
        icon: "line-md:arrow-close-right",
        event: $e.CLOSE_RIGHT,
        text: "关闭右侧标签页",
        disabled: $,
        divider: !0
      },
      {
        icon: "dashicons:align-center",
        event: $e.CLOSE_OTHER,
        text: "关闭其它标签页",
        disabled: w || !y
      },
      {
        icon: "clarity:minus-line",
        event: $e.CLOSE_ALL,
        text: "关闭全部标签页",
        disabled: w
      }
    ];
  });
  function v(S) {
    return (m) => {
      if (!S)
        return;
      m == null || m.preventDefault();
      const b = a.getTabList.findIndex(
        (y) => y.path === S.path
      );
      o.current = S, o.currentIndex = b;
    };
  }
  function _(S) {
    const { event: m } = S;
    switch (m) {
      case $e.REFRESH_PAGE:
        l();
        break;
      case $e.CLOSE_CURRENT:
        c(e.tabItem);
        break;
      case $e.CLOSE_LEFT:
        d();
        break;
      case $e.CLOSE_RIGHT:
        u();
        break;
      case $e.CLOSE_OTHER:
        s();
        break;
      case $e.CLOSE_ALL:
        r();
        break;
    }
  }
  return { getDropMenuList: g, handleMenuEvent: _, handleContextMenu: v };
}
const Zr = { class: "ml-1" }, no = /* @__PURE__ */ N({
  name: "TabContent",
  __name: "TabContent",
  props: {
    tabItem: {
      type: Object,
      default: null
    },
    isExtra: Boolean
  },
  setup(e) {
    const t = e, { prefixCls: o } = ae("multiple-tabs-content"), a = h(() => {
      const { tabItem: { meta: u } = {} } = t;
      return u && u.title;
    }), i = h(() => !t.isExtra), l = h(
      () => n(i) ? ["contextmenu"] : ["click"]
    ), { getDropMenuList: r, handleMenuEvent: c, handleContextMenu: d } = Qr(
      t,
      i
    );
    function s(u) {
      t.tabItem && d(t.tabItem)(u);
    }
    return (u, f) => (C(), A(n(ti), {
      dropMenuList: n(r),
      trigger: l.value,
      placement: "bottomLeft",
      overlayClassName: "multiple-tabs__dropdown",
      onMenuEvent: n(c)
    }, {
      default: V(() => [
        i.value ? (C(), W("div", {
          key: 0,
          class: I(`${n(o)}__info`),
          onContextmenu: s
        }, [
          oe("span", Zr, qe(a.value), 1)
        ], 34)) : (C(), W("span", {
          key: 1,
          class: I(`${n(o)}__extra-quick`),
          onClick: s
        }, [
          p(Fe, { icon: "ion:chevron-down" })
        ], 2))
      ]),
      _: 1
    }, 8, ["dropMenuList", "trigger", "onMenuEvent"]));
  }
}), Jr = /* @__PURE__ */ N({
  name: "FoldButton",
  __name: "FoldButton",
  setup(e) {
    const { prefixCls: t } = ae("multiple-tabs-content"), { getShowMenu: o, setMenuSetting: a } = ue(), { getShowHeader: i, setHeaderSetting: l } = gt(), r = h(() => !n(o) && !n(i)), c = h(
      () => n(r) ? "codicon:screen-normal" : "codicon:screen-full"
    );
    function d() {
      const s = n(r);
      a({
        show: s,
        hidden: !s
      }), l({ show: s }), ni();
    }
    return (s, u) => (C(), W("span", {
      class: I(`${n(t)}__extra-fold`),
      onClick: d
    }, [
      p(Fe, { icon: c.value }, null, 8, ["icon"])
    ], 2));
  }
}), el = /* @__PURE__ */ N({
  name: "TabRedo",
  __name: "TabRedo",
  setup(e) {
    const t = B(!1), { prefixCls: o } = ae("multiple-tabs-content"), { refreshPage: a } = Go();
    async function i() {
      t.value = !0, await a(), setTimeout(() => {
        t.value = !1;
      }, 1200);
    }
    return (l, r) => (C(), W("span", {
      class: I(`${n(o)}__extra-redo`),
      onClick: i
    }, [
      p(n(oi), { spin: t.value }, null, 8, ["spin"])
    ], 2));
  }
}), tl = /* @__PURE__ */ At(el, [["__scopeId", "data-v-ae8fbddc"]]);
function nl(e, t) {
  function o() {
    Xe(async () => {
      if (e = n(e), !e)
        return;
      (await import("./components.js").then((i) => i.cu)).default.create(e, {
        animation: 100,
        delay: 400,
        delayOnTouchOnly: !0,
        ...t
      });
    });
  }
  return { initSortable: o };
}
function ol() {
  const e = B([]), t = Ke(), o = nt();
  function a(r) {
    const c = [];
    return r && r.forEach((d) => {
      d.meta && d.meta.affix && c.push(on(d));
    }), c;
  }
  function i() {
    const r = a(
      o.getRoutes()
    );
    e.value = r;
    for (const c of r)
      t.addTab({
        meta: c.meta,
        name: c.name,
        path: c.path
      });
  }
  let l = !1;
  return l || (i(), l = !0), e.value.map((r) => {
    var c;
    return (c = r.meta) == null ? void 0 : c.title;
  }).filter(Boolean);
}
function al(e) {
  const t = Ke(), { multiTabsSetting: o } = xo, { prefixCls: a } = ae("multiple-tabs");
  Xe(() => {
    var r;
    if (!o.canDrag)
      return;
    const i = (r = document.querySelectorAll(
      `.${a} .ant-tabs-nav-wrap > div`
    )) == null ? void 0 : r[0], { initSortable: l } = nl(i, {
      filter: (c, d) => {
        const s = d.innerText;
        return s ? e.map((u) => u).includes(s) : !1;
      },
      onEnd: (c) => {
        const { oldIndex: d, newIndex: s } = c;
        Pn(d) || Pn(s) || d === s || t.sortTabs(d, s);
      }
    });
    l();
  });
}
const il = _e(() => import("./TypePicker.js")), rl = _e(() => import("./ThemeColorPicker.js")), ll = _e(() => import("./SettingFooter.js")), Z = _e(() => import("./SwitchItem.js")), _t = _e(() => import("./SelectItem.js")), sl = _e(() => import("./InputNumberItem.js"));
var O = /* @__PURE__ */ ((e) => (e[e.CHANGE_LAYOUT = 0] = "CHANGE_LAYOUT", e[e.CHANGE_THEME_COLOR = 1] = "CHANGE_THEME_COLOR", e[e.CHANGE_THEME = 2] = "CHANGE_THEME", e[e.MENU_HAS_DRAG = 3] = "MENU_HAS_DRAG", e[e.MENU_ACCORDION = 4] = "MENU_ACCORDION", e[e.MENU_TRIGGER = 5] = "MENU_TRIGGER", e[e.MENU_TOP_ALIGN = 6] = "MENU_TOP_ALIGN", e[e.MENU_COLLAPSED = 7] = "MENU_COLLAPSED", e[e.MENU_COLLAPSED_SHOW_TITLE = 8] = "MENU_COLLAPSED_SHOW_TITLE", e[e.MENU_WIDTH = 9] = "MENU_WIDTH", e[e.MENU_SHOW_SIDEBAR = 10] = "MENU_SHOW_SIDEBAR", e[e.MENU_THEME = 11] = "MENU_THEME", e[e.MENU_SPLIT = 12] = "MENU_SPLIT", e[e.MENU_FIXED = 13] = "MENU_FIXED", e[e.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE = 14] = "MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE", e[e.MENU_TRIGGER_MIX_SIDEBAR = 15] = "MENU_TRIGGER_MIX_SIDEBAR", e[e.MENU_FIXED_MIX_SIDEBAR = 16] = "MENU_FIXED_MIX_SIDEBAR", e[e.HEADER_SHOW = 17] = "HEADER_SHOW", e[e.HEADER_THEME = 18] = "HEADER_THEME", e[e.HEADER_FIXED = 19] = "HEADER_FIXED", e[e.HEADER_SEARCH = 20] = "HEADER_SEARCH", e[e.TABS_SHOW_QUICK = 21] = "TABS_SHOW_QUICK", e[e.TABS_SHOW_REDO = 22] = "TABS_SHOW_REDO", e[e.TABS_SHOW = 23] = "TABS_SHOW", e[e.TABS_SHOW_FOLD = 24] = "TABS_SHOW_FOLD", e[e.TABS_AUTO_COLLAPSE = 25] = "TABS_AUTO_COLLAPSE", e[e.LOCK_TIME = 26] = "LOCK_TIME", e[e.FULL_CONTENT = 27] = "FULL_CONTENT", e[e.CONTENT_MODE = 28] = "CONTENT_MODE", e[e.SHOW_BREADCRUMB = 29] = "SHOW_BREADCRUMB", e[e.SHOW_BREADCRUMB_ICON = 30] = "SHOW_BREADCRUMB_ICON", e[e.GRAY_MODE = 31] = "GRAY_MODE", e[e.COLOR_WEAK = 32] = "COLOR_WEAK", e[e.SHOW_LOGO = 33] = "SHOW_LOGO", e[e.SHOW_FOOTER = 34] = "SHOW_FOOTER", e[e.ROUTER_TRANSITION = 35] = "ROUTER_TRANSITION", e[e.OPEN_PROGRESS = 36] = "OPEN_PROGRESS", e[e.OPEN_PAGE_LOADING = 37] = "OPEN_PAGE_LOADING", e[e.OPEN_ROUTE_TRANSITION = 38] = "OPEN_ROUTE_TRANSITION", e))(O || {});
const ul = [
  {
    value: Dn.FULL,
    label: "流式"
  },
  {
    value: Dn.FIXED,
    label: "定宽"
  }
], cl = [
  {
    value: Ft.CENTER,
    label: "居中"
  },
  {
    value: Ft.START,
    label: "居左"
  },
  {
    value: Ft.END,
    label: "居右"
  }
], dl = (e) => [
  {
    value: Ze.NONE,
    label: "不显示"
  },
  {
    value: Ze.FOOTER,
    label: "底部"
  },
  ...e ? [] : [
    {
      value: Ze.HEADER,
      label: "顶部"
    }
  ]
], pl = [
  rt.ZOOM_FADE,
  rt.FADE,
  rt.ZOOM_OUT,
  rt.FADE_SIDE,
  rt.FADE_BOTTOM,
  rt.FADE_SCALE
].map((e) => ({
  label: e,
  value: e
})), fl = [
  {
    title: "左侧菜单模式",
    mode: je.INLINE,
    type: Ye.SIDEBAR
  },
  {
    title: "顶部菜单混合模式",
    mode: je.INLINE,
    type: Ye.MIX
  },
  {
    title: "顶部菜单模式",
    mode: je.HORIZONTAL,
    type: Ye.TOP_MENU
  },
  {
    title: "左侧菜单混合模式",
    mode: je.INLINE,
    type: Ye.MIX_SIDEBAR
  }
], gl = [
  {
    value: Hn.HOVER,
    label: "悬停"
  },
  {
    value: Hn.CLICK,
    label: "点击"
  }
];
function vl(e) {
  Eo(e, "color-weak", document.documentElement);
}
function ml(e) {
  Eo(e, "gray-mode", document.documentElement);
}
function hl(e, t) {
  const o = tt(), a = bl(e, t);
  o.setProjectConfig(a), e === O.CHANGE_THEME && (Oo(), wo());
}
function bl(e, t) {
  const o = tt(), { getThemeColor: a, getDarkMode: i } = ot(), { menuSetting: l } = xo;
  switch (e) {
    case O.CHANGE_LAYOUT:
      const { mode: r, type: c, split: d } = t, s = c === Ye.MIX, u = l.type === Ye.MIX ? { split: l.split } : { split: d };
      return {
        menuSetting: {
          mode: r,
          type: c,
          collapsed: !1,
          show: !0,
          hidden: !1,
          ...s ? u : { split: !1 }
        }
      };
    case O.CHANGE_THEME_COLOR:
      return a.value === t ? {} : { themeColor: t };
    case O.CHANGE_THEME:
      return i.value === t ? {} : (ci(t), {});
    case O.MENU_HAS_DRAG:
      return { menuSetting: { canDrag: t } };
    case O.MENU_ACCORDION:
      return { menuSetting: { accordion: t } };
    case O.MENU_TRIGGER:
      return { menuSetting: { trigger: t } };
    case O.MENU_TOP_ALIGN:
      return { menuSetting: { topMenuAlign: t } };
    case O.MENU_COLLAPSED:
      return { menuSetting: { collapsed: t } };
    case O.MENU_WIDTH:
      return { menuSetting: { menuWidth: t } };
    case O.MENU_SHOW_SIDEBAR:
      return { menuSetting: { show: t } };
    case O.MENU_COLLAPSED_SHOW_TITLE:
      return { menuSetting: { collapsedShowTitle: t } };
    case O.MENU_THEME:
      return wo(t), { menuSetting: { bgColor: t } };
    case O.MENU_SPLIT:
      return { menuSetting: { split: t } };
    case O.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE:
      return { menuSetting: { closeMixSidebarOnChange: t } };
    case O.MENU_FIXED:
      return { menuSetting: { fixed: t } };
    case O.MENU_TRIGGER_MIX_SIDEBAR:
      return { menuSetting: { mixSideTrigger: t } };
    case O.MENU_FIXED_MIX_SIDEBAR:
      return { menuSetting: { mixSideFixed: t } };
    case O.OPEN_PAGE_LOADING:
      return o.setPageLoading(!1), { transitionSetting: { openPageLoading: t } };
    case O.ROUTER_TRANSITION:
      return { transitionSetting: { basicTransition: t } };
    case O.OPEN_ROUTE_TRANSITION:
      return { transitionSetting: { enable: t } };
    case O.OPEN_PROGRESS:
      return { transitionSetting: { openNProgress: t } };
    case O.LOCK_TIME:
      return { lockTime: t };
    case O.FULL_CONTENT:
      return { fullContent: t };
    case O.CONTENT_MODE:
      return { contentMode: t };
    case O.SHOW_BREADCRUMB:
      return { showBreadCrumb: t };
    case O.SHOW_BREADCRUMB_ICON:
      return { showBreadCrumbIcon: t };
    case O.GRAY_MODE:
      return ml(t), { grayMode: t };
    case O.SHOW_FOOTER:
      return { showFooter: t };
    case O.COLOR_WEAK:
      return vl(t), { colorWeak: t };
    case O.SHOW_LOGO:
      return { showLogo: t };
    case O.TABS_SHOW_QUICK:
      return { multiTabsSetting: { showQuick: t } };
    case O.TABS_SHOW:
      return { multiTabsSetting: { show: t } };
    case O.TABS_SHOW_REDO:
      return { multiTabsSetting: { showRedo: t } };
    case O.TABS_SHOW_FOLD:
      return { multiTabsSetting: { showFold: t } };
    case O.TABS_AUTO_COLLAPSE:
      return { multiTabsSetting: { autoCollapse: t } };
    case O.HEADER_THEME:
      return Oo(t), { headerSetting: { bgColor: t } };
    case O.HEADER_SEARCH:
      return { headerSetting: { showSearch: t } };
    case O.HEADER_FIXED:
      return { headerSetting: { fixed: t } };
    case O.HEADER_SHOW:
      return { headerSetting: { show: t } };
    default:
      return {};
  }
}
const Sl = /* @__PURE__ */ N({
  name: "SettingDrawer",
  setup(e, {
    attrs: t
  }) {
    const {
      getContentMode: o,
      getShowBreadCrumb: a,
      getShowBreadCrumbIcon: i,
      getShowLogo: l,
      getFullContent: r,
      getColorWeak: c,
      getGrayMode: d,
      getShowDarkModeToggle: s
      // getThemeColor,
    } = ot(), {
      getOpenPageLoading: u,
      getBasicTransition: f,
      getEnableTransition: g,
      getOpenNProgress: v
    } = yn(), {
      getIsHorizontal: _,
      getShowMenu: S,
      getMenuType: m,
      getTrigger: b,
      getCollapsedShowTitle: y,
      getMenuFixed: E,
      getCollapsed: x,
      getCanDrag: T,
      getTopMenuAlign: w,
      getAccordion: $,
      getMenuWidth: R,
      getMenuBgColor: L,
      getIsTopMenu: M,
      getSplit: k,
      getIsMixSidebar: U,
      getCloseMixSidebarOnChange: ce,
      getMixSideTrigger: he,
      getMixSideFixed: G
    } = ue(), {
      getShowHeader: ee,
      getFixed: q,
      getShowSearch: P
    } = gt(), {
      getShowMultipleTab: K,
      getShowQuick: de,
      getShowRedo: ie,
      getShowFold: ye,
      getAutoCollapse: z
    } = vt(), Y = h(() => n(S) && !n(_));
    function J() {
      return p(le, null, [p(il, {
        menuTypeList: fl,
        handler: (Ie) => {
          hl(O.CHANGE_LAYOUT, {
            mode: Ie.mode,
            type: Ie.type,
            split: n(_) ? !1 : void 0
          });
        },
        def: n(m)
      }, null)]);
    }
    function Te() {
      return p(rl, {
        colorList: ii,
        def: n(L),
        event: O.MENU_THEME
      }, null);
    }
    function We() {
      let Ie = n(b);
      const mt = dl(n(k));
      return mt.some((ht) => ht.value === Ie) || (Ie = Ze.FOOTER), p(le, null, [p(Z, {
        title: "分割菜单",
        event: O.MENU_SPLIT,
        def: n(k),
        disabled: !n(Y) || n(m) !== Ye.MIX
      }, null), p(Z, {
        title: "固定展开菜单",
        event: O.MENU_FIXED_MIX_SIDEBAR,
        def: n(G),
        disabled: !n(U)
      }, null), p(Z, {
        title: "切换页面关闭菜单",
        event: O.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE,
        def: n(ce),
        disabled: !n(U)
      }, null), p(Z, {
        title: "折叠菜单",
        event: O.MENU_COLLAPSED,
        def: n(x),
        disabled: !n(Y)
      }, null), p(Z, {
        title: "侧边菜单拖拽",
        event: O.MENU_HAS_DRAG,
        def: n(T),
        disabled: !n(Y)
      }, null), p(Z, {
        title: "菜单搜索",
        event: O.HEADER_SEARCH,
        def: n(P),
        disabled: !n(ee)
      }, null), p(Z, {
        title: "侧边菜单手风琴模式",
        event: O.MENU_ACCORDION,
        def: n($),
        disabled: !n(Y)
      }, null), p(Z, {
        title: "折叠菜单显示名称",
        event: O.MENU_COLLAPSED_SHOW_TITLE,
        def: n(y),
        disabled: !n(Y) || !n(x) || n(U)
      }, null), p(Z, {
        title: "固定header",
        event: O.HEADER_FIXED,
        def: n(q),
        disabled: !n(ee)
      }, null), p(Z, {
        title: "固定Sidebar",
        event: O.MENU_FIXED,
        def: n(E),
        disabled: !n(Y) || n(U)
      }, null), p(Z, {
        title: "fold模式下自动收起标签页",
        event: O.TABS_AUTO_COLLAPSE,
        def: n(z),
        disabled: !n(K)
      }, null), p(_t, {
        title: "混合菜单触发方式",
        event: O.MENU_TRIGGER_MIX_SIDEBAR,
        def: n(he),
        options: gl,
        disabled: !n(U)
      }, null), p(_t, {
        title: "顶部菜单布局",
        event: O.MENU_TOP_ALIGN,
        def: n(w),
        options: cl,
        disabled: !n(ee) || n(k) || !n(M) && !n(k) || n(U)
      }, null), p(_t, {
        title: "菜单折叠按钮",
        event: O.MENU_TRIGGER,
        def: Ie,
        options: mt,
        disabled: !n(Y) || n(U)
      }, null), p(_t, {
        title: "内容区域宽度",
        event: O.CONTENT_MODE,
        def: n(o),
        options: ul
      }, null), p(sl, {
        title: "菜单展开宽度",
        max: 600,
        min: 100,
        step: 10,
        event: O.MENU_WIDTH,
        disabled: !n(Y),
        defaultValue: n(R),
        formatter: (ht) => `${parseInt(ht)}px`
      }, null)]);
    }
    function Ee() {
      return p(le, null, [p(Z, {
        title: "面包屑",
        event: O.SHOW_BREADCRUMB,
        def: n(a),
        disabled: !n(ee)
      }, null), p(Z, {
        title: "面包屑图标",
        event: O.SHOW_BREADCRUMB_ICON,
        def: n(i),
        disabled: !n(ee)
      }, null), p(Z, {
        title: "标签页",
        event: O.TABS_SHOW,
        def: n(K)
      }, null), p(Z, {
        title: "标签页刷新按钮",
        event: O.TABS_SHOW_REDO,
        def: n(ie),
        disabled: !n(K)
      }, null), p(Z, {
        title: "标签页快捷按钮",
        event: O.TABS_SHOW_QUICK,
        def: n(de),
        disabled: !n(K)
      }, null), p(Z, {
        title: "标签页折叠按钮",
        event: O.TABS_SHOW_FOLD,
        def: n(ye),
        disabled: !n(K)
      }, null), p(Z, {
        title: "左侧菜单",
        event: O.MENU_SHOW_SIDEBAR,
        def: n(S),
        disabled: n(_)
      }, null), p(Z, {
        title: "顶栏",
        event: O.HEADER_SHOW,
        def: n(ee)
      }, null), p(Z, {
        title: "Logo",
        event: O.SHOW_LOGO,
        def: n(l),
        disabled: n(U)
      }, null), p(Z, {
        title: "全屏模式",
        event: O.FULL_CONTENT,
        def: n(r)
      }, null), p(Z, {
        title: "灰色模式",
        event: O.GRAY_MODE,
        def: n(d)
      }, null), p(Z, {
        title: "色弱模式",
        event: O.COLOR_WEAK,
        def: n(c)
      }, null)]);
    }
    function Tt() {
      return p(le, null, [p(Z, {
        title: "顶部进度条",
        event: O.OPEN_PROGRESS,
        def: n(v)
      }, null), p(Z, {
        title: "切换loading",
        event: O.OPEN_PAGE_LOADING,
        def: n(u)
      }, null), p(Z, {
        title: "切换动画",
        event: O.OPEN_ROUTE_TRANSITION,
        def: n(g)
      }, null), p(_t, {
        title: "动画类型",
        event: O.ROUTER_TRANSITION,
        def: n(f),
        options: pl,
        disabled: !n(g)
      }, null)]);
    }
    return () => p(ai, Pe(t, {
      title: "项目配置",
      width: 330,
      class: "setting-drawer"
    }), {
      default: () => [n(s) && p(Ve, null, {
        default: () => [it("主题")]
      }), n(s) && p(di, {
        class: "mx-auto"
      }, null), p(Ve, null, {
        default: () => [it("导航栏模式")]
      }), J(), p(Ve, null, {
        default: () => [it("菜单主题")]
      }), Te(), p(Ve, null, {
        default: () => [it("界面功能")]
      }), We(), p(Ve, null, {
        default: () => [it("界面显示")]
      }), Ee(), p(Ve, null, {
        default: () => [it("过渡动画效果")]
      }), Tt(), p(Ve, null, null), p(ll, null, null)]
    });
  }
}), _l = /* @__PURE__ */ N({
  name: "SettingButton",
  __name: "SettingButton",
  setup(e) {
    const [t, { openDrawer: o }] = ri(), { prefixCls: a } = ae("multiple-tabs-content");
    return (i, l) => (C(), W("span", {
      class: I(`${n(a)}__extra-fold`),
      onClick: l[0] || (l[0] = (r) => n(o)(!0))
    }, [
      p(Fe, { icon: "ion:settings-outline" }),
      p(n(Sl), { onRegister: n(t) }, null, 8, ["onRegister"])
    ], 2));
  }
}), yl = /* @__PURE__ */ N({
  name: "MultipleTabs",
  __name: "index",
  setup(e) {
    const t = ol(), o = B("");
    al(t);
    const a = Ke(), i = li(), l = nt(), { prefixCls: r } = ae("multiple-tabs"), c = cn(), { getShowQuick: d, getShowRedo: s, getShowFold: u } = vt(), f = h(() => a.getTabList.filter((x) => {
      var T;
      return !((T = x.meta) != null && T.hideTab);
    })), g = h(() => n(f).length === 1), { y: v } = si(), { getShowMenu: _ } = ue(), { getShowHeader: S } = gt(), m = h(() => !n(_) && !n(S)), b = h(() => [
      r,
      {
        [`${r}--hide-close`]: n(g),
        [`${r}--hover`]: n(v) < ui
      }
    ]);
    sn((x) => {
      const { name: T } = x;
      if (T === _o || !x || !i.getToken)
        return;
      const { path: w, fullPath: $, meta: R = {} } = x, { currentActiveMenu: L, hideTab: M } = R, k = M ? L : null, U = k || $ || w;
      if (o.value !== U && (o.value = U), k) {
        const ce = l.getRoutes().find((he) => he.path === L);
        ce && a.addTab(ce);
      } else
        a.addTab(n(x));
    });
    function y(x) {
      o.value = x, c(x, !1);
    }
    function E(x) {
      n(g) || a.closeTabByKey(x, l);
    }
    return (x, T) => (C(), W("div", {
      class: I(b.value)
    }, [
      p(n(st), {
        type: "editable-card",
        size: "small",
        animated: !1,
        hideAdd: !0,
        tabBarGutter: 3,
        activeKey: o.value,
        onChange: y,
        onEdit: T[0] || (T[0] = (w) => E(`${w}`))
      }, ro({
        default: V(() => [
          (C(!0), W(le, null, Ct(f.value, (w) => (C(), A(n(st).TabPane, {
            key: w.query ? w.fullPath : w.path,
            closable: !(w && w.meta && w.meta.affix)
          }, {
            tab: V(() => [
              p(no, { tabItem: w }, null, 8, ["tabItem"])
            ]),
            _: 2
          }, 1032, ["closable"]))), 128))
        ]),
        _: 2
      }, [
        n(s) || n(d) ? {
          name: "rightExtra",
          fn: V(() => [
            n(u) && m.value || !n(S) ? (C(), A(_l, { key: 0 })) : j("", !0),
            n(s) ? (C(), A(tl, { key: 1 })) : j("", !0),
            n(d) ? (C(), A(no, {
              key: 2,
              isExtra: "",
              tabItem: x.$route
            }, null, 8, ["tabItem"])) : j("", !0),
            n(u) ? (C(), A(Jr, { key: 3 })) : j("", !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["activeKey"])
    ], 2));
  }
}), oo = 48, $l = 32, Cl = /* @__PURE__ */ N({
  name: "LayoutMultipleHeader",
  __name: "MultipleHeader",
  setup(e) {
    const { setHeaderHeight: t } = zo(), o = Ke(), { prefixCls: a } = ae("layout-multiple-header"), { getCalcContentWidth: i, getSplit: l, getShowMenu: r } = ue(), { getIsMobile: c } = at(), { getFixed: d, getShowInsetHeaderRef: s, getShowFullHeaderRef: u, getHeaderTheme: f, getShowHeader: g } = gt(), { getFullContent: v } = vo(), { getShowMultipleTab: _, getAutoCollapse: S } = vt(), m = h(() => n(_) && !n(v)), b = h(() => n(d) || n(u)), y = h(() => {
      const $ = {};
      return n(d) && ($.width = n(c) ? "100%" : n(i)), n(u) && ($.top = `${oo}px`), $;
    }), E = h(() => n(d) || n(u)), x = h(() => !n(r) && !n(g)), T = h(() => {
      let $ = 0;
      return n(S) && n(x) || ((n(u) || !n(l)) && n(g) && !n(v) && ($ += oo), n(_) && !n(v) && ($ += $l), t($)), {
        height: `${$}px`
      };
    }), w = h(() => [
      a,
      `${a}--${n(f)}`,
      { [`${a}--fixed`]: n(E) }
    ]);
    return ($, R) => (C(), W(le, null, [
      b.value ? (C(), W("div", {
        key: 0,
        class: I([`${n(a)}__placeholder`]),
        style: Re(T.value)
      }, null, 6)) : j("", !0),
      oe("div", {
        style: Re(y.value),
        class: I(w.value)
      }, [
        n(s) ? (C(), A(Wo, { key: 0 })) : j("", !0),
        m.value ? (C(), A(yl, {
          key: n(o).getLastDragEndIndex
        })) : j("", !0)
      ], 6)
    ], 64));
  }
}), Tl = /* @__PURE__ */ At(Cl, [["__scopeId", "data-v-cda85702"]]), xl = /* @__PURE__ */ N({
  name: "DefaultLayout",
  __name: "index",
  setup(e) {
    const t = _e(
      () => import("./index7.js")
    ), { prefixCls: o } = ae("default-layout"), { getIsMobile: a } = at(), { getShowFullHeaderRef: i } = gt(), { getShowSidebar: l, getIsMixSidebar: r, getShowMenu: c } = ue(), { getAutoCollapse: d } = vt(), s = h(() => {
      let u = ["ant-layout"];
      return (n(r) || n(c)) && u.push("ant-layout-has-sider"), !n(c) && n(d) && u.push("ant-layout-auto-collapse-tabs"), u;
    });
    return (u, f) => (C(), A(n(yt), {
      class: I(n(o))
    }, {
      default: V(() => [
        p(n(t)),
        n(i) ? (C(), A(Wo, {
          key: 0,
          fixed: ""
        })) : j("", !0),
        p(n(yt), {
          class: I([s.value, `${n(o)}-out`])
        }, {
          default: V(() => [
            n(l) || n(a) ? (C(), A(Yr, { key: 0 })) : j("", !0),
            p(n(yt), {
              class: I(`${n(o)}-main`)
            }, {
              default: V(() => [
                p(Tl),
                p(zr)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 8, ["class"])
      ]),
      _: 1
    }, 8, ["class"]));
  }
}), Rl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xl
}, Symbol.toStringTag, { value: "Module" }));
export {
  Sl as S,
  st as T,
  vt as a,
  hl as b,
  _e as c,
  vl as d,
  ml as e,
  Rl as i,
  gt as u
};
