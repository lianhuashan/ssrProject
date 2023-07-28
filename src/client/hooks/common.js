"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppDispatch = exports.useAppSelector = void 0;
var react_redux_1 = require("react-redux");
exports.useAppSelector = react_redux_1.useSelector;
var useAppDispatch = function () { return (0, react_redux_1.useDispatch)(); };
exports.useAppDispatch = useAppDispatch;
