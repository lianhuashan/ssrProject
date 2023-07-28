/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./config/webpack.base.js":
/*!********************************!*\
  !*** ./config/webpack.base.js ***!
  \********************************/
/***/ ((module) => {

const babelOpts = {
  presets: [
    ['@babel/preset-react', { runtime: 'automatic' }],
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions']
        }
      }
    ]
  ],
  plugins: [['babel-plugin-styled-components']]
};
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'babel-loader', options: babelOpts },
          { loader: 'ts-loader', options: { transpileOnly: true } }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '...']
  }
};


/***/ }),

/***/ "./config/webpack.client.js":
/*!**********************************!*\
  !*** ./config/webpack.client.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const path = __webpack_require__(/*! path */ "path");
const { merge } = __webpack_require__(/*! webpack-merge */ "webpack-merge");
const config = __webpack_require__(/*! ./webpack.base */ "./config/webpack.base.js");
const HtmlWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ "html-webpack-plugin");
const webpack = __webpack_require__(/*! webpack */ "webpack");
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

/**
 * @type {import('webpack').Configuration}
 */

const clientConfig = {
  mode: 'development',
  entry: [hotMiddlewareScript, './src/client/index.tsx'],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '..', 'public'),
    publicPath: '/public/assets/'
  },
  devtool: 'eval-cheap-module-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      }
    ]
  }

  // devServer: {
  //   historyApiFallback: true,
  //   static: { directory: path.resolve(__dirname, '..', 'public') },
  //   hot: true,
  //   host: '0.0.0.0',
  //   port: 5000,
  //   client: {
  //     logging: 'info'
  //   },

  //   onListening: function (devServer) {
  //     if (!devServer) {
  //       throw new Error('webpack-dev-server is not defined');
  //     }

  //     const port = devServer.server.address().port;
  //     console.log('Listening on port:', port);
  //   }
  // },
  // plugins: [new HtmlWebpackPlugin({ title: 'ssr project', template: path.resolve(__dirname, '..', 'template.html') })]
};

module.exports = merge(config, clientConfig);


/***/ }),

/***/ "./src/client/components/CommonNavBar.tsx":
/*!************************************************!*\
  !*** ./src/client/components/CommonNavBar.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
      style: {
        display: 'inline-block'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
          to: "/category"
        })
      })
    })
  });
});

/***/ }),

/***/ "./src/client/components/Footer.tsx":
/*!******************************************!*\
  !*** ./src/client/components/Footer.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: "footer"
  });
});

/***/ }),

/***/ "./src/client/components/HomeNavBar.tsx":
/*!**********************************************!*\
  !*** ./src/client/components/HomeNavBar.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __makeTemplateObject = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};






var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link).withConfig({
  displayName: "HomeNavBar__StyledLink",
  componentId: "sc-jzcphv-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-decoration: none;\n  font-size: 14px;\n  color: #cacaca;\n  :hover {\n    color: #fafafa;\n  }\n"], ["\n  text-decoration: none;\n  font-size: 14px;\n  color: #cacaca;\n  :hover {\n    color: #fafafa;\n  }\n"])));
var StyledUl = styled_components__WEBPACK_IMPORTED_MODULE_2___default().ul.withConfig({
  displayName: "HomeNavBar__StyledUl",
  componentId: "sc-jzcphv-1"
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-flex;\n  justify-content: flex-end;\n  width: 100%;\n  height: 44px;\n  line-height: 44px;\n  color: #fafafa;\n  text-align: right;\n  background: rgba(0, 0, 0, 0.8);\n  > li {\n    list-style: none;\n    margin-right: 36px;\n\n    li:has(+ li):after {\n      content: '|';\n      color: #fafafa;\n      margin-left: 15px;\n    }\n  }\n"], ["\n  display: inline-flex;\n  justify-content: flex-end;\n  width: 100%;\n  height: 44px;\n  line-height: 44px;\n  color: #fafafa;\n  text-align: right;\n  background: rgba(0, 0, 0, 0.8);\n  > li {\n    list-style: none;\n    margin-right: 36px;\n\n    li:has(+ li):after {\n      content: '|';\n      color: #fafafa;\n      margin-left: 15px;\n    }\n  }\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StyledUl, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledLink, {
          to: "/",
          children: "\u4F20\u4E66\u5230\u624B\u673A"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledLink, {
          to: "/category",
          children: "\u58A8\u6C34\u5C4F\u7248"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledLink, {
          to: "/",
          children: "\u624B\u673A\u7248"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledLink, {
          to: "/",
          children: "\u767B\u5F55"
        })
      })]
    })
  });
});
var templateObject_1, templateObject_2;

/***/ }),

