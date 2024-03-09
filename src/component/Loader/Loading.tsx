import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { override } from "../../utils/data";

const Loading = ({ loading }: { loading: boolean }) => {
	return (
		<div className="flex justify-center items-center md:text-[68px] sm:text-[32px] ss:text-[20px] sm:pt-[150px] ss:pt-[20px]">
			<ClipLoader
				color={"blue"}
				loading={loading}
				cssOverride={override}
				size={50}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	);
};

export default Loading;
