import React from "react";
import webDesign from "../../assets/webDesignCover.svg";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import ServicesFeatures from "./ServicesFeatures";
import { ServiceProps } from "../../utils/interfaces";

const ServicesSubThree = ({ service }: ServiceProps) => {
	const navigate = useNavigate();

	return (
		<div
			className={`bg-[#F3F7FF] flex flex-wrap ss:px-4 ${
				service === "webDesign" ? "md:px-[70px]" : "md:px-8"
			} ss:w-[355px] sm:w-full justify-between`}
		>
			{" "}
			<div className="flex-1 mt-[52px] ss:order-2 md:order-1">
				<h1
					className={`py-8 text-[16px] ${
						service === "webDesign" ? "text-black" : "text-[#2979FF]"
					}`}
				>
					WEBSITE DESIGN
				</h1>
				<h1 className="text-[28px] md:uppercase ss:lowercase font-bold pb-[12px]">
					WEBSITE DESIGN
				</h1>
				<p className="ss:tracking-tight md:tracking-wider font-normal text-[#39404F]">
					Crafting Digital Experiences that Captivate: Our website design
					services go beyond aesthetics. We aim to create visually stunning and
					intuitively navigable websites that not only represent your brand
					identity but also provide a delightful user experience. From
					responsive design to intuitive navigation.
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
					src={webDesign}
					alt="two developers collaborating on a project"
					className=""
				/>
			</div>
		</div>
	);
};

export default ServicesSubThree;