/***/ "./src/client/components/SearchBar.tsx":
/*!*********************************************!*\
  !*** ./src/client/components/SearchBar.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_sousuo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/sousuo.png */ "./src/assets/sousuo.png");
/* harmony import */ var _assets_enter_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/enter.png */ "./src/assets/enter.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __makeTemplateObject = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};






var SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default().input.withConfig({
  displayName: "SearchBar__SearchInput",
  componentId: "sc-tg1kmh-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 650px;\n  height: 50px;\n  line-height: 50px;\n  border-radius: 25px;\n  background-color: rgba(238, 240, 244, 0.1);\n  border: none;\n  outline: none;\n  padding: 4px 40px;\n  box-sizing: border-box;\n  caret-color: #fafafa;\n  color: #fafafa;\n  font-size: 14px;\n  &:active {\n    border: none;\n    outline: none;\n  }\n"], ["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 650px;\n  height: 50px;\n  line-height: 50px;\n  border-radius: 25px;\n  background-color: rgba(238, 240, 244, 0.1);\n  border: none;\n  outline: none;\n  padding: 4px 40px;\n  box-sizing: border-box;\n  caret-color: #fafafa;\n  color: #fafafa;\n  font-size: 14px;\n  &:active {\n    border: none;\n    outline: none;\n  }\n"])));
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "SearchBar__Wrapper",
  componentId: "sc-tg1kmh-1"
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #111213;\n  text-align: center;\n  > div {\n    margin-top: 30px;\n    width: 650px;\n    height: 50px;\n    position: relative;\n    .icon-search {\n      content: '';\n      position: absolute;\n      top: 12px;\n      left: 8px;\n      width: 24px;\n      height: 24px;\n      background: center / 80% no-repeat url(", ");\n      z-index: 1;\n      display: inline-block;\n    }\n    .icon-enter {\n      content: '';\n      position: absolute;\n      top: 10px;\n      right: 8px;\n      width: 30px;\n      height: 30px;\n      border-radius: 50%;\n      background: center / 80% no-repeat url(", ") #353639;\n      z-index: 1;\n    }\n  }\n  h1 {\n    line-height: 32px;\n    text-align: center;\n    img {\n      width: 160px;\n      height: 36px;\n    }\n  }\n"], ["\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #111213;\n  text-align: center;\n  > div {\n    margin-top: 30px;\n    width: 650px;\n    height: 50px;\n    position: relative;\n    .icon-search {\n      content: '';\n      position: absolute;\n      top: 12px;\n      left: 8px;\n      width: 24px;\n      height: 24px;\n      background: center / 80% no-repeat url(", ");\n      z-index: 1;\n      display: inline-block;\n    }\n    .icon-enter {\n      content: '';\n      position: absolute;\n      top: 10px;\n      right: 8px;\n      width: 30px;\n      height: 30px;\n      border-radius: 50%;\n      background: center / 80% no-repeat url(", ") #353639;\n      z-index: 1;\n    }\n  }\n  h1 {\n    line-height: 32px;\n    text-align: center;\n    img {\n      width: 160px;\n      height: 36px;\n    }\n  }\n"])), _assets_sousuo_png__WEBPACK_IMPORTED_MODULE_2__, _assets_enter_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    searching = _a[0],
    setSearching = _a[1];
  var handleClick = function handleClick() {
    setSearching(!searching);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        src: "https://weread-1258476243.file.myqcloud.com/web/wrwebnjlogic/image/search_header_logo_2x.8d460b95.png"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: "icon-search"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SearchInput, {
        type: "text",
        onClick: handleClick,
        placeholder: "\u641C\u7D22"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: "icon-enter"
      })]
    })]
  });
});
var templateObject_1, templateObject_2;

