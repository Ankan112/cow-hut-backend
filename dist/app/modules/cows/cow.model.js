"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cow = void 0;
const mongoose_1 = require("mongoose");
const commonEnums_1 = require("../../../enums/commonEnums");
const cowSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        enum: [
            commonEnums_1.Cities.Dhaka,
            commonEnums_1.Cities.Chattogram,
            commonEnums_1.Cities.Rajshahi,
            commonEnums_1.Cities.Barishal,
            commonEnums_1.Cities.Sylhet,
            commonEnums_1.Cities.Comilla,
            commonEnums_1.Cities.Rangpur,
            commonEnums_1.Cities.Mymensingh,
        ],
        required: true,
    },
    breed: {
        type: String,
        enum: [
            commonEnums_1.Breeds.Brahman,
            commonEnums_1.Breeds.Nellore,
            commonEnums_1.Breeds.Sahiwal,
            commonEnums_1.Breeds.Gir,
            commonEnums_1.Breeds.Indigenous,
            commonEnums_1.Breeds.Tharparkar,
            commonEnums_1.Breeds.Kankrej,
        ],
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    label: {
        type: String,
        enum: [commonEnums_1.Label.ForSale, commonEnums_1.Label.SoldOut],
        required: true,
    },
    category: {
        type: String,
        enum: [commonEnums_1.Category.Dairy, commonEnums_1.Category.Beef, commonEnums_1.Category.DualPurpose],
        required: true,
    },
    seller: {
        type: String,
        required: true,
    },
});
exports.Cow = (0, mongoose_1.model)('Cow', cowSchema);
