import { ObjectId } from "mongodb";

export interface ProductsInterface {
	_id: ObjectId;
	nombre: string;
	precio_base: string;
	existencia: string;
}
