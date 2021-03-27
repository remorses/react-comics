import * as  __HMR__ from '/_hmr_client.js?namespace=hmr-client'; import.meta.hot = __HMR__.createHotContext(import.meta.url); var _s = $RefreshSig$();
const __this_path__ = "vitro-virtual-index.jsx";
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
import "/__..__/packages/cli/reexports/inspect-mode.css.cssjs?namespace=file&t=0";
import "/__..__/packages/cli/reexports/inspector.css.cssjs?namespace=file&t=0";
import {ExperimentPage, HomePage, VitroApp, history, useRouteChanged, getFileParam} from "/__..__/packages/cli/reexports/ui.js?namespace=file&t=0";
import path from "/path?namespace=node-builtins";
import react_cjsImport6 from "/.bundless/web_modules/index-6FKCBOBS.js?namespace=file&t=0"; const React = react_cjsImport6 && react_cjsImport6.__esModule ? react_cjsImport6.default : react_cjsImport6; const useState = react_cjsImport6["useState"]; const useEffect = react_cjsImport6["useEffect"];;
import reactDom_cjsImport7 from "/.bundless/web_modules/index-J6P6F3TG.js?namespace=file&t=0"; const ReactDOM = reactDom_cjsImport7 && reactDom_cjsImport7.__esModule ? reactDom_cjsImport7.default : reactDom_cjsImport7;;
import experimentsTree from "/vitro-experiments-tree.js?namespace=file&t=0";
const __ROOT__ = "/Users/morse/Documents/GitHub/react-comics/examples";
const __ROUTES__ = [{
  fileExports: () => import('/markdown/src/docs-macro.vitro.jsx?namespace=file&t=0'),
  url: "/?file=markdown%2Fsrc%2Fdocs-macro.vitro.jsx",
  sourceExperimentPath: "/Users/morse/Documents/GitHub/react-comics/examples/markdown/src/docs-macro.vitro.jsx"
}, {
  fileExports: () => import('/styled-components/src/big-height.vitro.jsx?namespace=file&t=0'),
  url: "/?file=styled-components%2Fsrc%2Fbig-height.vitro.jsx",
  sourceExperimentPath: "/Users/morse/Documents/GitHub/react-comics/examples/styled-components/src/big-height.vitro.jsx"
}, {
  fileExports: () => import('/styled-components/src/big-width.vitro.jsx?namespace=file&t=0'),
  url: "/?file=styled-components%2Fsrc%2Fbig-width.vitro.jsx",
  sourceExperimentPath: "/Users/morse/Documents/GitHub/react-comics/examples/styled-components/src/big-width.vitro.jsx"
}, {
  fileExports: () => import('/styled-components/src/example-styled-components.vitro.jsx?namespace=file&t=0'),
  url: "/?file=styled-components%2Fsrc%2Fexample-styled-components.vitro.jsx",
  sourceExperimentPath: "/Users/morse/Documents/GitHub/react-comics/examples/styled-components/src/example-styled-components.vitro.jsx"
}, {
  fileExports: () => import('/styled-components/src/many-components.vitro.jsx?namespace=file&t=0'),
  url: "/?file=styled-components%2Fsrc%2Fmany-components.vitro.jsx",
  sourceExperimentPath: "/Users/morse/Documents/GitHub/react-comics/examples/styled-components/src/many-components.vitro.jsx"
}, {
  fileExports: () => import('/tailwind/src/example-tailwind.vitro.jsx?namespace=file&t=0'),
  url: "/?file=tailwind%2Fsrc%2Fexample-tailwind.vitro.jsx",
  sourceExperimentPath: "/Users/morse/Documents/GitHub/react-comics/examples/tailwind/src/example-tailwind.vitro.jsx"
}, {
  fileExports: () => import('/example-package-scope/example-sub-package-1/src/index.vitro.tsx?namespace=file&t=0'),
  url: "/?file=example-package-scope%2Fexample-sub-package-1%2Fsrc%2Findex.vitro.tsx",
  sourceExperimentPath: "/Users/morse/Documents/GitHub/react-comics/examples/example-package-scope/example-sub-package-1/src/index.vitro.tsx"
}, {
  fileExports: () => import('/example-package-scope/example-sub-package-2/src/index.vitro.tsx?namespace=file&t=0'),
  url: "/?file=example-package-scope%2Fexample-sub-package-2%2Fsrc%2Findex.vitro.tsx",
  sourceExperimentPath: "/Users/morse/Documents/GitHub/react-comics/examples/example-package-scope/example-sub-package-2/src/index.vitro.tsx"
}, {
  fileExports: () => import('/example-package/src/anAwesomeExperiment.vitro.tsx?namespace=file&t=0'),
  url: "/?file=example-package%2Fsrc%2FanAwesomeExperiment.vitro.tsx",
  sourceExperimentPath: "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/anAwesomeExperiment.vitro.tsx"
}, {
  fileExports: () => import('/example-package/src/anotherExperiment.vitro.tsx?namespace=file&t=0'),
  url: "/?file=example-package%2Fsrc%2FanotherExperiment.vitro.tsx",
  sourceExperimentPath: "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/anotherExperiment.vitro.tsx"
}, {
  fileExports: () => import('/example-package/src/anotherExperiment1.vitro.tsx?namespace=file&t=0'),
  url: "/?file=example-package%2Fsrc%2FanotherExperiment1.vitro.tsx",
  sourceExperimentPath: "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/anotherExperiment1.vitro.tsx"
}, {
  fileExports: () => import('/example-package/src/check-sourcemaps-work.vitro.tsx?namespace=file&t=0'),
  url: "/?file=example-package%2Fsrc%2Fcheck-sourcemaps-work.vitro.tsx",
  sourceExperimentPath: "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/check-sourcemaps-work.vitro.tsx"
}, {
  fileExports: () => import('/example-package/src/complex-components.vitro.tsx?namespace=file&t=0'),
  url: "/?file=example-package%2Fsrc%2Fcomplex-components.vitro.tsx",
  sourceExperimentPath: "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/complex-components.vitro.tsx"
}, {
  fileExports: () => import('/example-package/src/example_component.vitro.tsx?namespace=file&t=0'),
  url: "/?file=example-package%2Fsrc%2Fexample_component.vitro.tsx",
  sourceExperimentPath: "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/example_component.vitro.tsx"
}, {
  fileExports: () => import('/example-package/src/experiment1.vitro.tsx?namespace=file&t=0'),
  url: "/?file=example-package%2Fsrc%2Fexperiment1.vitro.tsx",
  sourceExperimentPath: "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/experiment1.vitro.tsx"
}, {
  fileExports: () => import('/example-package/src/stillAnotherExperiment.vitro.tsx?namespace=file&t=0'),
  url: "/?file=example-package%2Fsrc%2FstillAnotherExperiment.vitro.tsx",
  sourceExperimentPath: "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/stillAnotherExperiment.vitro.tsx"
}];
const __OVERRIDES__ = {
  "/Users/morse/Documents/GitHub/react-comics/examples/example-package-scope/example-sub-package-2": () => import('/example-package-scope/example-sub-package-2/vitro-overrides.jsx?namespace=file&t=0'),
  "/Users/morse/Documents/GitHub/react-comics/examples/example-package": () => import('/example-package/vitro-overrides.jsx?namespace=file&t=0')
};
const __CONFIG__ = JSON.parse(`{
    "globs": [
        "./**/*.vitro.js",
        "./**/*.vitro.jsx",
        "./**/*.vitro.tsx"
    ],
    "bundlessConfig": {
        "prebundle": {}
    },
    "ignore": [
        "__mirror__/**"
    ],
    "links": {
        "github": {
            "url": "https://github.com/remorses/vitro",
            "path": "examples",
            "branch": "master"
        }
    }
}`);
const routes = __ROUTES__.filter((x) => x.url).map(({
  fileExports,
  url,
  sourceExperimentPath
}) => {
  const componentsOverridesScope = Object.keys(__OVERRIDES__).find((scopeDir) => {
    const isInside = !path.relative(scopeDir, sourceExperimentPath).startsWith("..");
    if (isInside) {
      return true;
    }
    return false;
  });
  const overrides = __OVERRIDES__[componentsOverridesScope];
  return {
    url,
    param: getFileParam(url),
    Component: () => {
      return /* @__PURE__ */ React.createElement(ExperimentPage, {
        config: __CONFIG__,
        root: __ROOT__,
        componentsOverrides: overrides,
        experimentsTree,
        sourceExperimentPath,
        fileExports,
        "data-vitro-line": 168,
        "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/vitro-virtual-index.jsx"
      });
    }
  };
});
function MainApp() {
  _s();
  const [fileParam, setFileParam] = useState(() => getFileParam(window.location.href));
  useRouteChanged(() => {
    setFileParam(getFileParam(window.location.href));
  });
  if (!fileParam) {
    return /* @__PURE__ */ React.createElement(VitroApp, {
      experimentsTree,
      "data-vitro-line": 190,
      "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/vitro-virtual-index.jsx"
    }, /* @__PURE__ */ React.createElement(HomePage, {
      experimentsTree
    }));
  }
  const route = routes.find((route2) => {
    return route2.param === fileParam;
  });
  if (!route) {
    return /* @__PURE__ */ React.createElement(VitroApp, {
      experimentsTree,
      "data-vitro-line": 201,
      "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/vitro-virtual-index.jsx"
    });
  }
  return /* @__PURE__ */ React.createElement(VitroApp, {
    experimentsTree,
    "data-vitro-line": 204,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/vitro-virtual-index.jsx"
  }, /* @__PURE__ */ React.createElement(route.Component, null));
}
_s(MainApp, "Dqtzev7OhbScSgaEHmRuk5CaoYo=", false, function() {
  return [useRouteChanged];
});
_c = MainApp;
ReactDOM.render(/* @__PURE__ */ React.createElement(MainApp, {
  "data-vitro-line": 210,
  "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/vitro-virtual-index.jsx"
}), document.getElementById("root"));
var _c;
$RefreshReg$(_c, "MainApp");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUudHN4IiwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL3ZpdHJvLXZpcnR1YWwtaW5kZXguanN4Il0sIm5hbWVzIjpbIl9fdGhpc19wYXRoX18iLCJwcmV2UmVmcmVzaFJlZyIsInByZXZSZWZyZXNoU2lnIiwid2luZG93IiwiX19idW5kbGVzc19wbHVnaW5fcmVhY3RfcHJlYW1ibGVfaW5zdGFsbGVkX18iLCJFcnJvciIsImltcG9ydCIsImhvdCIsIiRSZWZyZXNoUmVnJCIsIiRSZWZyZXNoU2lnJCIsInR5cGUiLCJpZCIsIlJlZnJlc2hSdW50aW1lIiwicmVnaXN0ZXIiLCJjcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybSIsIl9fUk9PVF9fIiwiX19ST1VURVNfXyIsImZpbGVFeHBvcnRzIiwidXJsIiwic291cmNlRXhwZXJpbWVudFBhdGgiLCJfX09WRVJSSURFU19fIiwiX19DT05GSUdfXyIsIkpTT04iLCJwYXJzZSIsInJvdXRlcyIsImZpbHRlciIsIngiLCJtYXAiLCJjb21wb25lbnRzT3ZlcnJpZGVzU2NvcGUiLCJPYmplY3QiLCJrZXlzIiwiZmluZCIsInNjb3BlRGlyIiwiaXNJbnNpZGUiLCJwYXRoIiwicmVsYXRpdmUiLCJzdGFydHNXaXRoIiwib3ZlcnJpZGVzIiwicGFyYW0iLCJnZXRGaWxlUGFyYW0iLCJDb21wb25lbnQiLCJmaWxlUGFyYW0iLCJzZXRGaWxlUGFyYW0iLCJ1c2VTdGF0ZSIsImxvY2F0aW9uIiwiaHJlZiIsInVzZVJvdXRlQ2hhbmdlZCIsInJvdXRlIiwiTWFpbkFwcCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLGdCQUFnQjtBQUN0QjtBQUVBLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJLENBQUNDLE9BQU9DLDhDQUE4QztBQUN4RCxRQUFNLElBQUlDLE1BQ1I7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QUFBLG1CQUFBO0FBQUEsRUFBQSx1QkFBQTtBQUFBLElBQWFDLFNBQVNDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6W251bGwsImltcG9ydCAnQHZpdHJvL2NsaS9yZWV4cG9ydHMvaW5zcGVjdC1tb2RlLmNzcydcbmltcG9ydCAnQHZpdHJvL2NsaS9yZWV4cG9ydHMvaW5zcGVjdG9yLmNzcydcblxuaW1wb3J0IHtcbiAgICBFeHBlcmltZW50UGFnZSxcbiAgICBIb21lUGFnZSxcbiAgICBWaXRyb0FwcCxcbiAgICBoaXN0b3J5LFxuICAgIHVzZVJvdXRlQ2hhbmdlZCxcbiAgICBnZXRGaWxlUGFyYW0sXG59IGZyb20gJ0B2aXRyby9jbGkvcmVleHBvcnRzL3VpJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IGV4cGVyaW1lbnRzVHJlZSBmcm9tICcvdml0cm8tZXhwZXJpbWVudHMtdHJlZS5qcydcblxuY29uc3QgX19ST09UX18gPSBcIi9Vc2Vycy9tb3JzZS9Eb2N1bWVudHMvR2l0SHViL3JlYWN0LWNvbWljcy9leGFtcGxlc1wiXG5cbmNvbnN0IF9fUk9VVEVTX18gPSBbXG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUV4cG9ydHM6ICgpID0+IGltcG9ydCgnLi9tYXJrZG93bi9zcmMvZG9jcy1tYWNyby52aXRyby5qc3gnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIvP2ZpbGU9bWFya2Rvd24lMkZzcmMlMkZkb2NzLW1hY3JvLnZpdHJvLmpzeFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlRXhwZXJpbWVudFBhdGg6IFwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL21hcmtkb3duL3NyYy9kb2NzLW1hY3JvLnZpdHJvLmpzeFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVFeHBvcnRzOiAoKSA9PiBpbXBvcnQoJy4vc3R5bGVkLWNvbXBvbmVudHMvc3JjL2JpZy1oZWlnaHQudml0cm8uanN4JyksXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiLz9maWxlPXN0eWxlZC1jb21wb25lbnRzJTJGc3JjJTJGYmlnLWhlaWdodC52aXRyby5qc3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUV4cGVyaW1lbnRQYXRoOiBcIi9Vc2Vycy9tb3JzZS9Eb2N1bWVudHMvR2l0SHViL3JlYWN0LWNvbWljcy9leGFtcGxlcy9zdHlsZWQtY29tcG9uZW50cy9zcmMvYmlnLWhlaWdodC52aXRyby5qc3hcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlRXhwb3J0czogKCkgPT4gaW1wb3J0KCcuL3N0eWxlZC1jb21wb25lbnRzL3NyYy9iaWctd2lkdGgudml0cm8uanN4JyksXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiLz9maWxlPXN0eWxlZC1jb21wb25lbnRzJTJGc3JjJTJGYmlnLXdpZHRoLnZpdHJvLmpzeFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlRXhwZXJpbWVudFBhdGg6IFwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL3N0eWxlZC1jb21wb25lbnRzL3NyYy9iaWctd2lkdGgudml0cm8uanN4XCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUV4cG9ydHM6ICgpID0+IGltcG9ydCgnLi9zdHlsZWQtY29tcG9uZW50cy9zcmMvZXhhbXBsZS1zdHlsZWQtY29tcG9uZW50cy52aXRyby5qc3gnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIvP2ZpbGU9c3R5bGVkLWNvbXBvbmVudHMlMkZzcmMlMkZleGFtcGxlLXN0eWxlZC1jb21wb25lbnRzLnZpdHJvLmpzeFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlRXhwZXJpbWVudFBhdGg6IFwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL3N0eWxlZC1jb21wb25lbnRzL3NyYy9leGFtcGxlLXN0eWxlZC1jb21wb25lbnRzLnZpdHJvLmpzeFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVFeHBvcnRzOiAoKSA9PiBpbXBvcnQoJy4vc3R5bGVkLWNvbXBvbmVudHMvc3JjL21hbnktY29tcG9uZW50cy52aXRyby5qc3gnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIvP2ZpbGU9c3R5bGVkLWNvbXBvbmVudHMlMkZzcmMlMkZtYW55LWNvbXBvbmVudHMudml0cm8uanN4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VFeHBlcmltZW50UGF0aDogXCIvVXNlcnMvbW9yc2UvRG9jdW1lbnRzL0dpdEh1Yi9yZWFjdC1jb21pY3MvZXhhbXBsZXMvc3R5bGVkLWNvbXBvbmVudHMvc3JjL21hbnktY29tcG9uZW50cy52aXRyby5qc3hcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlRXhwb3J0czogKCkgPT4gaW1wb3J0KCcuL3RhaWx3aW5kL3NyYy9leGFtcGxlLXRhaWx3aW5kLnZpdHJvLmpzeCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIi8/ZmlsZT10YWlsd2luZCUyRnNyYyUyRmV4YW1wbGUtdGFpbHdpbmQudml0cm8uanN4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VFeHBlcmltZW50UGF0aDogXCIvVXNlcnMvbW9yc2UvRG9jdW1lbnRzL0dpdEh1Yi9yZWFjdC1jb21pY3MvZXhhbXBsZXMvdGFpbHdpbmQvc3JjL2V4YW1wbGUtdGFpbHdpbmQudml0cm8uanN4XCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUV4cG9ydHM6ICgpID0+IGltcG9ydCgnLi9leGFtcGxlLXBhY2thZ2Utc2NvcGUvZXhhbXBsZS1zdWItcGFja2FnZS0xL3NyYy9pbmRleC52aXRyby50c3gnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIvP2ZpbGU9ZXhhbXBsZS1wYWNrYWdlLXNjb3BlJTJGZXhhbXBsZS1zdWItcGFja2FnZS0xJTJGc3JjJTJGaW5kZXgudml0cm8udHN4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VFeHBlcmltZW50UGF0aDogXCIvVXNlcnMvbW9yc2UvRG9jdW1lbnRzL0dpdEh1Yi9yZWFjdC1jb21pY3MvZXhhbXBsZXMvZXhhbXBsZS1wYWNrYWdlLXNjb3BlL2V4YW1wbGUtc3ViLXBhY2thZ2UtMS9zcmMvaW5kZXgudml0cm8udHN4XCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUV4cG9ydHM6ICgpID0+IGltcG9ydCgnLi9leGFtcGxlLXBhY2thZ2Utc2NvcGUvZXhhbXBsZS1zdWItcGFja2FnZS0yL3NyYy9pbmRleC52aXRyby50c3gnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIvP2ZpbGU9ZXhhbXBsZS1wYWNrYWdlLXNjb3BlJTJGZXhhbXBsZS1zdWItcGFja2FnZS0yJTJGc3JjJTJGaW5kZXgudml0cm8udHN4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VFeHBlcmltZW50UGF0aDogXCIvVXNlcnMvbW9yc2UvRG9jdW1lbnRzL0dpdEh1Yi9yZWFjdC1jb21pY3MvZXhhbXBsZXMvZXhhbXBsZS1wYWNrYWdlLXNjb3BlL2V4YW1wbGUtc3ViLXBhY2thZ2UtMi9zcmMvaW5kZXgudml0cm8udHN4XCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUV4cG9ydHM6ICgpID0+IGltcG9ydCgnLi9leGFtcGxlLXBhY2thZ2Uvc3JjL2FuQXdlc29tZUV4cGVyaW1lbnQudml0cm8udHN4JyksXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiLz9maWxlPWV4YW1wbGUtcGFja2FnZSUyRnNyYyUyRmFuQXdlc29tZUV4cGVyaW1lbnQudml0cm8udHN4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VFeHBlcmltZW50UGF0aDogXCIvVXNlcnMvbW9yc2UvRG9jdW1lbnRzL0dpdEh1Yi9yZWFjdC1jb21pY3MvZXhhbXBsZXMvZXhhbXBsZS1wYWNrYWdlL3NyYy9hbkF3ZXNvbWVFeHBlcmltZW50LnZpdHJvLnRzeFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVFeHBvcnRzOiAoKSA9PiBpbXBvcnQoJy4vZXhhbXBsZS1wYWNrYWdlL3NyYy9hbm90aGVyRXhwZXJpbWVudC52aXRyby50c3gnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIvP2ZpbGU9ZXhhbXBsZS1wYWNrYWdlJTJGc3JjJTJGYW5vdGhlckV4cGVyaW1lbnQudml0cm8udHN4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VFeHBlcmltZW50UGF0aDogXCIvVXNlcnMvbW9yc2UvRG9jdW1lbnRzL0dpdEh1Yi9yZWFjdC1jb21pY3MvZXhhbXBsZXMvZXhhbXBsZS1wYWNrYWdlL3NyYy9hbm90aGVyRXhwZXJpbWVudC52aXRyby50c3hcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlRXhwb3J0czogKCkgPT4gaW1wb3J0KCcuL2V4YW1wbGUtcGFja2FnZS9zcmMvYW5vdGhlckV4cGVyaW1lbnQxLnZpdHJvLnRzeCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIi8/ZmlsZT1leGFtcGxlLXBhY2thZ2UlMkZzcmMlMkZhbm90aGVyRXhwZXJpbWVudDEudml0cm8udHN4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VFeHBlcmltZW50UGF0aDogXCIvVXNlcnMvbW9yc2UvRG9jdW1lbnRzL0dpdEh1Yi9yZWFjdC1jb21pY3MvZXhhbXBsZXMvZXhhbXBsZS1wYWNrYWdlL3NyYy9hbm90aGVyRXhwZXJpbWVudDEudml0cm8udHN4XCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUV4cG9ydHM6ICgpID0+IGltcG9ydCgnLi9leGFtcGxlLXBhY2thZ2Uvc3JjL2NoZWNrLXNvdXJjZW1hcHMtd29yay52aXRyby50c3gnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIvP2ZpbGU9ZXhhbXBsZS1wYWNrYWdlJTJGc3JjJTJGY2hlY2stc291cmNlbWFwcy13b3JrLnZpdHJvLnRzeFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlRXhwZXJpbWVudFBhdGg6IFwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL2V4YW1wbGUtcGFja2FnZS9zcmMvY2hlY2stc291cmNlbWFwcy13b3JrLnZpdHJvLnRzeFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVFeHBvcnRzOiAoKSA9PiBpbXBvcnQoJy4vZXhhbXBsZS1wYWNrYWdlL3NyYy9jb21wbGV4LWNvbXBvbmVudHMudml0cm8udHN4JyksXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiLz9maWxlPWV4YW1wbGUtcGFja2FnZSUyRnNyYyUyRmNvbXBsZXgtY29tcG9uZW50cy52aXRyby50c3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUV4cGVyaW1lbnRQYXRoOiBcIi9Vc2Vycy9tb3JzZS9Eb2N1bWVudHMvR2l0SHViL3JlYWN0LWNvbWljcy9leGFtcGxlcy9leGFtcGxlLXBhY2thZ2Uvc3JjL2NvbXBsZXgtY29tcG9uZW50cy52aXRyby50c3hcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlRXhwb3J0czogKCkgPT4gaW1wb3J0KCcuL2V4YW1wbGUtcGFja2FnZS9zcmMvZXhhbXBsZV9jb21wb25lbnQudml0cm8udHN4JyksXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiLz9maWxlPWV4YW1wbGUtcGFja2FnZSUyRnNyYyUyRmV4YW1wbGVfY29tcG9uZW50LnZpdHJvLnRzeFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlRXhwZXJpbWVudFBhdGg6IFwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL2V4YW1wbGUtcGFja2FnZS9zcmMvZXhhbXBsZV9jb21wb25lbnQudml0cm8udHN4XCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUV4cG9ydHM6ICgpID0+IGltcG9ydCgnLi9leGFtcGxlLXBhY2thZ2Uvc3JjL2V4cGVyaW1lbnQxLnZpdHJvLnRzeCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIi8/ZmlsZT1leGFtcGxlLXBhY2thZ2UlMkZzcmMlMkZleHBlcmltZW50MS52aXRyby50c3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUV4cGVyaW1lbnRQYXRoOiBcIi9Vc2Vycy9tb3JzZS9Eb2N1bWVudHMvR2l0SHViL3JlYWN0LWNvbWljcy9leGFtcGxlcy9leGFtcGxlLXBhY2thZ2Uvc3JjL2V4cGVyaW1lbnQxLnZpdHJvLnRzeFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVFeHBvcnRzOiAoKSA9PiBpbXBvcnQoJy4vZXhhbXBsZS1wYWNrYWdlL3NyYy9zdGlsbEFub3RoZXJFeHBlcmltZW50LnZpdHJvLnRzeCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIi8/ZmlsZT1leGFtcGxlLXBhY2thZ2UlMkZzcmMlMkZzdGlsbEFub3RoZXJFeHBlcmltZW50LnZpdHJvLnRzeFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlRXhwZXJpbWVudFBhdGg6IFwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL2V4YW1wbGUtcGFja2FnZS9zcmMvc3RpbGxBbm90aGVyRXhwZXJpbWVudC52aXRyby50c3hcIixcbiAgICAgICAgICAgICAgICAgICAgfVxuXVxuXG5jb25zdCBfX09WRVJSSURFU19fID0ge1xuXG4gICAgXCIvVXNlcnMvbW9yc2UvRG9jdW1lbnRzL0dpdEh1Yi9yZWFjdC1jb21pY3MvZXhhbXBsZXMvZXhhbXBsZS1wYWNrYWdlLXNjb3BlL2V4YW1wbGUtc3ViLXBhY2thZ2UtMlwiOiAoKSA9PiBpbXBvcnQoXCIuL2V4YW1wbGUtcGFja2FnZS1zY29wZS9leGFtcGxlLXN1Yi1wYWNrYWdlLTIvdml0cm8tb3ZlcnJpZGVzLmpzeFwiKVxuLFxuXG4gICAgXCIvVXNlcnMvbW9yc2UvRG9jdW1lbnRzL0dpdEh1Yi9yZWFjdC1jb21pY3MvZXhhbXBsZXMvZXhhbXBsZS1wYWNrYWdlXCI6ICgpID0+IGltcG9ydChcIi4vZXhhbXBsZS1wYWNrYWdlL3ZpdHJvLW92ZXJyaWRlcy5qc3hcIilcblxufVxuXG5jb25zdCBfX0NPTkZJR19fID0gSlNPTi5wYXJzZShge1xuICAgIFwiZ2xvYnNcIjogW1xuICAgICAgICBcIi4vKiovKi52aXRyby5qc1wiLFxuICAgICAgICBcIi4vKiovKi52aXRyby5qc3hcIixcbiAgICAgICAgXCIuLyoqLyoudml0cm8udHN4XCJcbiAgICBdLFxuICAgIFwiYnVuZGxlc3NDb25maWdcIjoge1xuICAgICAgICBcInByZWJ1bmRsZVwiOiB7fVxuICAgIH0sXG4gICAgXCJpZ25vcmVcIjogW1xuICAgICAgICBcIl9fbWlycm9yX18vKipcIlxuICAgIF0sXG4gICAgXCJsaW5rc1wiOiB7XG4gICAgICAgIFwiZ2l0aHViXCI6IHtcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3JlbW9yc2VzL3ZpdHJvXCIsXG4gICAgICAgICAgICBcInBhdGhcIjogXCJleGFtcGxlc1wiLFxuICAgICAgICAgICAgXCJicmFuY2hcIjogXCJtYXN0ZXJcIlxuICAgICAgICB9XG4gICAgfVxufWApXG5cbmNvbnN0IHJvdXRlcyA9IF9fUk9VVEVTX19cbiAgICAuZmlsdGVyKCh4KSA9PiB4LnVybClcbiAgICAubWFwKCh7IGZpbGVFeHBvcnRzLCB1cmwsIHNvdXJjZUV4cGVyaW1lbnRQYXRoIH0pID0+IHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50c092ZXJyaWRlc1Njb3BlID0gT2JqZWN0LmtleXMoX19PVkVSUklERVNfXykuZmluZChcbiAgICAgICAgICAgIChzY29wZURpcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzSW5zaWRlID0gIXBhdGhcbiAgICAgICAgICAgICAgICAgICAgLnJlbGF0aXZlKHNjb3BlRGlyLCBzb3VyY2VFeHBlcmltZW50UGF0aClcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0c1dpdGgoJy4uJylcbiAgICAgICAgICAgICAgICBpZiAoaXNJbnNpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICApXG4gICAgICAgIGNvbnN0IG92ZXJyaWRlcyA9IF9fT1ZFUlJJREVTX19bY29tcG9uZW50c092ZXJyaWRlc1Njb3BlXVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgcGFyYW06IGdldEZpbGVQYXJhbSh1cmwpLFxuICAgICAgICAgICAgQ29tcG9uZW50OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPEV4cGVyaW1lbnRQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWc9e19fQ09ORklHX199XG4gICAgICAgICAgICAgICAgICAgICAgICByb290PXtfX1JPT1RfX31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHNPdmVycmlkZXM9e292ZXJyaWRlc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVyaW1lbnRzVHJlZT17ZXhwZXJpbWVudHNUcmVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlRXhwZXJpbWVudFBhdGg9e3NvdXJjZUV4cGVyaW1lbnRQYXRofVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUV4cG9ydHM9e2ZpbGVFeHBvcnRzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9KVxuXG5mdW5jdGlvbiBNYWluQXBwKCkge1xuICAgIGNvbnN0IFtmaWxlUGFyYW0sIHNldEZpbGVQYXJhbV0gPSB1c2VTdGF0ZSgoKSA9PlxuICAgICAgICBnZXRGaWxlUGFyYW0od2luZG93LmxvY2F0aW9uLmhyZWYpLFxuICAgIClcbiAgICB1c2VSb3V0ZUNoYW5nZWQoKCkgPT4ge1xuICAgICAgICBzZXRGaWxlUGFyYW0oZ2V0RmlsZVBhcmFtKHdpbmRvdy5sb2NhdGlvbi5ocmVmKSlcbiAgICB9KVxuICAgIGlmICghZmlsZVBhcmFtKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Vml0cm9BcHAgZXhwZXJpbWVudHNUcmVlPXtleHBlcmltZW50c1RyZWV9PlxuICAgICAgICAgICAgICAgIDxIb21lUGFnZSBleHBlcmltZW50c1RyZWU9e2V4cGVyaW1lbnRzVHJlZX0gLz5cbiAgICAgICAgICAgICAgICB7LyogVE9ETyBsZXQgdXNlciBjdXN0b21pemUgaG9tZSAgKi99XG4gICAgICAgICAgICA8L1ZpdHJvQXBwPlxuICAgICAgICApXG4gICAgfVxuICAgIGNvbnN0IHJvdXRlID0gcm91dGVzLmZpbmQoKHJvdXRlKSA9PiB7XG4gICAgICAgIHJldHVybiByb3V0ZS5wYXJhbSA9PT0gZmlsZVBhcmFtXG4gICAgfSlcblxuICAgIGlmICghcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIDxWaXRyb0FwcCBleHBlcmltZW50c1RyZWU9e2V4cGVyaW1lbnRzVHJlZX0+PC9WaXRyb0FwcD5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpdHJvQXBwIGV4cGVyaW1lbnRzVHJlZT17ZXhwZXJpbWVudHNUcmVlfT5cbiAgICAgICAgICAgIDxyb3V0ZS5Db21wb25lbnQgLz5cbiAgICAgICAgPC9WaXRyb0FwcD5cbiAgICApXG59XG5cblJlYWN0RE9NLnJlbmRlcig8TWFpbkFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSlcbiJdfQ==