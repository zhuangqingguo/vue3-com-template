import { openBlock as r, createElementBlock as d } from "vue";
const i = (t, n) => {
  const s = t.__vccOpts || t;
  for (const [c, a] of n)
    s[c] = a;
  return s;
}, u = {}, l = { class: "tButton" };
function _(t, n) {
  return r(), d("button", l, "测试 发布 按钮组件1");
}
const e = /* @__PURE__ */ i(u, [["render", _], ["__scopeId", "data-v-d0dd2b77"]]);
e.name = "test-button";
e.install = function(t) {
  t.component("test-button1", e);
};
const f = [e], o = function(t) {
  o.installed || (o.installed = !0, f.map((n) => {
    t.component(n.name, n);
  }));
};
typeof window < "u" && window.Vue && o(window.Vue);
const m = {
  // 导出的对象必须具备一个 install 方法
  install: o
};
export {
  e as TestButton,
  m as default
};
