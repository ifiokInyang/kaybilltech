import React, { useEffect, useState } from "react";
import Enquiry from "../../component/Enquiry/Enquiry";

const Quotes = () => {
	const [quote, setQuote] = useState<boolean>(false);

	useEffect(() => {
		setQuote(() => true);
	}, []);
	return (
		<div>
			<h1 className="ss:capitalize md:uppercase ss:text-[36px] md:text-[54px] font-bold ss:ml-4 md:ml-16 ss:mt-8 md:mt-16">
				quote
			</h1>
			<div className="ss:mx-0 md:mx-4">
				<Enquiry isQuotes={quote} />
			</div>
		</div>
	);
};

export default Quotes;
