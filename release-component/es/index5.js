import { inject as ct, provide as dt, defineComponent as X, shallowRef as ce, computed as N, watch as ie, nextTick as ye, onMounted as Pe, createVNode as s, watchEffect as ut, ref as Z, toRef as Ze, toRefs as At, reactive as pt, createApp as Dt, onBeforeUnmount as Lt, Fragment as _e, toRaw as Mt, unref as k, openBlock as H, createBlock as de, normalizeClass as ft, withCtx as W, createElementBlock as ne, renderList as gt, createElementVNode as Be, createTextVNode as mt, toDisplayString as ve, createCommentVNode as Re } from "vue";
import { g as We, m as yt, h as f, s as vt, u as oe, bX as ht, bY as bt, bZ as He, bS as St, R as xt, _ as j, P as ue, z as Fe, q as $t, ap as Ct, c as Ie, b_ as Rt, b$ as Ht, c0 as Gt, y as Wt, c1 as Ft, c2 as Kt, ab as Xt, H as Qe, N as Vt, c3 as ze, o as Je, G as ke, n as Ut, K as he, I as Ke, c4 as wt, c5 as qt, c6 as Yt, c7 as Zt, c8 as Ot, w as Ne, $ as be, S as Qt, a2 as Ae, c9 as Jt, A as fe, Y as De, ca as en, cb as tn, cc as et, bq as nn, f as Tt, aQ as on, Z as an, bQ as ln } from "./components.js";
import { C as rn } from "./CopyOutlined.js";
import { T as tt } from "./index2.js";
const sn = (e) => {
  const {
    antCls: t,
    componentCls: n,
    iconCls: i,
    avatarBg: o,
    avatarColor: r,
    containerSize: l,
    containerSizeLG: a,
    containerSizeSM: m,
    textFontSize: d,
    textFontSizeLG: p,
    textFontSizeSM: g,
    borderRadius: y,
    borderRadiusLG: S,
    borderRadiusSM: T,
    lineWidth: w,
    lineType: O
  } = e, z = (x, u, $) => ({
    width: x,
    height: x,
    lineHeight: `${x - w * 2}px`,
    borderRadius: "50%",
    [`&${n}-square`]: {
      borderRadius: $
    },
    [`${n}-string`]: {
      position: "absolute",
      left: {
        _skip_check_: !0,
        value: "50%"
      },
      transformOrigin: "0 center"
    },
    [`&${n}-icon`]: {
      fontSize: u,
      [`> ${i}`]: {
        margin: 0
      }
    }
  });
  return {
    [n]: f(f(f(f({}, vt(e)), {
      position: "relative",
      display: "inline-block",
      overflow: "hidden",
      color: r,
      whiteSpace: "nowrap",
      textAlign: "center",
      verticalAlign: "middle",
      background: o,
      border: `${w}px ${O} transparent`,
      "&-image": {
        background: "transparent"
      },
      [`${t}-image-img`]: {
        display: "block"
      }
    }), z(l, d, y)), {
      "&-lg": f({}, z(a, p, S)),
      "&-sm": f({}, z(m, g, T)),
      "> img": {
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    })
  };
}, cn = (e) => {
  const {
    componentCls: t,
    groupBorderColor: n,
    groupOverlapping: i,
    groupSpace: o
  } = e;
  return {
    [`${t}-group`]: {
      display: "inline-flex",
      [`${t}`]: {
        borderColor: n
      },
      "> *:not(:first-child)": {
        marginInlineStart: i
      }
    },
    [`${t}-group-popover`]: {
      [`${t} + ${t}`]: {
        marginInlineStart: o
      }
    }
  };
}, Et = We("Avatar", (e) => {
  const {
    colorTextLightSolid: t,
    colorTextPlaceholder: n
  } = e, i = yt(e, {
    avatarBg: n,
    avatarColor: t
  });
  return [sn(i), cn(i)];
}, (e) => {
  const {
    controlHeight: t,
    controlHeightLG: n,
    controlHeightSM: i,
    fontSize: o,
    fontSizeLG: r,
    fontSizeXL: l,
    fontSizeHeading3: a,
    marginXS: m,
    marginXXS: d,
    colorBorderBg: p
  } = e;
  return {
    containerSize: t,
    containerSizeLG: n,
    containerSizeSM: i,
    textFontSize: Math.round((r + l) / 2),
    textFontSizeLG: a,
    textFontSizeSM: o,
    groupSpace: d,
    groupOverlapping: -m,
    groupBorderColor: p
  };
}), zt = Symbol("AvatarContextKey"), dn = () => ct(zt, {}), un = (e) => dt(zt, e), pn = () => ({
  prefixCls: String,
  shape: {
    type: String,
    default: "circle"
  },
  size: {
    type: [Number, String, Object],
    default: () => "default"
  },
  src: String,
  /** Srcset of image avatar */
  srcset: String,
  icon: ue.any,
  alt: String,
  gap: Number,
  draggable: {
    type: Boolean,
    default: void 0
  },
  crossOrigin: String,
  loadError: {
    type: Function
  }
}), pe = X({
  compatConfig: {
    MODE: 3
  },
  name: "AAvatar",
  inheritAttrs: !1,
  props: pn(),
  slots: Object,
  setup(e, t) {
    let {
      slots: n,
      attrs: i
    } = t;
    const o = ce(!0), r = ce(!1), l = ce(1), a = ce(null), m = ce(null), {
      prefixCls: d
    } = oe("avatar", e), [p, g] = Et(d), y = dn(), S = N(() => e.size === "default" ? y.size : e.size), T = ht(), w = bt(() => {
      if (typeof e.size != "object")
        return;
      const u = He.find((C) => T.value[C]);
      return e.size[u];
    }), O = (u) => w.value ? {
      width: `${w.value}px`,
      height: `${w.value}px`,
      lineHeight: `${w.value}px`,
      fontSize: `${u ? w.value / 2 : 18}px`
    } : {}, z = () => {
      if (!a.value || !m.value)
        return;
      const u = a.value.offsetWidth, $ = m.value.offsetWidth;
      if (u !== 0 && $ !== 0) {
        const {
          gap: C = 4
        } = e;
        C * 2 < $ && (l.value = $ - C * 2 < u ? ($ - C * 2) / u : 1);
      }
    }, x = () => {
      const {
        loadError: u
      } = e;
      (u == null ? void 0 : u()) !== !1 && (o.value = !1);
    };
    return ie(() => e.src, () => {
      ye(() => {
        o.value = !0, l.value = 1;
      });
    }), ie(() => e.gap, () => {
      ye(() => {
        z();
      });
    }), Pe(() => {
      ye(() => {
        z(), r.value = !0;
      });
    }), () => {
      var u, $;
      const {
        shape: C,
        src: _,
        alt: B,
        srcset: A,
        draggable: J,
        crossOrigin: G
      } = e, U = (u = y.shape) !== null && u !== void 0 ? u : C, q = St(n, e, "icon"), b = d.value, P = {
        [`${i.class}`]: !!i.class,
        [b]: !0,
        [`${b}-lg`]: S.value === "large",
        [`${b}-sm`]: S.value === "small",
        [`${b}-${U}`]: !0,
        [`${b}-image`]: _ && o.value,
        [`${b}-icon`]: q,
        [g.value]: !0
      }, c = typeof S.value == "number" ? {
        width: `${S.value}px`,
        height: `${S.value}px`,
        lineHeight: `${S.value}px`,
        fontSize: q ? `${S.value / 2}px` : "18px"
      } : {}, v = ($ = n.default) === null || $ === void 0 ? void 0 : $.call(n);
      let h;
      if (_ && o.value)
        h = s("img", {
          draggable: J,
          src: _,
          srcset: A,
          onError: x,
          alt: B,
          crossorigin: G
        }, null);
      else if (q)
        h = q;
      else if (r.value || l.value !== 1) {
        const E = `scale(${l.value}) translateX(-50%)`, I = {
          msTransform: E,
          WebkitTransform: E,
          transform: E
        }, L = typeof S.value == "number" ? {
          lineHeight: `${S.value}px`
        } : {};
        h = s(xt, {
          onResize: z
        }, {
          default: () => [s("span", {
            class: `${b}-string`,
            ref: a,
            style: f(f({}, L), I)
          }, [v])]
        });
      } else
        h = s("span", {
          class: `${b}-string`,
          ref: a,
          style: {
            opacity: 0
          }
        }, [v]);
      return p(s("span", j(j({}, i), {}, {
        ref: m,
        class: P,
        style: [c, O(!!q), i.style]
      }), [h]));
    };
  }
}), fn = () => ({
  prefixCls: String,
  maxCount: Number,
  maxStyle: {
    type: Object,
    default: void 0
  },
  maxPopoverPlacement: {
    type: String,
    default: "top"
  },
  maxPopoverTrigger: String,
  /*
   * Size of avatar, options: `large`, `small`, `default`
   * or a custom number size
   * */
  size: {
    type: [Number, String, Object],
    default: "default"
  },
  shape: {
    type: String,
    default: "circle"
  }
}), Ge = X({
  compatConfig: {
    MODE: 3
  },
  name: "AAvatarGroup",
  inheritAttrs: !1,
  props: fn(),
  setup(e, t) {
    let {
      slots: n,
      attrs: i
    } = t;
    const {
      prefixCls: o,
      direction: r
    } = oe("avatar", e), l = N(() => `${o.value}-group`), [a, m] = Et(o);
    return ut(() => {
      const d = {
        size: e.size,
        shape: e.shape
      };
      un(d);
    }), () => {
      const {
        maxPopoverPlacement: d = "top",
        maxCount: p,
        maxStyle: g,
        maxPopoverTrigger: y = "hover",
        shape: S
      } = e, T = {
        [l.value]: !0,
        [`${l.value}-rtl`]: r.value === "rtl",
        [`${i.class}`]: !!i.class,
        [m.value]: !0
      }, w = St(n, e), O = Fe(w).map((x, u) => $t(x, {
        key: `avatar-key-${u}`
      })), z = O.length;
      if (p && p < z) {
        const x = O.slice(0, p), u = O.slice(p, z);
        return x.push(s(Ct, {
          key: "avatar-popover-key",
          content: u,
          trigger: y,
          placement: d,
          overlayClassName: `${l.value}-popover`
        }, {
          default: () => [s(pe, {
            style: g,
            shape: S
          }, {
            default: () => [`+${z - p}`]
          })]
        })), a(s("div", j(j({}, i), {}, {
          class: T,
          style: i.style
        }), [x]));
      }
      return a(s("div", j(j({}, i), {}, {
        class: T,
        style: i.style
      }), [O]));
    };
  }
});
pe.Group = Ge;
pe.install = function(e) {
  return e.component(pe.name, pe), e.component(Ge.name, Ge), e;
};
const gn = () => ({
  avatar: ue.any,
  description: ue.any,
  prefixCls: String,
  title: ue.any
}), mn = X({
  compatConfig: {
    MODE: 3
  },
  name: "AListItemMeta",
  props: gn(),
  displayName: "AListItemMeta",
  __ANT_LIST_ITEM_META: !0,
  slots: Object,
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      prefixCls: i
    } = oe("list", e);
    return () => {
      var o, r, l, a, m, d;
      const p = `${i.value}-item-meta`, g = (o = e.title) !== null && o !== void 0 ? o : (r = n.title) === null || r === void 0 ? void 0 : r.call(n), y = (l = e.description) !== null && l !== void 0 ? l : (a = n.description) === null || a === void 0 ? void 0 : a.call(n), S = (m = e.avatar) !== null && m !== void 0 ? m : (d = n.avatar) === null || d === void 0 ? void 0 : d.call(n), T = s("div", {
        class: `${i.value}-item-meta-content`
      }, [g && s("h4", {
        class: `${i.value}-item-meta-title`
      }, [g]), y && s("div", {
        class: `${i.value}-item-meta-description`
      }, [y])]);
      return s("div", {
        class: p
      }, [S && s("div", {
        class: `${i.value}-item-meta-avatar`
      }, [S]), (g || y) && T]);
    };
  }
}), _t = Symbol("ListContextKey");
var yn = function(e, t) {
  var n = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, i = Object.getOwnPropertySymbols(e); o < i.length; o++)
      t.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (n[i[o]] = e[i[o]]);
  return n;
};
const vn = () => ({
  prefixCls: String,
  extra: ue.any,
  actions: ue.array,
  grid: Object,
  colStyle: {
    type: Object,
    default: void 0
  }
}), hn = X({
  compatConfig: {
    MODE: 3
  },
  name: "AListItem",
  inheritAttrs: !1,
  Meta: mn,
  props: vn(),
  slots: Object,
  setup(e, t) {
    let {
      slots: n,
      attrs: i
    } = t;
    const {
      itemLayout: o,
      grid: r
    } = ct(_t, {
      grid: Z(),
      itemLayout: Z()
    }), {
      prefixCls: l
    } = oe("list", e), a = () => {
      var d;
      const p = ((d = n.default) === null || d === void 0 ? void 0 : d.call(n)) || [];
      let g;
      return p.forEach((y) => {
        Ht(y) && !Gt(y) && (g = !0);
      }), g && p.length > 1;
    }, m = () => {
      var d, p;
      const g = (d = e.extra) !== null && d !== void 0 ? d : (p = n.extra) === null || p === void 0 ? void 0 : p.call(n);
      return o.value === "vertical" ? !!g : !a();
    };
    return () => {
      var d, p, g, y, S;
      const {
        class: T
      } = i, w = yn(i, ["class"]), O = l.value, z = (d = e.extra) !== null && d !== void 0 ? d : (p = n.extra) === null || p === void 0 ? void 0 : p.call(n), x = (g = n.default) === null || g === void 0 ? void 0 : g.call(n);
      let u = (y = e.actions) !== null && y !== void 0 ? y : Fe((S = n.actions) === null || S === void 0 ? void 0 : S.call(n));
      u = u && !Array.isArray(u) ? [u] : u;
      const $ = u && u.length > 0 && s("ul", {
        class: `${O}-item-action`,
        key: "actions"
      }, [u.map((B, A) => s("li", {
        key: `${O}-item-action-${A}`
      }, [B, A !== u.length - 1 && s("em", {
        class: `${O}-item-action-split`
      }, null)]))]), C = r.value ? "div" : "li", _ = s(C, j(j({}, w), {}, {
        class: Ie(`${O}-item`, {
          [`${O}-item-no-flex`]: !m()
        }, T)
      }), {
        default: () => [o.value === "vertical" && z ? [s("div", {
          class: `${O}-item-main`,
          key: "content"
        }, [x, $]), s("div", {
          class: `${O}-item-extra`,
          key: "extra"
        }, [z])] : [x, $, $t(z, {
          key: "extra"
        })]]
      });
      return r.value ? s(Rt, {
        flex: 1,
        style: e.colStyle
      }, {
        default: () => [_]
      }) : _;
    };
  }
}), bn = (e) => {
  const {
    listBorderedCls: t,
    componentCls: n,
    paddingLG: i,
    margin: o,
    padding: r,
    listItemPaddingSM: l,
    marginLG: a,
    borderRadiusLG: m
  } = e;
  return {
    [`${t}`]: {
      border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
      borderRadius: m,
      [`${n}-header,${n}-footer,${n}-item`]: {
        paddingInline: i
      },
      [`${n}-pagination`]: {
        margin: `${o}px ${a}px`
      }
    },
    [`${t}${n}-sm`]: {
      [`${n}-item,${n}-header,${n}-footer`]: {
        padding: l
      }
    },
    [`${t}${n}-lg`]: {
      [`${n}-item,${n}-header,${n}-footer`]: {
        padding: `${r}px ${i}px`
      }
    }
  };
}, Sn = (e) => {
  const {
    componentCls: t,
    screenSM: n,
    screenMD: i,
    marginLG: o,
    marginSM: r,
    margin: l
  } = e;
  return {
    [`@media screen and (max-width:${i})`]: {
      [`${t}`]: {
        [`${t}-item`]: {
          [`${t}-item-action`]: {
            marginInlineStart: o
          }
        }
      },
      [`${t}-vertical`]: {
        [`${t}-item`]: {
          [`${t}-item-extra`]: {
            marginInlineStart: o
          }
        }
      }
    },
    [`@media screen and (max-width: ${n})`]: {
      [`${t}`]: {
        [`${t}-item`]: {
          flexWrap: "wrap",
          [`${t}-action`]: {
            marginInlineStart: r
          }
        }
      },
      [`${t}-vertical`]: {
        [`${t}-item`]: {
          flexWrap: "wrap-reverse",
          [`${t}-item-main`]: {
            minWidth: e.contentWidth
          },
          [`${t}-item-extra`]: {
            margin: `auto auto ${l}px`
          }
        }
      }
    }
  };
}, xn = (e) => {
  const {
    componentCls: t,
    antCls: n,
    controlHeight: i,
    minHeight: o,
    paddingSM: r,
    marginLG: l,
    padding: a,
    listItemPadding: m,
    colorPrimary: d,
    listItemPaddingSM: p,
    listItemPaddingLG: g,
    paddingXS: y,
    margin: S,
    colorText: T,
    colorTextDescription: w,
    motionDurationSlow: O,
    lineWidth: z
  } = e;
  return {
    [`${t}`]: f(f({}, vt(e)), {
      position: "relative",
      "*": {
        outline: "none"
      },
      [`${t}-header, ${t}-footer`]: {
        background: "transparent",
        paddingBlock: r
      },
      [`${t}-pagination`]: {
        marginBlockStart: l,
        textAlign: "end",
        // https://github.com/ant-design/ant-design/issues/20037
        [`${n}-pagination-options`]: {
          textAlign: "start"
        }
      },
      [`${t}-spin`]: {
        minHeight: o,
        textAlign: "center"
      },
      [`${t}-items`]: {
        margin: 0,
        padding: 0,
        listStyle: "none"
      },
      [`${t}-item`]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: m,
        color: T,
        [`${t}-item-meta`]: {
          display: "flex",
          flex: 1,
          alignItems: "flex-start",
          maxWidth: "100%",
          [`${t}-item-meta-avatar`]: {
            marginInlineEnd: a
          },
          [`${t}-item-meta-content`]: {
            flex: "1 0",
            width: 0,
            color: T
          },
          [`${t}-item-meta-title`]: {
            marginBottom: e.marginXXS,
            color: T,
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            "> a": {
              color: T,
              transition: `all ${O}`,
              "&:hover": {
                color: d
              }
            }
          },
          [`${t}-item-meta-description`]: {
            color: w,
            fontSize: e.fontSize,
            lineHeight: e.lineHeight
          }
        },
        [`${t}-item-action`]: {
          flex: "0 0 auto",
          marginInlineStart: e.marginXXL,
          padding: 0,
          fontSize: 0,
          listStyle: "none",
          "& > li": {
            position: "relative",
            display: "inline-block",
            padding: `0 ${y}px`,
            color: w,
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            textAlign: "center",
            "&:first-child": {
              paddingInlineStart: 0
            }
          },
          [`${t}-item-action-split`]: {
            position: "absolute",
            insetBlockStart: "50%",
            insetInlineEnd: 0,
            width: z,
            height: Math.ceil(e.fontSize * e.lineHeight) - e.marginXXS * 2,
            transform: "translateY(-50%)",
            backgroundColor: e.colorSplit
          }
        }
      },
      [`${t}-empty`]: {
        padding: `${a}px 0`,
        color: w,
        fontSize: e.fontSizeSM,
        textAlign: "center"
      },
      [`${t}-empty-text`]: {
        padding: a,
        color: e.colorTextDisabled,
        fontSize: e.fontSize,
        textAlign: "center"
      },
      // ============================ without flex ============================
      [`${t}-item-no-flex`]: {
        display: "block"
      }
    }),
    [`${t}-grid ${n}-col > ${t}-item`]: {
      display: "block",
      maxWidth: "100%",
      marginBlockEnd: S,
      paddingBlock: 0,
      borderBlockEnd: "none"
    },
    [`${t}-vertical ${t}-item`]: {
      alignItems: "initial",
      [`${t}-item-main`]: {
        display: "block",
        flex: 1
      },
      [`${t}-item-extra`]: {
        marginInlineStart: l
      },
      [`${t}-item-meta`]: {
        marginBlockEnd: a,
        [`${t}-item-meta-title`]: {
          marginBlockEnd: r,
          color: T,
          fontSize: e.fontSizeLG,
          lineHeight: e.lineHeightLG
        }
      },
      [`${t}-item-action`]: {
        marginBlockStart: a,
        marginInlineStart: "auto",
        "> li": {
          padding: `0 ${a}px`,
          "&:first-child": {
            paddingInlineStart: 0
          }
        }
      }
    },
    [`${t}-split ${t}-item`]: {
      borderBlockEnd: `${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,
      "&:last-child": {
        borderBlockEnd: "none"
      }
    },
    [`${t}-split ${t}-header`]: {
      borderBlockEnd: `${e.lineWidth}px ${e.lineType} ${e.colorSplit}`
    },
    [`${t}-split${t}-empty ${t}-footer`]: {
      borderTop: `${e.lineWidth}px ${e.lineType} ${e.colorSplit}`
    },
    [`${t}-loading ${t}-spin-nested-loading`]: {
      minHeight: i
    },
    [`${t}-split${t}-something-after-last-item ${n}-spin-container > ${t}-items > ${t}-item:last-child`]: {
      borderBlockEnd: `${e.lineWidth}px ${e.lineType} ${e.colorSplit}`
    },
    [`${t}-lg ${t}-item`]: {
      padding: g
    },
    [`${t}-sm ${t}-item`]: {
      padding: p
    },
    // Horizontal
    [`${t}:not(${t}-vertical)`]: {
      [`${t}-item-no-flex`]: {
        [`${t}-item-action`]: {
          float: "right"
        }
      }
    }
  };
}, $n = We("List", (e) => {
  const t = yt(e, {
    listBorderedCls: `${e.componentCls}-bordered`,
    minHeight: e.controlHeightLG,
    listItemPadding: `${e.paddingContentVertical}px ${e.paddingContentHorizontalLG}px`,
    listItemPaddingSM: `${e.paddingContentVerticalSM}px ${e.paddingContentHorizontal}px`,
    listItemPaddingLG: `${e.paddingContentVerticalLG}px ${e.paddingContentHorizontalLG}px`
  });
  return [xn(t), bn(t), Sn(t)];
}, {
  contentWidth: 220
}), Cn = () => ({
  bordered: Qe(),
  dataSource: Vt(),
  extra: ze(),
  grid: Je(),
  itemLayout: String,
  loading: ke([Boolean, Object]),
  loadMore: ze(),
  pagination: ke([Boolean, Object]),
  prefixCls: String,
  rowKey: ke([String, Number, Function]),
  renderItem: Ut(),
  size: String,
  split: Qe(),
  header: ze(),
  footer: ze(),
  locale: Je()
}), V = X({
  compatConfig: {
    MODE: 3
  },
  name: "AList",
  inheritAttrs: !1,
  Item: hn,
  props: Wt(Cn(), {
    dataSource: [],
    bordered: !1,
    split: !0,
    loading: !1,
    pagination: !1
  }),
  slots: Object,
  setup(e, t) {
    let {
      slots: n,
      attrs: i
    } = t;
    var o, r;
    dt(_t, {
      grid: Ze(e, "grid"),
      itemLayout: Ze(e, "itemLayout")
    });
    const l = {
      current: 1,
      total: 0
    }, {
      prefixCls: a,
      direction: m,
      renderEmpty: d
    } = oe("list", e), [p, g] = $n(a), y = N(() => e.pagination && typeof e.pagination == "object" ? e.pagination : {}), S = Z((o = y.value.defaultCurrent) !== null && o !== void 0 ? o : 1), T = Z((r = y.value.defaultPageSize) !== null && r !== void 0 ? r : 10);
    ie(y, () => {
      "current" in y.value && (S.value = y.value.current), "pageSize" in y.value && (T.value = y.value.pageSize);
    });
    const w = [], O = (b) => (P, c) => {
      S.value = P, T.value = c, y.value[b] && y.value[b](P, c);
    }, z = O("onChange"), x = O("onShowSizeChange"), u = N(() => typeof e.loading == "boolean" ? {
      spinning: e.loading
    } : e.loading), $ = N(() => u.value && u.value.spinning), C = N(() => {
      let b = "";
      switch (e.size) {
        case "large":
          b = "lg";
          break;
        case "small":
          b = "sm";
          break;
      }
      return b;
    }), _ = N(() => ({
      [`${a.value}`]: !0,
      [`${a.value}-vertical`]: e.itemLayout === "vertical",
      [`${a.value}-${C.value}`]: C.value,
      [`${a.value}-split`]: e.split,
      [`${a.value}-bordered`]: e.bordered,
      [`${a.value}-loading`]: $.value,
      [`${a.value}-grid`]: !!e.grid,
      [`${a.value}-rtl`]: m.value === "rtl"
    })), B = N(() => {
      const b = f(f(f({}, l), {
        total: e.dataSource.length,
        current: S.value,
        pageSize: T.value
      }), e.pagination || {}), P = Math.ceil(b.total / b.pageSize);
      return b.current > P && (b.current = P), b;
    }), A = N(() => {
      let b = [...e.dataSource];
      return e.pagination && e.dataSource.length > (B.value.current - 1) * B.value.pageSize && (b = [...e.dataSource].splice((B.value.current - 1) * B.value.pageSize, B.value.pageSize)), b;
    }), J = ht(), G = bt(() => {
      for (let b = 0; b < He.length; b += 1) {
        const P = He[b];
        if (J.value[P])
          return P;
      }
    }), U = N(() => {
      if (!e.grid)
        return;
      const b = G.value && e.grid[G.value] ? e.grid[G.value] : e.grid.column;
      if (b)
        return {
          width: `${100 / b}%`,
          maxWidth: `${100 / b}%`
        };
    }), q = (b, P) => {
      var c;
      const v = (c = e.renderItem) !== null && c !== void 0 ? c : n.renderItem;
      if (!v)
        return null;
      let h;
      const E = typeof e.rowKey;
      return E === "function" ? h = e.rowKey(b) : E === "string" || E === "number" ? h = b[e.rowKey] : h = b.key, h || (h = `list-item-${P}`), w[P] = h, v({
        item: b,
        index: P
      });
    };
    return () => {
      var b, P, c, v, h, E, I, L;
      const Y = (b = e.loadMore) !== null && b !== void 0 ? b : (P = n.loadMore) === null || P === void 0 ? void 0 : P.call(n), F = (c = e.footer) !== null && c !== void 0 ? c : (v = n.footer) === null || v === void 0 ? void 0 : v.call(n), Q = (h = e.header) !== null && h !== void 0 ? h : (E = n.header) === null || E === void 0 ? void 0 : E.call(n), K = Fe((I = n.default) === null || I === void 0 ? void 0 : I.call(n)), ae = !!(Y || e.pagination || F), R = Ie(f(f({}, _.value), {
        [`${a.value}-something-after-last-item`]: ae
      }), i.class, g.value), ee = e.pagination ? s("div", {
        class: `${a.value}-pagination`
      }, [s(Ft, j(j({}, B.value), {}, {
        onChange: z,
        onShowSizeChange: x
      }), null)]) : null;
      let te = $.value && s("div", {
        style: {
          minHeight: "53px"
        }
      }, null);
      if (A.value.length > 0) {
        w.length = 0;
        const Te = A.value.map((ge, me) => q(ge, me)), je = Te.map((ge, me) => s("div", {
          key: w[me],
          style: U.value
        }, [ge]));
        te = e.grid ? s(Kt, {
          gutter: e.grid.gutter
        }, {
          default: () => [je]
        }) : s("ul", {
          class: `${a.value}-items`
        }, [Te]);
      } else
        !K.length && !$.value && (te = s("div", {
          class: `${a.value}-empty-text`
        }, [((L = e.locale) === null || L === void 0 ? void 0 : L.emptyText) || d("List")]));
      const le = B.value.position || "bottom";
      return p(s("div", j(j({}, i), {}, {
        class: R
      }), [(le === "top" || le === "both") && ee, Q && s("div", {
        class: `${a.value}-header`
      }, [Q]), s(Xt, u.value, {
        default: () => [te, K]
      }), F && s("div", {
        class: `${a.value}-footer`
      }, [F]), Y || (le === "bottom" || le === "both") && ee]));
    };
  }
});
V.install = function(e) {
  return e.component(V.name, V), e.component(V.Item.name, V.Item), e.component(V.Item.Meta.name, V.Item.Meta), e;
};
var wn = function(e, t) {
  var n = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, i = Object.getOwnPropertySymbols(e); o < i.length; o++)
      t.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (n[i[o]] = e[i[o]]);
  return n;
};
const On = {
  border: 0,
  background: "transparent",
  padding: 0,
  lineHeight: "inherit",
  display: "inline-block"
}, nt = X({
  compatConfig: {
    MODE: 3
  },
  name: "TransButton",
  inheritAttrs: !1,
  props: {
    noStyle: {
      type: Boolean,
      default: void 0
    },
    onClick: Function,
    disabled: {
      type: Boolean,
      default: void 0
    },
    autofocus: {
      type: Boolean,
      default: void 0
    }
  },
  setup(e, t) {
    let {
      slots: n,
      emit: i,
      attrs: o,
      expose: r
    } = t;
    const l = ce(), a = (y) => {
      const {
        keyCode: S
      } = y;
      S === he.ENTER && y.preventDefault();
    }, m = (y) => {
      const {
        keyCode: S
      } = y;
      S === he.ENTER && i("click", y);
    }, d = (y) => {
      i("click", y);
    }, p = () => {
      l.value && l.value.focus();
    }, g = () => {
      l.value && l.value.blur();
    };
    return Pe(() => {
      e.autofocus && p();
    }), r({
      focus: p,
      blur: g
    }), () => {
      var y;
      const {
        noStyle: S,
        disabled: T
      } = e, w = wn(e, ["noStyle", "disabled"]);
      let O = {};
      return S || (O = f({}, On)), T && (O.pointerEvents = "none"), s("div", j(j(j({
        role: "button",
        tabindex: 0,
        ref: l
      }, w), o), {}, {
        onClick: d,
        onKeydown: a,
        onKeyup: m,
        style: f(f({}, O), o.style || {})
      }), [(y = n.default) === null || y === void 0 ? void 0 : y.call(n)]);
    };
  }
});
var Tn = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z" } }] }, name: "enter", theme: "outlined" };
function it(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, i = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), i.forEach(function(o) {
      En(e, o, n[o]);
    });
  }
  return e;
}
function En(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Xe = function(t, n) {
  var i = it({}, t, n.attrs);
  return s(Ke, it({}, i, {
    icon: Tn
  }), null);
};
Xe.displayName = "EnterOutlined";
Xe.inheritAttrs = !1;
const zn = (e, t, n, i) => {
  const {
    sizeMarginHeadingVerticalEnd: o,
    fontWeightStrong: r
  } = i;
  return {
    marginBottom: o,
    color: n,
    fontWeight: r,
    fontSize: e,
    lineHeight: t
  };
}, _n = (e) => {
  const t = [1, 2, 3, 4, 5], n = {};
  return t.forEach((i) => {
    n[`
      h${i}&,
      div&-h${i},
      div&-h${i} > textarea,
      h${i}
    `] = zn(e[`fontSizeHeading${i}`], e[`lineHeightHeading${i}`], e.colorTextHeading, e);
  }), n;
}, Pn = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    "a&, a": f(f({}, wt(e)), {
      textDecoration: e.linkDecoration,
      "&:active, &:hover": {
        textDecoration: e.linkHoverDecoration
      },
      [`&[disabled], &${t}-disabled`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed",
        "&:active, &:hover": {
          color: e.colorTextDisabled
        },
        "&:active": {
          pointerEvents: "none"
        }
      }
    })
  };
}, In = () => ({
  code: {
    margin: "0 0.2em",
    paddingInline: "0.4em",
    paddingBlock: "0.2em 0.1em",
    fontSize: "85%",
    background: "rgba(150, 150, 150, 0.1)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderRadius: 3
  },
  kbd: {
    margin: "0 0.2em",
    paddingInline: "0.4em",
    paddingBlock: "0.15em 0.1em",
    fontSize: "90%",
    background: "rgba(150, 150, 150, 0.06)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderBottomWidth: 2,
    borderRadius: 3
  },
  mark: {
    padding: 0,
    // FIXME hardcode in v4
    backgroundColor: qt[2]
  },
  "u, ins": {
    textDecoration: "underline",
    textDecorationSkipInk: "auto"
  },
  "s, del": {
    textDecoration: "line-through"
  },
  strong: {
    fontWeight: 600
  },
  // list
  "ul, ol": {
    marginInline: 0,
    marginBlock: "0 1em",
    padding: 0,
    li: {
      marginInline: "20px 0",
      marginBlock: 0,
      paddingInline: "4px 0",
      paddingBlock: 0
    }
  },
  ul: {
    listStyleType: "circle",
    ul: {
      listStyleType: "disc"
    }
  },
  ol: {
    listStyleType: "decimal"
  },
  // pre & block
  "pre, blockquote": {
    margin: "1em 0"
  },
  pre: {
    padding: "0.4em 0.6em",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    background: "rgba(150, 150, 150, 0.1)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderRadius: 3,
    // Compatible for marked
    code: {
      display: "inline",
      margin: 0,
      padding: 0,
      fontSize: "inherit",
      fontFamily: "inherit",
      background: "transparent",
      border: 0
    }
  },
  blockquote: {
    paddingInline: "0.6em 0",
    paddingBlock: 0,
    borderInlineStart: "4px solid rgba(100, 100, 100, 0.2)",
    opacity: 0.85
  }
}), jn = (e) => {
  const {
    componentCls: t
  } = e, i = Yt(e).inputPaddingVertical + 1;
  return {
    "&-edit-content": {
      position: "relative",
      "div&": {
        insetInlineStart: -e.paddingSM,
        marginTop: -i,
        marginBottom: `calc(1em - ${i}px)`
      },
      [`${t}-edit-content-confirm`]: {
        position: "absolute",
        insetInlineEnd: e.marginXS + 2,
        insetBlockEnd: e.marginXS,
        color: e.colorTextDescription,
        // default style
        fontWeight: "normal",
        fontSize: e.fontSize,
        fontStyle: "normal",
        pointerEvents: "none"
      },
      textarea: {
        margin: "0!important",
        // Fix Editable Textarea flash in Firefox
        MozTransition: "none",
        height: "1em"
      }
    }
  };
}, Bn = (e) => ({
  "&-copy-success": {
    "\n    &,\n    &:hover,\n    &:focus": {
      color: e.colorSuccess
    }
  }
}), kn = () => ({
  "\n  a&-ellipsis,\n  span&-ellipsis\n  ": {
    display: "inline-block",
    maxWidth: "100%"
  },
  "&-single-line": {
    whiteSpace: "nowrap"
  },
  "&-ellipsis-single-line": {
    overflow: "hidden",
    textOverflow: "ellipsis",
    // https://blog.csdn.net/iefreer/article/details/50421025
    "a&, span&": {
      verticalAlign: "bottom"
    }
  },
  "&-ellipsis-multiple-line": {
    display: "-webkit-box",
    overflow: "hidden",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical"
  }
}), Nn = (e) => {
  const {
    componentCls: t,
    sizeMarginHeadingVerticalStart: n
  } = e;
  return {
    [t]: f(f(f(f(f(f(f(f(f({
      color: e.colorText,
      wordBreak: "break-word",
      lineHeight: e.lineHeight,
      [`&${t}-secondary`]: {
        color: e.colorTextDescription
      },
      [`&${t}-success`]: {
        color: e.colorSuccess
      },
      [`&${t}-warning`]: {
        color: e.colorWarning
      },
      [`&${t}-danger`]: {
        color: e.colorError,
        "a&:active, a&:focus": {
          color: e.colorErrorActive
        },
        "a&:hover": {
          color: e.colorErrorHover
        }
      },
      [`&${t}-disabled`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed",
        userSelect: "none"
      },
      "\n        div&,\n        p\n      ": {
        marginBottom: "1em"
      }
    }, _n(e)), {
      [`
      & + h1${t},
      & + h2${t},
      & + h3${t},
      & + h4${t},
      & + h5${t}
      `]: {
        marginTop: n
      },
      "\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5": {
        "\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ": {
          marginTop: n
        }
      }
    }), In()), Pn(e)), {
      // Operation
      [`
        ${t}-expand,
        ${t}-edit,
        ${t}-copy
      `]: f(f({}, wt(e)), {
        marginInlineStart: e.marginXXS
      })
    }), jn(e)), Bn(e)), kn()), {
      "&-rtl": {
        direction: "rtl"
      }
    })
  };
}, Pt = We("Typography", (e) => [Nn(e)], {
  sizeMarginHeadingVerticalStart: "1.2em",
  sizeMarginHeadingVerticalEnd: "0.5em"
}), An = () => ({
  prefixCls: String,
  value: String,
  maxlength: Number,
  autoSize: {
    type: [Boolean, Object]
  },
  onSave: Function,
  onCancel: Function,
  onEnd: Function,
  onChange: Function,
  originContent: String,
  direction: String,
  component: String
}), Dn = X({
  compatConfig: {
    MODE: 3
  },
  name: "Editable",
  inheritAttrs: !1,
  props: An(),
  // emits: ['save', 'cancel', 'end', 'change'],
  setup(e, t) {
    let {
      emit: n,
      slots: i,
      attrs: o
    } = t;
    const {
      prefixCls: r
    } = At(e), l = pt({
      current: e.value || "",
      lastKeyCode: void 0,
      inComposition: !1,
      cancelFlag: !1
    });
    ie(() => e.value, (x) => {
      l.current = x;
    });
    const a = Z();
    Pe(() => {
      var x;
      if (a.value) {
        const u = (x = a.value) === null || x === void 0 ? void 0 : x.resizableTextArea, $ = u == null ? void 0 : u.textArea;
        $.focus();
        const {
          length: C
        } = $.value;
        $.setSelectionRange(C, C);
      }
    });
    function m(x) {
      a.value = x;
    }
    function d(x) {
      let {
        target: {
          value: u
        }
      } = x;
      l.current = u.replace(/[\r\n]/g, ""), n("change", l.current);
    }
    function p() {
      l.inComposition = !0;
    }
    function g() {
      l.inComposition = !1;
    }
    function y(x) {
      const {
        keyCode: u
      } = x;
      u === he.ENTER && x.preventDefault(), !l.inComposition && (l.lastKeyCode = u);
    }
    function S(x) {
      const {
        keyCode: u,
        ctrlKey: $,
        altKey: C,
        metaKey: _,
        shiftKey: B
      } = x;
      l.lastKeyCode === u && !l.inComposition && !$ && !C && !_ && !B && (u === he.ENTER ? (w(), n("end")) : u === he.ESC && (l.current = e.originContent, n("cancel")));
    }
    function T() {
      w();
    }
    function w() {
      n("save", l.current.trim());
    }
    const [O, z] = Pt(r);
    return () => {
      const x = Ie({
        [`${r.value}`]: !0,
        [`${r.value}-edit-content`]: !0,
        [`${r.value}-rtl`]: e.direction === "rtl",
        [e.component ? `${r.value}-${e.component}` : ""]: !0
      }, o.class, z.value);
      return O(s("div", j(j({}, o), {}, {
        class: x
      }), [s(Zt, {
        ref: m,
        maxlength: e.maxlength,
        value: l.current,
        onChange: d,
        onKeydown: y,
        onKeyup: S,
        onCompositionstart: p,
        onCompositionend: g,
        onBlur: T,
        rows: 1,
        autoSize: e.autoSize === void 0 || e.autoSize
      }, null), i.enterIcon ? i.enterIcon({
        className: `${e.prefixCls}-edit-content-confirm`
      }) : s(Xe, {
        class: `${e.prefixCls}-edit-content-confirm`
      }, null)]));
    };
  }
}), Ln = 3, Mn = 8;
let M;
const Le = {
  padding: 0,
  margin: 0,
  display: "inline",
  lineHeight: "inherit"
};
function Rn(e) {
  return Array.prototype.slice.apply(e).map((n) => `${n}: ${e.getPropertyValue(n)};`).join("");
}
function It(e, t) {
  e.setAttribute("aria-hidden", "true");
  const n = window.getComputedStyle(t), i = Rn(n);
  e.setAttribute("style", i), e.style.position = "fixed", e.style.left = "0", e.style.height = "auto", e.style.minHeight = "auto", e.style.maxHeight = "auto", e.style.paddingTop = "0", e.style.paddingBottom = "0", e.style.borderTopWidth = "0", e.style.borderBottomWidth = "0", e.style.top = "-999999px", e.style.zIndex = "-1000", e.style.textOverflow = "clip", e.style.whiteSpace = "normal", e.style.webkitLineClamp = "none";
}
function Hn(e) {
  const t = document.createElement("div");
  It(t, e), t.appendChild(document.createTextNode("text")), document.body.appendChild(t);
  const n = t.getBoundingClientRect().height;
  return document.body.removeChild(t), n;
}
const Gn = (e, t, n, i, o) => {
  M || (M = document.createElement("div"), M.setAttribute("aria-hidden", "true"), document.body.appendChild(M));
  const {
    rows: r,
    suffix: l = ""
  } = t, a = Hn(e), m = Math.round(a * r * 100) / 100;
  It(M, e);
  const d = Dt({
    render() {
      return s("div", {
        style: Le
      }, [s("span", {
        style: Le
      }, [n, l]), s("span", {
        style: Le
      }, [i])]);
    }
  });
  d.mount(M);
  function p() {
    return Math.round(M.getBoundingClientRect().height * 100) / 100 - 0.1 <= m;
  }
  if (p())
    return d.unmount(), {
      content: n,
      text: M.innerHTML,
      ellipsis: !1
    };
  const g = Array.prototype.slice.apply(M.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter((u) => {
    let {
      nodeType: $,
      data: C
    } = u;
    return $ !== Mn && C !== "";
  }), y = Array.prototype.slice.apply(M.childNodes[0].childNodes[1].cloneNode(!0).childNodes);
  d.unmount();
  const S = [];
  M.innerHTML = "";
  const T = document.createElement("span");
  M.appendChild(T);
  const w = document.createTextNode(o + l);
  T.appendChild(w), y.forEach((u) => {
    M.appendChild(u);
  });
  function O(u) {
    T.insertBefore(u, w);
  }
  function z(u, $) {
    let C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, _ = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : $.length, B = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    const A = Math.floor((C + _) / 2), J = $.slice(0, A);
    if (u.textContent = J, C >= _ - 1)
      for (let G = _; G >= C; G -= 1) {
        const U = $.slice(0, G);
        if (u.textContent = U, p() || !U)
          return G === $.length ? {
            finished: !1,
            vNode: $
          } : {
            finished: !0,
            vNode: U
          };
      }
    return p() ? z(u, $, A, _, A) : z(u, $, C, A, B);
  }
  function x(u) {
    if (u.nodeType === Ln) {
      const C = u.textContent || "", _ = document.createTextNode(C);
      return O(_), z(_, C);
    }
    return {
      finished: !1,
      vNode: null
    };
  }
  return g.some((u) => {
    const {
      finished: $,
      vNode: C
    } = x(u);
    return C && S.push(C), $;
  }), {
    content: S,
    text: M.innerHTML,
    ellipsis: !0
  };
};
var Wn = function(e, t) {
  var n = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, i = Object.getOwnPropertySymbols(e); o < i.length; o++)
      t.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (n[i[o]] = e[i[o]]);
  return n;
};
const Fn = () => ({
  prefixCls: String,
  direction: String,
  // Form Internal use
  component: String
}), D = X({
  name: "ATypography",
  inheritAttrs: !1,
  props: Fn(),
  setup(e, t) {
    let {
      slots: n,
      attrs: i
    } = t;
    const {
      prefixCls: o,
      direction: r
    } = oe("typography", e), [l, a] = Pt(o);
    return () => {
      var m;
      const d = f(f({}, e), i), {
        prefixCls: p,
        direction: g,
        component: y = "article"
      } = d, S = Wn(d, ["prefixCls", "direction", "component"]);
      return l(s(y, j(j({}, S), {}, {
        class: Ie(o.value, {
          [`${o.value}-rtl`]: r.value === "rtl"
        }, i.class, a.value)
      }), {
        default: () => [(m = n.default) === null || m === void 0 ? void 0 : m.call(n)]
      }));
    };
  }
}), Kn = () => {
  const e = document.getSelection();
  if (!e.rangeCount)
    return function() {
    };
  let t = document.activeElement;
  const n = [];
  for (let i = 0; i < e.rangeCount; i++)
    n.push(e.getRangeAt(i));
  switch (t.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      t.blur();
      break;
    default:
      t = null;
      break;
  }
  return e.removeAllRanges(), function() {
    e.type === "Caret" && e.removeAllRanges(), e.rangeCount || n.forEach(function(i) {
      e.addRange(i);
    }), t && t.focus();
  };
}, ot = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, Xn = "Copy to clipboard: #{key}, Enter";
function Vn(e) {
  const t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return e.replace(/#{\s*key\s*}/g, t);
}
function Un(e, t) {
  let n, i, o, r, l, a = !1;
  t || (t = {});
  const m = t.debug || !1;
  try {
    if (i = Kn(), o = document.createRange(), r = document.getSelection(), l = document.createElement("span"), l.textContent = e, l.style.all = "unset", l.style.position = "fixed", l.style.top = 0, l.style.clip = "rect(0, 0, 0, 0)", l.style.whiteSpace = "pre", l.style.webkitUserSelect = "text", l.style.MozUserSelect = "text", l.style.msUserSelect = "text", l.style.userSelect = "text", l.addEventListener("copy", function(p) {
      if (p.stopPropagation(), t.format)
        if (p.preventDefault(), typeof p.clipboardData > "u") {
          m && console.warn("unable to use e.clipboardData"), m && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          const g = ot[t.format] || ot.default;
          window.clipboardData.setData(g, e);
        } else
          p.clipboardData.clearData(), p.clipboardData.setData(t.format, e);
      t.onCopy && (p.preventDefault(), t.onCopy(p.clipboardData));
    }), document.body.appendChild(l), o.selectNodeContents(l), r.addRange(o), !document.execCommand("copy"))
      throw new Error("copy command was unsuccessful");
    a = !0;
  } catch (d) {
    m && console.error("unable to copy using execCommand: ", d), m && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), a = !0;
    } catch (p) {
      m && console.error("unable to copy using clipboardData: ", p), m && console.error("falling back to prompt"), n = Vn("message" in t ? t.message : Xn), window.prompt(n, e);
    }
  } finally {
    r && (typeof r.removeRange == "function" ? r.removeRange(o) : r.removeAllRanges()), l && document.body.removeChild(l), i();
  }
  return a;
}
var qn = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" } }] }, name: "edit", theme: "outlined" };
function at(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, i = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), i.forEach(function(o) {
      Yn(e, o, n[o]);
    });
  }
  return e;
}
function Yn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ve = function(t, n) {
  var i = at({}, t, n.attrs);
  return s(Ke, at({}, i, {
    icon: qn
  }), null);
};
Ve.displayName = "EditOutlined";
Ve.inheritAttrs = !1;
var Zn = function(e, t) {
  var n = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, i = Object.getOwnPropertySymbols(e); o < i.length; o++)
      t.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (n[i[o]] = e[i[o]]);
  return n;
};
const Qn = Ot("webkitLineClamp"), Jn = Ot("textOverflow"), lt = "...", Se = () => ({
  editable: {
    type: [Boolean, Object],
    default: void 0
  },
  copyable: {
    type: [Boolean, Object],
    default: void 0
  },
  prefixCls: String,
  component: String,
  type: String,
  disabled: {
    type: Boolean,
    default: void 0
  },
  ellipsis: {
    type: [Boolean, Object],
    default: void 0
  },
  code: {
    type: Boolean,
    default: void 0
  },
  mark: {
    type: Boolean,
    default: void 0
  },
  underline: {
    type: Boolean,
    default: void 0
  },
  delete: {
    type: Boolean,
    default: void 0
  },
  strong: {
    type: Boolean,
    default: void 0
  },
  keyboard: {
    type: Boolean,
    default: void 0
  },
  content: String,
  "onUpdate:content": Function
}), xe = X({
  compatConfig: {
    MODE: 3
  },
  name: "TypographyBase",
  inheritAttrs: !1,
  props: Se(),
  // emits: ['update:content'],
  setup(e, t) {
    let {
      slots: n,
      attrs: i,
      emit: o
    } = t;
    const {
      prefixCls: r,
      direction: l
    } = oe("typography", e), a = pt({
      copied: !1,
      ellipsisText: "",
      ellipsisContent: null,
      isEllipsis: !1,
      expanded: !1,
      clientRendered: !1,
      //locale
      expandStr: "",
      copyStr: "",
      copiedStr: "",
      editStr: "",
      copyId: void 0,
      rafId: void 0,
      prevProps: void 0,
      originContent: ""
    }), m = Z(), d = Z(), p = N(() => {
      const c = e.ellipsis;
      return c ? f({
        rows: 1,
        expandable: !1
      }, typeof c == "object" ? c : null) : {};
    });
    Pe(() => {
      a.clientRendered = !0, A();
    }), Lt(() => {
      clearTimeout(a.copyId), Ne.cancel(a.rafId);
    }), ie([() => p.value.rows, () => e.content], () => {
      ye(() => {
        _();
      });
    }, {
      flush: "post",
      deep: !0
    }), ut(() => {
      e.content === void 0 && (be(!e.editable, "Typography", "When `editable` is enabled, please use `content` instead of children"), be(!e.ellipsis, "Typography", "When `ellipsis` is enabled, please use `content` instead of children"));
    });
    function g() {
      var c;
      return e.ellipsis || e.editable ? e.content : (c = Ae(m.value)) === null || c === void 0 ? void 0 : c.innerText;
    }
    function y(c) {
      const {
        onExpand: v
      } = p.value;
      a.expanded = !0, v == null || v(c);
    }
    function S(c) {
      c.preventDefault(), a.originContent = e.content, C(!0);
    }
    function T(c) {
      w(c), C(!1);
    }
    function w(c) {
      const {
        onChange: v
      } = x.value;
      c !== e.content && (o("update:content", c), v == null || v(c));
    }
    function O() {
      var c, v;
      (v = (c = x.value).onCancel) === null || v === void 0 || v.call(c), C(!1);
    }
    function z(c) {
      c.preventDefault(), c.stopPropagation();
      const {
        copyable: v
      } = e, h = f({}, typeof v == "object" ? v : null);
      h.text === void 0 && (h.text = g()), Un(h.text || ""), a.copied = !0, ye(() => {
        h.onCopy && h.onCopy(c), a.copyId = setTimeout(() => {
          a.copied = !1;
        }, 3e3);
      });
    }
    const x = N(() => {
      const c = e.editable;
      return c ? f({}, typeof c == "object" ? c : null) : {
        editing: !1
      };
    }), [u, $] = Qt(!1, {
      value: N(() => x.value.editing)
    });
    function C(c) {
      const {
        onStart: v
      } = x.value;
      c && v && v(), $(c);
    }
    ie(u, (c) => {
      var v;
      c || (v = d.value) === null || v === void 0 || v.focus();
    }, {
      flush: "post"
    });
    function _(c) {
      if (c) {
        const {
          width: v,
          height: h
        } = c;
        if (!v || !h)
          return;
      }
      Ne.cancel(a.rafId), a.rafId = Ne(() => {
        A();
      });
    }
    const B = N(() => {
      const {
        rows: c,
        expandable: v,
        suffix: h,
        onEllipsis: E,
        tooltip: I
      } = p.value;
      return h || I || e.editable || e.copyable || v || E ? !1 : c === 1 ? Jn : Qn;
    }), A = () => {
      const {
        ellipsisText: c,
        isEllipsis: v
      } = a, {
        rows: h,
        suffix: E,
        onEllipsis: I
      } = p.value;
      if (!h || h < 0 || !Ae(m.value) || a.expanded || e.content === void 0 || B.value)
        return;
      const {
        content: L,
        text: Y,
        ellipsis: F
      } = Gn(Ae(m.value), {
        rows: h,
        suffix: E
      }, e.content, P(!0), lt);
      (c !== Y || a.isEllipsis !== F) && (a.ellipsisText = Y, a.ellipsisContent = L, a.isEllipsis = F, v !== F && I && I(F));
    };
    function J(c, v) {
      let {
        mark: h,
        code: E,
        underline: I,
        delete: L,
        strong: Y,
        keyboard: F
      } = c, Q = v;
      function K(ae, R) {
        if (!ae)
          return;
        const ee = /* @__PURE__ */ function() {
          return Q;
        }();
        Q = s(R, null, {
          default: () => [ee]
        });
      }
      return K(Y, "strong"), K(I, "u"), K(L, "del"), K(E, "code"), K(h, "mark"), K(F, "kbd"), Q;
    }
    function G(c) {
      const {
        expandable: v,
        symbol: h
      } = p.value;
      if (!v || !c && (a.expanded || !a.isEllipsis))
        return null;
      const E = (n.ellipsisSymbol ? n.ellipsisSymbol() : h) || a.expandStr;
      return s("a", {
        key: "expand",
        class: `${r.value}-expand`,
        onClick: y,
        "aria-label": a.expandStr
      }, [E]);
    }
    function U() {
      if (!e.editable)
        return;
      const {
        tooltip: c,
        triggerType: v = ["icon"]
      } = e.editable, h = n.editableIcon ? n.editableIcon() : s(Ve, {
        role: "button"
      }, null), E = n.editableTooltip ? n.editableTooltip() : a.editStr, I = typeof E == "string" ? E : "";
      return v.indexOf("icon") !== -1 ? s(De, {
        key: "edit",
        title: c === !1 ? "" : E
      }, {
        default: () => [s(nt, {
          ref: d,
          class: `${r.value}-edit`,
          onClick: S,
          "aria-label": I
        }, {
          default: () => [h]
        })]
      }) : null;
    }
    function q() {
      if (!e.copyable)
        return;
      const {
        tooltip: c
      } = e.copyable, v = a.copied ? a.copiedStr : a.copyStr, h = n.copyableTooltip ? n.copyableTooltip({
        copied: a.copied
      }) : v, E = typeof h == "string" ? h : "", I = a.copied ? s(en, null, null) : s(rn, null, null), L = n.copyableIcon ? n.copyableIcon({
        copied: !!a.copied
      }) : I;
      return s(De, {
        key: "copy",
        title: c === !1 ? "" : h
      }, {
        default: () => [s(nt, {
          class: [`${r.value}-copy`, {
            [`${r.value}-copy-success`]: a.copied
          }],
          onClick: z,
          "aria-label": E
        }, {
          default: () => [L]
        })]
      });
    }
    function b() {
      const {
        class: c,
        style: v
      } = i, {
        maxlength: h,
        autoSize: E,
        onEnd: I
      } = x.value;
      return s(Dn, {
        class: c,
        style: v,
        prefixCls: r.value,
        value: e.content,
        originContent: a.originContent,
        maxlength: h,
        autoSize: E,
        onSave: T,
        onChange: w,
        onCancel: O,
        onEnd: I,
        direction: l.value,
        component: e.component
      }, {
        enterIcon: n.editableEnterIcon
      });
    }
    function P(c) {
      return [G(c), U(), q()].filter((v) => v);
    }
    return () => {
      var c;
      const {
        triggerType: v = ["icon"]
      } = x.value, h = e.ellipsis || e.editable ? e.content !== void 0 ? e.content : (c = n.default) === null || c === void 0 ? void 0 : c.call(n) : n.default ? n.default() : e.content;
      return u.value ? b() : s(Jt, {
        componentName: "Text",
        children: (E) => {
          const I = f(f({}, e), i), {
            type: L,
            disabled: Y,
            content: F,
            class: Q,
            style: K
          } = I, ae = Zn(I, ["type", "disabled", "content", "class", "style"]), {
            rows: R,
            suffix: ee,
            tooltip: te
          } = p.value, {
            edit: le,
            copy: Te,
            copied: je,
            expand: ge
          } = E;
          a.editStr = le, a.copyStr = Te, a.copiedStr = je, a.expandStr = ge;
          const me = fe(ae, ["prefixCls", "editable", "copyable", "ellipsis", "mark", "code", "delete", "underline", "strong", "keyboard", "onUpdate:content"]), Ee = B.value, jt = R === 1 && Ee, qe = R && R > 1 && Ee;
          let re = h, Bt;
          if (R && a.isEllipsis && !a.expanded && !Ee) {
            const {
              title: Ye
            } = ae;
            let se = Ye || "";
            !Ye && (typeof h == "string" || typeof h == "number") && (se = String(h)), se = se == null ? void 0 : se.slice(String(a.ellipsisContent || "").length), re = s(_e, null, [Mt(a.ellipsisContent), s("span", {
              title: se,
              "aria-hidden": "true"
            }, [lt]), ee]);
          } else
            re = s(_e, null, [h, ee]);
          re = J(e, re);
          const kt = te && R && a.isEllipsis && !a.expanded && !Ee, Nt = n.ellipsisTooltip ? n.ellipsisTooltip() : te;
          return s(xt, {
            onResize: _,
            disabled: !R
          }, {
            default: () => [s(D, j({
              ref: m,
              class: [{
                [`${r.value}-${L}`]: L,
                [`${r.value}-disabled`]: Y,
                [`${r.value}-ellipsis`]: R,
                [`${r.value}-single-line`]: R === 1 && !a.isEllipsis,
                [`${r.value}-ellipsis-single-line`]: jt,
                [`${r.value}-ellipsis-multiple-line`]: qe
              }, Q],
              style: f(f({}, K), {
                WebkitLineClamp: qe ? R : void 0
              }),
              "aria-label": Bt,
              direction: l.value,
              onClick: v.indexOf("text") !== -1 ? S : () => {
              }
            }, me), {
              default: () => [kt ? s(De, {
                title: te === !0 ? h : Nt
              }, {
                default: () => [s("span", null, [re])]
              }) : re, P()]
            })]
          });
        }
      }, null);
    };
  }
});
var ei = function(e, t) {
  var n = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, i = Object.getOwnPropertySymbols(e); o < i.length; o++)
      t.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (n[i[o]] = e[i[o]]);
  return n;
};
const ti = () => fe(f(f({}, Se()), {
  ellipsis: {
    type: Boolean,
    default: void 0
  }
}), ["component"]), $e = (e, t) => {
  let {
    slots: n,
    attrs: i
  } = t;
  const o = f(f({}, e), i), {
    ellipsis: r,
    rel: l
  } = o, a = ei(o, ["ellipsis", "rel"]);
  be(typeof r != "object", "Typography.Link", "`ellipsis` only supports boolean value.");
  const m = f(f({}, a), {
    rel: l === void 0 && a.target === "_blank" ? "noopener noreferrer" : l,
    ellipsis: !!r,
    component: "a"
  });
  return delete m.navigate, s(xe, m, n);
};
$e.displayName = "ATypographyLink";
$e.inheritAttrs = !1;
$e.props = ti();
const ni = () => fe(Se(), ["component"]), Ce = (e, t) => {
  let {
    slots: n,
    attrs: i
  } = t;
  const o = f(f(f({}, e), {
    component: "div"
  }), i);
  return s(xe, o, n);
};
Ce.displayName = "ATypographyParagraph";
Ce.inheritAttrs = !1;
Ce.props = ni();
const ii = () => f(f({}, fe(Se(), ["component"])), {
  ellipsis: {
    type: [Boolean, Object],
    default: void 0
  }
}), we = (e, t) => {
  let {
    slots: n,
    attrs: i
  } = t;
  const {
    ellipsis: o
  } = e;
  be(typeof o != "object" || !o || !("expandable" in o) && !("rows" in o), "Typography.Text", "`ellipsis` do not support `expandable` or `rows` props.");
  const r = f(f(f({}, e), {
    ellipsis: o && typeof o == "object" ? fe(o, ["expandable", "rows"]) : o,
    component: "span"
  }), i);
  return s(xe, r, n);
};
we.displayName = "ATypographyText";
we.inheritAttrs = !1;
we.props = ii();
var oi = function(e, t) {
  var n = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, i = Object.getOwnPropertySymbols(e); o < i.length; o++)
      t.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (n[i[o]] = e[i[o]]);
  return n;
};
const ai = tn(1, 2, 3, 4, 5), li = () => f(f({}, fe(Se(), ["component", "strong"])), {
  level: Number
}), Oe = (e, t) => {
  let {
    slots: n,
    attrs: i
  } = t;
  const {
    level: o = 1
  } = e, r = oi(e, ["level"]);
  let l;
  ai.includes(o) ? l = `h${o}` : (be(!1, "Typography", "Title only accept `1 | 2 | 3 | 4 | 5` as `level` value."), l = "h1");
  const a = f(f(f({}, r), {
    component: l
  }), i);
  return s(xe, a, n);
};
Oe.displayName = "ATypographyTitle";
Oe.inheritAttrs = !1;
Oe.props = li();
D.Text = we;
D.Title = Oe;
D.Paragraph = Ce;
D.Link = $e;
D.Base = xe;
D.install = function(e) {
  return e.component(D.name, D), e.component(D.Text.displayName, we), e.component(D.Title.displayName, Oe), e.component(D.Paragraph.displayName, Ce), e.component(D.Link.displayName, $e), e;
};
var ri = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z" } }] }, name: "bell", theme: "outlined" };
function rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, i = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), i.forEach(function(o) {
      si(e, o, n[o]);
    });
  }
  return e;
}
function si(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ue = function(t, n) {
  var i = rt({}, t, n.attrs);
  return s(Ke, rt({}, i, {
    icon: ri
  }), null);
};
Ue.displayName = "BellOutlined";
Ue.inheritAttrs = !1;
const Me = [
  {
    key: "1",
    name: "通知",
    list: [
      {
        id: "000000001",
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
        title: "你收到了 14 份新周报",
        description: "",
        datetime: "2017-08-09",
        type: "1"
      },
      {
        id: "000000002",
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
        title: "你推荐的 曲妮妮 已通过第三轮面试",
        description: "",
        datetime: "2017-08-08",
        type: "1"
      },
      {
        id: "000000003",
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",
        title: "这种模板可以区分多种通知类型",
        description: "",
        datetime: "2017-08-07",
        // read: true,
        type: "1"
      },
      {
        id: "000000004",
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
        title: "左侧图标用于区分不同的类型",
        description: "",
        datetime: "2017-08-07",
        type: "1"
      },
      {
        id: "000000005",
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
        title: "标题可以设置自动显示省略号，本例中标题行数已设为1行，如果内容超过1行将自动截断并支持tooltip显示完整标题。",
        description: "",
        datetime: "2017-08-07",
        type: "1"
      },
      {
        id: "000000006",
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
        title: "左侧图标用于区分不同的类型",
        description: "",
        datetime: "2017-08-07",
        type: "1"
      },
      {
        id: "000000007",
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
        title: "左侧图标用于区分不同的类型",
        description: "",
        datetime: "2017-08-07",
        type: "1"
      },
      {
        id: "000000008",
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
        title: "左侧图标用于区分不同的类型",
        description: "",
        datetime: "2017-08-07",
        type: "1"
      },
      {
        id: "000000009",
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
        title: "左侧图标用于区分不同的类型",
        description: "",
        datetime: "2017-08-07",
        type: "1"
      },
      {
        id: "000000010",
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
        title: "左侧图标用于区分不同的类型",
        description: "",
        datetime: "2017-08-07",
        type: "1"
      }
    ]
  },
  {
    key: "2",
    name: "消息",
    list: [
      {
        id: "000000006",
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
        title: "曲丽丽 评论了你",
        description: "描述信息描述信息描述信息",
        datetime: "2017-08-07",
        type: "2",
        clickClose: !0
      },
      {
        id: "000000007",
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
        title: "朱偏右 回复了你",
        description: "这种模板用于提醒谁与你发生了互动",
        datetime: "2017-08-07",
        type: "2",
        clickClose: !0
      },
      {
        id: "000000008",
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
        title: "标题",
        description: "请将鼠标移动到此处，以便测试超长的消息在此处将如何处理。本例中设置的描述最大行数为2，超过2行的描述内容将被省略并且可以通过tooltip查看完整内容",
        datetime: "2017-08-07",
        type: "2",
        clickClose: !0
      }
    ]
  },
  {
    key: "3",
    name: "待办",
    list: [
      {
        id: "000000009",
        avatar: "",
        title: "任务名称",
        description: "任务需要在 2017-01-12 20:00 前启动",
        datetime: "",
        extra: "未开始",
        color: "",
        type: "3"
      },
      {
        id: "000000010",
        avatar: "",
        title: "第三方紧急代码变更",
        description: "冠霖 需在 2017-01-07 前完成代码变更任务",
        datetime: "",
        extra: "马上到期",
        color: "red",
        type: "3"
      },
      {
        id: "000000011",
        avatar: "",
        title: "信息安全考试",
        description: "指派竹尔于 2017-01-09 前完成更新并发布",
        datetime: "",
        extra: "已耗时 8 天",
        color: "gold",
        type: "3"
      },
      {
        id: "000000012",
        avatar: "",
        title: "ABCD 版本发布",
        description: "指派竹尔于 2017-01-09 前完成更新并发布",
        datetime: "",
        extra: "进行中",
        color: "blue",
        type: "3"
      }
    ]
  }
], ci = { class: "title" }, di = {
  key: 0,
  class: "extra"
}, ui = { key: 1 }, pi = {
  key: 0,
  class: "description"
}, fi = { class: "datetime" }, gi = /* @__PURE__ */ X({
  __name: "NoticeList",
  props: {
    list: {
      type: Array,
      default: () => []
    },
    pageSize: {
      type: [Boolean, Number],
      default: 5
    },
    currentPage: {
      type: Number,
      default: 1
    },
    titleRows: {
      type: Number,
      default: 1
    },
    descRows: {
      type: Number,
      default: 2
    },
    onTitleClick: {
      type: Function
    }
  },
  emits: ["update:currentPage"],
  setup(e, { emit: t }) {
    const n = e, i = t, { prefixCls: o } = Tt("header-notify-list"), r = Z(n.currentPage || 1), l = N(() => {
      const { pageSize: d, list: p } = n;
      if (d === !1)
        return [];
      let g = et(d) ? d : 5;
      return p.slice(g * (k(r) - 1), g * k(r));
    });
    ie(
      () => n.currentPage,
      (d) => {
        r.value = d;
      }
    );
    const a = N(() => {
      const { list: d, pageSize: p } = n, g = et(p) ? p : Number(p) && 5;
      return g > 0 && d && d.length > g ? {
        total: d.length,
        pageSize: g,
        current: k(r),
        onChange(y) {
          r.value = y, i("update:currentPage", y);
        }
      } : !1;
    });
    function m(d) {
      n.onTitleClick && n.onTitleClick(d);
    }
    return (d, p) => (H(), de(k(V), {
      class: ft(k(o)),
      bordered: "",
      pagination: a.value
    }, {
      default: W(() => [
        (H(!0), ne(_e, null, gt(l.value, (g) => (H(), de(k(V).Item, {
          key: g.id,
          class: "list-item"
        }, {
          default: W(() => [
            s(k(V).Item.Meta, null, {
              title: W(() => [
                Be("div", ci, [
                  s(k(D).Paragraph, {
                    onClick: (y) => m(g),
                    delete: !!g.titleDelete,
                    ellipsis: e.titleRows && e.titleRows > 0 ? { rows: e.titleRows, tooltip: !!g.title } : !1,
                    content: g.title
                  }, null, 8, ["onClick", "delete", "ellipsis", "content"]),
                  g.extra ? (H(), ne("div", di, [
                    s(k(nn), {
                      class: "tag",
                      color: g.color
                    }, {
                      default: W(() => [
                        mt(ve(g.extra), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ])) : Re("", !0)
                ])
              ]),
              avatar: W(() => [
                g.avatar ? (H(), de(k(pe), {
                  key: 0,
                  class: "avatar",
                  src: g.avatar
                }, null, 8, ["src"])) : (H(), ne("span", ui, ve(g.avatar), 1))
              ]),
              description: W(() => [
                Be("div", null, [
                  g.description ? (H(), ne("div", pi, [
                    s(k(D).Paragraph, {
                      ellipsis: e.descRows && e.descRows > 0 ? { rows: e.descRows, tooltip: !!g.description } : !1,
                      content: g.description
                    }, null, 8, ["ellipsis", "content"])
                  ])) : Re("", !0),
                  Be("div", fi, ve(g.datetime), 1)
                ])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1024))), 128))
      ]),
      _: 1
    }, 8, ["class", "pagination"]));
  }
}), st = /* @__PURE__ */ on(gi, [["__scopeId", "data-v-1e85323d"]]), mi = { key: 0 }, Si = /* @__PURE__ */ X({
  __name: "index",
  setup(e) {
    const { prefixCls: t } = Tt("header-notify"), { createMessage: n } = ln(), i = Z(Me), o = {}, r = N(() => {
      let a = 0;
      for (let m = 0; m < Me.length; m++)
        a += Me[m].list.length;
      return a;
    });
    function l(a) {
      n.success("你点击了通知，ID=" + a.id), a.titleDelete = !a.titleDelete;
    }
    return (a, m) => (H(), ne("div", {
      class: ft(k(t))
    }, [
      s(k(Ct), {
        title: "",
        trigger: "click",
        overlayClassName: `${k(t)}__overlay`
      }, {
        content: W(() => [
          s(k(tt), null, {
            default: W(() => [
              (H(!0), ne(_e, null, gt(i.value, (d) => (H(), de(k(tt).TabPane, {
                key: d.key
              }, {
                tab: W(() => [
                  mt(ve(d.name) + " ", 1),
                  d.list.length !== 0 ? (H(), ne("span", mi, "(" + ve(d.list.length) + ")", 1)) : Re("", !0)
                ]),
                default: W(() => [
                  d.key === "1" ? (H(), de(st, {
                    key: 0,
                    list: d.list,
                    onTitleClick: l
                  }, null, 8, ["list"])) : (H(), de(st, {
                    key: 1,
                    list: d.list
                  }, null, 8, ["list"]))
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 1
          })
        ]),
        default: W(() => [
          s(k(an), {
            count: r.value,
            dot: "",
            numberStyle: o
          }, {
            default: W(() => [
              s(k(Ue))
            ]),
            _: 1
          }, 8, ["count"])
        ]),
        _: 1
      }, 8, ["overlayClassName"])
    ], 2));
  }
});
export {
  Si as default
};
