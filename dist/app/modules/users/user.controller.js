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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_services_1 = require("./user.services");
// create new user
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user } = req.body;
        console.log(user);
        const result = yield user_services_1.UserService.createUser(user);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'User created successfully',
            data: result,
        });
    }
    catch (err) {
        // res.status(400).json({
        //   error: err,
        //   // success: false,
        //   // message: 'Failed to created user!!!',
        // })
        next(err);
    }
});
// Get single user
const getSingleUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield user_services_1.UserService.getSingleUser(id);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'User retrieved successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
// Get all users
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_services_1.UserService.getAllUsers();
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Users retrieved successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
// Delete User
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield user_services_1.UserService.deleteUser(id);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'User deleted successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
// Update User
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const result = yield user_services_1.UserService.updateUser(id, payload);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'User updated successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.UserController = {
    createUser,
    getSingleUser,
    getAllUsers,
    deleteUser,
    updateUser,
};
