import React from "react";
import webAndMobDevImg from "../../assets/webAndMobCover.svg";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import ServicesFeatures from "./ServicesFeatures";
import { ServiceProps } from "../../utils/interfaces";

const ServicesSubFour = ({ service }: ServiceProps) => {
	const navigate = useNavigate();

	return (
		<div
			className={`bg-[#F3F7FF] flex flex-wrap ss:px-4 ${
				service === "webAndMobDev" ? "md:px-[70px]" : "md:px-8"
			} ss:w-[355px] sm:w-full justify-between`}
		>
			{" "}
			<div className="flex-1 mt-[52px] ss:order-2 md:order-1">
				<h1
					className={`py-8 ss:text-[13px] md:text-[16px] ${
						service === "webAndMobDev" ? "text-black" : "text-[#2979FF]"
					}`}
				>
					WEB & MOBILE APPLICATION DEVELOPMENT{" "}
				</h1>
				<h1 className="ss:text-[24px] md:text-[28px] font-bold pb-[12px]">
					Web & mobile application development{" "}
				</h1>
				<p className="ss:tracking-tight md:tracking-wider font-normal text-[#39404F]">
					Innovative Mobile Solutions for the Digital Age: Our mobile
					application development team excels in creating cutting-edge apps for
					iOS and Android platforms. Whether it's a consumer-facing app or an
					enterprise solution, we leverage the latest technologies to build
					mobile applications that meet user expectations,.
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
					src={webAndMobDevImg}
					alt="two developers collaborating on a project"
					className=""
				/>
			</div>
		</div>
	);
};

export default ServicesSubFour;
