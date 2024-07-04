import { ref as te, computed as T, unref as p, defineComponent as ve, openBlock as z, createElementBlock as he, toDisplayString as De, reactive as yt, Fragment as bt, withDirectives as ke, createVNode as C, vShow as Se, withKeys as wt, withCtx as P, createTextVNode as oe, resolveComponent as xt, normalizeClass as Le, createElementVNode as Z, createBlock as Ve, createCommentVNode as Ce } from "vue";
import { d as kt, A as Fe } from "./AppDarkModeToggle.js";
import { bB as St, bC as Oe, bi as Lt, bD as ze, bE as Vt, bF as Je, bG as Ue, bH as Ct, bI as Ft, bJ as Mt, bK as Rt, bL as Me, bM as Re, ba as It, bN as Pt, B as Ie, bO as Zt, bP as Et, bQ as Wt, f as Qe, aW as At } from "./components.js";
const Gt = "data:image/svg+xml,%3csvg%20id='a622e68e-7a65-46e9-94a9-d455de519afc'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='971.44'%20height='502'%20viewBox='0%200%20971.44%20502'%3e%3cdefs%3e%3clinearGradient%20id='341b0e5e-a21f-44db-b85f-76180f33f0d3'%20x1='599.5'%20y1='668.05'%20x2='599.5'%20y2='199'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='gray'%20stop-opacity='0.25'/%3e%3cstop%20offset='0.54'%20stop-color='gray'%20stop-opacity='0.12'/%3e%3cstop%20offset='1'%20stop-color='gray'%20stop-opacity='0.1'/%3e%3c/linearGradient%3e%3clinearGradient%20id='9c19d1ba-0c1d-4cca-8c15-e6f3831a5e67'%20x1='485.72'%20y1='258.88'%20x2='485.72'%20y2='71.12'%20xlink:href='%23341b0e5e-a21f-44db-b85f-76180f33f0d3'/%3e%3clinearGradient%20id='fe76f7c7-2126-4e48-920d-21143a22d340'%20x1='132'%20y1='515'%20x2='303'%20y2='515'%20xlink:href='%23341b0e5e-a21f-44db-b85f-76180f33f0d3'/%3e%3clinearGradient%20id='2cf89a04-5a05-413b-983a-d2bc296cbb5e'%20x1='933'%20y1='568.28'%20x2='1031'%20y2='568.28'%20xlink:href='%23341b0e5e-a21f-44db-b85f-76180f33f0d3'/%3e%3c/defs%3e%3ctitle%3eresponsive%3c/title%3e%3cg%20opacity='0.7'%3e%3cpath%20d='M852.69,199H346.31A16.37,16.37,0,0,0,330,215.42V563.94a16.37,16.37,0,0,0,16.31,16.42H520.47v60.16h-7.94a8.3,8.3,0,0,0-8.27,8.33v12.07h16.21v7.14H678.53v-7.14h16.21V648.85a8.3,8.3,0,0,0-8.27-8.33H679V640h-.51V580.36H852.69A16.37,16.37,0,0,0,869,563.94V215.42A16.37,16.37,0,0,0,852.69,199Z'%20transform='translate(-114.28%20-199)'%20fill='url(%23341b0e5e-a21f-44db-b85f-76180f33f0d3)'/%3e%3c/g%3e%3crect%20x='407.72'%20y='371'%20width='156'%20height='92'%20fill='%23bdbdbd'/%3e%3cg%20opacity='0.1'%3e%3cpath%20d='M525.07,579H675.24c1.81-7.87,3.26-13,3.26-13h-157S523.11,571.11,525.07,579Z'%20transform='translate(-114.28%20-199)'/%3e%3c/g%3e%3cpath%20d='M235.82,3h499.8a16.1,16.1,0,0,1,16.1,16.1V327a0,0,0,0,1,0,0h-532a0,0,0,0,1,0,0V19.1A16.1,16.1,0,0,1,235.82,3Z'%20fill='%23535461'/%3e%3cpath%20d='M849.9,576H350.1A16.1,16.1,0,0,1,334,559.9V526H866v33.9A16.1,16.1,0,0,1,849.9,576Z'%20transform='translate(-114.28%20-199)'%20fill='%23bdbdbd'/%3e%3ccircle%20cx='485.72'%20cy='352'%20r='9'%20fill='%23535461'/%3e%3cpath%20d='M399.89,436H571.55a8.17,8.17,0,0,1,8.17,8.17V456a0,0,0,0,1,0,0h-188a0,0,0,0,1,0,0V444.17A8.17,8.17,0,0,1,399.89,436Z'%20fill='%23bdbdbd'/%3e%3cg%20opacity='0.5'%3e%3crect%20x='320.72'%20y='71.12'%20width='330'%20height='187.76'%20rx='4.5'%20ry='4.5'%20fill='url(%239c19d1ba-0c1d-4cca-8c15-e6f3831a5e67)'/%3e%3c/g%3e%3crect%20x='324.95'%20y='72.5'%20width='321.54'%20height='183.96'%20rx='4.5'%20ry='4.5'%20fill='%23fff'/%3e%3cg%20opacity='0.5'%3e%3crect%20x='414.52'%20y='98.91'%20width='35.44'%20height='31.9'%20rx='4.5'%20ry='4.5'%20fill='%230960bd'/%3e%3c/g%3e%3crect%20x='460.59'%20y='98.91'%20width='95.69'%20height='3.54'%20rx='1.77'%20ry='1.77'%20fill='%23e0e0e0'/%3e%3crect%20x='460.59'%20y='109.55'%20width='79.54'%20height='3.54'%20rx='1.77'%20ry='1.77'%20fill='%23e0e0e0'/%3e%3cg%20opacity='0.5'%3e%3crect%20x='414.52'%20y='148.53'%20width='35.44'%20height='31.9'%20rx='4.5'%20ry='4.5'%20fill='%230960bd'/%3e%3c/g%3e%3crect%20x='460.59'%20y='148.53'%20width='95.69'%20height='3.54'%20rx='1.77'%20ry='1.77'%20fill='%23e0e0e0'/%3e%3crect%20x='460.59'%20y='159.16'%20width='95.69'%20height='3.54'%20rx='1.77'%20ry='1.77'%20fill='%23e0e0e0'/%3e%3cg%20opacity='0.5'%3e%3crect%20x='414.52'%20y='198.15'%20width='35.44'%20height='31.9'%20rx='4.5'%20ry='4.5'%20fill='%230960bd'/%3e%3c/g%3e%3crect%20x='460.59'%20y='198.15'%20width='95.69'%20height='3.54'%20rx='1.77'%20ry='1.77'%20fill='%23e0e0e0'/%3e%3crect%20x='460.59'%20y='208.78'%20width='96.33'%20height='3.54'%20rx='1.59'%20ry='1.59'%20fill='%23e0e0e0'/%3e%3cline%20x1='485.72'%20y1='42'%20x2='485.72'%20y2='20'%20stroke='%230960bd'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3cline%20x1='485.72'%20y1='79'%20x2='485.72'%20y2='50.13'%20stroke='%230960bd'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3ccircle%20cx='485.72'%20cy='79'%20r='4'%20fill='%230960bd'/%3e%3ccircle%20cx='485.72'%20cy='46'%20r='4'%20fill='none'%20stroke='%23fff'%20stroke-miterlimit='10'/%3e%3cline%20x1='485.72'%20y1='42'%20x2='485.72'%20y2='20'%20stroke='%230960bd'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3cline%20x1='485.72'%20y1='79'%20x2='485.72'%20y2='50.13'%20stroke='%230960bd'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3ccircle%20cx='485.72'%20cy='79'%20r='4'%20fill='%230960bd'/%3e%3ccircle%20cx='485.72'%20cy='46'%20r='4'%20fill='none'%20stroke='%23fff'%20stroke-miterlimit='10'/%3e%3cline%20x1='485.72'%20y1='279'%20x2='485.72'%20y2='310'%20stroke='%230960bd'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3cline%20x1='485.72'%20y1='251'%20x2='485.72'%20y2='279.87'%20stroke='%230960bd'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3ccircle%20cx='485.72'%20cy='251'%20r='4'%20fill='%230960bd'/%3e%3cline%20x1='305.72'%20y1='168.5'%20x2='274.22'%20y2='168.5'%20stroke='%230960bd'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3cline%20x1='333.22'%20y1='168.5'%20x2='304.35'%20y2='168.5'%20stroke='%230960bd'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3ccircle%20cx='333.22'%20cy='168.5'%20r='4'%20fill='%230960bd'/%3e%3cg%20opacity='0.1'%3e%3crect%20x='408.22'%20y='435.5'%20width='156'%20height='3'/%3e%3c/g%3e%3cg%20opacity='0.7'%3e%3cpath%20d='M293.48,566.06H221.08l1-8.14c20.46-18.37,33.69-67.31,33.69-67.31a6.78,6.78,0,0,0-.87.18c-12,2.42-20.54,7.35-26.51,13.28l2.54-21.66c37.8-8.14,52.79-58.14,52.79-58.14-24.12,5.35-39.16,13.63-48.5,21.49l3.72-31.82c25.56,8.77,52-37.82,52-37.82l-1-.21.5-.32-.76.27c-28.25-6.09-43.35,10.06-48.25,16.77l.37-3.12q-1.12,3-2.18,5.88h0l0,.08q-3,8.13-5.49,16.06l0,0h0q-2.17,6.77-4.06,13.4l0-.06s-1.17-28.46-31.18-35.95c0,0,3.15,62.07,26.93,51.91h0c-2.2,9-4,17.66-5.56,26.07h0q-1.49,8.21-2.6,16l-.14.16.14-.12-.06.41v0h0q-1,7.07-1.7,13.78c.46-8.62-1.11-33.52-30.45-56.92,0,0-39,68.54,27.5,82,.15.13.3.26.44.38l-.1-.31.6.13.27-3.52a369.39,369.39,0,0,0,.23,44.1h0c.07,1,.14,2,.21,2.95H141.37c-27.94,57.79,15.52,89.46,15.52,89.46h120C323.49,596.66,293.48,566.06,293.48,566.06Zm-78-65.68h0v0Z'%20transform='translate(-114.28%20-199)'%20fill='url(%23fe76f7c7-2126-4e48-920d-21143a22d340)'/%3e%3c/g%3e%3cpath%20d='M217,588s-19-83,23-190'%20transform='translate(-114.28%20-199)'%20fill='none'%20stroke='%23535461'%20stroke-miterlimit='10'%20stroke-width='3'%20opacity='0.6'/%3e%3cpath%20d='M143,563H290s29,37-16,92H158S116,617,143,563Z'%20transform='translate(-114.28%20-199)'%20fill='%230960bd'/%3e%3cpath%20d='M237.89,403.5s14.61-26,49.61-18c0,0-28.93,49.26-55,33.13Z'%20transform='translate(-114.28%20-199)'%20fill='%234db6ac'/%3e%3cpath%20d='M228.63,431.09S227.5,404.5,198.5,397.5c0,0,3,58,26,48.5Z'%20transform='translate(-114.28%20-199)'%20fill='%234db6ac'/%3e%3cpath%20d='M219.15,470.36s5.35-27.86,61.35-39.86c0,0-17.86,57.62-63.93,55.31Z'%20transform='translate(-114.28%20-199)'%20fill='%234db6ac'/%3e%3cpath%20d='M214.61,501.63s5.89-29.13-29.11-56.13c0,0-38,64.67,27.48,76.83Z'%20transform='translate(-114.28%20-199)'%20fill='%234db6ac'/%3e%3cpath%20d='M213.56,541.67S209.5,500.5,253.5,492.5c0,0-16.07,57.49-40,67.74Z'%20transform='translate(-114.28%20-199)'%20fill='%234db6ac'/%3e%3cpath%20d='M233,419s38-29,54-34'%20transform='translate(-114.28%20-199)'%20fill='none'%20stroke='%23535461'%20stroke-miterlimit='10'%20opacity='0.3'/%3e%3cpath%20d='M216.5,485.5s46-49,64-55'%20transform='translate(-114.28%20-199)'%20fill='none'%20stroke='%23535461'%20stroke-miterlimit='10'%20opacity='0.3'/%3e%3cpath%20d='M198.5,397.5s28,38,26,48'%20transform='translate(-114.28%20-199)'%20fill='none'%20stroke='%23535461'%20stroke-miterlimit='10'%20opacity='0.3'/%3e%3cpath%20d='M185.5,445.5s15,68,27,77'%20transform='translate(-114.28%20-199)'%20fill='none'%20stroke='%23535461'%20stroke-miterlimit='10'%20opacity='0.3'/%3e%3cpath%20d='M213.5,560.5s24-66,40-68'%20transform='translate(-114.28%20-199)'%20fill='none'%20stroke='%23535461'%20stroke-miterlimit='10'%20opacity='0.3'/%3e%3cg%20opacity='0.1'%3e%3cpath%20d='M290,563H143c-.33.67-.65,1.34-1,2H285s28.29,36.11-14.4,90H274C319,600,290,563,290,563Z'%20transform='translate(-114.28%20-199)'/%3e%3c/g%3e%3crect%20y='455.6'%20width='971.44'%20height='32.93'%20fill='%23e0e0e0'/%3e%3crect%20x='41.16'%20y='488.53'%20width='889.11'%20height='13.47'%20fill='%23e0e0e0'/%3e%3crect%20x='41.16'%20y='488.53'%20width='889.11'%20height='4.49'%20opacity='0.1'/%3e%3cline%20x1='690.22'%20y1='168.5'%20x2='696.22'%20y2='168.5'%20stroke='%230960bd'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3cline%20x1='637.22'%20y1='168.5'%20x2='682.1'%20y2='168.5'%20stroke='%230960bd'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3ccircle%20cx='637.22'%20cy='168.5'%20r='4'%20fill='%230960bd'/%3e%3ccircle%20cx='686.22'%20cy='168.5'%20r='4'%20fill='none'%20stroke='%23fff'%20stroke-miterlimit='10'/%3e%3cg%20opacity='0.7'%3e%3cpath%20d='M1027,643.88l.1-.15q.31-.48.61-1l.11-.19q.29-.49.55-1l.09-.17c.2-.39.39-.78.56-1.19h0a23.79,23.79,0,0,0,.94-2.51l.1-.33c.09-.31.18-.62.26-.93l.1-.44q.1-.42.18-.85c0-.16.06-.32.09-.48s.09-.56.13-.85,0-.33.06-.49.06-.61.08-.92c0-.14,0-.29,0-.43,0-.45,0-.91,0-1.36V548h-13.85V507.52h-17V548H988.39V489.86h-17V548H965V481.55h-17V548H933V630.6c0,13.48,11.21,24.4,25,24.4H1006a25.19,25.19,0,0,0,20.24-10.06l0,0Q1026.61,644.41,1027,643.88Z'%20transform='translate(-114.28%20-199)'%20fill='url(%232cf89a04-5a05-413b-983a-d2bc296cbb5e)'/%3e%3c/g%3e%3crect%20x='835.72'%20y='321'%20width='16'%20height='100'%20fill='%23535461'/%3e%3crect%20x='835.72'%20y='288'%20width='16'%20height='33'%20fill='%233ad29f'/%3e%3crect%20x='857.72'%20y='329'%20width='16'%20height='100'%20fill='%23535461'/%3e%3crect%20x='857.72'%20y='296'%20width='16'%20height='33'%20fill='%234d8af0'/%3e%3crect%20x='884.72'%20y='346'%20width='16'%20height='100'%20fill='%23535461'/%3e%3crect%20x='884.72'%20y='313'%20width='16'%20height='33'%20fill='%23f55f44'/%3e%3cpath%20d='M821.72,352h92a0,0,0,0,1,0,0v79.5a23.5,23.5,0,0,1-23.5,23.5h-45a23.5,23.5,0,0,1-23.5-23.5V352A0,0,0,0,1,821.72,352Z'%20fill='%230960bd'/%3e%3cg%20opacity='0.1'%3e%3cpath%20d='M936,551v4h88v79.5a23.39,23.39,0,0,1-5,14.49,23.45,23.45,0,0,0,9-18.49V551Z'%20transform='translate(-114.28%20-199)'/%3e%3c/g%3e%3c/svg%3e", K = {
  ZH_CN: "zh_CN",
  EN_US: "en"
}, Ke = {
  showPicker: !0,
  // Locale
  locale: K.ZH_CN,
  // Default locale
  fallback: K.ZH_CN,
  // available Locales
  availableLocales: [K.ZH_CN, K.EN_US]
}, qe = St(), Tt = qe.get(Oe) || Ke, Ht = Lt({
  id: "app-locale",
  state: () => ({
    localInfo: Tt
  }),
  getters: {
    getShowPicker(e) {
      var t;
      return !!((t = e.localInfo) != null && t.showPicker);
    },
    getLocale(e) {
      var t;
      return ((t = e.localInfo) == null ? void 0 : t.locale) ?? "zh_CN";
    }
  },
  actions: {
    /**
     * Set up multilingual information and cache
     * @param info multilingual info
     */
    setLocaleInfo(e) {
      this.localInfo = { ...this.localInfo, ...e }, qe.set(Oe, this.localInfo);
    },
    /**
     * Initialize multilingual information and load the existing configuration from the local cache
     */
    initLocale() {
      this.setLocaleInfo({
        ...Ke,
        ...this.localInfo
      });
    }
  }
});
var Y = /* @__PURE__ */ ((e) => (e[e.LOGIN = 0] = "LOGIN", e[e.REGISTER = 1] = "REGISTER", e[e.RESET_PASSWORD = 2] = "RESET_PASSWORD", e[e.MOBILE = 3] = "MOBILE", e[e.QR_CODE = 4] = "QR_CODE", e))(Y || {});
const ue = te(
  0
  /* LOGIN */
);
function $e() {
  function e(r) {
    ue.value = r;
  }
  const t = T(() => ue.value);
  function n() {
    e(
      0
      /* LOGIN */
    );
  }
  return { setLoginState: e, getLoginState: t, handleBackLogin: n };
}
function Nt(e) {
  const t = T(() => {
    const r = p(e);
    return (r == null ? void 0 : r.validate) ?? ((i) => Promise.resolve());
  });
  async function n() {
    const r = p(e);
    return r ? await r.validate() : void 0;
  }
  return { validate: t, validForm: n };
}
function jt(e) {
  const t = T(() => q("输入您的账号")), n = T(() => q("输入您的密码")), r = T(() => q("输入短信验证码")), i = T(() => q("输入您的手机号码")), a = async (c, s) => s ? Promise.resolve() : Promise.reject("勾选后才能注册"), o = (c) => async (s, d) => d ? d !== c ? Promise.reject("两次输入密码不一致") : Promise.resolve() : Promise.reject("请输入密码");
  return { getFormRules: T(
    () => {
      const c = p(t), s = p(n), d = p(r), l = p(i), f = {
        sms: d,
        mobile: l
      };
      switch (p(ue)) {
        case 1:
          return {
            account: c,
            password: s,
            confirmPassword: [
              {
                validator: o(e == null ? void 0 : e.password),
                trigger: "change"
              }
            ],
            policy: [{ validator: a, trigger: "change" }],
            ...f
          };
        case 2:
          return {
            account: c,
            ...f
          };
        case 3:
          return f;
        default:
          return {
            account: c,
            password: s
          };
      }
    }
  ) };
}
function q(e) {
  return [
    {
      required: !0,
      message: e,
      trigger: "change"
    }
  ];
}
const Yt = { class: "mb-3 text-2xl font-bold text-center xl:text-3xl enter-x xl:text-left" }, Xt = /* @__PURE__ */ ve({
  __name: "LoginFormTitle",
  setup(e) {
    const { getLoginState: t } = $e(), n = T(() => ({
      [Y.RESET_PASSWORD]: "重置密码",
      [Y.LOGIN]: "登录",
      [Y.REGISTER]: "注册",
      [Y.MOBILE]: "手机登录",
      [Y.QR_CODE]: "二维码登录"
    })[p(t)]);
    return (r, i) => (z(), he("h2", Yt, De(n.value), 1));
  }
});
var et = { exports: {} };
(function(e, t) {
  (function(n, r, i) {
    e.exports = r(ze(), Vt());
  })(Je, function(n) {
    return n.mode.ECB = function() {
      var r = n.lib.BlockCipherMode.extend();
      return r.Encryptor = r.extend({
        processBlock: function(i, a) {
          this._cipher.encryptBlock(i, a);
        }
      }), r.Decryptor = r.extend({
        processBlock: function(i, a) {
          this._cipher.decryptBlock(i, a);
        }
      }), r;
    }(), n.mode.ECB;
  });
})(et);
var _t = et.exports;
const Bt = /* @__PURE__ */ Ue(_t);
var tt = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r(ze());
  })(Je, function(n) {
    return n.enc.Hex;
  });
})(tt);
var Dt = tt.exports;
const Ot = /* @__PURE__ */ Ue(Dt), Pe = (e) => Ct.encrypt(Ft.parse(e), Ot.parse(Mt.key), {
  mode: Bt,
  padding: Rt
}).toString();
var de = function() {
  return de = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, de.apply(this, arguments);
};
function W(e, t, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
    function u(d) {
      try {
        s(r.next(d));
      } catch (l) {
        o(l);
      }
    }
    function c(d) {
      try {
        s(r.throw(d));
      } catch (l) {
        o(l);
      }
    }
    function s(d) {
      d.done ? a(d.value) : i(d.value).then(u, c);
    }
    s((r = r.apply(e, t || [])).next());
  });
}
function A(e, t) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o;
  return o = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function u(s) {
    return function(d) {
      return c([s, d]);
    };
  }
  function c(s) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, s[0] && (n = 0)), n; )
      try {
        if (r = 1, i && (a = s[0] & 2 ? i.return : s[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, s[1])).done)
          return a;
        switch (i = 0, a && (s = [s[0] & 2, a.value]), s[0]) {
          case 0:
          case 1:
            a = s;
            break;
          case 4:
            return n.label++, { value: s[1], done: !1 };
          case 5:
            n.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              n = 0;
              continue;
            }
            if (s[0] === 3 && (!a || s[1] > a[0] && s[1] < a[3])) {
              n.label = s[1];
              break;
            }
            if (s[0] === 6 && n.label < a[1]) {
              n.label = a[1], a = s;
              break;
            }
            if (a && n.label < a[2]) {
              n.label = a[2], n.ops.push(s);
              break;
            }
            a[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        s = t.call(e, n);
      } catch (d) {
        s = [6, d], i = 0;
      } finally {
        r = a = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}
function nt(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var rt = "4.4.1";
function O(e, t) {
  return new Promise(function(n) {
    return setTimeout(n, e, t);
  });
}
function re() {
  return O(0);
}
function zt(e, t) {
  t === void 0 && (t = 1 / 0);
  var n = window.requestIdleCallback;
  return n ? new Promise(function(r) {
    return n.call(window, function() {
      return r();
    }, { timeout: t });
  }) : O(Math.min(e, t));
}
function at(e) {
  return !!e && typeof e.then == "function";
}
function Ze(e, t) {
  try {
    var n = e();
    at(n) ? n.then(function(r) {
      return t(!0, r);
    }, function(r) {
      return t(!1, r);
    }) : t(!0, n);
  } catch (r) {
    t(!1, r);
  }
}
function Ee(e, t, n) {
  return n === void 0 && (n = 16), W(this, void 0, void 0, function() {
    var r, i, a, o;
    return A(this, function(u) {
      switch (u.label) {
        case 0:
          r = Array(e.length), i = Date.now(), a = 0, u.label = 1;
        case 1:
          return a < e.length ? (r[a] = t(e[a], a), o = Date.now(), o >= i + n ? (i = o, [4, O(0)]) : [3, 3]) : [3, 4];
        case 2:
          u.sent(), u.label = 3;
        case 3:
          return ++a, [3, 1];
        case 4:
          return [2, r];
      }
    });
  });
}
function J(e) {
  e.then(void 0, function() {
  });
}
function Jt(e, t) {
  for (var n = 0, r = e.length; n < r; ++n)
    if (e[n] === t)
      return !0;
  return !1;
}
function Ut(e, t) {
  return !Jt(e, t);
}
function pe(e) {
  return parseInt(e);
}
function G(e) {
  return parseFloat(e);
}
function N(e, t) {
  return typeof e == "number" && isNaN(e) ? t : e;
}
function R(e) {
  return e.reduce(function(t, n) {
    return t + (n ? 1 : 0);
  }, 0);
}
function it(e, t) {
  if (t === void 0 && (t = 1), Math.abs(t) >= 1)
    return Math.round(e / t) * t;
  var n = 1 / t;
  return Math.round(e * n) / n;
}
function Qt(e) {
  for (var t, n, r = "Unexpected syntax '".concat(e, "'"), i = /^\s*([a-z-]*)(.*)$/i.exec(e), a = i[1] || void 0, o = {}, u = /([.:#][\w-]+|\[.+?\])/gi, c = function(f, m) {
    o[f] = o[f] || [], o[f].push(m);
  }; ; ) {
    var s = u.exec(i[2]);
    if (!s)
      break;
    var d = s[0];
    switch (d[0]) {
      case ".":
        c("class", d.slice(1));
        break;
      case "#":
        c("id", d.slice(1));
        break;
      case "[": {
        var l = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(d);
        if (l)
          c(l[1], (n = (t = l[4]) !== null && t !== void 0 ? t : l[5]) !== null && n !== void 0 ? n : "");
        else
          throw new Error(r);
        break;
      }
      default:
        throw new Error(r);
    }
  }
  return [a, o];
}
function Kt(e) {
  for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++) {
    var r = e.charCodeAt(n);
    if (r > 127)
      return new TextEncoder().encode(e);
    t[n] = r;
  }
  return t;
}
function j(e, t) {
  var n = e[0] >>> 16, r = e[0] & 65535, i = e[1] >>> 16, a = e[1] & 65535, o = t[0] >>> 16, u = t[0] & 65535, c = t[1] >>> 16, s = t[1] & 65535, d = 0, l = 0, f = 0, m = 0;
  m += a + s, f += m >>> 16, m &= 65535, f += i + c, l += f >>> 16, f &= 65535, l += r + u, d += l >>> 16, l &= 65535, d += n + o, d &= 65535, e[0] = d << 16 | l, e[1] = f << 16 | m;
}
function E(e, t) {
  var n = e[0] >>> 16, r = e[0] & 65535, i = e[1] >>> 16, a = e[1] & 65535, o = t[0] >>> 16, u = t[0] & 65535, c = t[1] >>> 16, s = t[1] & 65535, d = 0, l = 0, f = 0, m = 0;
  m += a * s, f += m >>> 16, m &= 65535, f += i * s, l += f >>> 16, f &= 65535, f += a * c, l += f >>> 16, f &= 65535, l += r * s, d += l >>> 16, l &= 65535, l += i * c, d += l >>> 16, l &= 65535, l += a * u, d += l >>> 16, l &= 65535, d += n * s + r * c + i * u + a * o, d &= 65535, e[0] = d << 16 | l, e[1] = f << 16 | m;
}
function _(e, t) {
  var n = e[0];
  t %= 64, t === 32 ? (e[0] = e[1], e[1] = n) : t < 32 ? (e[0] = n << t | e[1] >>> 32 - t, e[1] = e[1] << t | n >>> 32 - t) : (t -= 32, e[0] = e[1] << t | n >>> 32 - t, e[1] = n << t | e[1] >>> 32 - t);
}
function I(e, t) {
  t %= 64, t !== 0 && (t < 32 ? (e[0] = e[1] >>> 32 - t, e[1] = e[1] << t) : (e[0] = e[1] << t - 32, e[1] = 0));
}
function w(e, t) {
  e[0] ^= t[0], e[1] ^= t[1];
}
var qt = [4283543511, 3981806797], $t = [3301882366, 444984403];
function We(e) {
  var t = [0, e[0] >>> 1];
  w(e, t), E(e, qt), t[1] = e[0] >>> 1, w(e, t), E(e, $t), t[1] = e[0] >>> 1, w(e, t);
}
var $ = [2277735313, 289559509], ee = [1291169091, 658871167], Ae = [0, 5], en = [0, 1390208809], tn = [0, 944331445];
function nn(e, t) {
  var n = Kt(e);
  t = t || 0;
  var r = [0, n.length], i = r[1] % 16, a = r[1] - i, o = [0, t], u = [0, t], c = [0, 0], s = [0, 0], d;
  for (d = 0; d < a; d = d + 16)
    c[0] = n[d + 4] | n[d + 5] << 8 | n[d + 6] << 16 | n[d + 7] << 24, c[1] = n[d] | n[d + 1] << 8 | n[d + 2] << 16 | n[d + 3] << 24, s[0] = n[d + 12] | n[d + 13] << 8 | n[d + 14] << 16 | n[d + 15] << 24, s[1] = n[d + 8] | n[d + 9] << 8 | n[d + 10] << 16 | n[d + 11] << 24, E(c, $), _(c, 31), E(c, ee), w(o, c), _(o, 27), j(o, u), E(o, Ae), j(o, en), E(s, ee), _(s, 33), E(s, $), w(u, s), _(u, 31), j(u, o), E(u, Ae), j(u, tn);
  c[0] = 0, c[1] = 0, s[0] = 0, s[1] = 0;
  var l = [0, 0];
  switch (i) {
    case 15:
      l[1] = n[d + 14], I(l, 48), w(s, l);
    case 14:
      l[1] = n[d + 13], I(l, 40), w(s, l);
    case 13:
      l[1] = n[d + 12], I(l, 32), w(s, l);
    case 12:
      l[1] = n[d + 11], I(l, 24), w(s, l);
    case 11:
      l[1] = n[d + 10], I(l, 16), w(s, l);
    case 10:
      l[1] = n[d + 9], I(l, 8), w(s, l);
    case 9:
      l[1] = n[d + 8], w(s, l), E(s, ee), _(s, 33), E(s, $), w(u, s);
    case 8:
      l[1] = n[d + 7], I(l, 56), w(c, l);
    case 7:
      l[1] = n[d + 6], I(l, 48), w(c, l);
    case 6:
      l[1] = n[d + 5], I(l, 40), w(c, l);
    case 5:
      l[1] = n[d + 4], I(l, 32), w(c, l);
    case 4:
      l[1] = n[d + 3], I(l, 24), w(c, l);
    case 3:
      l[1] = n[d + 2], I(l, 16), w(c, l);
    case 2:
      l[1] = n[d + 1], I(l, 8), w(c, l);
    case 1:
      l[1] = n[d], w(c, l), E(c, $), _(c, 31), E(c, ee), w(o, c);
  }
  return w(o, r), w(u, r), j(o, u), j(u, o), We(o), We(u), j(o, u), j(u, o), ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (u[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (u[1] >>> 0).toString(16)).slice(-8);
}
function rn(e) {
  var t;
  return de({ name: e.name, message: e.message, stack: (t = e.stack) === null || t === void 0 ? void 0 : t.split(`
`) }, e);
}
function an(e) {
  return /^function\s.*?\{\s*\[native code]\s*}$/.test(String(e));
}
function on(e) {
  return typeof e != "function";
}
function cn(e, t) {
  var n = new Promise(function(r) {
    var i = Date.now();
    Ze(e.bind(null, t), function() {
      for (var a = [], o = 0; o < arguments.length; o++)
        a[o] = arguments[o];
      var u = Date.now() - i;
      if (!a[0])
        return r(function() {
          return { error: a[1], duration: u };
        });
      var c = a[1];
      if (on(c))
        return r(function() {
          return { value: c, duration: u };
        });
      r(function() {
        return new Promise(function(s) {
          var d = Date.now();
          Ze(c, function() {
            for (var l = [], f = 0; f < arguments.length; f++)
              l[f] = arguments[f];
            var m = u + Date.now() - d;
            if (!l[0])
              return s({ error: l[1], duration: m });
            s({ value: l[1], duration: m });
          });
        });
      });
    });
  });
  return J(n), function() {
    return n.then(function(i) {
      return i();
    });
  };
}
function sn(e, t, n) {
  var r = Object.keys(e).filter(function(a) {
    return Ut(n, a);
  }), i = Ee(r, function(a) {
    return cn(e[a], t);
  });
  return J(i), function() {
    return W(this, void 0, void 0, function() {
      var o, u, c, s, d;
      return A(this, function(l) {
        switch (l.label) {
          case 0:
            return [4, i];
          case 1:
            return o = l.sent(), [4, Ee(o, function(f) {
              var m = f();
              return J(m), m;
            })];
          case 2:
            return u = l.sent(), [
              4,
              Promise.all(u)
              // Keeping the component keys order the same as the source keys order
            ];
          case 3:
            for (c = l.sent(), s = {}, d = 0; d < r.length; ++d)
              s[r[d]] = c[d];
            return [2, s];
        }
      });
    });
  };
}
function ot() {
  var e = window, t = navigator;
  return R([
    "MSCSSMatrix" in e,
    "msSetImmediate" in e,
    "msIndexedDB" in e,
    "msMaxTouchPoints" in t,
    "msPointerEnabled" in t
  ]) >= 4;
}
function ln() {
  var e = window, t = navigator;
  return R(["msWriteProfilerMark" in e, "MSStream" in e, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !ot();
}
function ae() {
  var e = window, t = navigator;
  return R([
    "webkitPersistentStorage" in t,
    "webkitTemporaryStorage" in t,
    t.vendor.indexOf("Google") === 0,
    "webkitResolveLocalFileSystemURL" in e,
    "BatteryManager" in e,
    "webkitMediaStream" in e,
    "webkitSpeechGrammar" in e
  ]) >= 5;
}
function H() {
  var e = window, t = navigator;
  return R([
    "ApplePayError" in e,
    "CSSPrimitiveValue" in e,
    "Counter" in e,
    t.vendor.indexOf("Apple") === 0,
    "getStorageUpdates" in t,
    "WebKitMediaKeys" in e
  ]) >= 4;
}
function ge() {
  var e = window, t = e.HTMLElement, n = e.Document;
  return R([
    "safari" in e,
    !("ongestureend" in e),
    !("TouchEvent" in e),
    !("orientation" in e),
    t && !("autocapitalize" in t.prototype),
    n && "pointerLockElement" in n.prototype
  ]) >= 4;
}
function U() {
  var e = window;
  return an(e.print) ? R([
    // Incorrect in Safari <= 14 (iOS and macOS)
    String(e.browser) === "[object WebPageNamespace]",
    // Incorrect in desktop Safari and iOS Safari <= 15
    "MicrodataExtractor" in e
  ]) >= 1 : !1;
}
function ct() {
  var e, t, n = window;
  return R([
    "buildID" in navigator,
    "MozAppearance" in ((t = (e = document.documentElement) === null || e === void 0 ? void 0 : e.style) !== null && t !== void 0 ? t : {}),
    "onmozfullscreenchange" in n,
    "mozInnerScreenX" in n,
    "CSSMozDocumentRule" in n,
    "CanvasCaptureMediaStream" in n
  ]) >= 4;
}
function un() {
  var e = window;
  return R([
    !("MediaSettingsRange" in e),
    "RTCEncodedAudioFrame" in e,
    "" + e.Intl == "[object Intl]",
    "" + e.Reflect == "[object Reflect]"
  ]) >= 3;
}
function dn() {
  var e = window;
  return R([
    "DOMRectList" in e,
    "RTCPeerConnectionIceEvent" in e,
    "SVGGeometryElement" in e,
    "ontransitioncancel" in e
  ]) >= 3;
}
function Q() {
  var e = window, t = navigator, n = e.CSS, r = e.HTMLButtonElement;
  return R([
    !("getStorageUpdates" in t),
    r && "popover" in r.prototype,
    "CSSCounterStyleRule" in e,
    n.supports("font-size-adjust: ex-height 0.5"),
    n.supports("text-transform: full-width")
  ]) >= 4;
}
function fn() {
  if (navigator.platform === "iPad")
    return !0;
  var e = screen, t = e.width / e.height;
  return R([
    "MediaSource" in window,
    !!Element.prototype.webkitRequestFullscreen,
    // iPhone 4S that runs iOS 9 matches this, but it is not supported
    t > 0.65 && t < 1.53
  ]) >= 2;
}
function mn() {
  var e = document;
  return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null;
}
function vn() {
  var e = document;
  return (e.exitFullscreen || e.msExitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen).call(e);
}
function ye() {
  var e = ae(), t = ct(), n = window, r = navigator, i = "connection";
  return e ? R([
    !("SharedWorker" in n),
    // `typechange` is deprecated, but it's still present on Android (tested on Chrome Mobile 117)
    // Removal proposal https://bugs.chromium.org/p/chromium/issues/detail?id=699892
    // Note: this expression returns true on ChromeOS, so additional detectors are required to avoid false-positives
    r[i] && "ontypechange" in r[i],
    !("sinkId" in new window.Audio())
  ]) >= 2 : t ? R(["onorientationchange" in n, "orientation" in n, /android/i.test(navigator.appVersion)]) >= 2 : !1;
}
function hn() {
  return yn() ? -4 : pn();
}
function pn() {
  var e = window, t = e.OfflineAudioContext || e.webkitOfflineAudioContext;
  if (!t)
    return -2;
  if (gn())
    return -1;
  var n = 4500, r = 5e3, i = new t(1, r, 44100), a = i.createOscillator();
  a.type = "triangle", a.frequency.value = 1e4;
  var o = i.createDynamicsCompressor();
  o.threshold.value = -50, o.knee.value = 40, o.ratio.value = 12, o.attack.value = 0, o.release.value = 0.25, a.connect(o), o.connect(i.destination), a.start(0);
  var u = bn(i), c = u[0], s = u[1], d = c.then(function(l) {
    return wn(l.getChannelData(0).subarray(n));
  }, function(l) {
    if (l.name === "timeout" || l.name === "suspended")
      return -3;
    throw l;
  });
  return J(d), function() {
    return s(), d;
  };
}
function gn() {
  return H() && !ge() && !dn();
}
function yn() {
  return H() && Q() && U();
}
function bn(e) {
  var t = 3, n = 500, r = 500, i = 5e3, a = function() {
  }, o = new Promise(function(u, c) {
    var s = !1, d = 0, l = 0;
    e.oncomplete = function(b) {
      return u(b.renderedBuffer);
    };
    var f = function() {
      setTimeout(function() {
        return c(Ge(
          "timeout"
          /* InnerErrorName.Timeout */
        ));
      }, Math.min(r, l + i - Date.now()));
    }, m = function() {
      try {
        var b = e.startRendering();
        switch (at(b) && J(b), e.state) {
          case "running":
            l = Date.now(), s && f();
            break;
          case "suspended":
            document.hidden || d++, s && d >= t ? c(Ge(
              "suspended"
              /* InnerErrorName.Suspended */
            )) : setTimeout(m, n);
            break;
        }
      } catch (h) {
        c(h);
      }
    };
    m(), a = function() {
      s || (s = !0, l > 0 && f());
    };
  });
  return [o, a];
}
function wn(e) {
  for (var t = 0, n = 0; n < e.length; ++n)
    t += Math.abs(e[n]);
  return t;
}
function Ge(e) {
  var t = new Error(e);
  return t.name = e, t;
}
function st(e, t, n) {
  var r, i, a;
  return n === void 0 && (n = 50), W(this, void 0, void 0, function() {
    var o, u;
    return A(this, function(c) {
      switch (c.label) {
        case 0:
          o = document, c.label = 1;
        case 1:
          return o.body ? [3, 3] : [4, O(n)];
        case 2:
          return c.sent(), [3, 1];
        case 3:
          u = o.createElement("iframe"), c.label = 4;
        case 4:
          return c.trys.push([4, , 10, 11]), [4, new Promise(function(s, d) {
            var l = !1, f = function() {
              l = !0, s();
            }, m = function(x) {
              l = !0, d(x);
            };
            u.onload = f, u.onerror = m;
            var b = u.style;
            b.setProperty("display", "block", "important"), b.position = "absolute", b.top = "0", b.left = "0", b.visibility = "hidden", t && "srcdoc" in u ? u.srcdoc = t : u.src = "about:blank", o.body.appendChild(u);
            var h = function() {
              var x, y;
              l || (((y = (x = u.contentWindow) === null || x === void 0 ? void 0 : x.document) === null || y === void 0 ? void 0 : y.readyState) === "complete" ? f() : setTimeout(h, 10));
            };
            h();
          })];
        case 5:
          c.sent(), c.label = 6;
        case 6:
          return !((i = (r = u.contentWindow) === null || r === void 0 ? void 0 : r.document) === null || i === void 0) && i.body ? [3, 8] : [4, O(n)];
        case 7:
          return c.sent(), [3, 6];
        case 8:
          return [4, e(u, u.contentWindow)];
        case 9:
          return [2, c.sent()];
        case 10:
          return (a = u.parentNode) === null || a === void 0 || a.removeChild(u), [
            7
            /*endfinally*/
          ];
        case 11:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
function xn(e) {
  for (var t = Qt(e), n = t[0], r = t[1], i = document.createElement(n ?? "div"), a = 0, o = Object.keys(r); a < o.length; a++) {
    var u = o[a], c = r[u].join(" ");
    u === "style" ? kn(i.style, c) : i.setAttribute(u, c);
  }
  return i;
}
function kn(e, t) {
  for (var n = 0, r = t.split(";"); n < r.length; n++) {
    var i = r[n], a = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(i);
    if (a) {
      var o = a[1], u = a[2], c = a[4];
      e.setProperty(o, u, c || "");
    }
  }
}
var Sn = "mmMwWLliI0O&1", Ln = "48px", B = ["monospace", "sans-serif", "serif"], Te = [
  // This is android-specific font from "Roboto" family
  "sans-serif-thin",
  "ARNO PRO",
  "Agency FB",
  "Arabic Typesetting",
  "Arial Unicode MS",
  "AvantGarde Bk BT",
  "BankGothic Md BT",
  "Batang",
  "Bitstream Vera Sans Mono",
  "Calibri",
  "Century",
  "Century Gothic",
  "Clarendon",
  "EUROSTILE",
  "Franklin Gothic",
  "Futura Bk BT",
  "Futura Md BT",
  "GOTHAM",
  "Gill Sans",
  "HELV",
  "Haettenschweiler",
  "Helvetica Neue",
  "Humanst521 BT",
  "Leelawadee",
  "Letter Gothic",
  "Levenim MT",
  "Lucida Bright",
  "Lucida Sans",
  "Menlo",
  "MS Mincho",
  "MS Outlook",
  "MS Reference Specialty",
  "MS UI Gothic",
  "MT Extra",
  "MYRIAD PRO",
  "Marlett",
  "Meiryo UI",
  "Microsoft Uighur",
  "Minion Pro",
  "Monotype Corsiva",
  "PMingLiU",
  "Pristina",
  "SCRIPTINA",
  "Segoe UI Light",
  "Serifa",
  "SimHei",
  "Small Fonts",
  "Staccato222 BT",
  "TRAJAN PRO",
  "Univers CE 55 Medium",
  "Vrinda",
  "ZWAdobeF"
];
function Vn() {
  var e = this;
  return st(function(t, n) {
    var r = n.document;
    return W(e, void 0, void 0, function() {
      var i, a, o, u, c, s, d, l, f, m, b, h;
      return A(this, function(x) {
        switch (x.label) {
          case 0:
            return i = r.body, i.style.fontSize = Ln, a = r.createElement("div"), a.style.setProperty("visibility", "hidden", "important"), o = {}, u = {}, c = function(y) {
              var k = r.createElement("span"), L = k.style;
              return L.position = "absolute", L.top = "0", L.left = "0", L.fontFamily = y, k.textContent = Sn, a.appendChild(k), k;
            }, s = function(y, k) {
              return c("'".concat(y, "',").concat(k));
            }, d = function() {
              return B.map(c);
            }, l = function() {
              for (var y = {}, k = function(V) {
                y[V] = B.map(function(X) {
                  return s(V, X);
                });
              }, L = 0, M = Te; L < M.length; L++) {
                var S = M[L];
                k(S);
              }
              return y;
            }, f = function(y) {
              return B.some(function(k, L) {
                return y[L].offsetWidth !== o[k] || y[L].offsetHeight !== u[k];
              });
            }, m = d(), b = l(), i.appendChild(a), [
              4,
              re()
              // get the default width for the three base fonts
            ];
          case 1:
            for (x.sent(), h = 0; h < B.length; h++)
              o[B[h]] = m[h].offsetWidth, u[B[h]] = m[h].offsetHeight;
            return [2, Te.filter(function(y) {
              return f(b[y]);
            })];
        }
      });
    });
  });
}
function Cn() {
  var e = navigator.plugins;
  if (e) {
    for (var t = [], n = 0; n < e.length; ++n) {
      var r = e[n];
      if (r) {
        for (var i = [], a = 0; a < r.length; ++a) {
          var o = r[a];
          i.push({
            type: o.type,
            suffixes: o.suffixes
          });
        }
        t.push({
          name: r.name,
          description: r.description,
          mimeTypes: i
        });
      }
    }
    return t;
  }
}
function Fn() {
  return Mn(An());
}
function Mn(e) {
  return W(this, void 0, void 0, function() {
    var t, n, r, i, a, o, u;
    return A(this, function(c) {
      switch (c.label) {
        case 0:
          return t = !1, i = Rn(), a = i[0], o = i[1], In(a, o) ? [3, 1] : (n = r = "unsupported", [3, 4]);
        case 1:
          return t = Pn(o), e ? (n = r = "skipped", [3, 4]) : [3, 2];
        case 2:
          return [4, Zn(a, o)];
        case 3:
          u = c.sent(), n = u[0], r = u[1], c.label = 4;
        case 4:
          return [2, { winding: t, geometry: n, text: r }];
      }
    });
  });
}
function Rn() {
  var e = document.createElement("canvas");
  return e.width = 1, e.height = 1, [e, e.getContext("2d")];
}
function In(e, t) {
  return !!(t && e.toDataURL);
}
function Pn(e) {
  return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, "evenodd");
}
function Zn(e, t) {
  return W(this, void 0, void 0, function() {
    var n, r, i;
    return A(this, function(a) {
      switch (a.label) {
        case 0:
          return En(e, t), [4, re()];
        case 1:
          return a.sent(), n = ce(e), r = ce(e), n !== r ? [2, [
            "unstable",
            "unstable"
            /* ImageStatus.Unstable */
          ]] : (Wn(e, t), [4, re()]);
        case 2:
          return a.sent(), i = ce(e), [2, [i, n]];
      }
    });
  });
}
function En(e, t) {
  e.width = 240, e.height = 60, t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(100, 1, 62, 20), t.fillStyle = "#069", t.font = '11pt "Times New Roman"';
  var n = "Cwm fjordbank gly ".concat(
    "😃"
    /* 😃 */
  );
  t.fillText(n, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText(n, 4, 45);
}
function Wn(e, t) {
  e.width = 122, e.height = 110, t.globalCompositeOperation = "multiply";
  for (var n = 0, r = [
    ["#f2f", 40, 40],
    ["#2ff", 80, 40],
    ["#ff2", 60, 80]
  ]; n < r.length; n++) {
    var i = r[n], a = i[0], o = i[1], u = i[2];
    t.fillStyle = a, t.beginPath(), t.arc(o, u, 40, 0, Math.PI * 2, !0), t.closePath(), t.fill();
  }
  t.fillStyle = "#f9c", t.arc(60, 60, 60, 0, Math.PI * 2, !0), t.arc(60, 60, 20, 0, Math.PI * 2, !0), t.fill("evenodd");
}
function ce(e) {
  return e.toDataURL();
}
function An() {
  return H() && Q() && U();
}
function Gn() {
  var e = navigator, t = 0, n;
  e.maxTouchPoints !== void 0 ? t = pe(e.maxTouchPoints) : e.msMaxTouchPoints !== void 0 && (t = e.msMaxTouchPoints);
  try {
    document.createEvent("TouchEvent"), n = !0;
  } catch {
    n = !1;
  }
  var r = "ontouchstart" in window;
  return {
    maxTouchPoints: t,
    touchEvent: n,
    touchStart: r
  };
}
function Tn() {
  return navigator.oscpu;
}
function Hn() {
  var e = navigator, t = [], n = e.language || e.userLanguage || e.browserLanguage || e.systemLanguage;
  if (n !== void 0 && t.push([n]), Array.isArray(e.languages))
    ae() && un() || t.push(e.languages);
  else if (typeof e.languages == "string") {
    var r = e.languages;
    r && t.push(r.split(","));
  }
  return t;
}
function Nn() {
  return window.screen.colorDepth;
}
function jn() {
  return N(G(navigator.deviceMemory), void 0);
}
function Yn() {
  if (!(H() && Q() && U()))
    return Xn();
}
function Xn() {
  var e = screen, t = function(r) {
    return N(pe(r), null);
  }, n = [t(e.width), t(e.height)];
  return n.sort().reverse(), n;
}
var _n = 2500, Bn = 10, ne, se;
function Dn() {
  if (se === void 0) {
    var e = function() {
      var t = fe();
      me(t) ? se = setTimeout(e, _n) : (ne = t, se = void 0);
    };
    e();
  }
}
function On() {
  var e = this;
  return Dn(), function() {
    return W(e, void 0, void 0, function() {
      var t;
      return A(this, function(n) {
        switch (n.label) {
          case 0:
            return t = fe(), me(t) ? ne ? [2, nt([], ne, !0)] : mn() ? [4, vn()] : [3, 2] : [3, 2];
          case 1:
            n.sent(), t = fe(), n.label = 2;
          case 2:
            return me(t) || (ne = t), [2, t];
        }
      });
    });
  };
}
function zn() {
  var e = this;
  if (H() && Q() && U())
    return function() {
      return Promise.resolve(void 0);
    };
  var t = On();
  return function() {
    return W(e, void 0, void 0, function() {
      var n, r;
      return A(this, function(i) {
        switch (i.label) {
          case 0:
            return [4, t()];
          case 1:
            return n = i.sent(), r = function(a) {
              return a === null ? null : it(a, Bn);
            }, [2, [r(n[0]), r(n[1]), r(n[2]), r(n[3])]];
        }
      });
    });
  };
}
function fe() {
  var e = screen;
  return [
    N(G(e.availTop), null),
    N(G(e.width) - G(e.availWidth) - N(G(e.availLeft), 0), null),
    N(G(e.height) - G(e.availHeight) - N(G(e.availTop), 0), null),
    N(G(e.availLeft), null)
  ];
}
function me(e) {
  for (var t = 0; t < 4; ++t)
    if (e[t])
      return !1;
  return !0;
}
function Jn() {
  return N(pe(navigator.hardwareConcurrency), void 0);
}
function Un() {
  var e, t = (e = window.Intl) === null || e === void 0 ? void 0 : e.DateTimeFormat;
  if (t) {
    var n = new t().resolvedOptions().timeZone;
    if (n)
      return n;
  }
  var r = -Qn();
  return "UTC".concat(r >= 0 ? "+" : "").concat(r);
}
function Qn() {
  var e = (/* @__PURE__ */ new Date()).getFullYear();
  return Math.max(
    // `getTimezoneOffset` returns a number as a string in some unidentified cases
    G(new Date(e, 0, 1).getTimezoneOffset()),
    G(new Date(e, 6, 1).getTimezoneOffset())
  );
}
function Kn() {
  try {
    return !!window.sessionStorage;
  } catch {
    return !0;
  }
}
function qn() {
  try {
    return !!window.localStorage;
  } catch {
    return !0;
  }
}
function $n() {
  if (!(ot() || ln()))
    try {
      return !!window.indexedDB;
    } catch {
      return !0;
    }
}
function er() {
  return !!window.openDatabase;
}
function tr() {
  return navigator.cpuClass;
}
function nr() {
  var e = navigator.platform;
  return e === "MacIntel" && H() && !ge() ? fn() ? "iPad" : "iPhone" : e;
}
function rr() {
  return navigator.vendor || "";
}
function ar() {
  for (var e = [], t = 0, n = [
    // Blink and some browsers on iOS
    "chrome",
    // Safari on macOS
    "safari",
    // Chrome on iOS (checked in 85 on 13 and 87 on 14)
    "__crWeb",
    "__gCrWeb",
    // Yandex Browser on iOS, macOS and Android (checked in 21.2 on iOS 14, macOS and Android)
    "yandex",
    // Yandex Browser on iOS (checked in 21.2 on 14)
    "__yb",
    "__ybro",
    // Firefox on iOS (checked in 32 on 14)
    "__firefox__",
    // Edge on iOS (checked in 46 on 14)
    "__edgeTrackingPreventionStatistics",
    "webkit",
    // Opera Touch on iOS (checked in 2.6 on 14)
    "oprt",
    // Samsung Internet on Android (checked in 11.1)
    "samsungAr",
    // UC Browser on Android (checked in 12.10 and 13.0)
    "ucweb",
    "UCShellJava",
    // Puffin on Android (checked in 9.0)
    "puffinDevice"
    // UC on iOS and Opera on Android have no specific global variables
    // Edge for Android isn't checked
  ]; t < n.length; t++) {
    var r = n[t], i = window[r];
    i && typeof i == "object" && e.push(r);
  }
  return e.sort();
}
function ir() {
  var e = document;
  try {
    e.cookie = "cookietest=1; SameSite=Strict;";
    var t = e.cookie.indexOf("cookietest=") !== -1;
    return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t;
  } catch {
    return !1;
  }
}
function or() {
  var e = atob;
  return {
    abpIndo: [
      "#Iklan-Melayang",
      "#Kolom-Iklan-728",
      "#SidebarIklan-wrapper",
      '[title="ALIENBOLA" i]',
      e("I0JveC1CYW5uZXItYWRz")
    ],
    abpvn: [".quangcao", "#mobileCatfish", e("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
    adBlockFinland: [
      ".mainostila",
      e("LnNwb25zb3JpdA=="),
      ".ylamainos",
      e("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"),
      e("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")
    ],
    adBlockPersian: [
      "#navbar_notice_50",
      ".kadr",
      'TABLE[width="140px"]',
      "#divAgahi",
      e("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")
    ],
    adBlockWarningRemoval: [
      "#adblock-honeypot",
      ".adblocker-root",
      ".wp_adblock_detect",
      e("LmhlYWRlci1ibG9ja2VkLWFk"),
      e("I2FkX2Jsb2NrZXI=")
    ],
    adGuardAnnoyances: [
      ".hs-sosyal",
      "#cookieconsentdiv",
      'div[class^="app_gdpr"]',
      ".as-oil",
      '[data-cypress="soft-push-notification-modal"]'
    ],
    adGuardBase: [
      ".BetterJsPopOverlay",
      e("I2FkXzMwMFgyNTA="),
      e("I2Jhbm5lcmZsb2F0MjI="),
      e("I2NhbXBhaWduLWJhbm5lcg=="),
      e("I0FkLUNvbnRlbnQ=")
    ],
    adGuardChinese: [
      e("LlppX2FkX2FfSA=="),
      e("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"),
      "#widget-quan",
      e("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"),
      e("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")
    ],
    adGuardFrench: [
      "#pavePub",
      e("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"),
      ".mobile_adhesion",
      ".widgetadv",
      e("LmFkc19iYW4=")
    ],
    adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
    adGuardJapanese: [
      "#kauli_yad_1",
      e("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="),
      e("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="),
      e("LmFkZ29vZ2xl"),
      e("Ll9faXNib29zdFJldHVybkFk")
    ],
    adGuardMobile: [
      e("YW1wLWF1dG8tYWRz"),
      e("LmFtcF9hZA=="),
      'amp-embed[type="24smi"]',
      "#mgid_iframe1",
      e("I2FkX2ludmlld19hcmVh")
    ],
    adGuardRussian: [
      e("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="),
      e("LnJlY2xhbWE="),
      'div[id^="smi2adblock"]',
      e("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"),
      "#psyduckpockeball"
    ],
    adGuardSocial: [
      e("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="),
      e("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="),
      ".etsy-tweet",
      "#inlineShare",
      ".popup-social"
    ],
    adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
    adGuardTrackingProtection: [
      "#qoo-counter",
      e("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="),
      e("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="),
      e("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="),
      "#top100counter"
    ],
    adGuardTurkish: [
      "#backkapat",
      e("I3Jla2xhbWk="),
      e("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="),
      e("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"),
      e("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")
    ],
    bulgarian: [e("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
    easyList: [
      ".yb-floorad",
      e("LndpZGdldF9wb19hZHNfd2lkZ2V0"),
      e("LnRyYWZmaWNqdW5reS1hZA=="),
      ".textad_headline",
      e("LnNwb25zb3JlZC10ZXh0LWxpbmtz")
    ],
    easyListChina: [
      e("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="),
      e("LmZyb250cGFnZUFkdk0="),
      "#taotaole",
      "#aafoot.top_box",
      ".cfa_popup"
    ],
    easyListCookie: [
      ".ezmob-footer",
      ".cc-CookieWarning",
      "[data-cookie-number]",
      e("LmF3LWNvb2tpZS1iYW5uZXI="),
      ".sygnal24-gdpr-modal-wrap"
    ],
    easyListCzechSlovak: [
      "#onlajny-stickers",
      e("I3Jla2xhbW5pLWJveA=="),
      e("LnJla2xhbWEtbWVnYWJvYXJk"),
      ".sklik",
      e("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")
    ],
    easyListDutch: [
      e("I2FkdmVydGVudGll"),
      e("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="),
      ".adstekst",
      e("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="),
      "#semilo-lrectangle"
    ],
    easyListGermany: [
      "#SSpotIMPopSlider",
      e("LnNwb25zb3JsaW5rZ3J1ZW4="),
      e("I3dlcmJ1bmdza3k="),
      e("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"),
      e("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")
    ],
    easyListItaly: [
      e("LmJveF9hZHZfYW5udW5jaQ=="),
      ".sb-box-pubbliredazionale",
      e("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"),
      e("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"),
      e("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")
    ],
    easyListLithuania: [
      e("LnJla2xhbW9zX3RhcnBhcw=="),
      e("LnJla2xhbW9zX251b3JvZG9z"),
      e("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"),
      e("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"),
      e("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")
    ],
    estonian: [e("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
    fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
    fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
    fanboyEnhancedTrackers: [
      ".open.pushModal",
      "#issuem-leaky-paywall-articles-zero-remaining-nag",
      "#sovrn_container",
      'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',
      ".BlockNag__Card"
    ],
    fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
    frellwitSwedish: [
      e("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="),
      e("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="),
      "article.category-samarbete",
      e("ZGl2LmhvbGlkQWRz"),
      "ul.adsmodern"
    ],
    greekAdBlock: [
      e("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"),
      e("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="),
      e("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"),
      "DIV.agores300",
      "TABLE.advright"
    ],
    hungarian: [
      "#cemp_doboz",
      ".optimonk-iframe-container",
      e("LmFkX19tYWlu"),
      e("W2NsYXNzKj0iR29vZ2xlQWRzIl0="),
      "#hirdetesek_box"
    ],
    iDontCareAboutCookies: [
      '.alert-info[data-block-track*="CookieNotice"]',
      ".ModuleTemplateCookieIndicator",
      ".o--cookies--container",
      "#cookies-policy-sticky",
      "#stickyCookieBar"
    ],
    icelandicAbp: [e("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
    latvian: [
      e("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="),
      e("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")
    ],
    listKr: [
      e("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="),
      e("I2xpdmVyZUFkV3JhcHBlcg=="),
      e("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="),
      e("aW5zLmZhc3R2aWV3LWFk"),
      ".revenue_unit_item.dable"
    ],
    listeAr: [
      e("LmdlbWluaUxCMUFk"),
      ".right-and-left-sponsers",
      e("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="),
      e("YVtocmVmKj0iYm9vcmFxLm9yZyJd"),
      e("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")
    ],
    listeFr: [
      e("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="),
      e("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="),
      e("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="),
      ".site-pub-interstitiel",
      'div[id^="crt-"][data-criteo-id]'
    ],
    officialPolish: [
      "#ceneo-placeholder-ceneo-12",
      e("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"),
      e("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="),
      e("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="),
      e("ZGl2I3NrYXBpZWNfYWQ=")
    ],
    ro: [
      e("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"),
      e("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"),
      e("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="),
      e("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"),
      'a[href^="/url/"]'
    ],
    ruAd: [
      e("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"),
      e("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="),
      e("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="),
      "#pgeldiz",
      ".yandex-rtb-block"
    ],
    thaiAds: [
      "a[href*=macau-uta-popup]",
      e("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="),
      e("LmFkczMwMHM="),
      ".bumq",
      ".img-kosana"
    ],
    webAnnoyancesUltralist: [
      "#mod-social-share-2",
      "#social-tools",
      e("LmN0cGwtZnVsbGJhbm5lcg=="),
      ".zergnet-recommend",
      ".yt.btn-link.btn-md.btn"
    ]
  };
}
function cr(e) {
  var t = e === void 0 ? {} : e, n = t.debug;
  return W(this, void 0, void 0, function() {
    var r, i, a, o, u, c;
    return A(this, function(s) {
      switch (s.label) {
        case 0:
          return sr() ? (r = or(), i = Object.keys(r), a = (c = []).concat.apply(c, i.map(function(d) {
            return r[d];
          })), [4, lr(a)]) : [2, void 0];
        case 1:
          return o = s.sent(), n && ur(r, o), u = i.filter(function(d) {
            var l = r[d], f = R(l.map(function(m) {
              return o[m];
            }));
            return f > l.length * 0.6;
          }), u.sort(), [2, u];
      }
    });
  });
}
function sr() {
  return H() || ye();
}
function lr(e) {
  var t;
  return W(this, void 0, void 0, function() {
    var n, r, i, a, c, o, u, c;
    return A(this, function(s) {
      switch (s.label) {
        case 0:
          for (n = document, r = n.createElement("div"), i = new Array(e.length), a = {}, He(r), c = 0; c < e.length; ++c)
            o = xn(e[c]), o.tagName === "DIALOG" && o.show(), u = n.createElement("div"), He(u), u.appendChild(o), r.appendChild(u), i[c] = o;
          s.label = 1;
        case 1:
          return n.body ? [3, 3] : [4, O(50)];
        case 2:
          return s.sent(), [3, 1];
        case 3:
          return n.body.appendChild(r), [4, re()];
        case 4:
          s.sent();
          try {
            for (c = 0; c < e.length; ++c)
              i[c].offsetParent || (a[e[c]] = !0);
          } finally {
            (t = r.parentNode) === null || t === void 0 || t.removeChild(r);
          }
          return [2, a];
      }
    });
  });
}
function He(e) {
  e.style.setProperty("visibility", "hidden", "important"), e.style.setProperty("display", "block", "important");
}
function ur(e, t) {
  for (var n = "DOM blockers debug:\n```", r = 0, i = Object.keys(e); r < i.length; r++) {
    var a = i[r];
    n += `
`.concat(a, ":");
    for (var o = 0, u = e[a]; o < u.length; o++) {
      var c = u[o];
      n += `
  `.concat(t[c] ? "🚫" : "➡️", " ").concat(c);
    }
  }
  console.log("".concat(n, "\n```"));
}
function dr() {
  for (var e = 0, t = ["rec2020", "p3", "srgb"]; e < t.length; e++) {
    var n = t[e];
    if (matchMedia("(color-gamut: ".concat(n, ")")).matches)
      return n;
  }
}
function fr() {
  if (Ne("inverted"))
    return !0;
  if (Ne("none"))
    return !1;
}
function Ne(e) {
  return matchMedia("(inverted-colors: ".concat(e, ")")).matches;
}
function mr() {
  if (je("active"))
    return !0;
  if (je("none"))
    return !1;
}
function je(e) {
  return matchMedia("(forced-colors: ".concat(e, ")")).matches;
}
var vr = 100;
function hr() {
  if (matchMedia("(min-monochrome: 0)").matches) {
    for (var e = 0; e <= vr; ++e)
      if (matchMedia("(max-monochrome: ".concat(e, ")")).matches)
        return e;
    throw new Error("Too high value");
  }
}
function pr() {
  if (D("no-preference"))
    return 0;
  if (D("high") || D("more"))
    return 1;
  if (D("low") || D("less"))
    return -1;
  if (D("forced"))
    return 10;
}
function D(e) {
  return matchMedia("(prefers-contrast: ".concat(e, ")")).matches;
}
function gr() {
  if (Ye("reduce"))
    return !0;
  if (Ye("no-preference"))
    return !1;
}
function Ye(e) {
  return matchMedia("(prefers-reduced-motion: ".concat(e, ")")).matches;
}
function yr() {
  if (Xe("reduce"))
    return !0;
  if (Xe("no-preference"))
    return !1;
}
function Xe(e) {
  return matchMedia("(prefers-reduced-transparency: ".concat(e, ")")).matches;
}
function br() {
  if (_e("high"))
    return !0;
  if (_e("standard"))
    return !1;
}
function _e(e) {
  return matchMedia("(dynamic-range: ".concat(e, ")")).matches;
}
var v = Math, F = function() {
  return 0;
};
function wr() {
  var e = v.acos || F, t = v.acosh || F, n = v.asin || F, r = v.asinh || F, i = v.atanh || F, a = v.atan || F, o = v.sin || F, u = v.sinh || F, c = v.cos || F, s = v.cosh || F, d = v.tan || F, l = v.tanh || F, f = v.exp || F, m = v.expm1 || F, b = v.log1p || F, h = function(g) {
    return v.pow(v.PI, g);
  }, x = function(g) {
    return v.log(g + v.sqrt(g * g - 1));
  }, y = function(g) {
    return v.log(g + v.sqrt(g * g + 1));
  }, k = function(g) {
    return v.log((1 + g) / (1 - g)) / 2;
  }, L = function(g) {
    return v.exp(g) - 1 / v.exp(g) / 2;
  }, M = function(g) {
    return (v.exp(g) + 1 / v.exp(g)) / 2;
  }, S = function(g) {
    return v.exp(g) - 1;
  }, V = function(g) {
    return (v.exp(2 * g) - 1) / (v.exp(2 * g) + 1);
  }, X = function(g) {
    return v.log(1 + g);
  };
  return {
    acos: e(0.12312423423423424),
    acosh: t(1e308),
    acoshPf: x(1e154),
    asin: n(0.12312423423423424),
    asinh: r(1),
    asinhPf: y(1),
    atanh: i(0.5),
    atanhPf: k(0.5),
    atan: a(0.5),
    sin: o(-1e300),
    sinh: u(1),
    sinhPf: L(1),
    cos: c(10.000000000123),
    cosh: s(1),
    coshPf: M(1),
    tan: d(-1e300),
    tanh: l(1),
    tanhPf: V(1),
    exp: f(1),
    expm1: m(1),
    expm1Pf: S(1),
    log1p: b(10),
    log1pPf: X(10),
    powPI: h(-100)
  };
}
var xr = "mmMwWLliI0fiflO&1", le = {
  /**
   * The default font. User can change it in desktop Chrome, desktop Firefox, IE 11,
   * Android Chrome (but only when the size is ≥ than the default) and Android Firefox.
   */
  default: [],
  /** OS font on macOS. User can change its size and weight. Applies after Safari restart. */
  apple: [{ font: "-apple-system-body" }],
  /** User can change it in desktop Chrome and desktop Firefox. */
  serif: [{ fontFamily: "serif" }],
  /** User can change it in desktop Chrome and desktop Firefox. */
  sans: [{ fontFamily: "sans-serif" }],
  /** User can change it in desktop Chrome and desktop Firefox. */
  mono: [{ fontFamily: "monospace" }],
  /**
   * Check the smallest allowed font size. User can change it in desktop Chrome, desktop Firefox and desktop Safari.
   * The height can be 0 in Chrome on a retina display.
   */
  min: [{ fontSize: "1px" }],
  /** Tells one OS from another in desktop Chrome. */
  system: [{ fontFamily: "system-ui" }]
};
function kr() {
  return Sr(function(e, t) {
    for (var n = {}, r = {}, i = 0, a = Object.keys(le); i < a.length; i++) {
      var o = a[i], u = le[o], c = u[0], s = c === void 0 ? {} : c, d = u[1], l = d === void 0 ? xr : d, f = e.createElement("span");
      f.textContent = l, f.style.whiteSpace = "nowrap";
      for (var m = 0, b = Object.keys(s); m < b.length; m++) {
        var h = b[m], x = s[h];
        x !== void 0 && (f.style[h] = x);
      }
      n[o] = f, t.append(e.createElement("br"), f);
    }
    for (var y = 0, k = Object.keys(le); y < k.length; y++) {
      var o = k[y];
      r[o] = n[o].getBoundingClientRect().width;
    }
    return r;
  });
}
function Sr(e, t) {
  return t === void 0 && (t = 4e3), st(function(n, r) {
    var i = r.document, a = i.body, o = a.style;
    o.width = "".concat(t, "px"), o.webkitTextSizeAdjust = o.textSizeAdjust = "none", ae() ? a.style.zoom = "".concat(1 / r.devicePixelRatio) : H() && (a.style.zoom = "reset");
    var u = i.createElement("div");
    return u.textContent = nt([], Array(t / 20 << 0), !0).map(function() {
      return "word";
    }).join(" "), a.appendChild(u), e(i, a);
  }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
}
function Lr() {
  return navigator.pdfViewerEnabled;
}
function Vr() {
  var e = new Float32Array(1), t = new Uint8Array(e.buffer);
  return e[0] = 1 / 0, e[0] = e[0] - e[0], t[3];
}
function Cr() {
  var e = window.ApplePaySession;
  if (typeof (e == null ? void 0 : e.canMakePayments) != "function")
    return -1;
  try {
    return e.canMakePayments() ? 1 : 0;
  } catch (t) {
    return Fr(t);
  }
}
function Fr(e) {
  if (e instanceof Error) {
    if (e.name === "InvalidAccessError") {
      if (/\bfrom\b.*\binsecure\b/i.test(e.message))
        return -2;
      if (/\bdifferent\b.*\borigin\b.*top.level\b.*\bframe\b/i.test(e.message))
        return -3;
    }
    if (e.name === "SecurityError" && /\bthird.party iframes?.*\bnot.allowed\b/i.test(e.message))
      return -3;
  }
  throw e;
}
function Mr() {
  var e, t = document.createElement("a"), n = (e = t.attributionSourceId) !== null && e !== void 0 ? e : t.attributionsourceid;
  return n === void 0 ? void 0 : String(n);
}
var lt = -1, ut = -2, Rr = /* @__PURE__ */ new Set([
  10752,
  2849,
  2884,
  2885,
  2886,
  2928,
  2929,
  2930,
  2931,
  2932,
  2960,
  2961,
  2962,
  2963,
  2964,
  2965,
  2966,
  2967,
  2968,
  2978,
  3024,
  3042,
  3088,
  3089,
  3106,
  3107,
  32773,
  32777,
  32777,
  32823,
  32824,
  32936,
  32937,
  32938,
  32939,
  32968,
  32969,
  32970,
  32971,
  3317,
  33170,
  3333,
  3379,
  3386,
  33901,
  33902,
  34016,
  34024,
  34076,
  3408,
  3410,
  3411,
  3412,
  3413,
  3414,
  3415,
  34467,
  34816,
  34817,
  34818,
  34819,
  34877,
  34921,
  34930,
  35660,
  35661,
  35724,
  35738,
  35739,
  36003,
  36004,
  36005,
  36347,
  36348,
  36349,
  37440,
  37441,
  37443,
  7936,
  7937,
  7938
  // SAMPLE_ALPHA_TO_COVERAGE (32926) and SAMPLE_COVERAGE (32928) are excluded because they trigger a console warning
  // in IE, Chrome ≤ 59 and Safari ≤ 13 and give no entropy.
]), Ir = /* @__PURE__ */ new Set([
  34047,
  35723,
  36063,
  34852,
  34853,
  34854,
  34229,
  36392,
  36795,
  38449
  // MAX_VIEWS_OVR
]), Pr = ["FRAGMENT_SHADER", "VERTEX_SHADER"], Zr = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"], dt = "WEBGL_debug_renderer_info", Er = "WEBGL_polygon_mode";
function Wr(e) {
  var t, n, r, i, a, o, u = e.cache, c = ft(u);
  if (!c)
    return lt;
  if (!vt(c))
    return ut;
  var s = mt() ? null : c.getExtension(dt);
  return {
    version: ((t = c.getParameter(c.VERSION)) === null || t === void 0 ? void 0 : t.toString()) || "",
    vendor: ((n = c.getParameter(c.VENDOR)) === null || n === void 0 ? void 0 : n.toString()) || "",
    vendorUnmasked: s ? (r = c.getParameter(s.UNMASKED_VENDOR_WEBGL)) === null || r === void 0 ? void 0 : r.toString() : "",
    renderer: ((i = c.getParameter(c.RENDERER)) === null || i === void 0 ? void 0 : i.toString()) || "",
    rendererUnmasked: s ? (a = c.getParameter(s.UNMASKED_RENDERER_WEBGL)) === null || a === void 0 ? void 0 : a.toString() : "",
    shadingLanguageVersion: ((o = c.getParameter(c.SHADING_LANGUAGE_VERSION)) === null || o === void 0 ? void 0 : o.toString()) || ""
  };
}
function Ar(e) {
  var t = e.cache, n = ft(t);
  if (!n)
    return lt;
  if (!vt(n))
    return ut;
  var r = n.getSupportedExtensions(), i = n.getContextAttributes(), a = [], o = [], u = [], c = [];
  if (i)
    for (var s = 0, d = Object.keys(i); s < d.length; s++) {
      var l = d[s];
      a.push("".concat(l, "=").concat(i[l]));
    }
  for (var f = Be(n), m = 0, b = f; m < b.length; m++) {
    var h = b[m], x = n[h];
    o.push("".concat(h, "=").concat(x).concat(Rr.has(x) ? "=".concat(n.getParameter(x)) : ""));
  }
  if (r)
    for (var y = 0, k = r; y < k.length; y++) {
      var L = k[y];
      if (!(L === dt && mt() || L === Er && Hr())) {
        var M = n.getExtension(L);
        if (M)
          for (var S = 0, V = Be(M); S < V.length; S++) {
            var h = V[S], x = M[h];
            u.push("".concat(h, "=").concat(x).concat(Ir.has(x) ? "=".concat(n.getParameter(x)) : ""));
          }
      }
    }
  for (var X = 0, g = Pr; X < g.length; X++)
    for (var be = g[X], ie = 0, we = Zr; ie < we.length; ie++) {
      var xe = we[ie], gt = Gr(n, be, xe);
      c.push("".concat(be, ".").concat(xe, "=").concat(gt.join(",")));
    }
  return u.sort(), o.sort(), {
    contextAttributes: a,
    parameters: o,
    shaderPrecisions: c,
    extensions: r,
    extensionParameters: u
  };
}
function ft(e) {
  if (e.webgl)
    return e.webgl.context;
  var t = document.createElement("canvas"), n;
  t.addEventListener("webglCreateContextError", function() {
    return n = void 0;
  });
  for (var r = 0, i = ["webgl", "experimental-webgl"]; r < i.length; r++) {
    var a = i[r];
    try {
      n = t.getContext(a);
    } catch {
    }
    if (n)
      break;
  }
  return e.webgl = { context: n }, n;
}
function Gr(e, t, n) {
  var r = e.getShaderPrecisionFormat(e[t], e[n]);
  return r ? [r.rangeMin, r.rangeMax, r.precision] : [];
}
function Be(e) {
  var t = Object.keys(e.__proto__);
  return t.filter(Tr);
}
function Tr(e) {
  return typeof e == "string" && !e.match(/[^A-Z0-9_x]/);
}
function mt() {
  return ct();
}
function Hr() {
  return ae() || H();
}
function vt(e) {
  return typeof e.getParameter == "function";
}
function Nr() {
  var e, t = ye() || H();
  return t ? window.AudioContext && (e = new AudioContext().baseLatency) !== null && e !== void 0 ? e : -1 : -2;
}
var jr = {
  // READ FIRST:
  // See https://github.com/fingerprintjs/fingerprintjs/blob/master/contributing.md#how-to-make-an-entropy-source
  // to learn how entropy source works and how to make your own.
  // The sources run in this exact order.
  // The asynchronous sources are at the start to run in parallel with other sources.
  fonts: Vn,
  domBlockers: cr,
  fontPreferences: kr,
  audio: hn,
  screenFrame: zn,
  canvas: Fn,
  osCpu: Tn,
  languages: Hn,
  colorDepth: Nn,
  deviceMemory: jn,
  screenResolution: Yn,
  hardwareConcurrency: Jn,
  timezone: Un,
  sessionStorage: Kn,
  localStorage: qn,
  indexedDB: $n,
  openDatabase: er,
  cpuClass: tr,
  platform: nr,
  plugins: Cn,
  touchSupport: Gn,
  vendor: rr,
  vendorFlavors: ar,
  cookiesEnabled: ir,
  colorGamut: dr,
  invertedColors: fr,
  forcedColors: mr,
  monochrome: hr,
  contrast: pr,
  reducedMotion: gr,
  reducedTransparency: yr,
  hdr: br,
  math: wr,
  pdfViewerEnabled: Lr,
  architecture: Vr,
  applePay: Cr,
  privateClickMeasurement: Mr,
  audioBaseLatency: Nr,
  // Some sources can affect other sources (e.g. WebGL can affect canvas), so it's important to run these sources
  // after other sources.
  webGlBasics: Wr,
  webGlExtensions: Ar
};
function Yr(e) {
  return sn(jr, e, []);
}
var Xr = "$ if upgrade to Pro: https://fpjs.dev/pro";
function _r(e) {
  var t = Br(e), n = Dr(t);
  return { score: t, comment: Xr.replace(/\$/g, "".concat(n)) };
}
function Br(e) {
  if (ye())
    return 0.4;
  if (H())
    return ge() && !(Q() && U()) ? 0.5 : 0.3;
  var t = "value" in e.platform ? e.platform.value : "";
  return /^Win/.test(t) ? 0.6 : /^Mac/.test(t) ? 0.5 : 0.7;
}
function Dr(e) {
  return it(0.99 + 0.01 * e, 1e-4);
}
function Or(e) {
  for (var t = "", n = 0, r = Object.keys(e).sort(); n < r.length; n++) {
    var i = r[n], a = e[i], o = "error" in a ? "error" : JSON.stringify(a.value);
    t += "".concat(t ? "|" : "").concat(i.replace(/([:|\\])/g, "\\$1"), ":").concat(o);
  }
  return t;
}
function ht(e) {
  return JSON.stringify(e, function(t, n) {
    return n instanceof Error ? rn(n) : n;
  }, 2);
}
function pt(e) {
  return nn(Or(e));
}
function zr(e) {
  var t, n = _r(e);
  return {
    get visitorId() {
      return t === void 0 && (t = pt(this.components)), t;
    },
    set visitorId(r) {
      t = r;
    },
    confidence: n,
    components: e,
    version: rt
  };
}
function Jr(e) {
  return e === void 0 && (e = 50), zt(e, e * 2);
}
function Ur(e, t) {
  var n = Date.now();
  return {
    get: function(r) {
      return W(this, void 0, void 0, function() {
        var i, a, o;
        return A(this, function(u) {
          switch (u.label) {
            case 0:
              return i = Date.now(), [4, e()];
            case 1:
              return a = u.sent(), o = zr(a), (t || r != null && r.debug) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(o.version, `
userAgent: `).concat(navigator.userAgent, `
timeBetweenLoadAndGet: `).concat(i - n, `
visitorId: `).concat(o.visitorId, `
components: `).concat(ht(a), "\n```")), [2, o];
          }
        });
      });
    }
  };
}
function Qr() {
  if (!(window.__fpjs_d_m || Math.random() >= 1e-3))
    try {
      var e = new XMLHttpRequest();
      e.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(rt, "/npm-monitoring"), !0), e.send();
    } catch (t) {
      console.error(t);
    }
}
function Kr(e) {
  var t;
  return e === void 0 && (e = {}), W(this, void 0, void 0, function() {
    var n, r, i;
    return A(this, function(a) {
      switch (a.label) {
        case 0:
          return (!((t = e.monitoring) !== null && t !== void 0) || t) && Qr(), n = e.delayFallback, r = e.debug, [4, Jr(n)];
        case 1:
          return a.sent(), i = Yr({ cache: {}, debug: r }), [2, Ur(i, r)];
      }
    });
  });
}
var qr = { load: Kr, hashComponents: pt, componentsToDebugString: ht };
const $r = /* @__PURE__ */ ve({
  __name: "LoginForm",
  setup(e) {
    const t = Zt, n = Et, r = Me.Item, i = Re.Password, { notification: a, createErrorModal: o } = Wt(), { prefixCls: u } = Qe("login"), c = It(), { setLoginState: s, getLoginState: d } = $e(), { getFormRules: l } = jt(), f = te(), m = te(!1), b = te(!1), h = yt({
      account: "",
      password: ""
    });
    async function x() {
      return (await (await qr.load()).get()).visitorId;
    }
    const { validForm: y } = Nt(f), k = T(() => p(d) === Y.LOGIN);
    async function L() {
      const M = await y();
      if (M)
        try {
          m.value = !0;
          const S = await x(), V = await c.login({
            password: Pe(M.password),
            userName: M.account,
            device: Pe(S),
            mode: "none"
            //不要默认的错误提示
          });
          V && a.success({
            message: "登录成功",
            description: `欢迎: ${V.realName}`,
            duration: 3
          });
        } catch (S) {
          o({
            title: "错误提示",
            content: S.message || "网络错误",
            getContainer: () => document.body.querySelector(`.${u}`) || document.body
          });
        } finally {
          m.value = !1;
        }
    }
    return (M, S) => (z(), he(bt, null, [
      ke(C(Xt, { class: "enter-x" }, null, 512), [
        [Se, k.value]
      ]),
      ke(C(p(Me), {
        class: "p-4 enter-x",
        model: h,
        rules: p(l),
        ref_key: "formRef",
        ref: f,
        onKeypress: wt(L, ["enter"])
      }, {
        default: P(() => [
          C(p(r), {
            name: "account",
            class: "enter-x"
          }, {
            default: P(() => [
              C(p(Re), {
                size: "large",
                value: h.account,
                "onUpdate:value": S[0] || (S[0] = (V) => h.account = V),
                placeholder: "输入您的用户名",
                class: "fix-auto-fill"
              }, null, 8, ["value"])
            ]),
            _: 1
          }),
          C(p(r), {
            name: "password",
            class: "enter-x"
          }, {
            default: P(() => [
              C(p(i), {
                size: "large",
                visibilityToggle: "",
                value: h.password,
                "onUpdate:value": S[1] || (S[1] = (V) => h.password = V),
                placeholder: "输入您的密码"
              }, null, 8, ["value"])
            ]),
            _: 1
          }),
          C(p(n), { class: "enter-x" }, {
            default: P(() => [
              C(p(t), { span: 12 }, {
                default: P(() => [
                  C(p(r), null, {
                    default: P(() => [
                      C(p(Pt), {
                        checked: b.value,
                        "onUpdate:checked": S[2] || (S[2] = (V) => b.value = V),
                        size: "small"
                      }, {
                        default: P(() => [
                          oe(" 记住密码 ")
                        ]),
                        _: 1
                      }, 8, ["checked"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              C(p(t), { span: 12 }, {
                default: P(() => [
                  C(p(r), { style: { "text-align": "right" } }, {
                    default: P(() => [
                      C(p(Ie), {
                        type: "link",
                        size: "small",
                        onClick: S[3] || (S[3] = (V) => p(s)(p(Y).RESET_PASSWORD))
                      }, {
                        default: P(() => [
                          oe(" 忘记密码？ ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          C(p(r), { class: "enter-x" }, {
            default: P(() => [
              C(p(Ie), {
                type: "primary",
                size: "large",
                block: "",
                onClick: L,
                loading: m.value
              }, {
                default: P(() => [
                  oe(" 登录 ")
                ]),
                _: 1
              }, 8, ["loading"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["model", "rules"]), [
        [Se, k.value]
      ])
    ], 64));
  }
}), ea = { class: "flex items-center absolute right-4 top-4" }, ta = { class: "-enter-x xl:hidden" }, na = { class: "container relative h-full py-2 mx-auto sm:px-10" }, ra = { class: "flex h-full" }, aa = { class: "hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12" }, ia = { class: "my-auto" }, oa = ["alt"], ca = { class: "mt-10 font-medium text-white -enter-x" }, sa = { class: "inline-block mt-4 text-3xl" }, la = /* @__PURE__ */ Z("div", { class: "mt-5 font-normal text-white dark:text-gray-500 -enter-x" }, " 请输入账号和密码以继续 ", -1), ua = { class: "flex w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12" }, va = /* @__PURE__ */ ve({
  __name: "Login",
  props: {
    sessionTimeout: {
      type: Boolean
    }
  },
  setup(e) {
    const t = At(), { prefixCls: n } = Qe("login"), i = Ht().getShowPicker, a = T(() => (t == null ? void 0 : t.title) ?? ""), o = T(() => "Vue-Admin-Template");
    return (u, c) => {
      const s = xt("AppLocalePicker");
      return z(), he("div", {
        class: Le([p(n), "relative w-full h-full px-4"])
      }, [
        Z("div", ea, [
          e.sessionTimeout ? Ce("", !0) : (z(), Ve(kt, {
            key: 0,
            class: "enter-x mr-2"
          })),
          !e.sessionTimeout && p(i) ? (z(), Ve(s, {
            key: 1,
            class: "text-white enter-x xl:text-gray-600",
            "show-text": !1
          })) : Ce("", !0)
        ]),
        Z("span", ta, [
          C(Fe, { alwaysShowTitle: !0 })
        ]),
        Z("div", na, [
          Z("div", ra, [
            Z("div", aa, [
              C(Fe, { class: "-enter-x" }),
              Z("div", ia, [
                Z("img", {
                  alt: a.value,
                  src: Gt,
                  class: "w-1/2 -mt-16 -enter-x"
                }, null, 8, oa),
                Z("div", ca, [
                  Z("span", sa, De(o.value ?? "管理系统"), 1)
                ]),
                la
              ])
            ]),
            Z("div", ua, [
              Z("div", {
                class: Le([`${p(n)}-form`, "relative w-full px-5 py-8 mx-auto my-auto rounded-md shadow-md xl:ml-16 xl:bg-transparent sm:px-8 xl:p-4 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto enter-x"])
              }, [
                C($r)
              ], 2)
            ])
          ])
        ])
      ], 2);
    };
  }
});
export {
  va as _
};
