import { httpClient } from "../plugins/http-client";

const BASE_URL = "https://shoestoreapp-dev-jhxz.2.ie-1.fl0.io/";

export async function getProducts() {
	try {
		const data = await httpClient.GET(`${BASE_URL}/products`);
		const products = await data.json();
		return products;
	} catch (error) {
		console.log(error);
		return {
			error: false,
			msg: "there is bad",
		};
	}
}

export async function getUsers() {
	try {
		const data = await httpClient.GET(`${BASE_URL}/users`);
		const users = await data.json();
		return users;
	} catch (error) {
		console.log(error);
		return {
			error: false,
			msg: "there is bad",
		};
	}
}

export async function getSpecialPrice(userId: string, product_name: string) {
	try {
		const data = await httpClient.GET(
			`${BASE_URL}/price/${userId}/${product_name}`
		);

		const specialPrice = await data.json();
		return specialPrice;
	} catch (error) {
		console.log(error);
		return {
			error: false,
			msg: "there is bad",
		};
	}
}
