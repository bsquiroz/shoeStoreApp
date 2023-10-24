import { Router } from "express";
import { getProducts } from "./product.controllers";

export const router = Router();

router.get("/products", getProducts);
