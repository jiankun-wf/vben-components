import { a$ as S, bi as _, bj as p, bk as T, bl as m, e as d, bm as w, bn as A, ba as O, au as C, ax as U, ay as D, aw as E } from "./components.js";
import { unref as b, toRaw as v } from "vue";
function g(t) {
  R(t)(b(t.currentRoute).fullPath, !0);
}
const P = (t) => {
  const { params: e, path: a, query: i } = t;
  return {
    params: e || {},
    path: a,
    query: i || {}
  };
}, y = S.multiTabsSetting.cache, M = _({
  id: "app-multiple-tab",
  state: () => ({
    // Tabs that need to be cached
    cacheTabList: /* @__PURE__ */ new Set(),
    // multiple tab list
    tabList: y ? p.getLocal(T) || [] : [],
    // Index of the last moved tab
    lastDragEndIndex: 0
  }),
  getters: {
    getTabList(t) {
      return t.tabList;
    },
    getCachedTabList(t) {
      return Array.from(t.cacheTabList);
    },
    getLastDragEndIndex(t) {
      return t.lastDragEndIndex;
    }
  },
  actions: {
    /**
     * Update the cache according to the currently opened tabs
     */
    async updateCacheTab() {
      var e;
      const t = /* @__PURE__ */ new Set();
      for (const a of this.tabList) {
        const i = m(a);
        if (!!((e = i.meta) != null && e.ignoreKeepAlive))
          continue;
        const c = i.name;
        t.add(c);
      }
      this.cacheTabList = t;
    },
    /**
     * Refresh tabs
     */
    async refreshPage(t) {
      const { currentRoute: e } = t, i = b(e).name, n = this.getCachedTabList.find((s) => s === i);
      n && this.cacheTabList.delete(n), await k(t)();
    },
    clearCacheTabs() {
      this.cacheTabList = /* @__PURE__ */ new Set();
    },
    resetState() {
      this.tabList = [], this.clearCacheTabs();
    },
    goToPage(t) {
      const e = R(t), a = this.tabList.length, { path: i } = b(t.currentRoute);
      let n = d.BASE_HOME;
      if (a > 0) {
        const c = this.tabList[a - 1], s = c.fullPath || c.path;
        s && (n = s);
      }
      i !== n && e(n, !0);
    },
    async addTab(t) {
      const { path: e, name: a, fullPath: i, params: n, query: c, meta: s } = m(t);
      if (e === d.ERROR_PAGE || e === d.BASE_LOGIN || !a || [w.name, A.name].includes(
        a
      ))
        return;
      let h = -1;
      if (this.tabList.some((r, l) => (h = l, decodeURIComponent(r.fullPath || r.path) === decodeURIComponent(i || e)))) {
        const r = v(this.tabList)[h];
        if (!r)
          return;
        r.params = n || r.params, r.query = c || r.query, r.fullPath = i || r.fullPath, this.tabList.splice(h, 1, r);
      } else {
        const r = (s == null ? void 0 : s.dynamicLevel) ?? -1;
        if (r > 0) {
          const l = (s == null ? void 0 : s.realPath) ?? "";
          if (this.tabList.filter((u) => {
            var f;
            return ((f = u.meta) == null ? void 0 : f.realPath) ?? l === "";
          }).length >= r) {
            const u = this.tabList.findIndex(
              (f) => f.meta.realPath === l
            );
            u !== -1 && this.tabList.splice(u, 1);
          }
        }
        this.tabList.push(t);
      }
      this.updateCacheTab(), y && p.setLocal(T, this.tabList);
    },
    async closeTab(t, e) {
      const a = (o) => {
        const { fullPath: r, meta: { affix: l } = {} } = o;
        if (l)
          return;
        const u = this.tabList.findIndex(
          (f) => f.fullPath === r
        );
        u !== -1 && this.tabList.splice(u, 1);
      }, { currentRoute: i, replace: n } = e, { path: c } = b(i);
      if (c !== t.path) {
        a(t), this.updateCacheTab();
        return;
      }
      let s = {};
      const h = this.tabList.findIndex((o) => o.path === c);
      if (h === 0)
        if (this.tabList.length === 1)
          s = O().getUserInfo.homePath || d.BASE_HOME;
        else {
          const o = this.tabList[h + 1];
          s = P(o);
        }
      else {
        const o = this.tabList[h - 1];
        s = P(o);
      }
      a(i.value), await n(s);
    },
    // Close according to key
    async closeTabByKey(t, e) {
      const a = this.tabList.findIndex(
        (i) => (i.fullPath || i.path) === t
      );
      if (a !== -1) {
        await this.closeTab(this.tabList[a], e);
        const { currentRoute: i, replace: n } = e;
        if (this.tabList.findIndex((s) => s.fullPath === i.value.fullPath) === -1) {
          let s;
          if (a > 0 ? s = a - 1 : a < this.tabList.length - 1 ? s = a + 1 : s = -1, s >= 0) {
            const h = this.tabList[a - 1], o = P(h);
            await n(o);
          }
        }
      }
    },
    // Sort the tabs
    async sortTabs(t, e) {
      const a = this.tabList[t];
      this.tabList.splice(t, 1), this.tabList.splice(e, 0, a), this.lastDragEndIndex = this.lastDragEndIndex + 1;
    },
    // Close the tab on the right and jump
    async closeLeftTabs(t, e) {
      var i;
      const a = this.tabList.findIndex((n) => n.path === t.path);
      if (a > 0) {
        const n = this.tabList.slice(0, a), c = [];
        for (const s of n)
          (((i = s == null ? void 0 : s.meta) == null ? void 0 : i.affix) ?? !1) || c.push(s.fullPath);
        this.bulkCloseTabs(c);
      }
      this.updateCacheTab(), g(e);
    },
    // Close the tab on the left and jump
    async closeRightTabs(t, e) {
      var i;
      const a = this.tabList.findIndex(
        (n) => n.fullPath === t.fullPath
      );
      if (a >= 0 && a < this.tabList.length - 1) {
        const n = this.tabList.slice(a + 1, this.tabList.length), c = [];
        for (const s of n)
          (((i = s == null ? void 0 : s.meta) == null ? void 0 : i.affix) ?? !1) || c.push(s.fullPath);
        this.bulkCloseTabs(c);
      }
      this.updateCacheTab(), g(e);
    },
    async closeAllTab(t) {
      this.tabList = this.tabList.filter((e) => {
        var a;
        return ((a = e == null ? void 0 : e.meta) == null ? void 0 : a.affix) ?? !1;
      }), this.clearCacheTabs(), this.goToPage(t);
    },
    /**
     * Close other tabs
     */
    async closeOtherTabs(t, e) {
      var n;
      const a = this.tabList.map((c) => c.fullPath), i = [];
      for (const c of a)
        if (c !== t.fullPath) {
          const s = this.tabList.find((o) => o.fullPath === c);
          if (!s)
            continue;
          (((n = s == null ? void 0 : s.meta) == null ? void 0 : n.affix) ?? !1) || i.push(s.fullPath);
        }
      this.bulkCloseTabs(i), this.updateCacheTab(), p.setLocal(T, this.tabList, !0), g(e);
    },
    /**
     * Close tabs in bulk
     */
    async bulkCloseTabs(t) {
      this.tabList = this.tabList.filter(
        (e) => !t.includes(e.fullPath)
      );
    },
    /**
     * Set tab's title
     */
    async setTabTitle(t, e) {
      const a = this.getTabList.find((i) => i === e);
      a && (a.meta.title = t, await this.updateCacheTab());
    },
    /**
     * replace tab's path
     * **/
    async updateTabPath(t, e) {
      const a = this.getTabList.find((i) => i === e);
      a && (a.fullPath = t, a.path = t, await this.updateCacheTab());
    }
  }
});
function x(t) {
  console.error(t);
}
function R(t) {
  const { push: e, replace: a, currentRoute: i } = t || C();
  function n(c = d.BASE_HOME, s = !1) {
    if (!c)
      return;
    let h = b(c);
    if (h[0] === "/" && (h = h.slice(1)), U(h))
      return D(h);
    const o = s === !0 || s === 0, r = s === 1;
    if (o)
      a(c).catch(x);
    else if (r) {
      const l = M(), u = b(i).name, f = l.getTabList.findIndex((L) => L.name === u), I = l.getTabList.length;
      e(c).then(() => {
        if (l.getTabList.length > I) {
          const L = l.getTabList.length - 1;
          f > -1 && L > f && l.sortTabs(L, f + 1);
        }
      }).catch(x);
    } else
      e(c).catch(x);
  }
  return n;
}
const k = (t) => {
  const { replace: e, currentRoute: a } = t || C(), { query: i, params: n = {}, name: c, fullPath: s } = b(a.value);
  function h() {
    return new Promise((o) => {
      if (c === E) {
        o(!1);
        return;
      }
      c && Object.keys(n).length > 0 ? (n._origin_params = JSON.stringify(n ?? {}), n._redirect_type = "name", n.path = String(c)) : (n._redirect_type = "path", n.path = s), e({ name: E, params: n, query: i }).then(() => o(!0));
    });
  }
  return h;
};
export {
  k as a,
  M as b,
  R as u
};