/***/ }),

/***/ "./src/client/const/routes.tsx":
/*!*************************************!*\
  !*** ./src/client/const/routes.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_BookDetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/BookDetail */ "./src/client/views/BookDetail.tsx");
/* harmony import */ var _views_BookCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/BookCategory */ "./src/client/views/BookCategory.tsx");
/* harmony import */ var _views_BookInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/BookInfo */ "./src/client/views/BookInfo.tsx");
/* harmony import */ var _views_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/Home */ "./src/client/views/Home.tsx");
/* harmony import */ var _views_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/Login */ "./src/client/views/Login.tsx");
/* harmony import */ var _errorHandler_ErrorBoudary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../errorHandler/ErrorBoudary */ "./src/client/errorHandler/ErrorBoudary.tsx");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../request */ "./src/client/request/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};








var routes = [{
  path: '/',
  element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_views_Home__WEBPACK_IMPORTED_MODULE_3__["default"], {}),
  loader: function loader() {
    return __awaiter(void 0, void 0, void 0, function () {
      var res, e_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            res = null;
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, 4, 5]);
            return [4 /*yield*/, _request__WEBPACK_IMPORTED_MODULE_6__["default"].get('/v1/index')];
          case 2:
            res = _a.sent();
            return [3 /*break*/, 5];
          case 3:
            e_1 = _a.sent();
            return [3 /*break*/, 5];
          case 4:
            return [7 /*endfinally*/];
          case 5:
            return [2 /*return*/, (res === null || res === void 0 ? void 0 : res.data.data) || null];
        }
      });
    });
  }
}, {
  path: '/book/info',
  element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_views_BookInfo__WEBPACK_IMPORTED_MODULE_2__["default"], {})
}, {
  path: '/book/detail',
  element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_views_BookDetail__WEBPACK_IMPORTED_MODULE_0__["default"], {})
}, {
  path: '/category',
  element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_views_BookCategory__WEBPACK_IMPORTED_MODULE_1__["default"], {})
}, {
  path: '/login',
  element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_views_Login__WEBPACK_IMPORTED_MODULE_4__["default"], {})
}, {
  path: '*',
  element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_errorHandler_ErrorBoudary__WEBPACK_IMPORTED_MODULE_5__["default"], {})
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ "./src/client/errorHandler/ErrorBoudary.tsx":
/*!**************************************************!*\
  !*** ./src/client/errorHandler/ErrorBoudary.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: "Oops! Page Not Found"
  });
});

/***/ }),

/***/ "./src/client/request/index.ts":
/*!*************************************!*\
  !*** ./src/client/request/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var baseUrl = 'http://localhost:5000/api';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: baseUrl,
  timeout: 1000
}));

/***/ }),

/***/ "./src/client/store/counterReducer.ts":
/*!********************************************!*\
  !*** ./src/client/store/counterReducer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decrement: () => (/* binding */ decrement),
/* harmony export */   decrementBy: () => (/* binding */ decrementBy),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   fetchCount: () => (/* binding */ fetchCount),
/* harmony export */   increment: () => (/* binding */ increment),
/* harmony export */   incrementBy: () => (/* binding */ incrementBy),
/* harmony export */   incrementByAmount: () => (/* binding */ incrementByAmount)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common */ "./src/client/utils/common.ts");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
var _a;


