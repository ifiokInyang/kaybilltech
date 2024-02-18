import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import { apiUrl } from "../../utils/api/axios";
import { formField, quoteField } from "../../utils/data";


console.log("api is", apiUrl)
const Form = ({ isQuotes }: { isQuotes: boolean }) => {
	const [formDetails, setFormDetails] = useState(formField);
	const [quoteFormDetails, setQuoteFormDetails] = useState(quoteField);
	const [loading, setLoading] = useState<boolean>(false);
	const [apiResponse, setApiResponse] = useState<string>("");
	const { firstName, lastName, email, message } = formDetails;
	const handleChange = (
		event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
	) => {
		const { name, value } = event.target;
		if (isQuotes) {
			setQuoteFormDetails({ ...quoteFormDetails, [name]: value });
		} else {
			setFormDetails({ ...formDetails, [name]: value });
		}
	};

	const submitMessage = async (event: any) => {
		event.preventDefault();
		const inputData = { ...formDetails, phone: "" };
		setLoading(true);
		try {
			const apiResponse = isQuotes
				? await axios.post(
						`${apiUrl}/api/KayService/SendEnquiries`,
						quoteFormDetails
				  )
				: await axios.post(
						`${apiUrl}/api/KayService/SendContactUs-Message`,
						inputData
				  );
			if (apiResponse.status === 200) {
				setLoading(false);
				setApiResponse(apiResponse.data.message);
				setFormDetails(formField);
				setQuoteFormDetails(quoteField);
			}
		} catch (error: any) {
			setLoading(false);
			setApiResponse("something went wrong");
		}
	};

	return (
		<div className="ss:mb-16 md:mb-0">
			<form onSubmit={submitMessage} className="max-w-md mx-auto">
				<p className="mb-4">Your Name</p>

				<div className="grid md:grid-cols-2 md:gap-6">
					<div className="relative z-0 w-full mb-5 group">
						<input
							type="text"
							name="firstName"
							value={isQuotes ? quoteFormDetails.firstName : firstName}
							onChange={handleChange}
							id="floating_first_name"
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
						/>
						<label
							htmlFor="floating_first_name"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							First name
						</label>
					</div>
					<div className="relative z-0 w-full mb-5 group">
						<input
							type="text"
							name="lastName"
							value={isQuotes ? quoteFormDetails.lastName : lastName}
							onChange={handleChange}
							id="floating_last_name"
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
						/>
						<label
							htmlFor="floating_last_name"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Last name
						</label>
					</div>
				</div>
				<p className="mt-8 mb-4">Your Email</p>

				<div className="relative z-0 w-full mb-5 group">
					<input
						type="email"
						name="email"
						value={isQuotes ? quoteFormDetails.email : email}
						onChange={handleChange}
						id="floating_email"
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=""
						required
					/>
					<label
						htmlFor="floating_email"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						example@gmail.com
					</label>
				</div>
				{isQuotes && (
					<>
						<p className="mt-8 mb-4">Title</p>

						<div className="relative z-0 w-full mb-5 group">
							<input
								type="text"
								name="title"
								value={quoteFormDetails.title}
								onChange={handleChange}
								id="floating_title"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder=""
								required
							/>
							<label
								htmlFor="floating_title"
								className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Title of project
							</label>
						</div>
						<p className="mt-8 mb-4">Type</p>

						<div className="relative z-0 w-full mb-5 group">
							<input
								type="text"
								name="type"
								value={quoteFormDetails.type}
								onChange={handleChange}
								id="floating_type"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder=""
								required
							/>
							<label
								htmlFor="floating_type"
								className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								type of project{" "}
							</label>
						</div>
						<p className="mt-8 mb-4">Description</p>

						<div className="relative z-0 w-full mb-5 group">
							<input
								type="text"
								name="description"
								value={isQuotes ? quoteFormDetails.description : ""}
								onChange={handleChange}
								id="floating_description"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder=""
								required
							/>
							<label
								htmlFor="floating_description"
								className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								description of project{" "}
							</label>
						</div>
					</>
				)}

				<p className="mt-8 mb-4">Your Message</p>
				<div className="relative z-0 w-full mb-5 group">
					<input
						type="text"
						name="message"
						value={isQuotes ? quoteFormDetails.message : message}
						onChange={handleChange}
						id="floating_message"
						className="block py-8 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=""
						required
					/>
					<label
						htmlFor="floating_message"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Message
					</label>
				</div>

				<button
					type="submit"
					className="bg-[#041831] w-[100%] rounded-lg uppercase text-white text-[16px] ss:mt-12 md:mt-16 mx-[2px] px-8 py-2 h-[44px] text-center text-base font-medium inline-block"
				>
					Send Message
				</button>
				<div>
					<p className="text-red-400">{apiResponse}</p>
				</div>
			</form>
		</div>
	);
};

export default Form;
