import React from "react";
import { Link } from "react-router-dom";
import { TeamProps } from "../../utils/interfaces";
import linkedIn from "../../assets/linkedInIcon.svg";
import KayAvatar from "../../assets/kayavatar.jpg";
import { useAuth } from "../../context";

const Teams = () => {
	const { homeDataArray } = useAuth() as any;

	return (
		<div className="flex items-center justify-center ss:px-0 md:px-8 mt-[100px] ss:mb-[50px] md:mb-[180px]">
			<div className="text-center ss:w-[355px] sm:w-full">
				<h1 className="py-8 text-[16px] font-medium text-[#2979FF]">
					OUR TEAM
				</h1>
				<h1 className="ss:text-[30px] md:text-[36px] text-[#041831] font-bold mb-[100px]">
					Team Members
				</h1>
				<div className="flex justify-around space-x-8 space-y-8 items-center flex-wrap">
					{homeDataArray.teamMembers !== undefined ? (
						homeDataArray.teamMembers.map((team: TeamProps, index: number) => (
							<div key={index} className="w-[202px]">
								<img
									src={
										team.profileImagePath === ""
											? KayAvatar
											: team.profileImagePath
									}
									alt=""
									className="h-[201px] w-[202px] rounded-[50%] object-cover"
								/>
								<h1 className="mt-8 mb-2 text-[16px] text-wrap font-bold text-[#39404F]">
									{team.position}
								</h1>
								<Link
									to={team.linkedProfileUrl}
									className="flex justify-center items-center"
								>
									<img src={linkedIn} alt={"linkedIn icon"} className="mr-2" />
									<p className="text-[#2979FF]">
										{"@" + team.linkedInUserName}
									</p>
								</Link>
							</div>
						))
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	);
};

export default Teams;
