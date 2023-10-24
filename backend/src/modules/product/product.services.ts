import { productsCollection } from "../../database/config";

export class ProductServices {
	async findExisting() {
		const products = await productsCollection.find().toArray();
		return products.filter((product) => product.existencia);
	}

	async findByName(name: string) {
		return await productsCollection.findOne({ nombre: name });
	}
}
