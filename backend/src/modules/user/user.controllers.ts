import { Request, Response } from "express";
import { Userservices } from "./user.services";
import { ProductServices } from "../product/product.services";

const userServices = new Userservices();
const productServices = new ProductServices();

export async function getUsers(req: Request, res: Response) {
	try {
		const users = await userServices.findAll();
		return res.status(200).json(users);
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			ok: false,
			msg: "internal server error",
		});
	}
}

export async function getSpecialPrice(req: Request, res: Response) {
	try {
		const { user_id, product_name } = req.params;

		const user = await userServices.findById(user_id);

		if (!user)
			return res
				.status(404)
				.json({ ok: false, msg: `user with id ${user_id} not found` });

		const product = await productServices.findByName(product_name);

		if (!product)
			return res
				.status(404)
				.json({ ok: false, msg: `user with id ${user_id} not found` });

		const specialPrice = user.metadata?.precios_especiales.find(
			(prod) => prod.nombre_producto === product_name
		);

		if (specialPrice) {
			specialPrice["precio_base"] = product["precio_base"];
			return res.status(200).json(specialPrice);
		}

		return res.status(200).json(product);
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			ok: false,
			msg: "internal server error",
		});
	}
}
