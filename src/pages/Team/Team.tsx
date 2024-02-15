import React from "react";
import { Link } from "react-router-dom";
import { teamMembersPage } from "./TeamArr";
import { TeamProps } from "../../utils/interfaces";

const Teams = () => {
	return (
		<div className="flex items-center justify-center ss:mt-12 md:mt-[100px] ss:mb-[150px] md:mb-[20px]">
			<div className="text-center ss:w-[355px] sm:w-full">
				<h1 className="ss:text-[36px] md:text-[64px] text-[#041831] font-bold ss:mb-[80px] md:mb-[40px]">
					<span className="ss:capitalize md:uppercase">Team</span>{" "}
					<span className="ss:lowercase md:uppercase">members</span>
				</h1>
				<div className="flex justify-around items-center ss:w-[380px] md:w-full ss:h-auto md:h-[900px] flex-wrap ss:space-y-24 md:space-y-0 space-x-8 ss:px:0 md:px-16">
					{teamMembersPage.map((team: TeamProps, index: number) => (
						<div key={index} className="">
							<img src={team.img} alt="" />
							<h1 className="mt-8 mb-2 text-[24px] font-bold text-[#39404F]">
								{team.desc}
							</h1>
							<Link
								to={"https://www.linkedin.com/in/excelllentsoft/"}
								className="flex justify-center"
							>
								<img src={team.linkedIn} alt={team.alt} />
								<p className="text-[#2979FF]">{team.handle}</p>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Teams;
