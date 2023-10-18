"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMessage = void 0;
function isMessage(obj) {
    return (obj && typeof obj.content === "string" && typeof obj.title === "string");
}
exports.isMessage = isMessage;
