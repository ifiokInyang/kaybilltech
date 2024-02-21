import React from "react";
import whatsappImg from "../../assets/WhatsAppImg.svg";
import salestrack from "../../assets/salestrack.svg";
import darads from "../../assets/darads.svg";
import viewMore from "../../assets/arrow-right.svg";
import { Link } from "react-router-dom";
import { IDevProducts } from "../../utils/interfaces";

const Portfolio = ({ data }: { data?: IDevProducts[] }) => {
	return (
		<div className="ss:px-[5px] md:px-8 ss:mt-[20px]">
			<div className="text-center">
				<h1 className="py-8 text-[16px] font-medium text-[#2979FF]">
					PORTFOLIO
				</h1>
				<h1 className="ss:text-[30px] md:text-[40px] text-[#041831] font-bold mb-[80px]">
					Developed Products
				</h1>
			</div>
			<div className="flex flex-wrap ss:px-[8px] md:px-auto w-full justify-between ss:text-[12px] md:text-[16px]">
				{/* <div className="ss:w-[120px] sm:w-[150px] md:w-auto mb-8">
					<div
						className="flex items-center justify-center ss:w-[167px] md:w-[296px] ss:h-[132px] md:h-[235px]"
						style={{ boxShadow: "1px 1px 7px 0px #00000040" }}
					>
						<img
							src={whatsappImg}
							alt="wv icon with an eye like whatsapp icon"
							className="ss:w-[100px] md:w-auto"
						/>
					</div>
					<p className="ss:mt-4 md:mt-8">Lasmab school management system</p>
				</div> */}
				{data?.length !== undefined &&
					data?.map((item, index) => (
						<div key={index} className="ss:w-[120px] sm:w-[150px] md:w-auto">
							<div
								className="flex items-center justify-center ss:w-[167px] md:w-[296px] ss:h-[132px] md:h-[235px]"
								style={{ boxShadow: "1px 1px 7px 0px #00000040" }}
							>
								{" "}
								<img
									src={salestrack}
									alt="sales track app logo"
									className="ss:w-[100px] md:w-auto"
								/>
							</div>{" "}
							<p className="ss:mt-4 md:mt-8 font-semibold">{item.name}</p>
							<p className="ss:mt-4 md:mt-2 ss:w-auto md:w-[290px] lg:w-[350px]">
								{item.description} ({item.clientName})
							</p>
						</div>
					))}

				<div className="ss:w-[120px] sm:w-[150px] md:w-auto">
					<div
						className="flex items-center justify-center ss:w-[167px] md:w-[296px] ss:h-[132px] md:h-[235px]"
						style={{ boxShadow: "1px 1px 7px 0px #00000040" }}
					>
						{" "}
						<img
							src={darads}
							alt="mydarads logo"
							className="ss:w-[100px] md:w-auto"
						/>
					</div>{" "}
					<p className="ss:mt-4 md:mt-8 font-semibold">Mydarads</p>
				</div>
				<div className="ss:w-[120px] sm:w-[150px] md:w-auto">
					<div
						className="flex items-center justify-center ss:w-[167px] md:w-[296px] ss:h-[132px] md:h-[235px]"
						style={{ boxShadow: "1px 1px 7px 0px #00000040" }}
					>
						{" "}
						<img
							src={whatsappImg}
							alt="wv icon with an eye like whatsapp icon"
							className="ss:w-[100px] md:w-auto"
						/>
					</div>
					<p className="ss:mt-4 md:mt-8 font-semibold">Wassapview</p>
				</div>
			</div>
			<Link
				to={"/products"}
				className="flex items-center ss:justify-start md:justify-end text-[#2979FF] mt-[40px] mb-[80px]"
			>
				View more <img src={viewMore} alt="" className="ml-4" />
			</Link>
		</div>
	);
};

export default Portfolio;
