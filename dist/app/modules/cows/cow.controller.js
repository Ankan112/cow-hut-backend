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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CowController = void 0;
const cow_services_1 = require("./cow.services");
const pick_1 = __importDefault(require("../../../shared/pick"));
const pagination_1 = require("../../../constants/pagination");
const createCow = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cow } = req.body;
        const result = yield cow_services_1.CowService.createCow(cow);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Cow created successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getAllCow = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, ['searchTerm', 'location']);
    const paginationOptions = (0, pick_1.default)(req.query, pagination_1.paginationFields);
    // console.log(paginationOptions)
    try {
        const result = yield cow_services_1.CowService.getAllCow(filters, paginationOptions);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Cows retrieved successfully',
            meta: {
                page: result.meta.page,
                limit: result.meta.limit,
                count: result.meta.total,
            },
            data: result.data,
        });
    }
    catch (err) {
        next(err);
    }
});
const getSingleCow = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield cow_services_1.CowService.getSingleCow(id);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Cow retrieved successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const deleteCow = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield cow_services_1.CowService.deleteCow(id);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Cow deleted successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const updateCow = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const result = yield cow_services_1.CowService.updateCow(id, payload);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Cow updated successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.CowController = {
    createCow,
    getAllCow,
    getSingleCow,
    deleteCow,
    updateCow,
};
