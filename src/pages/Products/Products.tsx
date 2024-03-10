import React, { useEffect } from "react";
import { IDevProducts } from "../../utils/interfaces";
import { useAuth } from "../../context";
import { Link } from "react-router-dom";

const Products = () => {
	const { HomeDataFunc, homeDataArray } = useAuth() as any;

	useEffect(() => {
		HomeDataFunc();
	}, []);

	return (
		<div className="ss:px-[5px] md:px-8 ss:mt-[40px] md:mt-16">
			<div className="text-center">
				<h1 className="ss:text-[36px] md:text-[40px] text-[#041831] font-bold ss:mb-[40px] md:mb-[80px]">
					Developed products
				</h1>
			</div>
			<div className="flex md:space-x-4 flex-wrap ss:px-[8px] md:px-auto w-full justify-between ss:text-[12px] md:text-[16px]">
				{homeDataArray.developedProducts !== undefined ? (
					homeDataArray.developedProducts.map(
						(product: IDevProducts, index: number) => (
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
									<p className="ss:mt-4 md:mt-8 font-semibold">
										{product.name}
									</p>
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
						)
					)
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default Products;
