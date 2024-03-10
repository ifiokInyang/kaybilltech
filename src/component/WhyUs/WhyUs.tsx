import React from "react";
import CountUp from "react-countup";
import blueCircle from "../../assets/blueCircle.svg";
import { IHomeDataProps } from "../../utils/interfaces";
import { useAuth } from "../../context";

const WhyUs = () => {
	const { homeDataArray } = useAuth() as any;

	return (
		<div className="flex flex-col flex-wrap ss:px-4 md:px-8 ss:mt-[40px] md:mt-2 ss:w-[355px] sm:w-full justify-between">
			<div className="flex-1">
				<h1 className="py-8 text-[16px] font-medium text-[#2979FF]">WHY US </h1>

				<h1 className="ss:text-[30px] capitalize md:text-[40px] text-[#041831] font-bold pb-[12px]">
					Why Choose us?{" "}
				</h1>
				<p className="font-light text-[#39404F] text-[18px] text-left ss:w-full md:w-[52%] ss:mb-24 md:mb-0">
					{homeDataArray.length > 0
						? homeDataArray.whyUs
						: "Our range of services is tailored for businesses seeking to establish a robust online presence and enhance their online visibility. Our overarching philosophy centers on simplifying the lives of business owners by providing a comprehensive suite of services that seamlessly complement each other. This includes services such as website development, web design, UI/UX design, database management, and custom software development."}
				</p>
			</div>
			<div className="flex flex-wrap text-[36px] md:space-x-2 lg:space-x-0 font-bold w-full items-center ss:justify-center md:justify-around">
				<div className="flex flex-col justify-center items-center relative md:w-[300px] lg:w-[25%] ss-w-full">
					<img
						src={blueCircle}
						alt="a blue-ringed circle"
						className="w-[200px]"
					/>
					<div className="absolute flex items-center justify-center w-[340px] mb-[85px] ss:ml-[-5px] sm:ml-0 md:ml-[-18px]">
						<CountUp
							end={100}
							duration={5}
							enableScrollSpy={true}
							suffix="%"
							className=""
						/>
					</div>
					<h3 className="text-[24px] text-center">Planning</h3>
					<p className="text-[16px] font-light text-[#39404F] text-center w-[70%]">
						We plan with our clients and work towards the same goal of
						delivering ahead of time
					</p>
				</div>
				<div className="flex flex-col justify-center items-center relative my-[90px] md:w-[300px] lg:w-[25%] ss-w-full">
					<img
						src={blueCircle}
						alt="a blue-ringed circle"
						className="w-[200px]"
					/>
					<div className="absolute flex items-center justify-center w-[340px] mb-[85px] ss:ml-[-5px] sm:ml-0 md:ml-[-18px]">
						<CountUp
							end={100}
							duration={5}
							enableScrollSpy={true}
							suffix="%"
							className=""
						/>
					</div>
					<h3 className="text-[24px]">Processing</h3>
					<p className="text-[16px] font-light text-[#39404F] text-center w-[70%]">
						We engage our clients during the process of giving the astonishing
						products
					</p>
				</div>
				<div className="flex flex-col justify-center items-center relative md:w-[300px] lg:w-[25%] ss-w-full">
					<img
						src={blueCircle}
						alt="a blue-ringed circle"
						className="w-[200px]"
					/>
					<div className="absolute flex items-center justify-center w-[340px] mb-[85px] ss:ml-[-5px] sm:ml-0 md:ml-[-18px]">
						<CountUp
							end={100}
							duration={5}
							enableScrollSpy={true}
							suffix="%"
							className=""
						/>
					</div>
					<h3 className="text-[24px]">Engaging</h3>
					<p className="text-[16px] font-light text-[#39404F] text-center w-[70%]">
						We engage with our clients to give the best view of there products
						and bring it to life
					</p>
				</div>
				<div className="flex flex-col justify-center items-center my-[90px] relative md:w-[300px] lg:w-[25%] ss-w-full">
					<img
						src={blueCircle}
						alt="a blue-ringed circle"
						className="w-[200px]"
					/>
					<div className="absolute flex items-center justify-center w-[340px] mb-[85px] ss:ml-[-5px] sm:ml-0 md:ml-[-18px]">
						<CountUp
							end={100}
							duration={5}
							enableScrollSpy={true}
							suffix="%"
							className=""
						/>
					</div>
					<h3 className="text-[24px]">Result</h3>
					<p className="text-[16px] font-light text-[#39404F] text-center w-[70%]">
						The result we give our clients are always spectacular and highly
						delivered to taste
					</p>
				</div>
			</div>
		</div>
	);
};

export default WhyUs;
