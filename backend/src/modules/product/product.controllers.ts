import { ProductServices } from "./product.services";
import { Request, Response } from "express";

const productServices = new ProductServices();

export async function getProducts(req: Request, res: Response) {
	try {
		const products = await productServices.findExisting();
		return res.status(200).json(products);
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			ok: false,
			msg: "internal server error",
		});
	}
}
