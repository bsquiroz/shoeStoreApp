import { Offer, Select } from "./components";
import { useApp } from "./hooks/useApp";

function App() {
	const { handleForm, handleValues, offer, products, users } = useApp();

	return (
		<div>
			<form className="form" onSubmit={handleForm}>
				<Select
					name={"user"}
					textSelect={"Usuario"}
					handleValues={handleValues}
					data={users}
					textHiddenOption="choose user"
				/>

				<Select
					name={"product"}
					textSelect={"Producto"}
					handleValues={handleValues}
					data={products}
					textHiddenOption="choose product"
				/>

				<input type="submit" value={"Search"} />
			</form>

			<Offer offer={offer} />
		</div>
	);
}

export default App;
