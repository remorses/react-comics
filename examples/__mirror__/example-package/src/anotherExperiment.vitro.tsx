import * as  __HMR__ from '/_hmr_client.js?namespace=hmr-client'; import.meta.hot = __HMR__.createHotContext(import.meta.url); const __this_path__ = "example-package/src/anotherExperiment.vitro.tsx";
import RefreshRuntime from "/_react-refresh-runtime_.js?namespace=react-refresh-runtime";
let prevRefreshReg;
let prevRefreshSig;
if (!window.__bundless_plugin_react_preamble_installed__) {
  throw new Error("bundless-plugin-react can't detect preamble. Something is wrong.");
}
if (import.meta.hot) {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, __this_path__ + " " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import react_cjsImport2 from "/.bundless/web_modules/index-6FKCBOBS.js?namespace=file&t=0"; const React = react_cjsImport2 && react_cjsImport2.__esModule ? react_cjsImport2.default : react_cjsImport2;;
import {Component} from "/example-package/src/index.tsx?namespace=file&t=0";
export const Simple = () => {
  return /* @__PURE__ */ React.createElement(Component, {
    "data-vitro-line": 5,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/anotherExperiment.vitro.tsx"
  });
};
_c = Simple;
export const DifferentColor = () => {
  return /* @__PURE__ */ React.createElement(Component, {
    flex: "1",
    w: "100%",
    minH: "100%",
    bg: "blue.100",
    "data-vitro-line": 9,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/anotherExperiment.vitro.tsx"
  });
};
_c2 = DifferentColor;
console.log(new Error("i should be on line 12"));
var _c, _c2;
$RefreshReg$(_c, "Simple");
$RefreshReg$(_c2, "DifferentColor");
if (import.meta.hot) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  import.meta.hot.accept();
  if (!window.__bundless_plugin_react_timeout) {
    window.__bundless_plugin_react_timeout = setTimeout(() => {
      window.__bundless_plugin_react_timeout = 0;
      RefreshRuntime.performReactRefresh();
    }, 30);
  }
}
export const __vitroExportsOrdering = ["Simple", "DifferentColor"];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUudHN4IiwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL2V4YW1wbGUtcGFja2FnZS9zcmMvYW5vdGhlckV4cGVyaW1lbnQudml0cm8udHN4Il0sIm5hbWVzIjpbIl9fdGhpc19wYXRoX18iLCJwcmV2UmVmcmVzaFJlZyIsInByZXZSZWZyZXNoU2lnIiwid2luZG93IiwiX19idW5kbGVzc19wbHVnaW5fcmVhY3RfcHJlYW1ibGVfaW5zdGFsbGVkX18iLCJFcnJvciIsImltcG9ydCIsImhvdCIsIiRSZWZyZXNoUmVnJCIsIiRSZWZyZXNoU2lnJCIsInR5cGUiLCJpZCIsIlJlZnJlc2hSdW50aW1lIiwicmVnaXN0ZXIiLCJjcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybSIsIlNpbXBsZSIsIkRpZmZlcmVudENvbG9yIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsZ0JBQWdCO0FBQ3RCO0FBRUEsSUFBSUM7QUFDSixJQUFJQztBQUVKLElBQUksQ0FBQ0MsT0FBT0MsOENBQUFBO0FBQ1YsUUFBTSxJQUFJQyxNQUNSO0FBQUE7QUFJSixJQUFJQyxZQUFZQyxLQUFBQTtBQUNkTixtQkFBaUJFLE9BQU9LO0FBQ3hCTixtQkFBaUJDLE9BQU9NO0FBQ3hCTixTQUFPSyxlQUFlLENBQUNFLE1BQU1DLE9BQUFBO0FBQzNCQyxtQkFBZUMsU0FBU0gsTUFBTVYsZ0JBQWdCLE1BQU1XO0FBQUFBO0FBRXREUixTQUFPTSxlQUFlRyxlQUFlRTtBQUFBQTtBQ2xCdkM7QUFDQTtBQUVPLGFBQU1DLFNBQW1CLE1BQUE7QUFDNUIsU0FBTyxzQkFBQSxjQUFDLFdBQUQ7QUFBQSxJQUFBLG1CQUFBO0FBQUEsSUFBQSx1QkFBQTtBQUFBO0FBQUE7S0FERUE7QUFJTixhQUFNQyxpQkFBaUIsTUFBQTtBQUMxQixTQUFPLHNCQUFBLGNBQUMsV0FBRDtBQUFBLElBQVcsTUFBSztBQUFBLElBQUksR0FBRTtBQUFBLElBQU8sTUFBSztBQUFBLElBQU8sSUFBRztBQUFBLElBQTVDLG1CQUFBO0FBQUEsSUFBQSx1QkFBQTtBQUFBO0FBQUE7TUFERUE7QUFJYkMsUUFBUUMsSUFBSSxJQUFJYixNQUFNIiwic291cmNlc0NvbnRlbnQiOltudWxsLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL2luZGV4J1xuXG5leHBvcnQgY29uc3QgU2ltcGxlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICByZXR1cm4gPENvbXBvbmVudCAvPlxufVxuXG5leHBvcnQgY29uc3QgRGlmZmVyZW50Q29sb3IgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxDb21wb25lbnQgZmxleD0nMScgdz0nMTAwJScgbWluSD0nMTAwJScgYmc9J2JsdWUuMTAwJyAvPlxufVxuXG5jb25zb2xlLmxvZyhuZXcgRXJyb3IoJ2kgc2hvdWxkIGJlIG9uIGxpbmUgMTInKSlcbiJdfQ==