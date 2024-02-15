import React from "react";
import { Link } from "react-router-dom";
import { teamMembers } from "./TeamArray";
import { TeamProps } from "../../utils/interfaces";

const Teams = () => {
	
	return (
		<div className="flex items-center justify-center mt-[100px] ss:mb-[50px] md:mb-[180px]">
			<div className="text-center ss:w-[355px] sm:w-full">
				<h1 className="py-8 text-[16px] font-medium text-[#2979FF]">
					OUR TEAM
				</h1>
				<h1 className="ss:text-[30px] md:text-[36px] text-[#041831] font-bold mb-[100px]">
					Team members
				</h1>
				<div className="flex justify-around items-center flex-wrap ss:space-y-24 md:space-y-0 space-x-8">
					{teamMembers.map((team: TeamProps, index: number) => (
						<div key={index}>
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