var initialState = {
  value: 0
};
var incrementBy = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('counter/incrementBy');
var decrementBy = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('counter/decrementBy');
var fetchCount = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('counter/fetchCount', function (time, thunkApi) {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.sleep)(1000)];
        case 1:
          _a.sent();
          return [2 /*return*/, Math.random() * 10000];
      }
    });
  });
});
var counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: function increment(state) {
      console.log('increment');
      state.value += 1;
    },
    decrement: function decrement(state) {
      console.log('decrement');
      state.value -= 1;
    },
    incrementByAmount: function incrementByAmount(state, action) {
      state.value += action.payload;
    }
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(incrementBy, function (state, action) {
      state.value += action.payload;
    });
    builder.addCase(decrementBy, function (state, action) {
      state.value -= action.payload;
    });
    builder.addCase(fetchCount.fulfilled, function (state, action) {
      console.log(222);
      state.value = action.payload;
    });
  }
});
var increment = (_a = counterSlice.actions, _a.increment),
  decrement = _a.decrement,
  incrementByAmount = _a.incrementByAmount;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterSlice);

/***/ }),

/***/ "./src/client/store/index.ts":
/*!***********************************!*\
  !*** ./src/client/store/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _counterReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counterReducer */ "./src/client/store/counterReducer.ts");


var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: {
    counter: _counterReducer__WEBPACK_IMPORTED_MODULE_1__["default"].reducer
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./src/client/style/index.tsx":
/*!************************************!*\
  !*** ./src/client/style/index.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalStyle: () => (/* binding */ GlobalStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var __makeTemplateObject = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};

var GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  * {\n    margin:0px;\n    padding:0px;\n  }\n  html,body {\n    background: rgba(0,0,0,.9) ;\n    color: #fafafa;\n  }\n  .flex-row-box {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .flex-col-box {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    flex-wrap: wrap;\n  }\n  .text-ellipsis {\n    word-wrap: nowrap;\n    white-space: break-all;\n    text-overflow: ellipsis;\n  }\n\n  .text-multi-line-ellipsis {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n  }\n\n  .text-title {\n    font-size: 14px;\n    color: #fafafa;\n  }\n  .text-sub-title {\n    font-size: 12px;\n    color: #cacaca;\n  }\n  .small-text {\n    font-size: 12px;\n  }\n\n  .text-pink {\n    color: pink;\n  }\n  .text-yellow {\n    color: yellow;\n  }\n  .text-blue {\n    color: blue;\n  }\n  .text-gray {\n    color: #cacaca;\n  }\n"], ["\n  * {\n    margin:0px;\n    padding:0px;\n  }\n  html,body {\n    background: rgba(0,0,0,.9) ;\n    color: #fafafa;\n  }\n  .flex-row-box {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .flex-col-box {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    flex-wrap: wrap;\n  }\n  .text-ellipsis {\n    word-wrap: nowrap;\n    white-space: break-all;\n    text-overflow: ellipsis;\n  }\n\n  .text-multi-line-ellipsis {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n  }\n\n  .text-title {\n    font-size: 14px;\n    color: #fafafa;\n  }\n  .text-sub-title {\n    font-size: 12px;\n    color: #cacaca;\n  }\n  .small-text {\n    font-size: 12px;\n  }\n\n  .text-pink {\n    color: pink;\n  }\n  .text-yellow {\n    color: yellow;\n  }\n  .text-blue {\n    color: blue;\n  }\n  .text-gray {\n    color: #cacaca;\n  }\n"])));
var templateObject_1;

/***/ }),

/***/ "./src/client/utils/common.ts":
/*!************************************!*\
  !*** ./src/client/utils/common.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sleep: () => (/* binding */ sleep)
/* harmony export */ });
var sleep = function sleep(ms) {
  return new Promise(function (r) {
    return setTimeout(r, ms);
  });
};

/***/ }),

/***/ "./src/client/views/BookCategory.tsx":
/*!*******************************************!*\
  !*** ./src/client/views/BookCategory.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CommonNavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CommonNavBar */ "./src/client/components/CommonNavBar.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./src/client/components/Footer.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __makeTemplateObject = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};







