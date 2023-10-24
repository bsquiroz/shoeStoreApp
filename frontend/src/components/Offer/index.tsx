import { OfferInterface } from "../../interfaces/offerInterface";
import "./styles.css";

interface Props {
	offer: OfferInterface | null;
}

export const Offer = ({ offer }: Props) => {
	return (
		<div className="offer">
			{offer ? (
				<div>
					{offer.precio_especial_personal ? (
						<>
							<h2>Tienes un precio especial, aprovechalo ✔️</h2>
							<p>
								<strong>Nombre del producto</strong>:{" "}
								{offer.nombre_producto}
							</p>
							<p>
								<strong>Precio especial</strong>:{" "}
								{offer.precio_especial_personal}
							</p>
							<p>
								<strong>Precio base</strong>:{" "}
								{offer.precio_base}
							</p>
						</>
					) : (
						<>
							<h2>Sin precio especial, ❌</h2>
							<p>
								<strong>Nombre del producto</strong>:{" "}
								{offer.nombre}
							</p>
							<p>
								<strong>Precio base</strong>:{" "}
								{offer.precio_base}
							</p>
						</>
					)}
				</div>
			) : (
				<p>
					<strong>Verifica si tienes un precio especial</strong>
				</p>
			)}
		</div>
	);
};
