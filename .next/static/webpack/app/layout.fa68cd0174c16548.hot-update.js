"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"ab2712f41efd\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2E5N2IiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJhYjI3MTJmNDFlZmRcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./Components/Navbar.tsx":
/*!*******************************!*\
  !*** ./Components/Navbar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _public_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/public/utils */ \"(app-pages-browser)/./public/utils/index.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _HamMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HamMenu */ \"(app-pages-browser)/./Components/HamMenu.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" flex justify-between md:px-12 px-6 w-[100vw] lg:w-[70vw] items-center h-[10vh]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                href: \"/\",\n                className: \"navLeft hover:opacity-75 flex items-center font-semibold text-2xl\",\n                children: [\n                    \"Uzair \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-neon-green \",\n                        children: \".\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Playground\\\\Next.js\\\\portfolio\\\\Components\\\\Navbar.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 106\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Playground\\\\Next.js\\\\portfolio\\\\Components\\\\Navbar.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navRight max-sm:hidden select-none\",\n                children: _public_utils__WEBPACK_IMPORTED_MODULE_1__.navbarLinks.map((link, index)=>{\n                    const isActive = pathname.includes(link.href) ? \"text-neon-green border-b-2 border-neon-green\" : \"\";\n                    const specialButton = link.name === \"Hire Me\" ? \"hover:bg-neon-green text-white border-2 border-white rounded-2xl hover:text-zinc-600 hover:border-b-0 font-semibold\" : \"\";\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: link.href,\n                        className: \"text-xs md:mx-3 \".concat(isActive, \" p-2 \").concat(!specialButton && \"hover:text-neon-green\", \" \").concat(specialButton, \" transition-all\"),\n                        children: link.name\n                    }, index, false, {\n                        fileName: \"D:\\\\Playground\\\\Next.js\\\\portfolio\\\\Components\\\\Navbar.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\Playground\\\\Next.js\\\\portfolio\\\\Components\\\\Navbar.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HamMenu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Playground\\\\Next.js\\\\portfolio\\\\Components\\\\Navbar.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Playground\\\\Next.js\\\\portfolio\\\\Components\\\\Navbar.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvTmF2YmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzRDO0FBQ2hCO0FBQ2lCO0FBQ3BCO0FBQ007QUFFL0IsTUFBTUssU0FBUzs7SUFDYixNQUFNQyxXQUFXSiw0REFBV0E7SUFDNUIscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDUCxpREFBSUE7Z0JBQUNRLE1BQUs7Z0JBQUlELFdBQVU7O29CQUFvRTtrQ0FBTSw4REFBQ0U7d0JBQUtGLFdBQVU7a0NBQW1COzs7Ozs7Ozs7Ozs7MEJBQ3RJLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWlIsc0RBQVdBLENBQUNXLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQztvQkFDdEIsTUFBTUMsV0FBV1IsU0FBU1MsUUFBUSxDQUFDSCxLQUFLSCxJQUFJLElBQUksaURBQWlEO29CQUNqRyxNQUFNTyxnQkFBZ0JKLEtBQUtLLElBQUksS0FBSyxZQUFZLHdIQUF3SDtvQkFDeEsscUJBQ0UsOERBQUNoQixpREFBSUE7d0JBQWFRLE1BQU1HLEtBQUtILElBQUk7d0JBQUVELFdBQVcsbUJBQW1DLE9BQWhCTSxVQUFTLFNBQW9ERSxPQUE3QyxDQUFDQSxpQkFBaUIseUJBQXdCLEtBQWlCLE9BQWRBLGVBQWM7a0NBQW1CSixLQUFLSyxJQUFJO3VCQUE3Sko7Ozs7O2dCQUNaOzs7Ozs7MEJBR0wsOERBQUNULGdEQUFPQTs7Ozs7Ozs7Ozs7QUFHZDtHQWpCTUM7O1FBQ2FILHdEQUFXQTs7O0tBRHhCRztBQW1CTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL05hdmJhci50c3g/ZjU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IHsgbmF2YmFyTGlua3MgfSBmcm9tICdAL3B1YmxpYy91dGlscydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGFtTWVudSBmcm9tICcuL0hhbU1lbnUnXHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPScgZmxleCBqdXN0aWZ5LWJldHdlZW4gbWQ6cHgtMTIgcHgtNiB3LVsxMDB2d10gbGc6dy1bNzB2d10gaXRlbXMtY2VudGVyIGgtWzEwdmhdJz5cclxuICAgICAgPExpbmsgaHJlZj0nLycgY2xhc3NOYW1lPVwibmF2TGVmdCBob3ZlcjpvcGFjaXR5LTc1IGZsZXggaXRlbXMtY2VudGVyIGZvbnQtc2VtaWJvbGQgdGV4dC0yeGxcIj5VemFpciA8c3BhbiBjbGFzc05hbWU9J3RleHQtbmVvbi1ncmVlbiAnPi48L3NwYW4+PC9MaW5rPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlJpZ2h0IG1heC1zbTpoaWRkZW4gc2VsZWN0LW5vbmVcIj5cclxuICAgICAgICB7bmF2YmFyTGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBwYXRobmFtZS5pbmNsdWRlcyhsaW5rLmhyZWYpID8gJ3RleHQtbmVvbi1ncmVlbiBib3JkZXItYi0yIGJvcmRlci1uZW9uLWdyZWVuJyA6ICcnXHJcbiAgICAgICAgICBjb25zdCBzcGVjaWFsQnV0dG9uID0gbGluay5uYW1lID09PSAnSGlyZSBNZScgPyAnaG92ZXI6YmctbmVvbi1ncmVlbiB0ZXh0LXdoaXRlIGJvcmRlci0yIGJvcmRlci13aGl0ZSByb3VuZGVkLTJ4bCBob3Zlcjp0ZXh0LXppbmMtNjAwIGhvdmVyOmJvcmRlci1iLTAgZm9udC1zZW1pYm9sZCcgOiAnJ1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExpbmsga2V5PXtpbmRleH0gaHJlZj17bGluay5ocmVmfSBjbGFzc05hbWU9e2B0ZXh0LXhzIG1kOm14LTMgJHtpc0FjdGl2ZX0gcC0yICR7IXNwZWNpYWxCdXR0b24gJiYgJ2hvdmVyOnRleHQtbmVvbi1ncmVlbid9ICR7c3BlY2lhbEJ1dHRvbn0gdHJhbnNpdGlvbi1hbGxgfT57bGluay5uYW1lfTwvTGluaz4gIFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEhhbU1lbnUgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyXHJcbiJdLCJuYW1lcyI6WyJuYXZiYXJMaW5rcyIsIkxpbmsiLCJ1c2VQYXRobmFtZSIsIlJlYWN0IiwiSGFtTWVudSIsIk5hdmJhciIsInBhdGhuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsInNwYW4iLCJtYXAiLCJsaW5rIiwiaW5kZXgiLCJpc0FjdGl2ZSIsImluY2x1ZGVzIiwic3BlY2lhbEJ1dHRvbiIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Navbar.tsx\n"));

/***/ })

});