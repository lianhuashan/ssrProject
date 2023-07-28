"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementByAmount = exports.decrement = exports.increment = exports.fetchCount = exports.decrementBy = exports.incrementBy = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var common_1 = require("../utils/common");
var initialState = {
    value: 0
};
exports.incrementBy = (0, toolkit_1.createAction)('counter/incrementBy');
exports.decrementBy = (0, toolkit_1.createAction)('counter/decrementBy');
exports.fetchCount = (0, toolkit_1.createAsyncThunk)('counter/fetchCount', function (time, thunkApi) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, common_1.sleep)(1000)];
            case 1:
                _a.sent();
                return [2 /*return*/, Math.random() * 10000];
        }
    });
}); });
var counterSlice = (0, toolkit_1.createSlice)({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: function (state) {
            console.log('increment');
            state.value += 1;
        },
        decrement: function (state) {
            console.log('decrement');
            state.value -= 1;
        },
        incrementByAmount: function (state, action) {
            state.value += action.payload;
        }
    },
    extraReducers: function (builder) {
        builder.addCase(exports.incrementBy, function (state, action) {
            state.value += action.payload;
        });
        builder.addCase(exports.decrementBy, function (state, action) {
            state.value -= action.payload;
        });
        builder.addCase(exports.fetchCount.fulfilled, function (state, action) {
            console.log(222);
            state.value = action.payload;
        });
    }
});
exports.increment = (_a = counterSlice.actions, _a.increment), exports.decrement = _a.decrement, exports.incrementByAmount = _a.incrementByAmount;
exports.default = counterSlice;
