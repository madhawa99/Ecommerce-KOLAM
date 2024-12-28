import express from "express";
import {
	createProduct,
	deleteProduct,
	getAllProducts,
	getProductsByCategory,
	getRecommendedProducts,
} from "../controllers/product.controller.js";
import { adminRoute,sellerRoute, protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protectRoute, adminRoute, getAllProducts);
router.get("/", protectRoute, sellerRoute, getAllProducts);
router.get("/category/:category", getProductsByCategory);
router.get("/recommendations", getRecommendedProducts);
router.post("/", protectRoute, adminRoute, createProduct);
router.post("/", protectRoute, sellerRoute, createProduct);
router.delete("/:id", protectRoute, adminRoute, deleteProduct);
router.delete("/:id", protectRoute, sellerRoute, deleteProduct);

export default router;