var CategoryBlock = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "BookCategory__CategoryBlock",
  componentId: "sc-1y77bqy-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 200px;\n  height: 100px;\n  background: url('https://weread-1258476243.file.myqcloud.com/assets/ranklist.rising.chart_title.YqPFOS9Gin.png');\n"], ["\n  width: 200px;\n  height: 100px;\n  background: url('https://weread-1258476243.file.myqcloud.com/assets/ranklist.rising.chart_title.YqPFOS9Gin.png');\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  //图书的分类
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: ["\u5206\u7C7B\u5206\u7C7B", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_CommonNavBar__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(CategoryBlock, {}), "Top\u98D9\u5347\u699C", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Link, {
        to: "/book/info",
        children: "\u806A\u660E\u4EBA\u548C\u50BB\u5B50"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
  });
});
var templateObject_1;

/***/ }),

/***/ "./src/client/views/BookDetail.tsx":
/*!*****************************************!*\
  !*** ./src/client/views/BookDetail.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CommonNavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CommonNavBar */ "./src/client/components/CommonNavBar.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./src/client/components/Footer.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  //book detail
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_CommonNavBar__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
      children: "\u806A\u660E\u4EBA\u7684\u4E2A\u4EBA\u6210\u957F"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Link, {
        to: "/",
        children: "\u8FD4\u56DE\u9996\u9875"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
  });
});

/***/ }),

/***/ "./src/client/views/BookInfo.tsx":
/*!***************************************!*\
  !*** ./src/client/views/BookInfo.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CommonNavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CommonNavBar */ "./src/client/components/CommonNavBar.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./src/client/components/Footer.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_CommonNavBar__WEBPACK_IMPORTED_MODULE_2__["default"], {}), "this is book info", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
        to: "/book/detail",
        children: "\u806A\u660E\u4EBA\u548C\u50BB\u5B50\u8BE6\u60C5"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {})]
  });
});

/***/ }),

/***/ "./src/client/views/Home.tsx":
/*!***********************************!*\
  !*** ./src/client/views/Home.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_HomeNavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HomeNavBar */ "./src/client/components/HomeNavBar.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../request */ "./src/client/request/index.ts");
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SearchBar */ "./src/client/components/SearchBar.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __makeTemplateObject = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};








var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "Home__Wrapper",
  componentId: "sc-koz3fw-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: rgba(0, 0, 0, 0.1);\n\n  .top-category {\n    width: 80%;\n    margin: 0 auto;\n    background: hsla(0, 0%, 0%, 0.9);\n    padding: 0 50px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    .category-block {\n      width: 50%;\n      /* max-width: 600px; */\n      margin-top: 30px;\n    }\n  }\n  .category-title-img {\n    width: 240px;\n    height: 32px;\n  }\n  .category-title-desp {\n    font-size: 12px;\n    display: block;\n    margin-top: 4px;\n  }\n\n  .book-cover-list {\n    margin-top: 20px;\n    max-height: 300px;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n  }\n\n  .book-cover {\n    font-size: 14px;\n    margin-bottom: 20px;\n    max-width: 240px;\n    display: flex;\n    flex-wrap: nowrap;\n    align-items: center;\n    cursor: pointer;\n    &:hover {\n      background-color: rgba(0, 0, 0, 0.1);\n    }\n\n    &-img {\n      min-width: 60px;\n      height: 80px;\n    }\n    &-order {\n      font-weight: 700;\n    }\n    &-intro,\n    &-order {\n      margin-left: 12px;\n    }\n\n    &-intro {\n      div:first-of-type {\n        margin-bottom: 4px;\n      }\n    }\n  }\n\n  .category {\n    width: 80%;\n    margin: 0 auto;\n    padding: 0 50px;\n    h2 {\n      margin-top: 30px;\n      font-size: 18px;\n    }\n    &-list {\n      display: flex;\n      flex-wrap: wrap;\n    }\n    &-list-item {\n      margin-top: 30px;\n      width: 33.3%;\n      display: block;\n    }\n  }\n"], ["\n  background-color: rgba(0, 0, 0, 0.1);\n\n  .top-category {\n    width: 80%;\n    margin: 0 auto;\n    background: hsla(0, 0%, 0%, 0.9);\n    padding: 0 50px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    .category-block {\n      width: 50%;\n      /* max-width: 600px; */\n      margin-top: 30px;\n    }\n  }\n  .category-title-img {\n    width: 240px;\n    height: 32px;\n  }\n  .category-title-desp {\n    font-size: 12px;\n    display: block;\n    margin-top: 4px;\n  }\n\n  .book-cover-list {\n    margin-top: 20px;\n    max-height: 300px;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n  }\n\n  .book-cover {\n    font-size: 14px;\n    margin-bottom: 20px;\n    max-width: 240px;\n    display: flex;\n    flex-wrap: nowrap;\n    align-items: center;\n    cursor: pointer;\n    &:hover {\n      background-color: rgba(0, 0, 0, 0.1);\n    }\n\n    &-img {\n      min-width: 60px;\n      height: 80px;\n    }\n    &-order {\n      font-weight: 700;\n    }\n    &-intro,\n    &-order {\n      margin-left: 12px;\n    }\n\n    &-intro {\n      div:first-of-type {\n        margin-bottom: 4px;\n      }\n    }\n  }\n\n  .category {\n    width: 80%;\n    margin: 0 auto;\n    padding: 0 50px;\n    h2 {\n      margin-top: 30px;\n      font-size: 18px;\n    }\n    &-list {\n      display: flex;\n      flex-wrap: wrap;\n    }\n    &-list-item {\n      margin-top: 30px;\n      width: 33.3%;\n      display: block;\n    }\n  }\n"])));
