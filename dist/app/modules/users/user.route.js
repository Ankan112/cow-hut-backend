"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouters = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.post('/auth/signup', user_controller_1.UserController.createUser);
router.get('/users/:id', user_controller_1.UserController.getSingleUser);
router.patch('/users/:id', user_controller_1.UserController.updateUser);
router.delete('/users/:id', user_controller_1.UserController.deleteUser);
router.get('/users', user_controller_1.UserController.getAllUsers);
exports.UserRouters = router;
