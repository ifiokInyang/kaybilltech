import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ModalProps } from "../../utils/interfaces";
import Button from "../Button/Button";
import { IoMdArrowDropdown } from "react-icons/io";
import TeamModalSmallScreen from "./TeamModalSmallScreen";

export default function SmallScreenModal({
	showModal,
	setShowModal,
}: ModalProps) {
	const [teamsModal, setTeamsModal] = useState<boolean>(false);
	const [isSmallScreenServicesModal, setIsSmallScreenServicesModal] =
		useState<boolean>(false);

	const navigate = useNavigate();

	const handleQuoteClick = () => {
		setShowModal(false);

		navigate("/quote");
	};

	const handleAboutModal = () => {
		setShowModal(false);

		setTeamsModal(true);
	};

	const handleServiceModal = () => {
		setShowModal(false);
		setIsSmallScreenServicesModal(true);
	};

	return (
		<>
			{showModal && (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto mt-4 fixed inset-x-0 z-40 outline-none focus:outline-none">
						<div className="relative w-full bg-white  ml-auto md:max-w-[400px] sm:max-w-[280px] ss:max-w-[220px]">
							{/* content */}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
								{/* header */}
								<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
									<button
										className="ml-auto bg-transparent border-0 text-black opacity-1 float-right leading-none outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										<span className="bg-transparent opacity-1 font-thin text-[40px] block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>
								<div className="flex items-start justify-between p-5 mb-4 rounded-t">
									<Link to={"/"} onClick={() => setShowModal(false)}>
										<h3 className="text-[14px] font-medium">Home</h3>
									</Link>
								</div>
								<div className="flex w-[58%] items-start justify-between p-5 mb-4 rounded-t">
									<Link to={"/about"} onClick={() => setShowModal(false)}>
										<h3 className="text-[14px] hover:text-black">About us</h3>
									</Link>
									<IoMdArrowDropdown size={25} onClick={handleAboutModal} />
								</div>
								<div className="flex w-[58%] items-start justify-between p-5 mb-4 rounded-t">
									<Link to={"#"} onClick={handleServiceModal} className="flex">
										<h3 className="text-[14px] hover:text-black">services</h3>
										<IoMdArrowDropdown size={25} />
									</Link>
								</div>

								<div className="flex items-start justify-between p-5 rounded-t">
									<Link to={"/contact"} onClick={() => setShowModal(false)}>
										<h3 className="text-[14px] hover:text-black">Contact Us</h3>
									</Link>
								</div>
								<hr className="bg-[#757C86] w-[220px] ml-4 mt-4 mb-12" />

								<Button
									type="button"
									text="Get a quote"
									className={
										"bg-[#041831] mx-4 text-white rounded-lg text-[14px] ss:px-[20px] md:px-[68px] py-[12px]"
									}
									onClick={handleQuoteClick}
								/>
							</div>
						</div>
					</div>
					{/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
				</>
			)}
			<TeamModalSmallScreen
				teamsModal={teamsModal}
				setTeamsModal={setTeamsModal}
				isSmallScreenServicesModal={isSmallScreenServicesModal}
				setIsSmallScreenServicesModal={setIsSmallScreenServicesModal}
			/>
		</>
	);
}
