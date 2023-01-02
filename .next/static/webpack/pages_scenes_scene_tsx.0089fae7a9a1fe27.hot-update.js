"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages_scenes_scene_tsx",{

/***/ "./pages/scenes/scene.tsx":
/*!********************************!*\
  !*** ./pages/scenes/scene.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ pongScene; }\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\nclass pongScene extends phaser__WEBPACK_IMPORTED_MODULE_0__.Scene {\n    preload() {\n        this.load.image(\"paddle\", \"assets/paddle.png\");\n        this.load.image(\"ball\", \"assets/small_ball.png\");\n    }\n    create() {\n        this.width = this.game.canvas.width;\n        this.height = this.game.canvas.height;\n        this.centerX = this.width / 2;\n        this.centerY = this.height / 2;\n        this.ball = this.physics.add.sprite(this.centerX, this.centerY, \"ball\").setCollideWorldBounds(true).setScale(0.5).setBounce(1.01, 1);\n        // .setOrigin(0.5);\n        this.paddle1 = this.create_paddle(48, this.centerY);\n        this.paddle2 = this.create_paddle(this.width - 48, this.centerY);\n        this.paddleUpperLimit = this.paddle1.displayHeight / 2;\n        this.paddleLowerLimit = this.height - this.paddleUpperLimit;\n        // console.log(this.paddleUpperLimit, );\n        // console.log(this.paddleUpperLimit, this.paddleLowerLimit);\n        // style: Phaser.GameObjects.TextStyle = { fontSize: \"80px\", align: \"center\" };\n        this.startText = this.add.text(this.centerX, this.centerY / 2, \"Press Space\\nto Start Game\", {\n            fontSize: \"40px\",\n            align: \"center\"\n        }).setOrigin(0.5);\n    // console.log(this.startText);\n    }\n    update() {\n        // console.log('hi');\n        if (!this.gameStarted) {\n            this.input.keyboard.on(\"keydown-SPACE\", ()=>this.startGame());\n        } else {\n            this.input.keyboard.on(\"keydown-ESC\", ()=>this.stopGame());\n            this.control_paddle(this.paddle1, this.input.y);\n            if (this.paddle2.x - this.ball.x < this.width / 4) this.control_paddle(this.paddle2, this.ball.y); // arbitrary npc\n            // lose win\n            if (this.ball.x < 32) {\n                this.startText.text = \"you lost\";\n                this.stopGame();\n            } else if (this.ball.x > this.width - 32) {\n                this.startText.text = \"you won\";\n                this.stopGame();\n            }\n        }\n    }\n    constructor(...args){\n        super(...args);\n        this.gameStarted = false;\n        this.create_paddle = (x, y)=>{\n            const paddle = this.physics.add.sprite(x, y, \"paddle\").setImmovable(true).setScale(0.5);\n            // .setOrigin(0.5);\n            this.physics.add.collider(this.ball, paddle, (ball)=>console.log(ball.body.velocity.x));\n            return paddle;\n        };\n        this.control_paddle = (paddle, y)=>{\n            if (!y) return;\n            else if (y < this.paddleUpperLimit) paddle.y = this.paddleUpperLimit;\n            else if (y > this.paddleLowerLimit) paddle.y = this.paddleLowerLimit;\n            else paddle.y = y;\n        };\n        this.startGame = ()=>{\n            if (this.gameStarted) return;\n            this.gameStarted = true;\n            this.startText.visible = false;\n            this.startText.text = \"Press Space\\nto Start Game\";\n            console.log(\"GAME START\");\n            this.ball.setVelocity(500, 500);\n        };\n        this.stopGame = ()=>{\n            if (!this.gameStarted) return;\n            this.gameStarted = false;\n            this.startText.visible = true;\n            console.log(\"GAME STOP\");\n            this.ball.setVelocity(0, 0);\n            this.ball.x = this.centerX;\n            this.ball.y = this.centerY;\n        };\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDb0MsV0FBVyxDQUFDLEtBQUs7UUFDN0I7YUFFQVosV0FBVyxJQUFNO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQ0wsV0FBVyxFQUFFO1lBQ3ZCLElBQUksQ0FBQ0EsV0FBVyxHQUFHLEtBQUs7WUFDeEIsSUFBSSxDQUFDTixTQUFTLENBQUNzQixPQUFPLEdBQUcsSUFBSTtZQUU3QkosUUFBUUMsR0FBRyxDQUFDO1lBRVosSUFBSSxDQUFDaEMsSUFBSSxDQUFDb0MsV0FBVyxDQUFDLEdBQUc7WUFFekIsSUFBSSxDQUFDcEMsSUFBSSxDQUFDMkIsQ0FBQyxHQUFHLElBQUksQ0FBQzdCLE9BQU87WUFDMUIsSUFBSSxDQUFDRSxJQUFJLENBQUMwQixDQUFDLEdBQUcsSUFBSSxDQUFDM0IsT0FBTztRQUM1Qjs7QUFzQkY7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zY2VuZXMvc2NlbmUudHN4P2FlYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwicGhhc2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBvbmdTY2VuZSBleHRlbmRzIFNjZW5lIHtcbiAgcHJlbG9hZCgpIHtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoXCJwYWRkbGVcIiwgXCJhc3NldHMvcGFkZGxlLnBuZ1wiKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoXCJiYWxsXCIsIFwiYXNzZXRzL3NtYWxsX2JhbGwucG5nXCIpO1xuICB9XG5cbiAgcGFkZGxlMTogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZTtcbiAgcGFkZGxlMjogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZTtcbiAgYmFsbDogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZTtcbiAgc3RhcnRUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcbiAgZ2FtZVN0YXJ0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGNlbnRlclk6IG51bWJlcjtcbiAgY2VudGVyWDogbnVtYmVyO1xuICBwYWRkbGVVcHBlckxpbWl0OiBudW1iZXI7XG4gIHBhZGRsZUxvd2VyTGltaXQ6IG51bWJlcjtcblxuICBjcmVhdGVfcGFkZGxlID0gKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcGFkZGxlID0gdGhpcy5waHlzaWNzLmFkZFxuICAgICAgLnNwcml0ZSh4LCB5LCBcInBhZGRsZVwiKVxuICAgICAgLnNldEltbW92YWJsZSh0cnVlKVxuICAgICAgLnNldFNjYWxlKDAuNSk7XG4gICAgLy8gLnNldE9yaWdpbigwLjUpO1xuICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5iYWxsLCBwYWRkbGUsIChiYWxsKSA9PlxuICAgICAgY29uc29sZS5sb2coYmFsbC5ib2R5LnZlbG9jaXR5LngpXG4gICAgKTtcbiAgICByZXR1cm4gcGFkZGxlO1xuICB9O1xuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLndpZHRoID0gdGhpcy5nYW1lLmNhbnZhcy53aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuZ2FtZS5jYW52YXMuaGVpZ2h0O1xuICAgIHRoaXMuY2VudGVyWCA9IHRoaXMud2lkdGggLyAyO1xuICAgIHRoaXMuY2VudGVyWSA9IHRoaXMuaGVpZ2h0IC8gMjtcblxuICAgIHRoaXMuYmFsbCA9IHRoaXMucGh5c2ljcy5hZGRcbiAgICAgIC5zcHJpdGUodGhpcy5jZW50ZXJYLCB0aGlzLmNlbnRlclksIFwiYmFsbFwiKVxuICAgICAgLnNldENvbGxpZGVXb3JsZEJvdW5kcyh0cnVlKVxuICAgICAgLnNldFNjYWxlKDAuNSlcbiAgICAgIC5zZXRCb3VuY2UoMS4wMSwgMSk7XG4gICAgLy8gLnNldE9yaWdpbigwLjUpO1xuXG4gICAgdGhpcy5wYWRkbGUxID0gdGhpcy5jcmVhdGVfcGFkZGxlKDQ4LCB0aGlzLmNlbnRlclkpO1xuICAgIHRoaXMucGFkZGxlMiA9IHRoaXMuY3JlYXRlX3BhZGRsZSh0aGlzLndpZHRoIC0gNDgsIHRoaXMuY2VudGVyWSk7XG5cbiAgICB0aGlzLnBhZGRsZVVwcGVyTGltaXQgPSB0aGlzLnBhZGRsZTEuZGlzcGxheUhlaWdodCAvIDI7XG4gICAgdGhpcy5wYWRkbGVMb3dlckxpbWl0ID0gdGhpcy5oZWlnaHQgLSB0aGlzLnBhZGRsZVVwcGVyTGltaXQ7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBhZGRsZVVwcGVyTGltaXQsICk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wYWRkbGVVcHBlckxpbWl0LCB0aGlzLnBhZGRsZUxvd2VyTGltaXQpO1xuXG4gICAgLy8gc3R5bGU6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0U3R5bGUgPSB7IGZvbnRTaXplOiBcIjgwcHhcIiwgYWxpZ246IFwiY2VudGVyXCIgfTtcblxuICAgIHRoaXMuc3RhcnRUZXh0ID0gdGhpcy5hZGRcbiAgICAgIC50ZXh0KHRoaXMuY2VudGVyWCwgdGhpcy5jZW50ZXJZIC8gMiwgXCJQcmVzcyBTcGFjZVxcbnRvIFN0YXJ0IEdhbWVcIiwge1xuICAgICAgICBmb250U2l6ZTogXCI0MHB4XCIsXG4gICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgICAgfSlcbiAgICAgIC5zZXRPcmlnaW4oMC41KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhcnRUZXh0KTtcbiAgfVxuXG4gIGNvbnRyb2xfcGFkZGxlID0gKHBhZGRsZTogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSwgeSkgPT4ge1xuICAgIGlmICgheSkgcmV0dXJuO1xuICAgIGVsc2UgaWYgKHkgPCB0aGlzLnBhZGRsZVVwcGVyTGltaXQpIHBhZGRsZS55ID0gdGhpcy5wYWRkbGVVcHBlckxpbWl0O1xuICAgIGVsc2UgaWYgKHkgPiB0aGlzLnBhZGRsZUxvd2VyTGltaXQpIHBhZGRsZS55ID0gdGhpcy5wYWRkbGVMb3dlckxpbWl0O1xuICAgIGVsc2UgcGFkZGxlLnkgPSB5O1xuICB9O1xuXG4gIHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5nYW1lU3RhcnRlZCkgcmV0dXJuO1xuICAgIHRoaXMuZ2FtZVN0YXJ0ZWQgPSB0cnVlO1xuICAgIHRoaXMuc3RhcnRUZXh0LnZpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXJ0VGV4dC50ZXh0ID0gXCJQcmVzcyBTcGFjZVxcbnRvIFN0YXJ0IEdhbWVcIjtcbiAgICBjb25zb2xlLmxvZyhcIkdBTUUgU1RBUlRcIik7XG4gICAgdGhpcy5iYWxsLnNldFZlbG9jaXR5KDUwMCwgNTAwKTtcbiAgfTtcblxuICBzdG9wR2FtZSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuZ2FtZVN0YXJ0ZWQpIHJldHVybjtcbiAgICB0aGlzLmdhbWVTdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5zdGFydFRleHQudmlzaWJsZSA9IHRydWU7XG5cbiAgICBjb25zb2xlLmxvZyhcIkdBTUUgU1RPUFwiKTtcblxuICAgIHRoaXMuYmFsbC5zZXRWZWxvY2l0eSgwLCAwKTtcblxuICAgIHRoaXMuYmFsbC54ID0gdGhpcy5jZW50ZXJYO1xuICAgIHRoaXMuYmFsbC55ID0gdGhpcy5jZW50ZXJZO1xuICB9O1xuXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnaGknKTtcbiAgICBpZiAoIXRoaXMuZ2FtZVN0YXJ0ZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQua2V5Ym9hcmQub24oXCJrZXlkb3duLVNQQUNFXCIsICgpID0+IHRoaXMuc3RhcnRHYW1lKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LmtleWJvYXJkLm9uKFwia2V5ZG93bi1FU0NcIiwgKCkgPT4gdGhpcy5zdG9wR2FtZSgpKTtcbiAgICAgIHRoaXMuY29udHJvbF9wYWRkbGUodGhpcy5wYWRkbGUxLCB0aGlzLmlucHV0LnkpO1xuICAgICAgaWYgKHRoaXMucGFkZGxlMi54IC0gdGhpcy5iYWxsLnggPCB0aGlzLndpZHRoIC8gNClcbiAgICAgICAgdGhpcy5jb250cm9sX3BhZGRsZSh0aGlzLnBhZGRsZTIsIHRoaXMuYmFsbC55KTsgLy8gYXJiaXRyYXJ5IG5wY1xuXG4gICAgICAvLyBsb3NlIHdpblxuICAgICAgaWYgKHRoaXMuYmFsbC54IDwgMzIpIHtcbiAgICAgICAgdGhpcy5zdGFydFRleHQudGV4dCA9IFwieW91IGxvc3RcIjtcbiAgICAgICAgdGhpcy5zdG9wR2FtZSgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmJhbGwueCA+IHRoaXMud2lkdGggLSAzMikge1xuICAgICAgICB0aGlzLnN0YXJ0VGV4dC50ZXh0ID0gXCJ5b3Ugd29uXCI7XG4gICAgICAgIHRoaXMuc3RvcEdhbWUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTY2VuZSIsInBvbmdTY2VuZSIsInByZWxvYWQiLCJsb2FkIiwiaW1hZ2UiLCJjcmVhdGUiLCJ3aWR0aCIsImdhbWUiLCJjYW52YXMiLCJoZWlnaHQiLCJjZW50ZXJYIiwiY2VudGVyWSIsImJhbGwiLCJwaHlzaWNzIiwiYWRkIiwic3ByaXRlIiwic2V0Q29sbGlkZVdvcmxkQm91bmRzIiwic2V0U2NhbGUiLCJzZXRCb3VuY2UiLCJwYWRkbGUxIiwiY3JlYXRlX3BhZGRsZSIsInBhZGRsZTIiLCJwYWRkbGVVcHBlckxpbWl0IiwiZGlzcGxheUhlaWdodCIsInBhZGRsZUxvd2VyTGltaXQiLCJzdGFydFRleHQiLCJ0ZXh0IiwiZm9udFNpemUiLCJhbGlnbiIsInNldE9yaWdpbiIsInVwZGF0ZSIsImdhbWVTdGFydGVkIiwiaW5wdXQiLCJrZXlib2FyZCIsIm9uIiwic3RhcnRHYW1lIiwic3RvcEdhbWUiLCJjb250cm9sX3BhZGRsZSIsInkiLCJ4IiwicGFkZGxlIiwic2V0SW1tb3ZhYmxlIiwiY29sbGlkZXIiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsInZlbG9jaXR5IiwidmlzaWJsZSIsInNldFZlbG9jaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/scenes/scene.tsx\n"));

/***/ })

});