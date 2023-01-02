"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/game";
exports.ids = ["pages/game"];
exports.modules = {

/***/ "./pages/game.tsx":
/*!************************!*\
  !*** ./pages/game.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n// import pongScene from \"./scenes/scene\";\n\nfunction Game() {\n    const [game, setGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const initPhaser = async ()=>{\n            const Phaser = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! phaser */ \"phaser\", 23));\n            const { default: pongScene  } = await __webpack_require__.e(/*! import() */ \"pages_scenes_scene_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./scenes/scene */ \"./pages/scenes/scene.tsx\"));\n            const phaserGame = new Phaser.Game({\n                type: Phaser.AUTO,\n                parent: \"phaser-game\",\n                scale: {\n                    //   mode: Phaser.Scale.FIT,\n                    autoCenter: Phaser.Scale.CENTER_BOTH,\n                    // the margin left and top properties of the game canvas,\n                    // and does not factor in any other CSS styles you may have applied.\"\n                    width: 800,\n                    height: 600\n                },\n                physics: {\n                    default: \"arcade\"\n                },\n                scene: [\n                    pongScene\n                ]\n            });\n            setGame(phaserGame);\n        };\n        initPhaser();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"phaser-game\"\n        }, \"phaser-game\", false, {\n            fileName: \"/home/apex/code/game-pong/pages/game.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nYW1lLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0EsMENBQTBDO0FBRVM7QUFFbkQsU0FBU0csT0FBTztJQUNkLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUE7SUFFaENELGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNSyxhQUFhLFVBQVk7WUFDN0IsTUFBTUMsU0FBUyxNQUFNLGtIQUFnQjtZQUNyQyxNQUFNLEVBQUVDLFNBQVNDLFVBQVMsRUFBRSxHQUFHLE1BQU0scUtBQXdCO1lBQzdELE1BQU1DLGFBQWEsSUFBSUgsT0FBT0osSUFBSSxDQUFDO2dCQUNqQ1EsTUFBTUosT0FBT0ssSUFBSTtnQkFDakJDLFFBQVE7Z0JBRVJDLE9BQU87b0JBQ1AsNEJBQTRCO29CQUMxQkMsWUFBWVIsT0FBT1MsS0FBSyxDQUFDQyxXQUFXO29CQUNwQyx5REFBeUQ7b0JBQ3pELHFFQUFxRTtvQkFDckVDLE9BQU87b0JBQ1BDLFFBQVE7Z0JBQ1Y7Z0JBQ0FDLFNBQVM7b0JBQ1BaLFNBQVM7Z0JBQ1g7Z0JBQ0FhLE9BQU87b0JBQUNaO2lCQUFVO1lBQ3BCO1lBRUhKLFFBQVFLO1FBQ1A7UUFFQUo7SUFDRixHQUFHLEVBQUU7SUFDTCxxQkFDRTtrQkFDRSw0RUFBQ2dCO1lBQUlDLElBQUc7V0FBa0I7Ozs7OztBQUdoQztBQUVBLGlFQUFlcEIsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvbmctcG9ydC8uL3BhZ2VzL2dhbWUudHN4PzEyMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZSBhcyBHYW1lVHlwZSB9IGZyb20gXCJwaGFzZXJcIjtcbi8vIGltcG9ydCBwb25nU2NlbmUgZnJvbSBcIi4vc2NlbmVzL3NjZW5lXCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIEdhbWUoKSB7XG4gIGNvbnN0IFtnYW1lLCBzZXRHYW1lXSA9IHVzZVN0YXRlPEdhbWVUeXBlPigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW5pdFBoYXNlciA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IFBoYXNlciA9IGF3YWl0IGltcG9ydChcInBoYXNlclwiKTtcbiAgICAgIGNvbnN0IHsgZGVmYXVsdDogcG9uZ1NjZW5lIH0gPSBhd2FpdCBpbXBvcnQoXCIuL3NjZW5lcy9zY2VuZVwiKTtcbiAgICAgIGNvbnN0IHBoYXNlckdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoe1xuICAgICAgICB0eXBlOiBQaGFzZXIuQVVUTyxcbiAgICAgICAgcGFyZW50OiBcInBoYXNlci1nYW1lXCIsXG5cbiAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgLy8gICBtb2RlOiBQaGFzZXIuU2NhbGUuRklULFxuICAgICAgICAgIGF1dG9DZW50ZXI6IFBoYXNlci5TY2FsZS5DRU5URVJfQk9USCwgLy8gbm90IHdvcmtpbmcgYW55bW9yZTsgXCJDZW50ZXJpbmcgaXMgYWNoaWV2ZWQgYnkgc2V0dGluZ1xuICAgICAgICAgIC8vIHRoZSBtYXJnaW4gbGVmdCBhbmQgdG9wIHByb3BlcnRpZXMgb2YgdGhlIGdhbWUgY2FudmFzLFxuICAgICAgICAgIC8vIGFuZCBkb2VzIG5vdCBmYWN0b3IgaW4gYW55IG90aGVyIENTUyBzdHlsZXMgeW91IG1heSBoYXZlIGFwcGxpZWQuXCJcbiAgICAgICAgICB3aWR0aDogODAwLFxuICAgICAgICAgIGhlaWdodDogNjAwLFxuICAgICAgICB9LFxuICAgICAgICBwaHlzaWNzOiB7XG4gICAgICAgICAgZGVmYXVsdDogXCJhcmNhZGVcIixcbiAgICAgICAgfSxcbiAgICAgICAgc2NlbmU6IFtwb25nU2NlbmVdLFxuICAgICAgfSk7XG5cblx0ICBzZXRHYW1lKHBoYXNlckdhbWUpO1xuICAgIH07XG5cbiAgICBpbml0UGhhc2VyKCk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBpZD1cInBoYXNlci1nYW1lXCIga2V5PVwicGhhc2VyLWdhbWVcIj48L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkdhbWUiLCJnYW1lIiwic2V0R2FtZSIsImluaXRQaGFzZXIiLCJQaGFzZXIiLCJkZWZhdWx0IiwicG9uZ1NjZW5lIiwicGhhc2VyR2FtZSIsInR5cGUiLCJBVVRPIiwicGFyZW50Iiwic2NhbGUiLCJhdXRvQ2VudGVyIiwiU2NhbGUiLCJDRU5URVJfQk9USCIsIndpZHRoIiwiaGVpZ2h0IiwicGh5c2ljcyIsInNjZW5lIiwiZGl2IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/game.tsx\n");

/***/ }),

/***/ "phaser":
/*!*************************!*\
  !*** external "phaser" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("phaser");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/game.tsx"));
module.exports = __webpack_exports__;

})();