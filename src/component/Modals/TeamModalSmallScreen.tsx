import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { TeamModalSScreenProps } from "../../utils/interfaces";
import { ServiceFunc } from "./ServicesHelperFunc";
import { useAuth } from "../../context";
import { services, servicesData } from "../../utils/data";

const TeamModalSmallScreen = ({
	teamsModal,
	setTeamsModal,
	isSmallScreenServicesModal,
	setIsSmallScreenServicesModal,
}: TeamModalSScreenProps) => {
	const navigate = useNavigate();

	const { setSelectedItem } = useAuth() as any;

	const handleServiceNavigation = (index: number) => {
		setIsSmallScreenServicesModal(false);
		setSelectedItem(index);
		ServiceFunc(services[index], navigate);
	};

	

	return (
		<div>
			{teamsModal && (
				<>
					<div className="flex justify-center items-center overflow-x-hidden overflow-y-auto mt-4 fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-full bg-white md:max-w-[400px] ss:max-w-[80%]">
							{/* content */}
							<div className="flex items-start justify-between p-[10px] border-b border-solid border-slate-200 rounded-t">
								<button
									className="ml-auto bg-transparent border-0 text-black opacity-1 float-right leading-none outline-none focus:outline-none"
									onClick={() => setTeamsModal(false)}
								>
									<span className="bg-transparent opacity-1 font-thin text-[40px] block outline-none focus:outline-none">
										×
									</span>
								</button>
							</div>
							<Link
								to={"/team"}
								className="my-2 block p-8 text-black md:mx-0"
								onClick={() => setTeamsModal(false)}
							>
								Our Team
							</Link>
						</div>
					</div>
					<div className="fixed inset-0 z-40 bg-black"></div>
				</>
			)}
			{isSmallScreenServicesModal && (
				<>
					<div className="flex justify-center items-center overflow-x-hidden overflow-y-auto mt-4 fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-full bg-white md:max-w-[400px] ss:max-w-[80%]">
							{/* content */}
							<div className="flex items-start justify-between p-[10px] border-b border-solid border-slate-200 rounded-t">
								<button
									className="ml-auto bg-transparent border-0 text-black opacity-1 float-right leading-none outline-none focus:outline-none"
									onClick={() => setIsSmallScreenServicesModal(false)}
								>
									<span className="bg-transparent opacity-1 font-thin text-[40px] block outline-none focus:outline-none">
										×
									</span>
								</button>
							</div>
							{servicesData.map((service, index) => (
								<div
									key={index}
									className="my-2 block p-8 text-black md:mx-0 cursor-pointer"
									onClick={() => handleServiceNavigation(index)}
								>
									{service.name}
								</div>
							))}
						</div>
					</div>
					<div className="fixed inset-0 z-40 bg-black"></div>
				</>
			)}
		</div>
	);
};

export default TeamModalSmallScreen;