var keywords = ['飙升', '新书', '总榜', '神作榜'];
var Home = function Home() {
  var _a, _b, _c, _d, _e;
  var loaderData = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLoaderData)();
  var _f = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(loaderData),
    data = _f[0],
    setData = _f[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!loaderData) {
      (0,_request__WEBPACK_IMPORTED_MODULE_4__["default"])('/v1/index').then(function (res) {
        setData(res);
      });
    }
  }, [loaderData]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_HomeNavBar__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_5__["default"], {}), "lllll232132112FEDFWF", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "top-category",
      children: (_a = data === null || data === void 0 ? void 0 : data.topCategories) === null || _a === void 0 ? void 0 : _a.filter(function (item) {
        return item.title && new RegExp(keywords.join('|')).test(item.title);
      }).map(function (topCategory) {
        var _a, _b, _c, _d;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "category-block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "category-title",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
              "data-src": (_a = topCategory.ranklistCover) === null || _a === void 0 ? void 0 : _a.chart_title,
              src: (_b = topCategory.ranklistCover) === null || _b === void 0 ? void 0 : _b.chart_title,
              className: "category-title-img"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "category-title-desp  text-multi-line-ellipsis",
              children: (_c = topCategory.ranklistCover) === null || _c === void 0 ? void 0 : _c.desc
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "book-cover-list flex-col-box",
            children: (_d = topCategory.lectureBooks) === null || _d === void 0 ? void 0 : _d.slice(0, 6).map(function (lectureBook, index) {
              var _a, _b, _c, _d;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "book-cover",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                  "data-src": (_a = lectureBook.bookInfo) === null || _a === void 0 ? void 0 : _a.cover,
                  src: (_b = lectureBook.bookInfo) === null || _b === void 0 ? void 0 : _b.cover,
                  className: "book-cover-img"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "book-cover-order",
                  children: index + 1
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "book-cover-intro",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                    className: "text-title text-multi-line-ellipsis",
                    children: (_c = lectureBook.bookInfo) === null || _c === void 0 ? void 0 : _c.title
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                    className: "text-sub-title",
                    children: (_d = lectureBook.bookInfo) === null || _d === void 0 ? void 0 : _d.author
                  })]
                })]
              }, index);
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
            className: "category-show-all text-title text-gray",
            children: "\u67E5\u770B\u5168\u90E8 "
          })]
        }, topCategory.CategoryId);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "category",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
        children: "\u5206\u7C7B\u699C\u5355"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "category-list",
        children: [(_d = (_c = (_b = data === null || data === void 0 ? void 0 : data.categories) === null || _b === void 0 ? void 0 : _b.filter(function (item) {
          return item.parentCategoryId === '0';
        })) === null || _c === void 0 ? void 0 : _c.slice(0, 11)) === null || _d === void 0 ? void 0 : _d.map(function (item) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
            className: "category-list-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              children: item.title
            }), "\xA0.\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
              children: [item.totalCount, "\u672C"]
            })]
          }, item.title);
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
          className: "category-list-item",
          children: ["\u67E5\u770B\u5168\u90E8\xA0.\xA0", (_e = data.categories) === null || _e === void 0 ? void 0 : _e.length, "\u4E2A"]
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
var templateObject_1;

