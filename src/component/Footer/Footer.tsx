import React from "react";
import { Link, useNavigate } from "react-router-dom";
import emailIcon from "../../assets/sms.svg";
import phoneIcon from "../../assets/call.svg";
import location from "../../assets/location.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import { useAuth } from "../../context";
import { ServiceFunc } from "../Modals/ServicesHelperFunc";

const Footer = () => {
  const services = [
    { name: 'API Development', url: 'api' },

    { name: 'Custom software development', url: 'software' },
    { name: 'Website design', url: 'webDesign' },
    { name: 'UI/UX Design', url: 'uiux' },

    {
      name: 'Web/mobile application development',
      url: 'webAndMobDev'
    },
    { name: 'Database management', url: 'dbMgt' },
    { name: 'ASP.NET Training', url: 'aspdotnet' }
  ];

	const navigate = useNavigate();
	const { setSelectedItem } = useAuth() as any;

	const navigateToService = (index: number) => {
		setSelectedItem(index);
		ServiceFunc(services[index].url, navigate);
	};

	return (
		<>
			<footer className="bg-[#292D32] dark:bg-gray-900 ss:w-[355px] sm:w-auto ss:mt-4 md:mt-16 ss:p-2 md:p-12">
				<div className="flex flex-wrap ss:space-y-24 md:space-y-0 ss:px-4 text-white">
					<div className="ss:w-auto md:w-[25%]">
						<h2 className="mb-6 text-[28px] font-medium dark:text-white">
							About us
						</h2>
						<p className="text-[14px] font-normal">
							KAYBILL TECHNOLOGIES is a cutting-edge software development
							company dedicated to providing innovative digital solutions for
							businesses of all sizes. We specialize in developing software
							applications and services tailored to meet the unique needs and
							challenges of our clients...
							<Link to={"/about"} className="font-bold">
								Read more
							</Link>
						</p>
					</div>

					<div className="flex flex-col md:items-center ss:w-auto md:w-[25%]">
						<h2 className="mb-6 mr-8 text-[28px] font-medium text-[white] dark:text-white">
							Contact Us
						</h2>
						<ul className="text-white dark:text-gray-400 font-normal text-[14px]">
							<li className="flex mb-4">
								<img
									src={emailIcon}
									alt="mail box icon"
									className="ss:ml-0 md:ml-4 mr-2"
								/>
								Kaybilltech@gmail.com
							</li>
							<li className="flex mb-4">
								{" "}
								<img
									src={phoneIcon}
									alt="call icon"
									className="ss:ml-0 md:ml-4 mr-2"
								/>
								+234 (0) 907-920-3331
							</li>
							<li className="flex mb-4">
								{" "}
								<img
									src={location}
									alt="location icon"
									className="ss:ml-0 md:ml-4 mr-2"
								/>
								Ikeja, Lagos
							</li>
						</ul>
					</div>

					<div className="ss:pl-0 md:pl-12 ss:w-auto md:w-[25%]">
						<h2 className="mb-6 text-[28px] font-medium text-[white] dark:text-white">
							Policy
						</h2>
						<ul className="dark:text-gray-400 font-normal text-[14px] text-[white]">
							<li className="mb-4">
								<Link to={"terms_and_condition"} className="hover:underline">
									Terms and Condition
								</Link>
							</li>
							<li className="mb-4">
								<Link to={"/policy"} className="hover:underline">
									Privacy policy
								</Link>
							</li>
						</ul>
					</div>

					<div className="ss:w-auto md:w-[25%] text-[white]">
						<h2 className="mb-6 text-[28px] font-medium dark:text-white">
							Services
						</h2>
						<ul className="dark:text-gray-400 font-medium text-[14px]">
							{services.map((service, index) => (
								<li key={index} className="mb-4">
									<button
										onClick={() => navigateToService(index)} // Call navigateToService function with index
										className="hover:underline capitalize text-[white] bg-transparent border-none"
									>
										{service.name}
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>

				<hr className="h-px mt-8 bg-[#757C86] border-0 dark:bg-gray-700" />

				<div className="px-4 py-6 dark:bg-gray-700 md:flex md:items-center md:justify-between">
					<span className="text-sm text-[white] dark:text-gray-300 sm:text-center">
						Have questions? contact{" "}
						<span className="font-semibold">info@kaybilltech.com</span>
					</span>
					<div className="flex items-center mt-4 space-x-6 sm:justify-center md:mt-0">
						<Link to={"#"} target="_blank">
							<img src={instagram} alt="instagram icon" />
							<span className="sr-only">Instagram page</span>
						</Link>
						<Link to={"#"} target="_blank">
							<img src={facebook} alt="facebook icon" />
							<span className="sr-only">Facebook page</span>
						</Link>

						<Link
							to={"#"}
							target="_blank"
							className="text-white text-[24px] font-bold"
						>
							X
						</Link>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
