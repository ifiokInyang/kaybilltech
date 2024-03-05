import React from "react";
import { AboutModalProps } from "../../utils/interfaces";
import { Link } from "react-router-dom";

const AboutModal = ({
	isAboutModalOpen,
	setIsAboutModalOpen,
	aboutModalRef,
}: AboutModalProps) => {
	return (
		<>
			{isAboutModalOpen ? (
				<div
					ref={aboutModalRef}
					className="visible absolute z-50 flex rounded-lg w-[330px] flex-col mt-12 bg-white py-4 px-4 text-gray-800 shadow-xl group-hover:visible"
				>
					<ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
						<Link
							to={"/team"}
							className="my-2 block border-b border-gray-400 py-1 text-black md:mx-0"
							onClick={() => setIsAboutModalOpen(false)}
						>
							Our team
						</Link>{" "}
					</ul>
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default AboutModal;
