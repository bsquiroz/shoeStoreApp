import { Router } from "express";
import { getSpecialPrice, getUsers } from "./user.controllers";

export const router = Router();

router.get("/price/:user_id/:product_name", getSpecialPrice);
router.get("/users", getUsers);
