import React, { useEffect, useState } from "react";
import { UserInterface } from "../interfaces/userInterface";
import { ProductInterface } from "../interfaces/productInterface";
import { OfferInterface } from "../interfaces/offerInterface";
import { getProducts, getSpecialPrice, getUsers } from "../services";

import { toast } from "react-toastify";

const initialState = {
	user: "",
	product: "",
};

export const useApp = () => {
	const [users, setUsers] = useState<UserInterface[]>([]);
	const [products, setProducts] = useState<ProductInterface[]>([]);
	const [offer, setOffer] = useState<OfferInterface | null>(null);

	const [values, setValues] = useState(initialState);

	const handleValues = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = event.target;

		setValues({
			...values,
			[name]: value,
		});
	};

	useEffect(() => {
		getProducts()
			.then((res) => setProducts(res))
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		getUsers()
			.then((res) => setUsers(res))
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (Object.values(values).some((value) => value === ""))
			return toast.error("❌ Todos los campos son necesarios", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});

		getSpecialPrice(values.user, values.product)
			.then((res) => setOffer(res))
			.catch((error) => {
				console.log(error);
			});
	};
	return {
		users,
		products,
		offer,
		handleValues,
		handleForm,
	};
};
