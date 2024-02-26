import React from "react";
import uiuxHomeImg from "../../assets/uiuxCover.svg";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import ServicesFeatures from "./ServicesFeatures";
import { ServiceProps } from "../../utils/interfaces";

const ServicesSubFive = ({ service }: ServiceProps) => {
	const navigate = useNavigate();

	return (
		<div
			className={`bg-[#F3F7FF] flex flex-wrap ss:px-4 ${
				service === "uiux" ? "md:px-[70px]" : "md:px-8"
			} ss:w-[355px] sm:w-full justify-between`}
		>
			{" "}
			<div className="flex-1 mt-[52px] ss:order-2 md:order-1">
				<h1
					className={`py-8 text-[16px] ${
						service === "uiux" ? "text-black" : "text-[#2979FF]"
					}`}
				>
					UI/UX DESIGN
				</h1>
				<h1 className="text-[28px] font-bold pb-[12px]">UI/UX Design</h1>
				<p className="ss:tracking-tight md:tracking-wider font-normal text-[#39404F]">
					User-Centric Design for Memorable Interactions: Our UI/UX design
					services focus on creating interfaces that not only look aesthetically
					pleasing but also provide a seamless and enjoyable user experience. We
					meticulously design every element, from user flows to interactive
					prototypes.
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
					src={uiuxHomeImg}
					alt="a ui/ux designer standing in front of a screen with design elements"
					className=""
				/>
			</div>
		</div>
	);
};

export default ServicesSubFive;
