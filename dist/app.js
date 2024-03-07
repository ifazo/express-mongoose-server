"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = require("./routes/auth.routes");
const user_routes_1 = require("./routes/user.routes");
const product_routes_1 = require("./routes/product.routes");
const category_routes_1 = require("./routes/category.routes");
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use("/api/auth", auth_routes_1.authRoutes);
exports.app.use("/api/users", user_routes_1.userRoutes);
exports.app.use("/api/categories", category_routes_1.categoryRoutes);
exports.app.use("/api/products", product_routes_1.productRoutes);
exports.app.get("/", (req, res) => {
    res.send("Next.js Server is running successfully");
});
