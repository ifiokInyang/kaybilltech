import React, { useEffect, useState } from "react";
import { IDevProducts } from "../../utils/interfaces";
import { homeDevProductsInitial } from "../../utils/data";
import axios, { AxiosResponse } from "axios";
import { apiUrl } from "../../utils/api/axios";
import { useNavigate, Link } from "react-router-dom";

const Products = () => {
	const [developedProducts, setDevelopedProducts] = useState<IDevProducts[]>(
		homeDevProductsInitial
	);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const HomeFunc: () => Promise<void> = async () => {
		try {
			const response: AxiosResponse<any, any> = await axios.get(
				`${apiUrl}/api/KayService/HomePage-Contents`
			);
			const { data } = response.data;
			if (response.status === 200) {
				setLoading(false);
				setDevelopedProducts(data.developedProducts);
			}
		} catch (err: any) {
			setLoading(false);
			setError("Something went wrong");
		}
	};

	const navigate = useNavigate();
	const handleProduct = (name: string) => {
		const urlBuilder = name.split(" ")[0] + "app";
		navigate(`/products/${urlBuilder}`);
	};

	useEffect(() => {
		async function fetchData() {
			await HomeFunc();
		}

		void fetchData();
	}, []);

	return (
		<div className="ss:px-[5px] md:px-8 ss:mt-[40px] md:mt-16">
			<div className="text-center">
				<h1 className="ss:text-[36px] md:text-[40px] text-[#041831] font-bold ss:mb-[40px] md:mb-[80px]">
					Developed products
				</h1>
			</div>
			<div className="flex md:space-x-4 flex-wrap ss:px-[8px] md:px-auto w-full justify-between ss:text-[12px] md:text-[16px]">
				{developedProducts.map((product: IDevProducts, index: number) => (
					<div
						key={index}
						className="ss:w-[120px] sm:w-[150px] md:w-[296px] mb-8"
					>
						<Link to={product.productUrl} target="_blank">
							<div
								className="flex items-center cursor-pointer justify-center ss:w-[167px] md:w-[296px] ss:h-[132px] md:h-[235px]"
								style={{ boxShadow: "1px 1px 7px 0px #00000040" }}
							>
								<img
									src={product.logoPath}
									alt={product.name}
									className="ss:w-[100px] md:w-auto"
								/>
							</div>
						</Link>
						<Link to={product.productUrl} target="_blank">
							<p className="ss:mt-4 md:mt-8 font-semibold">{product.name}</p>
						</Link>
						<p className="">{product.description}</p>
						<p className="">
							<strong>Number of Users: </strong>
							{product.numberOfUsers !== null
								? product.numberOfUsers
								: "20,000+"}
						</p>
						<p className="">
							<strong>Client: </strong>
							{product.clientName}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Products;
