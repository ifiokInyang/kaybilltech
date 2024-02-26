import React from "react";
import dbHomeImg from "../../assets/dbCover.svg";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import ServicesFeatures from "./ServicesFeatures";
import { ServiceProps } from "../../utils/interfaces";

const ServicesSubSix = ({ service }: ServiceProps) => {
	const navigate = useNavigate();

	return (
		<div
			className={`bg-[#F3F7FF] flex flex-wrap ss:px-4 ${
				service === "dbMgt" ? "md:px-[70px]" : "md:px-8"
			} ss:w-[355px] sm:w-full justify-between`}
		>
			{" "}
			<div className="flex-1 mt-[52px] ss:order-2 md:order-1">
				<h1 className="py-8 text-[16px] text-[#2979FF]">DATABASE MANAGEMENT</h1>
				<h1 className="text-[28px] font-bold pb-[12px]">Database Management</h1>
				<p className="ss:tracking-tight md:tracking-wider font-normal text-[#39404F]">
					Efficient Data Handling for Informed Decision-Making: Our database
					management services revolve around organizing, storing, and optimizing
					your data infrastructure. From setting up robust database systems to
					ensuring data security and integrity, we empower your business with
					efficient data management solutions.
				</p>
				<div className="font-bold flex flex-wrap gap-8 my-8">
					<ServicesFeatures />
				</div>
				<div className="my-[60px]">
					<Button
						type="button"
						text="GET PROPOSAL"
						className={
							"bg-[#041831] text-white rounded-lg text-[14px] ss:px-[65px] md:px-[68px] py-[12px]"
						}
						onClick={() => navigate("/quote")}
					/>
				</div>
			</div>
			<div className="md:w-[55%] ss:w-full flex items-center justify-center ss:order-1 md:order-2">
				<img
					src={dbHomeImg}
					alt="a man holding a spanner standing close to a picking equipment"
					className=""
				/>
			</div>
		</div>
	);
};

export default ServicesSubSix;
