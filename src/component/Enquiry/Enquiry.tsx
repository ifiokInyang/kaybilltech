import React from "react";
import emailIcon from "../../assets/sms.svg";
import phoneIcon from "../../assets/call.svg";
import Form from "../Form/Form";

const Enquiry = ({ isQuotes }: { isQuotes: boolean }) => {
	return (
		<div className="flex flex-wrap justify-between ss:w-[355px] sm:w-auto ss:px-4 md:px-12 mt-12">
			<div className="ss:w-[400px] sm:w-auto ss:flex-0 md:flex-1 ss:mb-16 md:mb-0 ss:mr-0 lg:mr-8">
				<h1 className="pb-4 text-[16px] font-medium text-[#2979FF]">
					MAKE ENQUIRIES{" "}
				</h1>

				<h1 className="ss:text-[30px] md:text-[38px] text-[#041831] font-bold pb-12">
					Get In Touch{" "}
				</h1>
				<p className="font-light">
					Heads up! We require that you sign up for Kaybill tech services and
					packages.
				</p>
				<p className="mb-8 font-light">
					We make all your dreams come true in a successful project.
				</p>
				<div className="flex justify-between flex-wrap ss:gap-y-8 md:gap-y-0 ss:w-auto md:w-[500px] text-white">
					<div className="bg-[#2979FF] h-[40px] flex rounded-lg p-2 space-x-2">
						<img src={emailIcon} alt="mail box icon" />
						<p>Kaybilltech@gmail.com</p>
					</div>
					<div className="bg-[#2979FF] flex rounded-lg p-2 space-x-2">
						<img src={phoneIcon} alt="call icon" />

						<p>+234 (0) 907-920-3331</p>
					</div>
				</div>
			</div>

			<div className="ss:w-[400px] sm:w-full ss:flex-0 md:flex-0 lg:flex-1 ss:mt-0  md:mt-16">
				<Form isQuotes={isQuotes} />
			</div>
		</div>
	);
};

export default Enquiry;

// ss:w-[400px] sm:w-auto ss:mb-16 ss:mr-0 lg:mr-8
