import React, { useEffect } from "react";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Quotes from "./pages/Quotes/Quotes";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/AboutComp";
import Team from "./pages/Team/Team";
import Navbar from "./component/Navbar/Navbar";
import Products from "./pages/Products/Products";
import Footer from "./component/Footer/Footer";
import ServicesNavigation from "./component/ServicesNavigation/ServicesNavigation";

function AppRoutes() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<React.Fragment>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/quote" element={<Quotes />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
				<Route path="/team" element={<Team />} />
				<Route path="/products" element={<Products />} />
				<Route path="/services/:service?" element={<ServicesNavigation />} />
			</Routes>
			<Footer />
		</React.Fragment>
	);
}

function App() {
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	);
}
export default App;
