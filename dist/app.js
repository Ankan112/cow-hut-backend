"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = __importDefault(require("./app/modules/users/middlewares/globalErrorHandler"));
const user_route_1 = require("./app/modules/users/user.route");
const cow_route_1 = require("./app/modules/cows/cow.route");
const order_route_1 = require("./app/modules/orders/order.route");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// application route
console.log(app.get('env'));
app.use('/api/v1/', user_route_1.UserRouters);
app.use('/api/v1', cow_route_1.CowRouters);
app.use('/api/v1/', order_route_1.OrderRouters);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// global error handler
app.use(globalErrorHandler_1.default);
exports.default = app;
