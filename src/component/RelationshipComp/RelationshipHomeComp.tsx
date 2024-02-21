import React from "react";
import handshake from "../../assets/handshakeRelationship.svg";

const RelationshipHomeComp = () => {
	return (
		<div className="flex flex-wrap ss:px-4 md:px-8 ss:w-[355px] sm:w-full justify-between ss:mt-[90px] md:mt-[140px]">
			<div className="md:w-[51%] ss:w-full flex items-center justify-start">
				<img
					src={handshake}
					alt="two business partners shaking hands"
					className=""
				/>
			</div>
			<div className="flex-1 md:w-[50%] ss:h-auto md:h-[350px] grid ss:justify-items-start md:justify-items-end mt-[52px] ss:text-left md:text-right">
				<h1 className="ss:py-0 ss:text-[13px] md:text-[16px] text-[#2979FF]">
					RELATIONSHIP{" "}
				</h1>
				<div className="w-[70%]">
					<h1 className="ss:text-[36px] md:text-[40px] font-bold ss:pt-4 md:pt-0 pb-[14px]">
						We are your business partner{" "}
					</h1>
				</div>
				<p className="ss:tracking-tight md:tracking-wide ss:w-auto md:w-[650px] text-[18px] font-light text-[#39404F]">
					We emphasize building strategic partnerships rather than solely
					focusing on customer acquisition. Our approach mirrors that of a
					business owner, and we maintain transparency in our operations,
					pricing, and deliverables. Rest assured, we are fully committed to
					going the extra mile to facilitate your business growth, ensuring a
					high level of professionalism and confidence.
				</p>
			</div>
		</div>
	);
};

export default RelationshipHomeComp;
