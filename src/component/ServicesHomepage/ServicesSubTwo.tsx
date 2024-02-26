import React from "react";
import customSoftware from "../../assets/customSoftwareCover.svg";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import ServicesFeatures from "./ServicesFeatures";
import { ServiceProps } from "../../utils/interfaces";

const ServicesSubTwo = ({ service }: ServiceProps) => {
	const navigate = useNavigate();

	return (
		<div
			className={`bg-[#F3F7FF] flex flex-wrap ss:px-4 ${
				service === "software" ? "md:px-[70px]" : "md:px-8"
			} ss:w-[355px] sm:w-full justify-between`}
		>
			<div className="flex-1 mt-[52px] ss:order-2 md:order-1">
				<h1 className="py-8 text-[16px] text-[#2979FF]">
					CUSTOM SOFTWARE DEVELOPMENT{" "}
				</h1>
				<h1 className="text-[28px] font-bold pb-[12px]">
					Custom Software Development
				</h1>
				<p className="ss:tracking-tight md:tracking-wider font-normal text-[#39404F]">
					Tailored Solutions for Unique Challenges: Our custom software
					development services are crafted to address the specific challenges
					and opportunities your business faces. From conceptualization to
					deployment, we work closely with you to create bespoke software that
					aligns seamlessly with your goals, processes, and vision.
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
					src={customSoftware}
					alt="two developers collaborating on a project"
					className=""
				/>
			</div>
		</div>
	);
};

export default ServicesSubTwo;
