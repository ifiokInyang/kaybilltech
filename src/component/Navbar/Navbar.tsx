import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/kaybilllogo.svg";
import SmallScreenModal from "../Modal/Modal";
import Button from "../Button/Button";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import AboutModal from "../Modal/AboutModal";
import ServicesModal from "../Modal/ServicesModal";

const Navbar = () => {
	const [showModal, setShowModal] = React.useState(false);
	const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
	const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);
	const [clickCount, setClickCount] = useState(0);

	const navigate = useNavigate();
	const aboutModalRef = useRef<HTMLInputElement>(null);

	const servicesModalRef = useRef<HTMLInputElement>(null);

	const handleServices = () => {
		setIsServicesModalOpen(!isServicesModalOpen);
	};

	const handleOpen = () => {
		setShowModal(true);
	};

	const handleAbout = () => {
		if (clickCount === 0) {
			navigate("/about");
			setClickCount(clickCount + 1);
		} else if (clickCount === 1) {
			setIsAboutModalOpen(true);
		} else {
			setIsAboutModalOpen(false);
			setClickCount(0);
		}
	};

	const handleAboutClick = () => {
		setIsAboutModalOpen(!isAboutModalOpen);
	};
	useEffect(() => {
		const handleClickOutside = (event: any) => {
			if (
				aboutModalRef.current !== null &&
				!aboutModalRef.current.contains(event.target)
			) {
				setIsAboutModalOpen(false);
			}
			if (
				servicesModalRef.current !== null &&
				!servicesModalRef.current.contains(event.target)
			) {
				setIsAboutModalOpen(false);
				setIsServicesModalOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [aboutModalRef, servicesModalRef]);

	return (
		<div className="ss:w-[355px] sm:w-full">
			<nav className="ss:h-[70px] md:h-auto ss:px-0 md:px-[60px] dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
				<div className="flex flex-wrap items-center justify-between">
					<Link to={"/"} className="flex flex-1">
						<img
							src={logo}
							className="xlg2:mr-[400px] xlg:mr-[200px] lg:mr-0 md:mr-0 ss:w-[70px] md:w-[100px] ss:h-[50px] md:h-[100px]"
							alt="kaybill technologies Logo"
							width="100px"
						/>
					</Link>
					<div className="flex md:order-2">
						<button
							data-collapse-toggle="navbar-sticky"
							type="button"
							className="inline-flex items-center p-2 text-sm text-[black] rounded-lg lg:hidden hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							aria-controls="navbar-sticky"
							aria-expanded="false"
							onClick={handleOpen}
						>
							<span className="sr-only">Open main menu</span>
							<RxHamburgerMenu size={40} />
						</button>
					</div>

					<div className="lg:flex items-center flex-col ss:hidden p-4 md:p-0 mt-4 font-medium md:flex-row sm:space-x-4 lg:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<div>
							<Link
								to={"/"}
								className="block py-2 pl-3 pr-4 lg:text-sm font-bold sm:text-base sm:text-base rounded md:bg-transparent md:text-[black] md:p-0 md:dark:text-blue-500"
								aria-current="page"
								onClick={() => setClickCount(0)}
							>
								Home
							</Link>
						</div>
						<div className="flex group relative cursor-pointer">
							<button
								className="flex lg:text-sm font-normal sm:text-base rounded md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
								type="button"
								onClick={handleAbout}
							>
								About Us{" "}
							</button>
							<IoMdArrowDropdown size={20} onClick={handleAboutClick} />

							<AboutModal
								isAboutModalOpen={isAboutModalOpen}
								setIsAboutModalOpen={setIsAboutModalOpen}
								aboutModalRef={aboutModalRef}
							/>
						</div>
						<div className="flex group relative cursor-pointer">
							<button
								type="button"
								className="menu-hover flex items-center lg:text-sm font-normal sm:text-base rounded md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
								onClick={handleServices}
							>
								Services <IoMdArrowDropdown size={20} />
							</button>
						</div>

						<div>
							<Link
								to={"/contact"}
								className="block md:mr-8 lg:mr-0 lg:text-sm font-normal sm:text-base rounded md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
							>
								Contact Us
							</Link>
						</div>
						<div className="text-[24px] text-[#757C86] font-light">|</div>
					</div>
					<Button
						text={"Get a quote"}
						type={"button"}
						className={
							"ss:hidden lg:block bg-[#041831] text-white rounded-lg text-[14px] px-[24px] py-[8px] ml-4"
						}
						onClick={() => navigate("/quote")}
					/>
				</div>
				<SmallScreenModal showModal={showModal} setShowModal={setShowModal} />
			</nav>

			<ServicesModal
				isServicesModalOpen={isServicesModalOpen}
				setIsServicesModalOpen={setIsServicesModalOpen}
				servicesModalRef={servicesModalRef}
			/>
		</div>
	);
};

export default Navbar;
