"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/resume/page",{

/***/ "(app-pages-browser)/./Components/Stairs.tsx":
/*!*******************************!*\
  !*** ./Components/Stairs.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _gsap_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gsap/react */ \"(app-pages-browser)/./node_modules/@gsap/react/src/index.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Stairs = ()=>{\n    _s();\n    const stairsContainer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [width, setWidth] = useState(window.innerWidth);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleResize = ()=>{\n            setWidth(window.innerWidth);\n        };\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    (0,_gsap_react__WEBPACK_IMPORTED_MODULE_1__.useGSAP)(()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(\".stairs\", {\n            height: \"100vh\",\n            zIndex: 10,\n            duration: 1,\n            repeat: 1,\n            yoyo: true,\n            yoyoEase: \"power2.inOut\",\n            stagger: 0.1\n        });\n    }, {\n        scope: stairsContainer\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: stairsContainer,\n        className: \"absolu{`e bottom-0 ${wi{`th} left-0 ${w`}dth} h-screen w-`}creen flex overflow-hidden -z-[99]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"stairs h-0 \".concat(width, \" bg-gray-400\")\n            }, void 0, false, {\n                fileName: \"D:\\\\Playground\\\\Next.js\\\\portfolio\\\\Components\\\\Stairs.tsx\",\n                lineNumber: 36,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"stairs h-0 \".concat(width, \" bg-gray-400\")\n            }, void 0, false, {\n                fileName: \"D:\\\\Playground\\\\Next.js\\\\portfolio\\\\Components\\\\Stairs.tsx\",\n                lineNumber: 37,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"stairs h-0 \".concat(width, \" bg-gray-400\")\n            }, void 0, false, {\n                fileName: \"D:\\\\Playground\\\\Next.js\\\\portfolio\\\\Components\\\\Stairs.tsx\",\n                lineNumber: 38,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"stairs h-0 \".concat(width, \" bg-gray-400\")\n            }, void 0, false, {\n                fileName: \"D:\\\\Playground\\\\Next.js\\\\portfolio\\\\Components\\\\Stairs.tsx\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"stairs h-0 \".concat(width, \" bg-gray-400\")\n            }, void 0, false, {\n                fileName: \"D:\\\\Playground\\\\Next.js\\\\portfolio\\\\Components\\\\Stairs.tsx\",\n                lineNumber: 40,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"stairs h-0 \".concat(width, \" bg-gray-400\")\n            }, void 0, false, {\n                fileName: \"D:\\\\Playground\\\\Next.js\\\\portfolio\\\\Components\\\\Stairs.tsx\",\n                lineNumber: 41,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"stairs h-0 \".concat(width, \" bg-gray-400\")\n            }, void 0, false, {\n                fileName: \"D:\\\\Playground\\\\Next.js\\\\portfolio\\\\Components\\\\Stairs.tsx\",\n                lineNumber: 42,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Playground\\\\Next.js\\\\portfolio\\\\Components\\\\Stairs.tsx\",\n        lineNumber: 35,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Stairs, \"vA8kC+J/e6K8gUKJachM4d6PihY=\", false, function() {\n    return [\n        _gsap_react__WEBPACK_IMPORTED_MODULE_1__.useGSAP\n    ];\n});\n_c = Stairs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stairs);\nvar _c;\n$RefreshReg$(_c, \"Stairs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvU3RhaXJzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNzQztBQUNWO0FBQ3FCO0FBRWpELE1BQU1LLFNBQVM7O0lBQ2IsTUFBTUMsa0JBQWtCRiw2Q0FBTUEsQ0FBQztJQUMvQixNQUFNLENBQUNHLE9BQU9DLFNBQVMsR0FBR0MsU0FBU0MsT0FBT0MsVUFBVTtJQUVwRFIsZ0RBQVNBLENBQUM7UUFDUixNQUFNUyxlQUFlO1lBQ25CSixTQUFTRSxPQUFPQyxVQUFVO1FBQzVCO1FBRUFELE9BQU9HLGdCQUFnQixDQUFDLFVBQVVEO1FBRWxDLE9BQU87WUFDTEYsT0FBT0ksbUJBQW1CLENBQUMsVUFBVUY7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFDTFosb0RBQU9BLENBQ0w7UUFDRUMsc0NBQUlBLENBQUNjLEVBQUUsQ0FBQyxXQUFXO1lBQ2pCQyxRQUFTO1lBQ1RDLFFBQVE7WUFDUkMsVUFBVTtZQUNWQyxRQUFRO1lBQ1JDLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxTQUFTO1FBQ1g7SUFDRixHQUNBO1FBQUVDLE9BQU9qQjtJQUFnQjtJQUUzQixxQkFBTyw4REFBQ2tCO1FBQUlDLEtBQUtuQjtRQUFpQm9CLFdBQVU7OzBCQUMxQyw4REFBQ0Y7Z0JBQUlFLFdBQVcsY0FBb0IsT0FBTm5CLE9BQU07Ozs7OzswQkFDcEMsOERBQUNpQjtnQkFBSUUsV0FBVyxjQUFvQixPQUFObkIsT0FBTTs7Ozs7OzBCQUNwQyw4REFBQ2lCO2dCQUFJRSxXQUFXLGNBQW9CLE9BQU5uQixPQUFNOzs7Ozs7MEJBQ3BDLDhEQUFDaUI7Z0JBQUlFLFdBQVcsY0FBb0IsT0FBTm5CLE9BQU07Ozs7OzswQkFDcEMsOERBQUNpQjtnQkFBSUUsV0FBVyxjQUFvQixPQUFObkIsT0FBTTs7Ozs7OzBCQUNwQyw4REFBQ2lCO2dCQUFJRSxXQUFXLGNBQW9CLE9BQU5uQixPQUFNOzs7Ozs7MEJBQ3BDLDhEQUFDaUI7Z0JBQUlFLFdBQVcsY0FBb0IsT0FBTm5CLE9BQU07Ozs7Ozs7Ozs7OztBQUV4QztHQXRDTUY7O1FBZUpMLGdEQUFPQTs7O0tBZkhLO0FBd0NOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvU3RhaXJzLnRzeD9jYmRjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgeyB1c2VHU0FQIH0gZnJvbSBcIkBnc2FwL3JlYWN0XCI7XHJcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFN0YWlycyA9ICgpID0+IHtcclxuICBjb25zdCBzdGFpcnNDb250YWluZXIgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZSh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgIHNldFdpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuICB1c2VHU0FQKFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBnc2FwLnRvKFwiLnN0YWlyc1wiLCB7XHJcbiAgICAgICAgaGVpZ2h0IDogXCIxMDB2aFwiLFxyXG4gICAgICAgIHpJbmRleDogMTAsXHJcbiAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgICAgcmVwZWF0OiAxLFxyXG4gICAgICAgIHlveW86IHRydWUsXHJcbiAgICAgICAgeW95b0Vhc2U6IFwicG93ZXIyLmluT3V0XCIsXHJcbiAgICAgICAgc3RhZ2dlcjogMC4xLFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIHsgc2NvcGU6IHN0YWlyc0NvbnRhaW5lciB9XHJcbiAgKTtcclxuICByZXR1cm4gPGRpdiByZWY9e3N0YWlyc0NvbnRhaW5lcn0gY2xhc3NOYW1lPVwiYWJzb2x1e2BlIGJvdHRvbS0wICR7d2l7YHRofSBsZWZ0LTAgJHt3YH1kdGh9IGgtc2NyZWVuIHctYH1jcmVlbiBmbGV4IG92ZXJmbG93LWhpZGRlbiAtei1bOTldXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHN0YWlycyBoLTAgJHt3aWR0aH0gYmctZ3JheS00MDBgfT48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgc3RhaXJzIGgtMCAke3dpZHRofSBiZy1ncmF5LTQwMGB9PjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BzdGFpcnMgaC0wICR7d2lkdGh9IGJnLWdyYXktNDAwYH0+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHN0YWlycyBoLTAgJHt3aWR0aH0gYmctZ3JheS00MDBgfT48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgc3RhaXJzIGgtMCAke3dpZHRofSBiZy1ncmF5LTQwMGB9PjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BzdGFpcnMgaC0wICR7d2lkdGh9IGJnLWdyYXktNDAwYH0+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHN0YWlycyBoLTAgJHt3aWR0aH0gYmctZ3JheS00MDBgfT48L2Rpdj5cclxuICA8L2Rpdj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFpcnM7XHJcbiJdLCJuYW1lcyI6WyJ1c2VHU0FQIiwiZ3NhcCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiU3RhaXJzIiwic3RhaXJzQ29udGFpbmVyIiwid2lkdGgiLCJzZXRXaWR0aCIsInVzZVN0YXRlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhhbmRsZVJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG8iLCJoZWlnaHQiLCJ6SW5kZXgiLCJkdXJhdGlvbiIsInJlcGVhdCIsInlveW8iLCJ5b3lvRWFzZSIsInN0YWdnZXIiLCJzY29wZSIsImRpdiIsInJlZiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Stairs.tsx\n"));

/***/ })

});