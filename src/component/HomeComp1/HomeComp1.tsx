import React from "react";
import { useNavigate } from "react-router-dom";
import homeImg1 from "../../assets/homepageImg1.svg";
import Button from "../Button/Button";

const HomeComp1 = () => {
	const navigate = useNavigate();

	return (
		<div className="flex flex-wrap ss:flex-col md:flex-row justify-between  ss:pl-0 md:pl-[60px] ss:w-[355px] sm:w-full">
			<div className="ss:w-full lg:w-[43%] ss:px-4 md:px-0 ss:order-2 lg:order-1">
				<h1 className="font-bold ss:text-[27px] md:text-[56px] text-left ss:pt-0 lg:pt-[105px]">
					Develop your projects and scale your business
				</h1>
				<p className="pt-4 ss:pb-[40px] md:pb-[77px] ss:text-[12px] md:text-[16px] font-light ss:w-full md:w-[90%]">
					Empowering Your Future. We Digitize Business. Unraveling Business
					Challenges with Innovative Thinking and Technological 
					<br /> Expertise.
				</p>
				<Button
					type="button"
					text="GET A PROPOSAL"
					className={
						"bg-[#041831] text-white rounded-lg text-[14px] ss:px-[20px] md:px-[68px] py-[12px]"
					}
					onClick={() => navigate("/quote")}
				/>
			</div>
			<div className="ss:w-[100%] lg:w-[50%] ss:order-1 lg:order-2">
				<img
					src={homeImg1}
					alt="a man sitting in front of his desktop computer"
					className="lg:pl-[40px] ss:pl-0 ss:w-[400px] md:w-[100%] ss:h-[430px] md:h-[100%] object-cover"
					//   width={'200px'}
				/>
			</div>
		</div>
	);
};

export default HomeComp1;
