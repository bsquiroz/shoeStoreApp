import { router as productRouter } from "../modules/product/product.routes";
import { router as userRouter } from "../modules/user/user.routes";

import { Router } from "express";

export const appRouter = Router();

appRouter.use(productRouter);
appRouter.use(userRouter);
