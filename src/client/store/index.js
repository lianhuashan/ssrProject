"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var counterReducer_1 = require("./counterReducer");
var store = (0, toolkit_1.configureStore)({
    reducer: {
        counter: counterReducer_1.default.reducer
    }
});
exports.default = store;