/***/ }),

/***/ "./src/client/views/Login.tsx":
/*!************************************!*\
  !*** ./src/client/views/Login.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Form, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
      label: "\u7528\u6237\u540D"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
      label: "\u5BC6\u7801"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
        children: "\u53D6\u6D88"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
        children: "\u767B\u5F55"
      })]
    })]
  });
});

/***/ }),

/***/ "./src/client/views/app/Server.tsx":
/*!*****************************************!*\
  !*** ./src/client/views/app/Server.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFetchRequest: () => (/* binding */ createFetchRequest),
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _const_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../const/routes */ "./src/client/const/routes.tsx");
/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom/server */ "react-router-dom/server");
/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./src/client/store/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../style/index */ "./src/client/style/index.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};










var _a = (0,react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__.createStaticHandler)(_const_routes__WEBPACK_IMPORTED_MODULE_2__["default"]),
  query = _a.query,
  dataRoutes = _a.dataRoutes;
var render = function render(request) {
  return __awaiter(void 0, void 0, void 0, function () {
    var remixRequest, context, router, sheet, htmlStr, styleTags;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          remixRequest = createFetchRequest(request);
          return [4 /*yield*/, query(remixRequest)];
        case 1:
          context = _a.sent();
          if (context instanceof Response) {
            throw context;
          }
          router = (0,react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__.createStaticRouter)(dataRoutes, context);
          try {
            sheet = new styled_components__WEBPACK_IMPORTED_MODULE_7__.ServerStyleSheet();
            htmlStr = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)(sheet.collectStyles( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_style_index__WEBPACK_IMPORTED_MODULE_6__.GlobalStyle, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {
                store: _store__WEBPACK_IMPORTED_MODULE_4__["default"],
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__.StaticRouterProvider, {
                  router: router,
                  context: context,
                  nonce: "the-nonce"
                })
              })]
            })));
            styleTags = sheet.getStyleTags();
          } catch (e) {
            styleTags = [];
          } finally {
            sheet === null || sheet === void 0 ? void 0 : sheet.seal();
          }
          return [2 /*return*/, [htmlStr, styleTags]];
      }
    });
  });
};
function createFetchRequest(req) {
  var origin = "".concat(req.protocol, "://").concat(req.get('host'));
  // let origin = ;
  var port = '3001';
  // Note: This had to take originalUrl into account for presumably vite's proxying
  var url = new URL(req.originalUrl || req.url, origin);
  var controller = new AbortController();
  req.on('close', function () {
    return controller.abort();
  });
  var headers = new Headers();
  for (var _i = 0, _a = Object.entries(req.headers); _i < _a.length; _i++) {
    var _b = _a[_i],
      key = _b[0],
      values = _b[1];
    if (values) {
      if (Array.isArray(values)) {
        for (var _c = 0, values_1 = values; _c < values_1.length; _c++) {
          var value = values_1[_c];
          headers.append(key, value);
        }
      } else {
        headers.set(key, values);
      }
    }
  }
  var init = {
    method: req.method,
    headers: headers,
    signal: controller.signal
  };
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    init.body = req.body;
  }
  return new Request(url.href, init);
}

/***/ }),

/***/ "./src/assets/enter.png":
/*!******************************!*\
  !*** ./src/assets/enter.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d07cb1ce66d691d27381.png";

/***/ }),

/***/ "./src/assets/sousuo.png":
/*!*******************************!*\
  !*** ./src/assets/sousuo.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3ba942a2c80f7a6c6fa7.png";

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-http-proxy");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("html-webpack-plugin");

/***/ }),

