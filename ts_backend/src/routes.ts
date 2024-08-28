import express from "express";
import productController from './controllers/product.controller'

const router = express();

router.use('/products', productController)

export default router;