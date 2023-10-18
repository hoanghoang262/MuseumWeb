"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSignIn = void 0;
function isSignIn(obj) {
    return obj && typeof obj.email == "string" && typeof obj.password == "string";
}
exports.isSignIn = isSignIn;
