import { createVNode as i } from "vue";
import { I as l } from "./components.js";
var u = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, name: "copy", theme: "outlined" };
function a(r) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? Object(arguments[t]) : {}, n = Object.keys(e);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(e).filter(function(c) {
      return Object.getOwnPropertyDescriptor(e, c).enumerable;
    }))), n.forEach(function(c) {
      f(r, c, e[c]);
    });
  }
  return r;
}
function f(r, t, e) {
  return t in r ? Object.defineProperty(r, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : r[t] = e, r;
}
var o = function(t, e) {
  var n = a({}, t, e.attrs);
  return i(l, a({}, n, {
    icon: u
  }), null);
};
o.displayName = "CopyOutlined";
o.inheritAttrs = !1;
export {
  o as C
};
