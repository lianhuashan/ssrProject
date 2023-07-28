"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var baseUrl = 'http://localhost:5000/api';
exports.default = axios_1.default.create({
    baseURL: baseUrl,
    timeout: 1000
});