/***/ "is-object":
/*!****************************!*\
  !*** external "is-object" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("is-object");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom/server");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ "webpack-merge":
/*!********************************!*\
  !*** external "webpack-merge" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-merge");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/public/assets/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-http-proxy */ "express-http-proxy");
/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack */ "webpack");
/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-dev-middleware */ "webpack-dev-middleware");
/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack-hot-middleware */ "webpack-hot-middleware");
/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var is_object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! is-object */ "is-object");
/* harmony import */ var is_object__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(is_object__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _client_views_app_Server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/views/app/Server */ "./src/client/views/app/Server.tsx");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};






var app = express__WEBPACK_IMPORTED_MODULE_0___default()();

function normalizeAssets(assets) {
  if (is_object__WEBPACK_IMPORTED_MODULE_5___default()(assets)) {
    return Object.values(assets);
  }
  return Array.isArray(assets) ? assets : [assets];
}
function useHMR() {
  // Step 1: Create & configure a webpack compiler
  var webpackConfig = __webpack_require__(/*! ../../config/webpack.client */ "./config/webpack.client.js");
  var compiler = webpack__WEBPACK_IMPORTED_MODULE_2___default()(webpackConfig);
  // Step 2: Attach the dev middleware to the compiler & the server
  app.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler, {
    publicPath: webpackConfig.output.publicPath,
    serverSideRender: true,
    writeToDisk: false,
    // index: '',
    mimeTypeDefault: 'text/html'
  }));
  // Step 3: Attach the hot middleware to the compiler & the server
  app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4___default()(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 100
  }));
  // The following middleware would not be invoked until the latest build is finished.
  //   app.use((req, res) => {
  //     const { devMiddleware } = res.locals.webpack;
  //     const outputFileSystem = devMiddleware.outputFileSystem;
  //     const jsonWebpackStats = devMiddleware.stats.toJson();
  //     const { assetsByChunkName, outputPath } = jsonWebpackStats;
  //     console.log('--------------');
  //     console.log(JSON.stringify(assetsByChunkName.main));
  //     console.log('--------------');
  //     // Then use `assetsByChunkName` for server-side rendering
  //     // For example, if you have only one main chunk:
  //     res.send(`
  // <html>
  //   <head>
  //     <title>My App</title>
  //     <style>
  //     ${normalizeAssets(assetsByChunkName.main)
  //       .filter((path) => path.endsWith('.css'))
  //       .map((path) => outputFileSystem.readFileSync(path.join(outputPath, path)))
  //       .join('\n')}
  //     </style>
  //   </head>
  //   <body>
  //     <div id="root"></div>
  //     ${normalizeAssets(assetsByChunkName.main)
  //       .filter((path) => path.endsWith('.js'))
  //       .map((path) => `<script src="${path}"></script>`)
  //       .join('\n')}
  //   </body>
  // </html>
  //   `);
  //   });
}

app.use(express__WEBPACK_IMPORTED_MODULE_0___default()["static"]('public'));
app.use('/api', express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default()('http://127.0.0.1:3001', {
  proxyReqPathResolver: function proxyReqPathResolver(req) {
    return '/api' + req.path;
  }
}));
useHMR();
app.get('*', function (req, res) {
  return __awaiter(void 0, void 0, void 0, function () {
    var _a, content, styleTags;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          return [4 /*yield*/, (0,_client_views_app_Server__WEBPACK_IMPORTED_MODULE_6__.render)(req)];
        case 1:
          _a = _b.sent(), content = _a[0], styleTags = _a[1];
          res.set('Content-Type', 'text/html');
          res.send("<html>\n  <head>\n  <title>hello</title>\n  ".concat(styleTags, "\n  </head>\n  <body>\n   <div id=\"root\">").concat(content, "</div>\n  <script type=\"text/javascript\" src=\"index.js\"></script>\n  </body>\n  </html>"));
          return [2 /*return*/];
      }
    });
  });
});

app.listen(5000, function () {
  console.log('server start on 5000');
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map