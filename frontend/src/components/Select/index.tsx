import { ProductInterface } from "../../interfaces/productInterface";
import { UserInterface } from "../../interfaces/userInterface";

import "./styles.css";

interface Props {
	name: string;
	handleValues: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	textSelect: string;
	data: ProductInterface[] | UserInterface[];
	textHiddenOption: string;
}

export const Select = ({
	data,
	handleValues,
	name,
	textSelect,
	textHiddenOption,
}: Props) => {
	return (
		<div className="select">
			<label htmlFor={name}>{textSelect}</label>
			<select name={name} id={name} onChange={handleValues}>
				<option hidden>{textHiddenOption}</option>
				{data.map((item) => (
					<option
						key={item._id}
						value={
							textSelect === "Usuario" ? item._id : item.nombre
						}
					>
						{item.nombre}
					</option>
				))}
			</select>
		</div>
	);
};
