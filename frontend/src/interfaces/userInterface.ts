export interface UserInterface {
	_id: string;
	id: number;
	nombre: string;
	metadata?: Metadata;
}

interface Metadata {
	precios_especiales: PreciosEspeciale[];
}

interface PreciosEspeciale {
	nombre_producto: string;
	precio_especial_personal: number;
}
