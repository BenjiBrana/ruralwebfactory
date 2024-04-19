"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@vercel";
exports.ids = ["vendor-chunks/@vercel"];
exports.modules = {

/***/ "(ssr)/./node_modules/@vercel/speed-insights/dist/next/index.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/@vercel/speed-insights/dist/next/index.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SpeedInsights: () => (/* binding */ SpeedInsights2)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var next_navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation.js */ \"(ssr)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ SpeedInsights auto */ // src/nextjs/index.tsx\n\n// src/react/index.tsx\n\n// package.json\nvar name = \"@vercel/speed-insights\";\nvar version = \"1.0.10\";\n// src/queue.ts\nvar initQueue = ()=>{\n    if (window.si) return;\n    window.si = function a(...params) {\n        (window.siq = window.siq || []).push(params);\n    };\n};\n// src/utils.ts\nfunction isBrowser() {\n    return \"undefined\" !== \"undefined\";\n}\nfunction detectEnvironment() {\n    try {\n        const env = \"development\";\n        if (env === \"development\" || env === \"test\") {\n            return \"development\";\n        }\n    } catch (e) {}\n    return \"production\";\n}\nfunction isDevelopment() {\n    return detectEnvironment() === \"development\";\n}\nfunction computeRoute(pathname, pathParams) {\n    if (!pathname || !pathParams) {\n        return pathname;\n    }\n    let result = pathname;\n    try {\n        for (const [key, valueOrArray] of Object.entries(pathParams)){\n            const isValueArray = Array.isArray(valueOrArray);\n            const value = isValueArray ? valueOrArray.join(\"/\") : valueOrArray;\n            const expr = isValueArray ? `...${key}` : key;\n            const matcher = new RegExp(`/${escapeRegExp(value)}(?=[/?#]|$)`);\n            if (matcher.test(result)) {\n                result = result.replace(matcher, `/[${expr}]`);\n            }\n        }\n        return result;\n    } catch (e) {\n        return pathname;\n    }\n}\nfunction escapeRegExp(string) {\n    return string.replace(/[.*+?^${}()|[\\]\\\\]/g, \"\\\\$&\");\n}\n// src/generic.ts\nvar SCRIPT_URL = `https://va.vercel-scripts.com/v1/speed-insights`;\nvar PROD_SCRIPT_URL = `${SCRIPT_URL}/script.js`;\nvar DEV_SCRIPT_URL = `${SCRIPT_URL}/script.debug.js`;\nvar PROXY_SCRIPT_URL = `/_vercel/speed-insights/script.js`;\nfunction injectSpeedInsights(props = {}) {\n    var _a;\n    if (!isBrowser() || props.route === null) return null;\n    initQueue();\n    const isSelfHosted = Boolean(props.dsn);\n    const productionScript = isSelfHosted ? PROD_SCRIPT_URL : PROXY_SCRIPT_URL;\n    const src = props.scriptSrc || (isDevelopment() ? DEV_SCRIPT_URL : productionScript);\n    if (document.head.querySelector(`script[src*=\"${src}\"]`)) return null;\n    if (props.beforeSend) {\n        (_a = window.si) == null ? void 0 : _a.call(window, \"beforeSend\", props.beforeSend);\n    }\n    const script = document.createElement(\"script\");\n    script.src = src;\n    script.defer = true;\n    script.dataset.sdkn = name + (props.framework ? `/${props.framework}` : \"\");\n    script.dataset.sdkv = version;\n    if (props.sampleRate) {\n        script.dataset.sampleRate = props.sampleRate.toString();\n    }\n    if (props.route) {\n        script.dataset.route = props.route;\n    }\n    if (props.endpoint) {\n        script.dataset.endpoint = props.endpoint;\n    }\n    if (props.dsn) {\n        script.dataset.dsn = props.dsn;\n    }\n    if (isDevelopment() && props.debug === false) {\n        script.dataset.debug = \"false\";\n    }\n    script.onerror = ()=>{\n        console.log(`[Vercel Speed Insights] Failed to load script from ${src}. Please check if any content blockers are enabled and try again.`);\n    };\n    document.head.appendChild(script);\n    return {\n        setRoute: (route)=>{\n            script.dataset.route = route ?? void 0;\n        }\n    };\n}\n// src/react/index.tsx\nfunction SpeedInsights(props) {\n    const setScriptRoute = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (!setScriptRoute.current) {\n            const script = injectSpeedInsights({\n                framework: props.framework || \"react\",\n                ...props\n            });\n            if (script) {\n                setScriptRoute.current = script.setRoute;\n            }\n        } else if (props.route) {\n            setScriptRoute.current(props.route);\n        }\n    }, [\n        props.route\n    ]);\n    return null;\n}\n// src/nextjs/utils.ts\n\nvar useRoute = ()=>{\n    const params = (0,next_navigation_js__WEBPACK_IMPORTED_MODULE_1__.useParams)();\n    const searchParams = (0,next_navigation_js__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const path = (0,next_navigation_js__WEBPACK_IMPORTED_MODULE_1__.usePathname)();\n    const finalParams = {\n        ...Object.fromEntries(searchParams.entries()),\n        ...params || {}\n    };\n    return params ? computeRoute(path, finalParams) : null;\n};\n// src/nextjs/index.tsx\nfunction SpeedInsightsComponent(props) {\n    const route = useRoute();\n    return /* @__PURE__ */ /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SpeedInsights, {\n        route,\n        ...props,\n        framework: \"next\"\n    });\n}\nfunction SpeedInsights2(props) {\n    return /* @__PURE__ */ /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n        fallback: null\n    }, /* @__PURE__ */ /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SpeedInsightsComponent, {\n        ...props\n    }));\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHZlcmNlbC9zcGVlZC1pbnNpZ2h0cy9kaXN0L25leHQvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7OzttRUFFQSx1QkFBdUI7QUFDaUI7QUFFeEMsc0JBQXNCO0FBQ29CO0FBRTFDLGVBQWU7QUFDZixJQUFJSSxPQUFPO0FBQ1gsSUFBSUMsVUFBVTtBQUVkLGVBQWU7QUFDZixJQUFJQyxZQUFZO0lBQ2QsSUFBSUMsT0FBT0MsRUFBRSxFQUNYO0lBQ0ZELE9BQU9DLEVBQUUsR0FBRyxTQUFTQyxFQUFFLEdBQUdDLE1BQU07UUFDN0JILENBQUFBLE9BQU9JLEdBQUcsR0FBR0osT0FBT0ksR0FBRyxJQUFJLEVBQUUsRUFBRUMsSUFBSSxDQUFDRjtJQUN2QztBQUNGO0FBRUEsZUFBZTtBQUNmLFNBQVNHO0lBQ1AsT0FBTyxnQkFBa0I7QUFDM0I7QUFDQSxTQUFTQztJQUNQLElBQUk7UUFDRixNQUFNQyxNQTNCVjtRQTRCSSxJQUFJQSxRQUFRLGlCQUFpQkEsUUFBUSxRQUFRO1lBQzNDLE9BQU87UUFDVDtJQUNGLEVBQUUsT0FBT0MsR0FBRyxDQUNaO0lBQ0EsT0FBTztBQUNUO0FBQ0EsU0FBU0M7SUFDUCxPQUFPSCx3QkFBd0I7QUFDakM7QUFDQSxTQUFTSSxhQUFhQyxRQUFRLEVBQUVDLFVBQVU7SUFDeEMsSUFBSSxDQUFDRCxZQUFZLENBQUNDLFlBQVk7UUFDNUIsT0FBT0Q7SUFDVDtJQUNBLElBQUlFLFNBQVNGO0lBQ2IsSUFBSTtRQUNGLEtBQUssTUFBTSxDQUFDRyxLQUFLQyxhQUFhLElBQUlDLE9BQU9DLE9BQU8sQ0FBQ0wsWUFBYTtZQUM1RCxNQUFNTSxlQUFlQyxNQUFNQyxPQUFPLENBQUNMO1lBQ25DLE1BQU1NLFFBQVFILGVBQWVILGFBQWFPLElBQUksQ0FBQyxPQUFPUDtZQUN0RCxNQUFNUSxPQUFPTCxlQUFlLENBQUMsR0FBRyxFQUFFSixJQUFJLENBQUMsR0FBR0E7WUFDMUMsTUFBTVUsVUFBVSxJQUFJQyxP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Q0FBa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jY3AxX2JyYW5hLy4vbm9kZV9tb2R1bGVzL0B2ZXJjZWwvc3BlZWQtaW5zaWdodHMvZGlzdC9uZXh0L2luZGV4Lm1qcz8xZWVlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG4vLyBzcmMvbmV4dGpzL2luZGV4LnRzeFxuaW1wb3J0IFJlYWN0LCB7IFN1c3BlbnNlIH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIHNyYy9yZWFjdC9pbmRleC50c3hcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIHBhY2thZ2UuanNvblxudmFyIG5hbWUgPSBcIkB2ZXJjZWwvc3BlZWQtaW5zaWdodHNcIjtcbnZhciB2ZXJzaW9uID0gXCIxLjAuMTBcIjtcblxuLy8gc3JjL3F1ZXVlLnRzXG52YXIgaW5pdFF1ZXVlID0gKCkgPT4ge1xuICBpZiAod2luZG93LnNpKVxuICAgIHJldHVybjtcbiAgd2luZG93LnNpID0gZnVuY3Rpb24gYSguLi5wYXJhbXMpIHtcbiAgICAod2luZG93LnNpcSA9IHdpbmRvdy5zaXEgfHwgW10pLnB1c2gocGFyYW1zKTtcbiAgfTtcbn07XG5cbi8vIHNyYy91dGlscy50c1xuZnVuY3Rpb24gaXNCcm93c2VyKCkge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIjtcbn1cbmZ1bmN0aW9uIGRldGVjdEVudmlyb25tZW50KCkge1xuICB0cnkge1xuICAgIGNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WO1xuICAgIGlmIChlbnYgPT09IFwiZGV2ZWxvcG1lbnRcIiB8fCBlbnYgPT09IFwidGVzdFwiKSB7XG4gICAgICByZXR1cm4gXCJkZXZlbG9wbWVudFwiO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICB9XG4gIHJldHVybiBcInByb2R1Y3Rpb25cIjtcbn1cbmZ1bmN0aW9uIGlzRGV2ZWxvcG1lbnQoKSB7XG4gIHJldHVybiBkZXRlY3RFbnZpcm9ubWVudCgpID09PSBcImRldmVsb3BtZW50XCI7XG59XG5mdW5jdGlvbiBjb21wdXRlUm91dGUocGF0aG5hbWUsIHBhdGhQYXJhbXMpIHtcbiAgaWYgKCFwYXRobmFtZSB8fCAhcGF0aFBhcmFtcykge1xuICAgIHJldHVybiBwYXRobmFtZTtcbiAgfVxuICBsZXQgcmVzdWx0ID0gcGF0aG5hbWU7XG4gIHRyeSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZU9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKHBhdGhQYXJhbXMpKSB7XG4gICAgICBjb25zdCBpc1ZhbHVlQXJyYXkgPSBBcnJheS5pc0FycmF5KHZhbHVlT3JBcnJheSk7XG4gICAgICBjb25zdCB2YWx1ZSA9IGlzVmFsdWVBcnJheSA/IHZhbHVlT3JBcnJheS5qb2luKFwiL1wiKSA6IHZhbHVlT3JBcnJheTtcbiAgICAgIGNvbnN0IGV4cHIgPSBpc1ZhbHVlQXJyYXkgPyBgLi4uJHtrZXl9YCA6IGtleTtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBuZXcgUmVnRXhwKGAvJHtlc2NhcGVSZWdFeHAodmFsdWUpfSg/PVsvPyNdfCQpYCk7XG4gICAgICBpZiAobWF0Y2hlci50ZXN0KHJlc3VsdCkpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UobWF0Y2hlciwgYC9bJHtleHByfV1gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBwYXRobmFtZTtcbiAgfVxufVxuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCBcIlxcXFwkJlwiKTtcbn1cblxuLy8gc3JjL2dlbmVyaWMudHNcbnZhciBTQ1JJUFRfVVJMID0gYGh0dHBzOi8vdmEudmVyY2VsLXNjcmlwdHMuY29tL3YxL3NwZWVkLWluc2lnaHRzYDtcbnZhciBQUk9EX1NDUklQVF9VUkwgPSBgJHtTQ1JJUFRfVVJMfS9zY3JpcHQuanNgO1xudmFyIERFVl9TQ1JJUFRfVVJMID0gYCR7U0NSSVBUX1VSTH0vc2NyaXB0LmRlYnVnLmpzYDtcbnZhciBQUk9YWV9TQ1JJUFRfVVJMID0gYC9fdmVyY2VsL3NwZWVkLWluc2lnaHRzL3NjcmlwdC5qc2A7XG5mdW5jdGlvbiBpbmplY3RTcGVlZEluc2lnaHRzKHByb3BzID0ge30pIHtcbiAgdmFyIF9hO1xuICBpZiAoIWlzQnJvd3NlcigpIHx8IHByb3BzLnJvdXRlID09PSBudWxsKVxuICAgIHJldHVybiBudWxsO1xuICBpbml0UXVldWUoKTtcbiAgY29uc3QgaXNTZWxmSG9zdGVkID0gQm9vbGVhbihwcm9wcy5kc24pO1xuICBjb25zdCBwcm9kdWN0aW9uU2NyaXB0ID0gaXNTZWxmSG9zdGVkID8gUFJPRF9TQ1JJUFRfVVJMIDogUFJPWFlfU0NSSVBUX1VSTDtcbiAgY29uc3Qgc3JjID0gcHJvcHMuc2NyaXB0U3JjIHx8IChpc0RldmVsb3BtZW50KCkgPyBERVZfU0NSSVBUX1VSTCA6IHByb2R1Y3Rpb25TY3JpcHQpO1xuICBpZiAoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjKj1cIiR7c3JjfVwiXWApKVxuICAgIHJldHVybiBudWxsO1xuICBpZiAocHJvcHMuYmVmb3JlU2VuZCkge1xuICAgIChfYSA9IHdpbmRvdy5zaSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNhbGwod2luZG93LCBcImJlZm9yZVNlbmRcIiwgcHJvcHMuYmVmb3JlU2VuZCk7XG4gIH1cbiAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgc2NyaXB0LnNyYyA9IHNyYztcbiAgc2NyaXB0LmRlZmVyID0gdHJ1ZTtcbiAgc2NyaXB0LmRhdGFzZXQuc2RrbiA9IG5hbWUgKyAocHJvcHMuZnJhbWV3b3JrID8gYC8ke3Byb3BzLmZyYW1ld29ya31gIDogXCJcIik7XG4gIHNjcmlwdC5kYXRhc2V0LnNka3YgPSB2ZXJzaW9uO1xuICBpZiAocHJvcHMuc2FtcGxlUmF0ZSkge1xuICAgIHNjcmlwdC5kYXRhc2V0LnNhbXBsZVJhdGUgPSBwcm9wcy5zYW1wbGVSYXRlLnRvU3RyaW5nKCk7XG4gIH1cbiAgaWYgKHByb3BzLnJvdXRlKSB7XG4gICAgc2NyaXB0LmRhdGFzZXQucm91dGUgPSBwcm9wcy5yb3V0ZTtcbiAgfVxuICBpZiAocHJvcHMuZW5kcG9pbnQpIHtcbiAgICBzY3JpcHQuZGF0YXNldC5lbmRwb2ludCA9IHByb3BzLmVuZHBvaW50O1xuICB9XG4gIGlmIChwcm9wcy5kc24pIHtcbiAgICBzY3JpcHQuZGF0YXNldC5kc24gPSBwcm9wcy5kc247XG4gIH1cbiAgaWYgKGlzRGV2ZWxvcG1lbnQoKSAmJiBwcm9wcy5kZWJ1ZyA9PT0gZmFsc2UpIHtcbiAgICBzY3JpcHQuZGF0YXNldC5kZWJ1ZyA9IFwiZmFsc2VcIjtcbiAgfVxuICBzY3JpcHQub25lcnJvciA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBbVmVyY2VsIFNwZWVkIEluc2lnaHRzXSBGYWlsZWQgdG8gbG9hZCBzY3JpcHQgZnJvbSAke3NyY30uIFBsZWFzZSBjaGVjayBpZiBhbnkgY29udGVudCBibG9ja2VycyBhcmUgZW5hYmxlZCBhbmQgdHJ5IGFnYWluLmBcbiAgICApO1xuICB9O1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIHJldHVybiB7XG4gICAgc2V0Um91dGU6IChyb3V0ZSkgPT4ge1xuICAgICAgc2NyaXB0LmRhdGFzZXQucm91dGUgPSByb3V0ZSA/PyB2b2lkIDA7XG4gICAgfVxuICB9O1xufVxuXG4vLyBzcmMvcmVhY3QvaW5kZXgudHN4XG5mdW5jdGlvbiBTcGVlZEluc2lnaHRzKHByb3BzKSB7XG4gIGNvbnN0IHNldFNjcmlwdFJvdXRlID0gdXNlUmVmKG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc2V0U2NyaXB0Um91dGUuY3VycmVudCkge1xuICAgICAgY29uc3Qgc2NyaXB0ID0gaW5qZWN0U3BlZWRJbnNpZ2h0cyh7XG4gICAgICAgIGZyYW1ld29yazogcHJvcHMuZnJhbWV3b3JrIHx8IFwicmVhY3RcIixcbiAgICAgICAgLi4ucHJvcHNcbiAgICAgIH0pO1xuICAgICAgaWYgKHNjcmlwdCkge1xuICAgICAgICBzZXRTY3JpcHRSb3V0ZS5jdXJyZW50ID0gc2NyaXB0LnNldFJvdXRlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocHJvcHMucm91dGUpIHtcbiAgICAgIHNldFNjcmlwdFJvdXRlLmN1cnJlbnQocHJvcHMucm91dGUpO1xuICAgIH1cbiAgfSwgW3Byb3BzLnJvdXRlXSk7XG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBzcmMvbmV4dGpzL3V0aWxzLnRzXG5pbXBvcnQgeyB1c2VQYXJhbXMsIHVzZVBhdGhuYW1lLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uLmpzXCI7XG52YXIgdXNlUm91dGUgPSAoKSA9PiB7XG4gIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtcygpO1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3QgcGF0aCA9IHVzZVBhdGhuYW1lKCk7XG4gIGNvbnN0IGZpbmFsUGFyYW1zID0ge1xuICAgIC4uLk9iamVjdC5mcm9tRW50cmllcyhzZWFyY2hQYXJhbXMuZW50cmllcygpKSxcbiAgICAuLi5wYXJhbXMgfHwge31cbiAgfTtcbiAgcmV0dXJuIHBhcmFtcyA/IGNvbXB1dGVSb3V0ZShwYXRoLCBmaW5hbFBhcmFtcykgOiBudWxsO1xufTtcblxuLy8gc3JjL25leHRqcy9pbmRleC50c3hcbmZ1bmN0aW9uIFNwZWVkSW5zaWdodHNDb21wb25lbnQocHJvcHMpIHtcbiAgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZSgpO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3BlZWRJbnNpZ2h0cywgeyByb3V0ZSwgLi4ucHJvcHMsIGZyYW1ld29yazogXCJuZXh0XCIgfSk7XG59XG5mdW5jdGlvbiBTcGVlZEluc2lnaHRzMihwcm9wcykge1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3VzcGVuc2UsIHsgZmFsbGJhY2s6IG51bGwgfSwgLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3BlZWRJbnNpZ2h0c0NvbXBvbmVudCwgeyAuLi5wcm9wcyB9KSk7XG59XG5leHBvcnQge1xuICBTcGVlZEluc2lnaHRzMiBhcyBTcGVlZEluc2lnaHRzXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCJdLCJuYW1lcyI6WyJSZWFjdCIsIlN1c3BlbnNlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwibmFtZSIsInZlcnNpb24iLCJpbml0UXVldWUiLCJ3aW5kb3ciLCJzaSIsImEiLCJwYXJhbXMiLCJzaXEiLCJwdXNoIiwiaXNCcm93c2VyIiwiZGV0ZWN0RW52aXJvbm1lbnQiLCJlbnYiLCJlIiwiaXNEZXZlbG9wbWVudCIsImNvbXB1dGVSb3V0ZSIsInBhdGhuYW1lIiwicGF0aFBhcmFtcyIsInJlc3VsdCIsImtleSIsInZhbHVlT3JBcnJheSIsIk9iamVjdCIsImVudHJpZXMiLCJpc1ZhbHVlQXJyYXkiLCJBcnJheSIsImlzQXJyYXkiLCJ2YWx1ZSIsImpvaW4iLCJleHByIiwibWF0Y2hlciIsIlJlZ0V4cCIsImVzY2FwZVJlZ0V4cCIsInRlc3QiLCJyZXBsYWNlIiwic3RyaW5nIiwiU0NSSVBUX1VSTCIsIlBST0RfU0NSSVBUX1VSTCIsIkRFVl9TQ1JJUFRfVVJMIiwiUFJPWFlfU0NSSVBUX1VSTCIsImluamVjdFNwZWVkSW5zaWdodHMiLCJwcm9wcyIsIl9hIiwicm91dGUiLCJpc1NlbGZIb3N0ZWQiLCJCb29sZWFuIiwiZHNuIiwicHJvZHVjdGlvblNjcmlwdCIsInNyYyIsInNjcmlwdFNyYyIsImRvY3VtZW50IiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJiZWZvcmVTZW5kIiwiY2FsbCIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJkZWZlciIsImRhdGFzZXQiLCJzZGtuIiwiZnJhbWV3b3JrIiwic2RrdiIsInNhbXBsZVJhdGUiLCJ0b1N0cmluZyIsImVuZHBvaW50IiwiZGVidWciLCJvbmVycm9yIiwiY29uc29sZSIsImxvZyIsImFwcGVuZENoaWxkIiwic2V0Um91dGUiLCJTcGVlZEluc2lnaHRzIiwic2V0U2NyaXB0Um91dGUiLCJjdXJyZW50IiwidXNlUGFyYW1zIiwidXNlUGF0aG5hbWUiLCJ1c2VTZWFyY2hQYXJhbXMiLCJ1c2VSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInBhdGgiLCJmaW5hbFBhcmFtcyIsImZyb21FbnRyaWVzIiwiU3BlZWRJbnNpZ2h0c0NvbXBvbmVudCIsIlNwZWVkSW5zaWdodHMyIiwiZmFsbGJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@vercel/speed-insights/dist/next/index.mjs\n");

/***/ }),

/***/ "(rsc)/./node_modules/@vercel/speed-insights/dist/next/index.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/@vercel/speed-insights/dist/next/index.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpeedInsights: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\xampp\htdocs\ccp1\ccp1_brana\node_modules\@vercel\speed-insights\dist\next\index.mjs`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\xampp\htdocs\ccp1\ccp1_brana\node_modules\@vercel\speed-insights\dist\next\index.mjs#SpeedInsights`);


/***/ })

};
;