"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const commonEnums_1 = require("../../../enums/commonEnums");
const userSchema = new mongoose_1.Schema({
    phoneNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        enum: [commonEnums_1.UserRole.SELLER, commonEnums_1.UserRole.BUYER],
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
    },
    address: {
        type: String,
        required: true,
    },
    budget: {
        type: Number,
        required: true,
    },
    income: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});
exports.User = (0, mongoose_1.model)('User', userSchema);
